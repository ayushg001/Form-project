import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

/**
 * Generate and download high-resolution PDF from printable DOM element
 * @param {HTMLElement|string} targetElement - DOM element or selector string
 * @param {string} filename - Desired output filename
 * @returns {Promise<boolean>}
 */
export const downloadFormAsPdf = async (targetElement, filename = 'Official_Form.pdf') => {
  try {
    const element =
      typeof targetElement === 'string'
        ? document.querySelector(targetElement)
        : targetElement;

    if (!element) {
      throw new Error('Target element for PDF export was not found.');
    }

    // Capture at high resolution (scale 2.5x) for crystal-clear printed text and photo
    const canvas = await html2canvas(element, {
      scale: 2.5,
      useCORS: true,
      allowTaint: true,
      logging: false,
      backgroundColor: '#ffffff',
      windowWidth: 1024, // Consistent rendering regardless of mobile screen width
      onclone: (clonedDoc) => {
        // Ensure cloned element has solid white background and full visibility
        const clonedEl = clonedDoc.querySelector(
          typeof targetElement === 'string' ? targetElement : '#' + (element.id || 'printable-form')
        );
        if (clonedEl) {
          clonedEl.style.transform = 'none';
          clonedEl.style.position = 'static';
          clonedEl.style.boxShadow = 'none';
          clonedEl.style.margin = '0 auto';
          clonedEl.style.width = '800px';
          clonedEl.style.minWidth = '800px';
        }
      },
    });

    const imgData = canvas.toDataURL('image/jpeg', 0.98);

    // Standard A4 Dimensions in millimeters
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true,
    });

    const pageWidth = 210; // A4 width mm
    const pageHeight = 297; // A4 height mm

    const imgWidth = pageWidth - 16; // 8mm margin on left & right
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 8; // 8mm top margin

    // Render first page
    pdf.addImage(imgData, 'JPEG', 8, position, imgWidth, Math.min(imgHeight, pageHeight - 16));
    heightLeft -= (pageHeight - 16);

    // If multi-page content (e.g. detailed qualification rows)
    while (heightLeft > 0) {
      position = heightLeft - imgHeight + 8;
      pdf.addPage();
      pdf.addImage(imgData, 'JPEG', 8, position, imgWidth, imgHeight);
      heightLeft -= (pageHeight - 16);
    }

    pdf.save(filename);
    return true;
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Failed to generate PDF. You can also use your browser Print dialog (Ctrl+P).');
    return false;
  }
};
