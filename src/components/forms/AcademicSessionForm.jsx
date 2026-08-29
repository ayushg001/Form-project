import React from 'react';
import PhotoUploader from '../PhotoUploader';
import {
  User,
  Phone,
  Calendar,
  Hash,
  Mail,
  Shield,
  CreditCard,
  GraduationCap,
  Plus,
  Trash2,
} from 'lucide-react';

export default function AcademicSessionForm({
  formData,
  onChange,
  onPhotoChange,
  onQualificationChange,
  onAddQualification,
  onRemoveQualification,
}) {
  return (
    <div className="space-y-5">
      {/* Photo Uploader */}
      <PhotoUploader
        photoUrl={formData.photoUrl}
        onPhotoChange={onPhotoChange}
        label="Student Photo"
      />

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
            placeholder="Class name (e.g. B.Com / B.Sc.)"
            required
            className="w-full px-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-purple-500 focus:bg-white dark:focus:bg-slate-700 focus:border-transparent transition"
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
              className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-purple-500 focus:bg-white dark:focus:bg-slate-700 focus:border-transparent transition"
            />
          </div>
        </div>
      </div>

      {/* Row 2: Student Name, Category, D.O.B */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="sm:col-span-1">
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
              className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-purple-500 focus:bg-white dark:focus:bg-slate-700 focus:border-transparent transition"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
            CATEGORY <span className="text-red-500">*</span>
          </label>
          <select
            name="category"
            value={formData.category || ''}
            onChange={onChange}
            className="w-full px-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-purple-500 focus:bg-white dark:focus:bg-slate-700 focus:border-transparent transition"
          >
            <option value="">Select Category</option>
            <option value="General">General</option>
            <option value="OBC-A">OBC-A</option>
            <option value="OBC-B">OBC-B</option>
            <option value="SC">SC</option>
            <option value="ST">ST</option>
            <option value="EWS">EWS</option>
          </select>
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
              required
              className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-purple-500 focus:bg-white dark:focus:bg-slate-700 focus:border-transparent transition"
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
            className="w-full px-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-purple-500 focus:bg-white dark:focus:bg-slate-700 focus:border-transparent transition"
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
            className="w-full px-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-purple-500 focus:bg-white dark:focus:bg-slate-700 focus:border-transparent transition"
          />
        </div>
      </div>

      {/* Row 4: Religion, Mobile No, Aadhar No */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
            RELIGION
          </label>
          <input
            type="text"
            name="religion"
            value={formData.religion || ''}
            onChange={onChange}
            placeholder="Enter religion (e.g. Hinduism, Sikhism)"
            className="w-full px-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-purple-500 focus:bg-white dark:focus:bg-slate-700 focus:border-transparent transition"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
            MOBILE NO. <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
              <Phone className="w-4 h-4" />
            </div>
            <input
              type="tel"
              name="mobileNo"
              value={formData.mobileNo || ''}
              onChange={onChange}
              placeholder="Enter 10-digit mobile number"
              maxLength={10}
              required
              className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-purple-500 focus:bg-white dark:focus:bg-slate-700 focus:border-transparent transition"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
            AADHAR NO. <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
              <Shield className="w-4 h-4" />
            </div>
            <input
              type="text"
              name="aadharNo"
              value={formData.aadharNo || ''}
              onChange={onChange}
              placeholder="Enter 12-digit Aadhar number"
              maxLength={12}
              required
              className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-purple-500 focus:bg-white dark:focus:bg-slate-700 focus:border-transparent transition"
            />
          </div>
        </div>
      </div>

      {/* Row 5: APAAR ID & Registration No */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-purple-500 focus:bg-white dark:focus:bg-slate-700 focus:border-transparent transition"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
            REGISTRATION NO.
          </label>
          <input
            type="text"
            name="registrationNo"
            value={formData.registrationNo || ''}
            onChange={onChange}
            placeholder="College/University Registration No."
            className="w-full px-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-purple-500 focus:bg-white dark:focus:bg-slate-700 focus:border-transparent transition"
          />
        </div>
      </div>

      {/* Row 6: Email ID & Nationality */}
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
              className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-purple-500 focus:bg-white dark:focus:bg-slate-700 focus:border-transparent transition"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
            NATIONALITY
          </label>
          <input
            type="text"
            name="nationality"
            value={formData.nationality || ''}
            onChange={onChange}
            placeholder="Enter nationality (e.g. Indian)"
            className="w-full px-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-purple-500 focus:bg-white dark:focus:bg-slate-700 focus:border-transparent transition"
          />
        </div>
      </div>

      {/* Row 7: Domicile, Area Type, Gender, Is NCC/NSS */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
            DOMICILE
          </label>
          <input
            type="text"
            name="domicile"
            value={formData.domicile || ''}
            onChange={onChange}
            placeholder="e.g. Haryana"
            className="w-full px-2.5 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-purple-500 focus:bg-white dark:focus:bg-slate-700"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
            AREA TYPE
          </label>
          <select
            name="areaType"
            value={formData.areaType || ''}
            onChange={onChange}
            className="w-full px-2.5 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-purple-500 focus:bg-white dark:focus:bg-slate-700"
          >
            <option value="">Select Area Type</option>
            <option value="Urban">Urban</option>
            <option value="Rural">Rural</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
            GENDER
          </label>
          <select
            name="gender"
            value={formData.gender || ''}
            onChange={onChange}
            className="w-full px-2.5 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-purple-500 focus:bg-white dark:focus:bg-slate-700"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
            IS NCC/NSS
          </label>
          <select
            name="isNccNss"
            value={formData.isNccNss || ''}
            onChange={onChange}
            className="w-full px-2.5 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-purple-500 focus:bg-white dark:focus:bg-slate-700"
          >
            <option value="">Select</option>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>
      </div>

      {/* Row 8: Address, State, District, Pincode */}
      <div className="space-y-3">
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
            ADDRESS <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="address"
            value={formData.address || ''}
            onChange={onChange}
            placeholder="Enter permanent address"
            required
            className="w-full px-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-purple-500 focus:bg-white dark:focus:bg-slate-700 focus:border-transparent transition"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
              STATE
            </label>
            <input
              type="text"
              name="state"
              value={formData.state || ''}
              onChange={onChange}
              placeholder="Enter state (e.g. Haryana)"
              className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-purple-500 focus:bg-white dark:focus:bg-slate-700"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
              DISTRICT
            </label>
            <input
              type="text"
              name="district"
              value={formData.district || ''}
              onChange={onChange}
              placeholder="Enter district (e.g. Gurugram)"
              className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-purple-500 focus:bg-white dark:focus:bg-slate-700"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
              PINCODE <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode || ''}
              onChange={onChange}
              placeholder="Enter 6-digit PIN code"
              maxLength={6}
              required
              className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-purple-500 focus:bg-white dark:focus:bg-slate-700"
            />
          </div>
        </div>
      </div>

      {/* Educational Qualification Table */}
      <div className="bg-white dark:bg-slate-800/80 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">
              Educational Qualification (Last Year / Semester)
            </h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">Record of previously cleared examinations</p>
          </div>
          <button
            type="button"
            onClick={onAddQualification}
            className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-md bg-purple-50 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900/60 transition cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" /> Add Row
          </button>
        </div>

        <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-lg">
          <table className="w-full text-left text-xs border-collapse min-w-[650px]">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="p-2 border-r border-slate-200 dark:border-slate-700">Exam Passed</th>
                <th className="p-2 border-r border-slate-200 dark:border-slate-700">University / Board</th>
                <th className="p-2 border-r border-slate-200 dark:border-slate-700 w-24">Roll No.</th>
                <th className="p-2 border-r border-slate-200 dark:border-slate-700 w-20">Passing Year</th>
                <th className="p-2 border-r border-slate-200 dark:border-slate-700 w-20">Marks Obt.</th>
                <th className="p-2 border-r border-slate-200 dark:border-slate-700 w-20">Max. Marks</th>
                <th className="p-2 w-20">Result</th>
                <th className="p-2 w-10 text-center"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {formData.qualifications?.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-750/50">
                  <td className="p-1.5 border-r border-slate-200 dark:border-slate-700">
                    <input
                      type="text"
                      value={row.examPassed || ''}
                      onChange={(e) => onQualificationChange(idx, 'examPassed', e.target.value)}
                      placeholder="e.g. 12th / Sem-4"
                      className="w-full px-2 py-1 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded"
                    />
                  </td>
                  <td className="p-1.5 border-r border-slate-200 dark:border-slate-700">
                    <input
                      type="text"
                      value={row.university || ''}
                      onChange={(e) => onQualificationChange(idx, 'university', e.target.value)}
                      placeholder="e.g. CBSE / MDU"
                      className="w-full px-2 py-1 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded"
                    />
                  </td>
                  <td className="p-1.5 border-r border-slate-200 dark:border-slate-700">
                    <input
                      type="text"
                      value={row.rollNo || ''}
                      onChange={(e) => onQualificationChange(idx, 'rollNo', e.target.value)}
                      placeholder="Roll No"
                      className="w-full px-2 py-1 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded"
                    />
                  </td>
                  <td className="p-1.5 border-r border-slate-200 dark:border-slate-700">
                    <input
                      type="text"
                      value={row.passingYear || ''}
                      onChange={(e) => onQualificationChange(idx, 'passingYear', e.target.value)}
                      placeholder="YYYY"
                      className="w-full px-2 py-1 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded"
                    />
                  </td>
                  <td className="p-1.5 border-r border-slate-200 dark:border-slate-700">
                    <input
                      type="text"
                      value={row.marksObt || ''}
                      onChange={(e) => onQualificationChange(idx, 'marksObt', e.target.value)}
                      placeholder="Obt."
                      className="w-full px-2 py-1 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded"
                    />
                  </td>
                  <td className="p-1.5 border-r border-slate-200 dark:border-slate-700">
                    <input
                      type="text"
                      value={row.maxMarks || ''}
                      onChange={(e) => onQualificationChange(idx, 'maxMarks', e.target.value)}
                      placeholder="Max"
                      className="w-full px-2 py-1 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded"
                    />
                  </td>
                  <td className="p-1.5 border-r border-slate-200 dark:border-slate-700">
                    <input
                      type="text"
                      value={row.result || ''}
                      onChange={(e) => onQualificationChange(idx, 'result', e.target.value)}
                      placeholder="Pass"
                      className="w-full px-2 py-1 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded"
                    />
                  </td>
                  <td className="p-1.5 text-center">
                    {formData.qualifications.length > 1 && (
                      <button
                        type="button"
                        onClick={() => onRemoveQualification(idx)}
                        className="text-slate-400 hover:text-red-500 transition cursor-pointer"
                        title="Remove row"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
