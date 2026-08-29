import React from 'react';
import CollegeLogo from '../CollegeLogo';

/**
 * Official Form 3 Replica: Academic Session-2026-27 Registration Form
 * Exact replica of the official collegiate admission sheet
 */
export default function AcademicSessionPreview({ data }) {
  return (
    <div className="bg-white text-black p-8 sm:p-12 max-w-[800px] mx-auto shadow-md border border-slate-200 printable-area font-sans selection:bg-none">
      {/* Header Banner */}
      <div className="flex items-center justify-center gap-4 mb-2">
        <CollegeLogo className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0" />
        <div className="text-center">
          <h1 className="text-xl sm:text-3xl font-black tracking-tight font-serif uppercase text-black leading-none">
            GOVT. COLLEGE, SECTOR-9, GURUGRAM
          </h1>
        </div>
      </div>

      {/* Sub-header */}
      <div className="text-center mb-6">
        <h2 className="text-sm sm:text-base font-extrabold tracking-wider uppercase underline decoration-2 underline-offset-4 font-serif">
          ACADEMIC SESSION-2026-27
        </h2>
      </div>

      {/* Top Segment: Class, Roll No and Top-Right Photo Box */}
      <div className="flex flex-row justify-between items-start gap-4 mb-4">
        {/* Left Side: Class & Roll No */}
        <div className="flex-1 space-y-4 pt-4 text-xs sm:text-sm font-semibold">
          <div className="flex items-baseline">
            <span className="flex-shrink-0">CLASS-</span>
            <span className="ml-1 flex-1 border-b-[1.5px] border-dotted border-black px-1 font-bold min-h-[1.35rem] leading-tight">
              {data.className || ''}
            </span>
          </div>

          <div className="flex items-baseline">
            <span className="flex-shrink-0">ROLL NO.</span>
            <span className="ml-1 flex-1 border-b-[1.5px] border-dotted border-black px-1 font-bold min-h-[1.35rem] leading-tight">
              {data.rollNo || ''}
            </span>
          </div>
        </div>

        {/* Right Side: PHOTO Box */}
        <div className="w-32 h-40 sm:w-36 sm:h-44 border-2 border-black flex items-center justify-center p-1 flex-shrink-0 bg-white shadow-sm overflow-hidden">
          {data.photoUrl ? (
            <img
              src={data.photoUrl}
              alt="Student Photo"
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <span className="font-extrabold text-sm sm:text-base tracking-widest uppercase">
              PHOTO
            </span>
          )}
        </div>
      </div>

      {/* Personal & Demographic Lines */}
      <div className="space-y-3.5 text-xs sm:text-sm font-semibold">
        {/* Student Name, Category, D.O.B */}
        <div className="flex items-baseline justify-between gap-3">
          <div className="flex items-baseline flex-[1.4]">
            <span className="flex-shrink-0">STUDENT NAME-</span>
            <span className="ml-1 flex-1 border-b-[1.5px] border-dotted border-black px-1 font-bold uppercase min-h-[1.35rem] leading-tight">
              {data.studentName || ''}
            </span>
          </div>
          <div className="flex items-baseline flex-[0.8]">
            <span className="flex-shrink-0">CATEGORY-</span>
            <span className="ml-1 flex-1 border-b-[1.5px] border-dotted border-black px-1 min-h-[1.35rem] leading-tight">
              {data.category || ''}
            </span>
          </div>
          <div className="flex items-baseline flex-[0.8]">
            <span className="flex-shrink-0">D.O.B.-</span>
            <span className="ml-1 flex-1 border-b-[1.5px] border-dotted border-black px-1 min-h-[1.35rem] leading-tight">
              {data.dob ? new Date(data.dob).toLocaleDateString('en-GB') : ''}
            </span>
          </div>
        </div>

        {/* Father's Name & Mother's Name */}
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

        {/* Religion, Mobile No, Aadhar No */}
        <div className="flex items-baseline justify-between gap-3">
          <div className="flex items-baseline flex-[0.8]">
            <span className="flex-shrink-0">RELIGION:</span>
            <span className="ml-1 flex-1 border-b-[1.5px] border-dotted border-black px-1 min-h-[1.35rem] leading-tight">
              {data.religion || ''}
            </span>
          </div>
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

        {/* APAAR ID & Registration No */}
        <div className="flex items-baseline justify-between gap-4">
          <div className="flex items-baseline flex-1">
            <span className="flex-shrink-0">APAAR ID:</span>
            <span className="ml-1 flex-1 border-b-[1.5px] border-dotted border-black px-1 min-h-[1.35rem] leading-tight">
              {data.apaarId || ''}
            </span>
          </div>
          <div className="flex items-baseline flex-1">
            <span className="flex-shrink-0">REGISTRATION NO.:</span>
            <span className="ml-1 flex-1 border-b-[1.5px] border-dotted border-black px-1 min-h-[1.35rem] leading-tight">
              {data.registrationNo || ''}
            </span>
          </div>
        </div>

        {/* E-Mail ID & Nationality */}
        <div className="flex items-baseline justify-between gap-4">
          <div className="flex items-baseline flex-[1.4]">
            <span className="flex-shrink-0">E-MAILID-</span>
            <span className="ml-1 flex-1 border-b-[1.5px] border-dotted border-black px-1 font-normal lowercase min-h-[1.35rem] leading-tight break-all">
              {data.email || ''}
            </span>
          </div>
          <div className="flex items-baseline flex-[0.8]">
            <span className="flex-shrink-0">NATIONALITY-</span>
            <span className="ml-1 flex-1 border-b-[1.5px] border-dotted border-black px-1 min-h-[1.35rem] leading-tight">
              {data.nationality || ''}
            </span>
          </div>
        </div>

        {/* Domicile, Area Type, Gender, IS NCC/NSS */}
        <div className="flex items-baseline justify-between gap-2">
          <div className="flex items-baseline flex-1">
            <span className="flex-shrink-0">DOMICILE:</span>
            <span className="ml-1 flex-1 border-b-[1.5px] border-dotted border-black px-1 min-h-[1.35rem] leading-tight">
              {data.domicile || ''}
            </span>
          </div>
          <div className="flex items-baseline flex-1">
            <span className="flex-shrink-0">AREA TYPE:</span>
            <span className="ml-1 flex-1 border-b-[1.5px] border-dotted border-black px-1 min-h-[1.35rem] leading-tight">
              {data.areaType || ''}
            </span>
          </div>
          <div className="flex items-baseline flex-1">
            <span className="flex-shrink-0">GENDER-</span>
            <span className="ml-1 flex-1 border-b-[1.5px] border-dotted border-black px-1 min-h-[1.35rem] leading-tight">
              {data.gender || ''}
            </span>
          </div>
          <div className="flex items-baseline flex-1">
            <span className="flex-shrink-0">IS NCC/NSS:</span>
            <span className="ml-1 flex-1 border-b-[1.5px] border-dotted border-black px-1 min-h-[1.35rem] leading-tight">
              {data.isNccNss || ''}
            </span>
          </div>
        </div>

        {/* Address First Line */}
        <div className="flex items-baseline">
          <span className="flex-shrink-0">ADDRESS-</span>
          <span className="ml-1 flex-1 border-b-[1.5px] border-dotted border-black px-1 font-normal min-h-[1.35rem] leading-tight break-all">
            {data.address || ''}
          </span>
        </div>

        {/* Address Continued Line */}
        <div className="border-b-[1.5px] border-dotted border-black min-h-[1.35rem]" />

        {/* State, District, Pincode */}
        <div className="flex items-baseline justify-between gap-3">
          <div className="flex items-baseline flex-1">
            <span className="flex-shrink-0">STATE:</span>
            <span className="ml-1 flex-1 border-b-[1.5px] border-dotted border-black px-1 min-h-[1.35rem] leading-tight">
              {data.state || ''}
            </span>
          </div>
          <div className="flex items-baseline flex-1">
            <span className="flex-shrink-0">DISTRICT-</span>
            <span className="ml-1 flex-1 border-b-[1.5px] border-dotted border-black px-1 min-h-[1.35rem] leading-tight">
              {data.district || ''}
            </span>
          </div>
          <div className="flex items-baseline flex-1">
            <span className="flex-shrink-0">PINCODE-</span>
            <span className="ml-1 flex-1 border-b-[1.5px] border-dotted border-black px-1 tracking-wider min-h-[1.35rem] leading-tight">
              {data.pincode || ''}
            </span>
          </div>
        </div>
      </div>

      {/* Educational Qualification Table */}
      <div className="mt-8">
        <h3 className="text-center font-bold text-xs sm:text-sm tracking-wider uppercase mb-1">
          EDUCATIONALQUALIFICATION (LASTYEAR/SEMESTER)
        </h3>

        <table className="w-full border-collapse border-2 border-black text-xs">
          <thead>
            <tr className="border-b-2 border-black font-bold">
              <th className="border-r-2 border-black p-2 text-center w-28">ExamPassed</th>
              <th className="border-r-2 border-black p-2 text-center">University</th>
              <th className="border-r-2 border-black p-2 text-center w-24">Roll No.</th>
              <th className="border-r-2 border-black p-2 text-center w-24 leading-tight">
                Passing
                <br />
                Year
                <br />
                Marks
                <br />
                Obt.
              </th>
              <th className="border-r-2 border-black p-2 text-center w-16 leading-tight">
                Max.
                <br />
                Marks
              </th>
              <th className="p-2 text-center w-20">Result</th>
            </tr>
          </thead>
          <tbody className="divide-y border-b-2 border-black">
            {data.qualifications?.map((q, idx) => (
              <tr key={idx} className="border-b border-black">
                <td className="border-r-2 border-black p-2 font-semibold text-center">
                  {q.examPassed || ''}
                </td>
                <td className="border-r-2 border-black p-2 text-center">
                  {q.university || ''}
                </td>
                <td className="border-r-2 border-black p-2 font-mono text-center">
                  {q.rollNo || ''}
                </td>
                <td className="border-r-2 border-black p-2 text-center">
                  {q.passingYear ? `${q.passingYear} / ` : ''}
                  {q.marksObt || ''}
                </td>
                <td className="border-r-2 border-black p-2 text-center font-mono">
                  {q.maxMarks || ''}
                </td>
                <td className="p-2 text-center font-semibold">
                  {q.result || ''}
                </td>
              </tr>
            ))}
            {/* Blank filler rows to match original official form format if fewer rows */}
            {Array.from({ length: Math.max(0, 3 - (data.qualifications?.length || 0)) }).map((_, i) => (
              <tr key={`blank-${i}`} className="border-b border-black h-8">
                <td className="border-r-2 border-black p-2"></td>
                <td className="border-r-2 border-black p-2"></td>
                <td className="border-r-2 border-black p-2"></td>
                <td className="border-r-2 border-black p-2"></td>
                <td className="border-r-2 border-black p-2"></td>
                <td className="p-2"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Signature Placeholders at bottom */}
      <div className="mt-14 pt-4 flex justify-between items-end text-xs sm:text-sm font-bold">
        <div className="text-center border-t border-black pt-1 w-44">
          Student’s Signature
        </div>
        <div className="text-center border-t border-black pt-1 w-44">
          Signature of Scrutinizer
        </div>
      </div>
    </div>
  );
}
