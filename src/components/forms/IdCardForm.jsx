import React from 'react';
import PhotoUploader from '../PhotoUploader';
import { User, Phone, MapPin, Calendar, Hash, BookMarked, HeartHandshake, ShieldAlert } from 'lucide-react';

export default function IdCardForm({ formData, onChange, onPhotoChange }) {
  return (
    <div className="space-y-5">
      {/* Passport Photo */}
      <PhotoUploader
        photoUrl={formData.photoUrl}
        onPhotoChange={onPhotoChange}
        label="Student Photo"
      />

      {/* Primary Details Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* 1. Student's Name */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
            1. Student's Name <span className="text-red-500">*</span>
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
              className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:bg-white dark:focus:bg-slate-700 focus:border-transparent transition"
            />
          </div>
        </div>

        {/* 2. Father's Name */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
            2. Father's Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
              <User className="w-4 h-4" />
            </div>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName || ''}
              onChange={onChange}
              placeholder="Enter father's full name"
              required
              className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:bg-white dark:focus:bg-slate-700 focus:border-transparent transition"
            />
          </div>
        </div>

        {/* 3. Date Of Birth */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
            3. Date Of Birth <span className="text-red-500">*</span>
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
              className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:bg-white dark:focus:bg-slate-700 focus:border-transparent transition"
            />
          </div>
        </div>

        {/* 4. Class & Year */}
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
              4. Class <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="className"
              value={formData.className || ''}
              onChange={onChange}
              placeholder="e.g. B.A. / B.Sc."
              required
              className="w-full px-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:bg-white dark:focus:bg-slate-700 focus:border-transparent transition"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
              Year <span className="text-red-500">*</span>
            </label>
            <select
              name="year"
              value={formData.year || ''}
              onChange={onChange}
              className="w-full px-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:bg-white dark:focus:bg-slate-700 focus:border-transparent transition"
            >
              <option value="">Select Year</option>
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="Final Year">Final Year</option>
            </select>
          </div>
        </div>

        {/* 5. Roll No */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
            5. Roll No. <span className="text-red-500">*</span>
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
              className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:bg-white dark:focus:bg-slate-700 focus:border-transparent transition"
            />
          </div>
        </div>

        {/* 7. Mobile Number */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
            7. Mobile Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
              <Phone className="w-4 h-4" />
            </div>
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber || ''}
              onChange={onChange}
              placeholder="Enter 10-digit mobile number"
              maxLength={10}
              required
              className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:bg-white dark:focus:bg-slate-700 focus:border-transparent transition"
            />
          </div>
        </div>

        {/* 8. Blood Group */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
            8. Blood Group
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
              <HeartHandshake className="w-4 h-4" />
            </div>
            <select
              name="bloodGroup"
              value={formData.bloodGroup || ''}
              onChange={onChange}
              className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:bg-white dark:focus:bg-slate-700 focus:border-transparent transition"
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>
        </div>

        {/* 9. Emergency Contact */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
            9. Emergency Contact
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <input
              type="tel"
              name="emergencyContact"
              value={formData.emergencyContact || ''}
              onChange={onChange}
              placeholder="Enter emergency contact number"
              maxLength={10}
              className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:bg-white dark:focus:bg-slate-700 focus:border-transparent transition"
            />
          </div>
        </div>
      </div>

      {/* 6. Address (Full Width) */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
          6. Address <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute top-3 left-3 pointer-events-none text-slate-400 dark:text-slate-500">
            <MapPin className="w-4 h-4" />
          </div>
          <textarea
            name="address"
            rows={3}
            value={formData.address || ''}
            onChange={onChange}
            placeholder="Enter complete postal address"
            required
            className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:bg-white dark:focus:bg-slate-700 focus:border-transparent transition resize-none"
          />
        </div>
      </div>
    </div>
  );
}
