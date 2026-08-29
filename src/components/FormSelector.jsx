import React from 'react';

export const FORM_TYPES = {
  ID_CARD: 'id-card',
  UG_REGISTRATION: 'ug-registration',
  ACADEMIC_SESSION: 'academic-session',
};

export const FORM_CONFIGS = [
  { id: FORM_TYPES.ID_CARD, title: 'ID Card Cum Library Card' },
  { id: FORM_TYPES.UG_REGISTRATION, title: 'UG Registration' },
  { id: FORM_TYPES.ACADEMIC_SESSION, title: 'Academic Session' },
];

export default function FormSelector({ selectedForm, onSelectForm }) {
  return (
    <div className="flex items-center justify-center">
      <div className="inline-flex p-1 bg-slate-200/70 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700/80">
        {FORM_CONFIGS.map((form) => {
          const isSelected = selectedForm === form.id;
          return (
            <button
              key={form.id}
              type="button"
              onClick={() => onSelectForm(form.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-150 cursor-pointer ${
                isSelected
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {form.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}

