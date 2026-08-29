import React, { useRef, useState, useEffect } from 'react';
import { PenTool, RotateCcw, Upload } from 'lucide-react';

export default function SignaturePad({ signatureUrl, onSignatureChange, label = "Student's Signature" }) {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);
  const [activeMode, setActiveMode] = useState('draw'); // 'draw' or 'upload'
  const fileInputRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    ctx.lineWidth = 2.2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#0f172a'; // Official blue-black ink
  }, [activeMode]);

  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY,
    };
  };

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const { x, y } = getCoordinates(e);
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
    setHasDrawn(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const { x, y } = getCoordinates(e);
    const ctx = canvas.getContext('2d');
    ctx.lineTo(x, y);
    ctx.stroke();

    if (e.touches) {
      e.preventDefault();
    }
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    setIsDrawing(false);

    const canvas = canvasRef.current;
    if (canvas) {
      const dataUrl = canvas.toDataURL('image/png');
      onSignatureChange(dataUrl);
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasDrawn(false);
    onSignatureChange('');
  };

  const handleSignatureUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image file (.jpg, .jpeg, .png, .webp)');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      onSignatureChange(event.target.result);
      setHasDrawn(true);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200">
          {label} <span className="text-red-500">*</span>
        </label>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setActiveMode('draw')}
            className={`px-2.5 py-1 text-xs font-semibold rounded-md transition cursor-pointer ${
              activeMode === 'draw'
                ? 'bg-primary-100 dark:bg-primary-950/80 text-primary-800 dark:text-primary-300'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
            }`}
          >
            Draw Digital
          </button>
          <button
            type="button"
            onClick={() => setActiveMode('upload')}
            className={`px-2.5 py-1 text-xs font-semibold rounded-md transition cursor-pointer ${
              activeMode === 'upload'
                ? 'bg-primary-100 dark:bg-primary-950/80 text-primary-800 dark:text-primary-300'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
            }`}
          >
            Upload Image
          </button>
        </div>
      </div>

      {activeMode === 'draw' ? (
        <div className="relative border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 p-1 overflow-hidden shadow-inner">
          <canvas
            ref={canvasRef}
            width={380}
            height={130}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
            className="w-full h-28 sm:h-32 touch-none bg-slate-50/70 dark:bg-slate-900/60 rounded-lg cursor-crosshair"
          />

          {!hasDrawn && !signatureUrl && (
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center text-slate-400 dark:text-slate-500">
              <span className="text-xs">Sign here</span>
            </div>
          )}

          <div className="flex items-center justify-end p-1.5 bg-slate-50 dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700">
            <button
              type="button"
              onClick={clearCanvas}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs transition cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" /> Clear
            </button>
          </div>
        </div>
      ) : (
        <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-4 text-center bg-white dark:bg-slate-800">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleSignatureUpload}
          />
          {signatureUrl ? (
            <div className="flex items-center justify-center gap-4">
              <img
                src={signatureUrl}
                alt="Signature preview"
                className="max-h-20 object-contain border dark:border-slate-600 p-1 rounded bg-white"
              />
              <button
                type="button"
                onClick={() => onSignatureChange('')}
                className="text-xs text-red-600 dark:text-red-400 font-semibold hover:underline cursor-pointer"
              >
                Remove
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 text-xs font-semibold rounded-lg transition cursor-pointer"
            >
              <Upload className="w-4 h-4 text-slate-500 dark:text-slate-400" />
              <span>Choose signature photo</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
