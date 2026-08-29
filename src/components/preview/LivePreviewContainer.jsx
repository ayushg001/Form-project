import React, { useState, useRef, useEffect } from 'react';
import { Download, Printer, ZoomIn, ZoomOut, Maximize2, RotateCcw, Loader2 } from 'lucide-react';
import IdCardPreview from './IdCardPreview';
import UgRegistrationPreview from './UgRegistrationPreview';
import AcademicSessionPreview from './AcademicSessionPreview';
import { FORM_TYPES } from '../FormSelector';
import { downloadFormAsPdf } from '../../utils/pdfExport';

export default function LivePreviewContainer({ selectedForm, formData }) {
  const containerRef = useRef(null);
  const previewRef = useRef(null);

  const [containerWidth, setContainerWidth] = useState(800);
  const [contentHeight, setContentHeight] = useState(1130);
  const [userZoomMultiplier, setUserZoomMultiplier] = useState(1.0);
  const [isExporting, setIsExporting] = useState(false);

  // Measure container and content dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
      if (previewRef.current) {
        const height = previewRef.current.offsetHeight || previewRef.current.scrollHeight;
        if (height > 100) {
          setContentHeight(height);
        }
      }
    };

    updateDimensions();

    let resizeObserver;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        updateDimensions();
      });
      if (containerRef.current) resizeObserver.observe(containerRef.current);
      if (previewRef.current) resizeObserver.observe(previewRef.current);
    }

    window.addEventListener('resize', updateDimensions);
    // Extra check after DOM finishes rendering images/fonts
    const timer = setTimeout(updateDimensions, 200);

    return () => {
      window.removeEventListener('resize', updateDimensions);
      clearTimeout(timer);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, [selectedForm, formData]);

  // Base auto-fit scale so the 800px A4 form fits cleanly inside screen width
  const paddingOffset = containerWidth < 640 ? 16 : 32;
  const availableWidth = Math.max(260, containerWidth - paddingOffset);
  const autoFitScale = Math.min(1.0, Number((availableWidth / 800).toFixed(4)));

  // Effective scale combining auto-fit and user zoom controls
  const effectiveScale = Number((autoFitScale * userZoomMultiplier).toFixed(3));
  const scaledWidth = Math.round(800 * effectiveScale);
  const scaledHeight = Math.round(contentHeight * effectiveScale);

  const isFitToScreen = Math.abs(userZoomMultiplier - 1.0) < 0.05;

  const handleZoomIn = () => {
    setUserZoomMultiplier((prev) => Math.min(prev + 0.15, 2.5 / autoFitScale));
  };

  const handleZoomOut = () => {
    setUserZoomMultiplier((prev) => Math.max(prev - 0.15, 0.4));
  };

  const handleResetZoom = () => {
    setUserZoomMultiplier(1.0);
  };

  const handleToggleActualSize = () => {
    if (isFitToScreen) {
      // Zoom to 100% full scale
      setUserZoomMultiplier(1.0 / autoFitScale);
    } else {
      // Zoom out to fit screen
      setUserZoomMultiplier(1.0);
    }
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
    <div id="live-preview-section" className="w-full bg-slate-100/80 dark:bg-slate-900/60 rounded-2xl p-3 sm:p-5 border border-slate-200 dark:border-slate-800 transition-colors">
      {/* Action Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white dark:bg-slate-800/90 p-3 sm:p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm mb-4">
        {/* Header & Zoom Indicator */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
              Live Form Preview
            </h3>
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
              {isFitToScreen ? 'Fit to Screen' : `${Math.round(effectiveScale * 100)}%`}
            </span>
          </div>

          {/* Quick Fit / 100% button for mobile */}
          <button
            type="button"
            onClick={handleToggleActualSize}
            className="sm:hidden text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 transition"
          >
            {isFitToScreen ? '100% Size' : 'Fit View'}
          </button>
        </div>

        {/* Toolbar Controls */}
        <div className="flex items-center gap-2 justify-between sm:justify-end">
          {/* Zoom Buttons (Available on both mobile and desktop) */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-700 rounded-lg p-0.5 border border-slate-200 dark:border-slate-600">
            <button
              type="button"
              onClick={handleZoomOut}
              title="Zoom out"
              className="p-1.5 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded hover:bg-white dark:hover:bg-slate-600 transition cursor-pointer"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            
            <button
              type="button"
              onClick={handleToggleActualSize}
              title={isFitToScreen ? "Click to view actual 100% size" : "Click to fit screen"}
              className="text-xs font-semibold px-2 text-slate-700 dark:text-slate-200 min-w-[3.2rem] text-center hover:underline cursor-pointer"
            >
              {Math.round(effectiveScale * 100)}%
            </button>

            <button
              type="button"
              onClick={handleZoomIn}
              title="Zoom in"
              className="p-1.5 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded hover:bg-white dark:hover:bg-slate-600 transition cursor-pointer"
            >
              <ZoomIn className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={handleResetZoom}
              title="Reset to Fit View"
              className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded hover:bg-white dark:hover:bg-slate-600 transition cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Print Button (Desktop) */}
          <button
            type="button"
            onClick={handlePrint}
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 border border-slate-300 dark:border-slate-600 transition cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print</span>
          </button>

          {/* Download PDF Primary CTA */}
          <button
            type="button"
            onClick={handleDownload}
            disabled={isExporting}
            className="inline-flex items-center justify-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-lg shadow-md hover:shadow-lg transition active:scale-95 disabled:opacity-75 cursor-pointer ml-auto sm:ml-0"
          >
            {isExporting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Preparing PDF...</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Sheet Frame with Responsive Auto-Scaling */}
      <div
        ref={containerRef}
        className="w-full overflow-x-auto p-2 sm:p-6 bg-slate-200/80 dark:bg-slate-950/80 rounded-xl border border-slate-300 dark:border-slate-800 shadow-inner flex justify-center touch-pan-x"
      >
        <div
          style={{
            width: `${scaledWidth}px`,
            height: `${scaledHeight}px`,
            position: 'relative',
            flexShrink: 0,
          }}
          className="transition-all duration-150 ease-out"
        >
          <div
            ref={previewRef}
            id="printable-form-preview"
            style={{
              width: '800px',
              minWidth: '800px',
              transform: `scale(${effectiveScale})`,
              transformOrigin: 'top left',
              position: 'absolute',
              left: 0,
              top: 0,
            }}
            className="bg-white text-black shadow-2xl origin-top-left box-border"
          >
            {renderSelectedPreview()}
          </div>
        </div>
      </div>
    </div>
  );
}
