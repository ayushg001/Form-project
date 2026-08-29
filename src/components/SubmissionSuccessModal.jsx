import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle2, Download, X, FileCheck } from 'lucide-react';
import { downloadFormAsPdf } from '../utils/pdfExport';

export default function SubmissionSuccessModal({
  isOpen,
  onClose,
  submissionResult,
  selectedFormTitle,
  studentName,
  rollNo,
}) {
  useEffect(() => {
    if (isOpen) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (e) {
        // Ignore if not loaded
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleDownloadPdf = async () => {
    const previewEl = document.getElementById('printable-form-preview');
    if (previewEl) {
      const cleanName = studentName ? studentName.replace(/\s+/g, '_') : 'Student';
      const cleanRoll = rollNo ? rollNo.replace(/\s+/g, '_') : 'Form';
      await downloadFormAsPdf(previewEl, `${cleanName}_${cleanRoll}_Form.pdf`);
    }
  };

  const referenceId = submissionResult?.data?._id || 'GC-' + Math.random().toString(36).substring(2, 8).toUpperCase();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white dark:bg-slate-900 rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100 dark:border-slate-800 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 rounded-lg transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon Header */}
        <div className="text-center">
          <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-3">
            <CheckCircle2 className="w-6 h-6" />
          </div>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
            Form Ready
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            {selectedFormTitle}
          </p>
        </div>

        {/* Status Box */}
        <div className="mt-4 p-3 bg-slate-50 dark:bg-slate-800/60 rounded-lg space-y-1.5 text-xs">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
            <span>Reference ID</span>
            <span className="font-mono font-semibold text-slate-800 dark:text-slate-200">{referenceId}</span>
          </div>
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
            <span>Student</span>
            <span className="font-medium text-slate-800 dark:text-slate-200">{studentName || '—'}</span>
          </div>
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
            <span>Roll No</span>
            <span className="font-medium text-slate-800 dark:text-slate-200">{rollNo || '—'}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-5 space-y-2">
          <button
            type="button"
            onClick={handleDownloadPdf}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white dark:text-slate-900 rounded-lg transition cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-full py-2 text-xs text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
