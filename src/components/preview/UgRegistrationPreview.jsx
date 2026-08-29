import React from 'react';
import CollegeLogo from '../CollegeLogo';

/**
 * Official Form 2 Replica: UG Course Registration Form 3rd Year Academic Session-2026-27
 * Replicates the emblem header, typography, subject table, and signature slots
 */
export default function UgRegistrationPreview({ data }) {
  return (
    <div className="bg-white text-black p-8 sm:p-12 max-w-[800px] mx-auto shadow-md border border-slate-200 printable-area font-sans selection:bg-none">
      {/* College Emblem & Header Banner */}
      <div className="flex items-center justify-center gap-4 mb-3 border-b-2 border-black pb-2">
        <CollegeLogo className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0" />
        <div className="text-center">
          <h1 className="text-xl sm:text-3xl font-black tracking-tight font-serif uppercase text-black leading-none">
            GOVT. COLLEGE, SECTOR-9, GURUGRAM
          </h1>
          <p className="text-xs font-semibold text-slate-700 tracking-wider mt-1 uppercase">
            Higher Education Department, Haryana
          </p>
        </div>
      </div>

      {/* Form Title */}
      <div className="text-center mb-6">
        <h2 className="text-sm sm:text-base font-extrabold tracking-wide uppercase underline decoration-2 underline-offset-4">
          UG Course Registration Form 3<sup>rd</sup> Year Academic Session-2026-27
        </h2>
      </div>

      {/* Student Personal Particulars with Dotted Line Field Layout */}
      <div className="space-y-3.5 text-xs sm:text-sm font-semibold">
        {/* Row 1: CLASS and ROLL NO */}
        <div className="flex items-baseline justify-between gap-4">
          <div className="flex items-baseline flex-1">
            <span className="flex-shrink-0">CLASS-</span>
            <span className="ml-1 flex-1 border-b-[1.5px] border-dotted border-black px-1 uppercase font-bold min-h-[1.35rem] leading-tight">
              {data.className || ''}
            </span>
          </div>
          <div className="flex items-baseline flex-1">
            <span className="flex-shrink-0">ROLL NO.</span>
            <span className="ml-1 flex-1 border-b-[1.5px] border-dotted border-black px-1 font-bold min-h-[1.35rem] leading-tight">
              {data.rollNo || ''}
            </span>
          </div>
        </div>

        {/* Row 2: STUDENT NAME and D.O.B */}
        <div className="flex items-baseline justify-between gap-4">
          <div className="flex items-baseline flex-[1.4]">
            <span className="flex-shrink-0">STUDENT NAME-</span>
            <span className="ml-1 flex-1 border-b-[1.5px] border-dotted border-black px-1 uppercase font-bold min-h-[1.35rem] leading-tight">
              {data.studentName || ''}
            </span>
          </div>
          <div className="flex items-baseline flex-[0.8]">
            <span className="flex-shrink-0">D.O.B.-</span>
            <span className="ml-1 flex-1 border-b-[1.5px] border-dotted border-black px-1 min-h-[1.35rem] leading-tight">
              {data.dob ? new Date(data.dob).toLocaleDateString('en-GB') : ''}
            </span>
          </div>
        </div>

        {/* Row 3: FATHER'S NAME and MOTHER'S NAME */}
        <div className="flex items-baseline justify-between gap-4">
          <div className="flex items-baseline flex-1">
            <span className="flex-shrink-0">FATHER’S NAME-</span>
            <span className="ml-1 flex-1 border-b-[1.5px] border-dotted border-black px-1 uppercase min-h-[1.35rem] leading-tight">
              {data.fatherName || ''}
            </span>
          </div>
          <div className="flex items-baseline flex-1">
            <span className="flex-shrink-0">MOTHER’S NAME-</span>
            <span className="ml-1 flex-1 border-b-[1.5px] border-dotted border-black px-1 uppercase min-h-[1.35rem] leading-tight">
              {data.motherName || ''}
            </span>
          </div>
        </div>

        {/* Row 4: MOBILE NO and AADHAR NO */}
        <div className="flex items-baseline justify-between gap-4">
          <div className="flex items-baseline flex-1">
            <span className="flex-shrink-0">MOBILE NO.-</span>
            <span className="ml-1 flex-1 border-b-[1.5px] border-dotted border-black px-1 tracking-wider min-h-[1.35rem] leading-tight">
              {data.mobileNo || ''}
            </span>
          </div>
          <div className="flex items-baseline flex-1">
            <span className="flex-shrink-0">AADHAR NO.-</span>
            <span className="ml-1 flex-1 border-b-[1.5px] border-dotted border-black px-1 tracking-wider min-h-[1.35rem] leading-tight">
              {data.aadharNo || ''}
            </span>
          </div>
        </div>

        {/* Row 5: E-MAIL ID and APAAR ID */}
        <div className="flex items-baseline justify-between gap-4">
          <div className="flex items-baseline flex-[1.3]">
            <span className="flex-shrink-0">E-MAIL ID:</span>
            <span className="ml-1 flex-1 border-b-[1.5px] border-dotted border-black px-1 lowercase font-normal min-h-[1.35rem] leading-tight break-all">
              {data.email || ''}
            </span>
          </div>
          <div className="flex items-baseline flex-[0.9]">
            <span className="flex-shrink-0">APAAR ID-</span>
            <span className="ml-1 flex-1 border-b-[1.5px] border-dotted border-black px-1 min-h-[1.35rem] leading-tight">
              {data.apaarId || ''}
            </span>
          </div>
        </div>
      </div>

      {/* Subject Detail Table */}
      <div className="mt-8">
        <h3 className="text-center font-bold text-sm sm:text-base mb-2">
          Subject Detail
        </h3>

        <table className="w-full border-collapse border-2 border-black text-xs sm:text-sm">
          <thead>
            <tr className="border-b-2 border-black font-bold">
              <th className="border-r-2 border-black p-2 w-14 text-center">S. No.</th>
              <th className="border-r-2 border-black p-2 w-36 text-left">Course</th>
              <th className="border-r-2 border-black p-2 text-left">Name of Course</th>
              <th className="p-2 w-32 text-left">Course ID</th>
            </tr>
          </thead>
          <tbody className="divide-y border-b-2 border-black">
            {data.subjects?.map((item, idx) => (
              <tr key={idx} className="border-b border-black">
                <td className="border-r-2 border-black p-2 text-center font-semibold">
                  {idx + 1}
                </td>
                <td className="border-r-2 border-black p-2 font-bold uppercase">
                  {item.course}
                </td>
                <td className="border-r-2 border-black p-2 font-medium">
                  {item.nameOfCourse || ''}
                </td>
                <td className="p-2 font-mono text-center">
                  {item.courseId || ''}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Declaration */}
      <div className="mt-8 text-center text-xs sm:text-sm font-medium">
        <p className="italic">
          I hereby declare that I had gone through the all the subject filled in the form.
        </p>
      </div>

      {/* Student Signature Area (Right-aligned) */}
      <div className="mt-8 flex justify-end">
        <div className="text-center w-48">
          <div className="h-16 flex items-center justify-center border-b border-black mb-1">
            {data.studentSignatureUrl ? (
              <img
                src={data.studentSignatureUrl}
                alt="Student Signature"
                className="max-h-14 max-w-full object-contain"
              />
            ) : null}
          </div>
          <span className="font-bold text-xs sm:text-sm">Student’s Signature</span>
        </div>
      </div>

      {/* Authority Signatures Row */}
      <div className="mt-12 pt-4 flex justify-between items-end text-xs sm:text-sm font-bold">
        <div className="text-center border-t border-black pt-1 w-40">
          Signature of Mentor
        </div>
        <div className="text-center border-t border-black pt-1 w-40">
          Signature of HOD
        </div>
      </div>

      {/* Principal Signature */}
      <div className="mt-10 flex justify-center text-xs sm:text-sm font-bold">
        <div className="text-center border-t border-black pt-1 w-48">
          Signature of Principal
        </div>
      </div>
    </div>
  );
}
