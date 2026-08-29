import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import FormSelector, { FORM_TYPES, FORM_CONFIGS } from './components/FormSelector';
import IdCardForm from './components/forms/IdCardForm';
import UgRegistrationForm from './components/forms/UgRegistrationForm';
import AcademicSessionForm from './components/forms/AcademicSessionForm';
import LivePreviewContainer from './components/preview/LivePreviewContainer';
import SubmissionSuccessModal from './components/SubmissionSuccessModal';
import { submitFormData } from './services/api';
import { Download, AlertCircle, ShieldCheck } from 'lucide-react';

const INITIAL_SUBJECTS = [
  { course: 'CC01', nameOfCourse: '', courseId: '' },
  { course: 'CC02', nameOfCourse: '', courseId: '' },
  { course: 'CC03', nameOfCourse: '', courseId: '' },
  { course: 'MIC/VOC', nameOfCourse: '', courseId: '' },
  { course: 'SEC/INTERNSHIP', nameOfCourse: '', courseId: '' },
];

const INITIAL_QUALIFICATIONS = [
  {
    examPassed: '10th (Matric)',
    university: '',
    rollNo: '',
    passingYear: '',
    marksObt: '',
    maxMarks: '',
    result: '',
  },
  {
    examPassed: '12th (Sr. Sec)',
    university: '',
    rollNo: '',
    passingYear: '',
    marksObt: '',
    maxMarks: '',
    result: '',
  },
];

export default function App() {
  // Dark Mode State with mobile-safe storage fallback
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const savedTheme = typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null;
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  // Apply dark mode class to HTML root element
  useEffect(() => {
    try {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
        if (typeof localStorage !== 'undefined') localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        if (typeof localStorage !== 'undefined') localStorage.setItem('theme', 'light');
      }
    } catch {
      // Ignore storage errors on restricted mobile browsers
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Selected Form Key: 'id-card' | 'ug-registration' | 'academic-session'
  const [selectedForm, setSelectedForm] = useState(FORM_TYPES.ID_CARD);

  // Unified Form State (Initialized empty with clean placeholders)
  const [formData, setFormData] = useState({
    studentName: '',
    fatherName: '',
    motherName: '',
    dob: '',
    className: '',
    year: '',
    rollNo: '',
    address: '',
    mobileNumber: '',
    mobileNo: '',
    bloodGroup: '',
    emergencyContact: '',
    photoUrl: '',
    category: '',
    religion: '',
    aadharNo: '',
    apaarId: '',
    registrationNo: '',
    email: '',
    nationality: '',
    domicile: '',
    areaType: '',
    gender: '',
    isNccNss: '',
    state: '',
    district: '',
    pincode: '',
    subjects: INITIAL_SUBJECTS,
    declarationAccepted: false,
    studentSignatureUrl: '',
    qualifications: INITIAL_QUALIFICATIONS,
  });

  // UI States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Handle generic input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === 'mobileNumber' ? { mobileNo: value } : {}),
      ...(name === 'mobileNo' ? { mobileNumber: value } : {}),
    }));
  };

  const handlePhotoChange = (url) => {
    setFormData((prev) => ({ ...prev, photoUrl: url }));
  };

  const handleSignatureChange = (url) => {
    setFormData((prev) => ({ ...prev, studentSignatureUrl: url }));
  };

  const handleSubjectChange = (index, field, value) => {
    setFormData((prev) => {
      const updated = [...(prev.subjects || [])];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, subjects: updated };
    });
  };

  const handleQualificationChange = (index, field, value) => {
    setFormData((prev) => {
      const updated = [...(prev.qualifications || [])];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, qualifications: updated };
    });
  };

  const handleAddQualification = () => {
    setFormData((prev) => ({
      ...prev,
      qualifications: [
        ...(prev.qualifications || []),
        { examPassed: '', university: '', rollNo: '', passingYear: '', marksObt: '', maxMarks: '', result: 'Pass' },
      ],
    }));
  };

  const handleRemoveQualification = (index) => {
    setFormData((prev) => ({
      ...prev,
      qualifications: prev.qualifications.filter((_, i) => i !== index),
    }));
  };

  const handleJumpToPreview = () => {
    const el = document.getElementById('live-preview-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsSubmitting(true);

    try {
      const payload = {
        formType: selectedForm,
        ...formData,
      };

      const result = await submitFormData(payload);
      setSubmissionResult(result);
      setIsModalOpen(true);
      handleJumpToPreview();
    } catch (err) {
      console.error('Submission failed:', err);
      setErrorMessage(err.message || 'Failed to submit form. Please check your inputs.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const activeFormConfig = FORM_CONFIGS.find((f) => f.id === selectedForm) || FORM_CONFIGS[0];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200">
      {/* Top Navbar */}
      <Navbar
        onJumpToPreview={handleJumpToPreview}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
      />

      {/* Main Content */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
        {/* Form Selector Tabs */}
        <FormSelector
          selectedForm={selectedForm}
          onSelectForm={(formKey) => {
            setSelectedForm(formKey);
            setErrorMessage('');
          }}
        />

        {/* Form Section */}
        <section className="bg-white dark:bg-slate-900 p-5 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
          <div className="mb-5 pb-3 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100">
              {activeFormConfig.title}
            </h2>
          </div>

          {errorMessage && (
            <div className="mb-4 p-3 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Form Fields */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {selectedForm === FORM_TYPES.ID_CARD && (
              <IdCardForm
                formData={formData}
                onChange={handleInputChange}
                onPhotoChange={handlePhotoChange}
              />
            )}

            {selectedForm === FORM_TYPES.UG_REGISTRATION && (
              <UgRegistrationForm
                formData={formData}
                onChange={handleInputChange}
                onSubjectChange={handleSubjectChange}
                onSignatureChange={handleSignatureChange}
              />
            )}

            {selectedForm === FORM_TYPES.ACADEMIC_SESSION && (
              <AcademicSessionForm
                formData={formData}
                onChange={handleInputChange}
                onPhotoChange={handlePhotoChange}
                onQualificationChange={handleQualificationChange}
                onAddQualification={handleAddQualification}
                onRemoveQualification={handleRemoveQualification}
              />
            )}

            {/* Actions */}
            <div className="pt-5 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 font-medium text-sm rounded-xl shadow transition active:scale-98 disabled:opacity-50 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>{isSubmitting ? 'Preparing...' : 'Download Form PDF'}</span>
              </button>
            </div>
          </form>
        </section>

        {/* Live Preview */}
        <section>
          <LivePreviewContainer
            selectedForm={selectedForm}
            formData={formData}
            isSubmitting={isSubmitting}
          />
        </section>
      </main>

      {/* Modal */}
      <SubmissionSuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        submissionResult={submissionResult}
        selectedFormTitle={activeFormConfig.title}
        studentName={formData.studentName}
        rollNo={formData.rollNo}
      />

      {/* Minimal Footer */}
      <footer className="py-6 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-400">
        Govt. College, Sector-9 Gurugram
      </footer>
    </div>
  );
}
