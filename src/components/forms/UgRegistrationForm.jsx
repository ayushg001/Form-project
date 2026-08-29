import React from 'react';
import SignaturePad from '../SignaturePad';
import { User, Phone, Calendar, Hash, Mail, CreditCard, Shield, BookOpen, Layers } from 'lucide-react';

export default function UgRegistrationForm({ formData, onChange, onSubjectChange, onSignatureChange }) {
  return (
    <div className="space-y-5">
      {/* Row 1: Class & Roll No */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
            CLASS <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="className"
            value={formData.className || ''}
            onChange={onChange}
            placeholder="Class name (e.g. B.A. 3rd Year)"
            required
            className="w-full px-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:bg-white dark:focus:bg-slate-700 focus:border-transparent transition"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
            ROLL NO. <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
              <Hash className="w-4 h-4" />
            </div>
            <input
              type="text"
              name="rollNo"
              value={formData.rollNo || ''}
              onChange={onChange}
              placeholder="Enter roll number"
              required
              className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:bg-white dark:focus:bg-slate-700 focus:border-transparent transition"
            />
          </div>
        </div>
      </div>

      {/* Row 2: Student Name & D.O.B */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
            STUDENT NAME <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
              <User className="w-4 h-4" />
            </div>
            <input
              type="text"
              name="studentName"
              value={formData.studentName || ''}
              onChange={onChange}
              placeholder="Enter student's full name"
              required
              className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:bg-white dark:focus:bg-slate-700 focus:border-transparent transition"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
            D.O.B. <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
              <Calendar className="w-4 h-4" />
            </div>
            <input
              type="date"
              name="dob"
              value={formData.dob || ''}
              onChange={onChange}
              max={new Date().toISOString().split('T')[0]}
              required
              className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:bg-white dark:focus:bg-slate-700 focus:border-transparent transition"
            />
          </div>
        </div>
      </div>

      {/* Row 3: Father's Name & Mother's Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
            FATHER'S NAME <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fatherName"
            value={formData.fatherName || ''}
            onChange={onChange}
            placeholder="Enter father's full name"
            required
            className="w-full px-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:bg-white dark:focus:bg-slate-700 focus:border-transparent transition"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
            MOTHER'S NAME <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="motherName"
            value={formData.motherName || ''}
            onChange={onChange}
            placeholder="Enter mother's full name"
            required
            className="w-full px-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:bg-white dark:focus:bg-slate-700 focus:border-transparent transition"
          />
        </div>
      </div>

      {/* Row 4: Mobile No & Aadhar No */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
            <span>MOBILE NO. <span className="text-red-500">*</span></span>
            {formData.mobileNo && (
              <span className={formData.mobileNo.length === 10 ? 'text-[11px] font-semibold text-emerald-600 dark:text-emerald-400' : 'text-[11px] font-medium text-amber-500'}>
                {formData.mobileNo.length === 10 ? '✓ 10 digits' : `${formData.mobileNo.length}/10 digits`}
              </span>
            )}
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
              <Phone className="w-4 h-4" />
            </div>
            <input
              type="tel"
              inputMode="numeric"
              pattern="[0-9]{10}"
              name="mobileNo"
              value={formData.mobileNo || ''}
              onChange={onChange}
              placeholder="Enter 10-digit mobile number"
              maxLength={10}
              required
              className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:bg-white dark:focus:bg-slate-700 focus:border-transparent transition"
            />
          </div>
        </div>

        <div>
          <label className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
            <span>AADHAR NO. <span className="text-red-500">*</span></span>
            {formData.aadharNo && (
              <span className={formData.aadharNo.length === 12 ? 'text-[11px] font-semibold text-emerald-600 dark:text-emerald-400' : 'text-[11px] font-medium text-amber-500'}>
                {formData.aadharNo.length === 12 ? '✓ 12 digits' : `${formData.aadharNo.length}/12 digits`}
              </span>
            )}
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
              <Shield className="w-4 h-4" />
            </div>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]{12}"
              name="aadharNo"
              value={formData.aadharNo || ''}
              onChange={onChange}
              placeholder="Enter 12-digit Aadhar number"
              maxLength={12}
              required
              className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:bg-white dark:focus:bg-slate-700 focus:border-transparent transition"
            />
          </div>
        </div>
      </div>

      {/* Row 5: E-Mail ID & APAAR ID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
            E-MAIL ID <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
              <Mail className="w-4 h-4" />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email || ''}
              onChange={onChange}
              placeholder="Enter email address"
              required
              className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:bg-white dark:focus:bg-slate-700 focus:border-transparent transition"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
            APAAR ID (Automated Permanent Academic Account Registry)
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
              <CreditCard className="w-4 h-4" />
            </div>
            <input
              type="text"
              name="apaarId"
              value={formData.apaarId || ''}
              onChange={onChange}
              placeholder="Enter APAAR / ABC ID"
              className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:bg-white dark:focus:bg-slate-700 focus:border-transparent transition"
            />
          </div>
        </div>
      </div>

      {/* Subject Detail Table */}
      <div className="bg-white dark:bg-slate-800/80 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Subject Details (Course Selection)</span>
          </h4>
          <span className="text-[11px] text-slate-500 dark:text-slate-400">As per NEP 2020 Guidelines</span>
        </div>

        <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-lg">
          <table className="w-full text-left text-xs border-collapse min-w-[500px]">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="p-2.5 w-14 text-center border-r border-slate-200 dark:border-slate-700">S. No.</th>
                <th className="p-2.5 w-32 border-r border-slate-200 dark:border-slate-700">Course</th>
                <th className="p-2.5 border-r border-slate-200 dark:border-slate-700">Name of Course</th>
                <th className="p-2.5 w-36">Course ID</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {formData.subjects?.map((sub, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                  <td className="p-2 text-center font-medium text-slate-500 dark:text-slate-400 border-r border-slate-200 dark:border-slate-700">
                    {idx + 1}
                  </td>
                  <td className="p-2 font-bold text-slate-800 dark:text-slate-200 border-r border-slate-200 dark:border-slate-700">
                    {sub.course}
                  </td>
                  <td className="p-2 border-r border-slate-200 dark:border-slate-700">
                    <input
                      type="text"
                      value={sub.nameOfCourse || ''}
                      onChange={(e) => onSubjectChange(idx, 'nameOfCourse', e.target.value)}
                      placeholder="Enter course name"
                      className="w-full px-2 py-1.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded focus:bg-white dark:focus:bg-slate-700 focus:ring-1 focus:ring-emerald-500"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      type="text"
                      value={sub.courseId || ''}
                      onChange={(e) => onSubjectChange(idx, 'courseId', e.target.value)}
                      placeholder="e.g. CC-301"
                      className="w-full px-2 py-1.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded focus:bg-white dark:focus:bg-slate-700 focus:ring-1 focus:ring-emerald-500"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Declaration & Signature */}
      <div className="bg-white dark:bg-slate-800/80 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            name="declarationAccepted"
            checked={formData.declarationAccepted ?? true}
            onChange={(e) =>
              onChange({ target: { name: 'declarationAccepted', value: e.target.checked } })
            }
            className="mt-0.5 h-4 w-4 rounded border-slate-300 dark:border-slate-600 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
          />
          <span className="text-xs font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
            I hereby declare that I had gone through all the subjects filled in the form and the particulars submitted by me are true and authentic.
          </span>
        </label>

        <div className="pt-2">
          <SignaturePad
            signatureUrl={formData.studentSignatureUrl}
            onSignatureChange={onSignatureChange}
            label="Student's Signature (Required on Form)"
          />
        </div>
      </div>
    </div>
  );
}
