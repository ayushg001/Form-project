import React from 'react';

export const FORM_TYPES = {
  ID_CARD: 'id-card',
  UG_REGISTRATION: 'ug-registration',
  ACADEMIC_SESSION: 'academic-session',
};

export const FORM_CONFIGS = [
  { id: FORM_TYPES.ID_CARD, title: 'ID Card Cum Library Card', shortTitle: 'ID Card' },
  { id: FORM_TYPES.UG_REGISTRATION, title: 'UG Registration', shortTitle: 'UG Reg.' },
  { id: FORM_TYPES.ACADEMIC_SESSION, title: 'Academic Session', shortTitle: 'Academic' },
];

export default function FormSelector({ selectedForm, onSelectForm }) {
  return (
    <div className="w-full flex items-center justify-center overflow-x-auto py-0.5">
      <div className="inline-flex p-1 bg-slate-200/70 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700/80 max-w-full">
        {FORM_CONFIGS.map((form) => {
          const isSelected = selectedForm === form.id;
          return (
            <button
              key={form.id}
              type="button"
              onClick={() => onSelectForm(form.id)}
              className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-150 cursor-pointer whitespace-nowrap ${
                isSelected
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span className="hidden sm:inline">{form.title}</span>
              <span className="sm:hidden">{form.shortTitle}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

