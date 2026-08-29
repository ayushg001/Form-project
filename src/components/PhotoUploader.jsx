import React, { useRef } from 'react';
import { Camera, Upload, X } from 'lucide-react';

export default function PhotoUploader({ photoUrl, onPhotoChange, label = 'Student Photo' }) {
  const fileInputRef = useRef(null);

  const handleFile = (file) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image file');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert('Photo exceeds 5MB limit.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => onPhotoChange(e.target.result);
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex items-center gap-4">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
      />

      {/* Thumbnail */}
      <div className="relative w-16 h-20 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden flex-shrink-0">
        {photoUrl ? (
          <img src={photoUrl} alt="Photo" className="w-full h-full object-cover" />
        ) : (
          <Camera className="w-5 h-5 text-slate-400" />
        )}
      </div>

      {/* Action */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
          {label}
        </label>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition cursor-pointer"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>{photoUrl ? 'Change Photo' : 'Upload Photo'}</span>
          </button>

          {photoUrl && (
            <button
              type="button"
              onClick={() => onPhotoChange('')}
              className="p-1.5 text-xs text-slate-400 hover:text-red-600 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
              title="Remove photo"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

