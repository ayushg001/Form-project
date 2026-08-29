import React, { useState, useRef } from 'react';
import { Download, Printer, ZoomIn, ZoomOut, RotateCcw, Loader2 } from 'lucide-react';
import IdCardPreview from './IdCardPreview';
import UgRegistrationPreview from './UgRegistrationPreview';
import AcademicSessionPreview from './AcademicSessionPreview';
import { FORM_TYPES } from '../FormSelector';
import { downloadFormAsPdf } from '../../utils/pdfExport';

export default function LivePreviewContainer({ selectedForm, formData, isSubmitting }) {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isExporting, setIsExporting] = useState(false);
  const previewRef = useRef(null);

  const handleZoom = (delta) => {
    setZoomLevel((prev) => Math.min(Math.max(0.65, prev + delta), 1.4));
  };

  const handleDownload = async () => {
    if (!previewRef.current) return;
    setIsExporting(true);

    try {
      const studentName = formData.studentName ? formData.studentName.replace(/\s+/g, '_') : 'Student';
      const rollNo = formData.rollNo ? formData.rollNo.replace(/\s+/g, '_') : 'Form';
      const filename = `${selectedForm.toUpperCase()}_${studentName}_${rollNo}.pdf`;

      await downloadFormAsPdf(previewRef.current, filename);
    } finally {
      setIsExporting(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const renderSelectedPreview = () => {
    switch (selectedForm) {
      case FORM_TYPES.ID_CARD:
        return <IdCardPreview data={formData} />;
      case FORM_TYPES.UG_REGISTRATION:
        return <UgRegistrationPreview data={formData} />;
      case FORM_TYPES.ACADEMIC_SESSION:
        return <AcademicSessionPreview data={formData} />;
      default:
        return <IdCardPreview data={formData} />;
    }
  };

  return (
    <div id="live-preview-section" className="w-full bg-slate-100/70 dark:bg-slate-900/40 rounded-xl p-3 sm:p-5 border border-slate-200 dark:border-slate-800 transition-colors">
      {/* Action Toolbar */}
      <div className="flex items-center justify-between gap-3 bg-white dark:bg-slate-800/90 p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm mb-4">
        <h3 className="font-semibold text-slate-800 dark:text-slate-200 text-sm">
          Live Preview
        </h3>

        {/* Toolbar Controls */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
          {/* Zoom Buttons */}
          <div className="hidden sm:flex items-center bg-slate-100 dark:bg-slate-700 rounded-lg p-0.5 border border-slate-200 dark:border-slate-600">
            <button
              type="button"
              onClick={() => handleZoom(-0.1)}
              title="Zoom out"
              className="p-1.5 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded hover:bg-white dark:hover:bg-slate-600 transition cursor-pointer"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-xs font-semibold px-2 text-slate-700 dark:text-slate-200 min-w-[3rem] text-center">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              type="button"
              onClick={() => handleZoom(0.1)}
              title="Zoom in"
              className="p-1.5 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded hover:bg-white dark:hover:bg-slate-600 transition cursor-pointer"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setZoomLevel(1)}
              title="Reset Zoom"
              className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded hover:bg-white dark:hover:bg-slate-600 transition cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Print Button */}
          <button
            type="button"
            onClick={handlePrint}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 border border-slate-300 dark:border-slate-600 transition cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print</span>
          </button>

          {/* Download PDF Primary CTA Button */}
          <button
            type="button"
            onClick={handleDownload}
            disabled={isExporting}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-lg shadow-md hover:shadow-lg transition active:scale-95 disabled:opacity-75 cursor-pointer"
          >
            {isExporting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Generating PDF...</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Download Form PDF</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Sheet Frame with Scroll and Zoom Support */}
      <div className="overflow-x-auto p-2 sm:p-6 bg-slate-200/80 dark:bg-slate-950/80 rounded-xl border border-slate-300 dark:border-slate-800 shadow-inner flex justify-center">
        <div
          ref={previewRef}
          id="printable-form-preview"
          style={{
            transform: `scale(${zoomLevel})`,
            transformOrigin: 'top center',
            transition: 'transform 0.15s ease-out',
          }}
          className="w-full max-w-[800px] my-2 bg-white text-black rounded-sm shadow-2xl"
        >
          {renderSelectedPreview()}
        </div>
      </div>
    </div>
  );
}
