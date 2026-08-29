import React from 'react';

/**
 * Official Form 1 Replica: Details of Identity Card Cum Library Card 2026-27
 * Replicates the exact typography, dotted underline format, and passport photo frame
 */
export default function IdCardPreview({ data }) {
  return (
    <div className="bg-white text-black p-8 sm:p-12 max-w-[800px] mx-auto shadow-md border border-slate-200 printable-area font-sans selection:bg-none">
      {/* Official Header */}
      <div className="text-center mb-8">
        <h1 className="text-xl sm:text-2xl font-extrabold tracking-wide uppercase underline decoration-2 underline-offset-4 font-serif">
          GOVERNMENT COLLEGE , SECTOR-9
        </h1>
        <h2 className="text-lg sm:text-xl font-bold tracking-wider uppercase underline decoration-2 underline-offset-4 font-serif mt-1">
          GURUGRAM
        </h2>
        <h3 className="text-sm sm:text-base font-bold tracking-wide uppercase underline decoration-1 underline-offset-4 mt-2">
          DETAILS OF IDENTITY CARD CUM LIBRARY CARD 2026-27
        </h3>
      </div>

      {/* Top Section: Form Details with Photo Frame on Right */}
      <div className="flex flex-row justify-between items-start gap-4">
        {/* Left Column: Numbered Items 1-6 */}
        <div className="flex-1 space-y-4 text-sm sm:text-base font-medium">
          {/* 1. Student's Name */}
          <div className="flex items-baseline">
            <span className="font-bold flex-shrink-0">1. Student’s Name:</span>
            <span className="ml-2 flex-1 border-b-[1.5px] border-dotted border-black px-1 font-semibold uppercase tracking-wide min-h-[1.5rem] leading-tight">
              {data.studentName || ''}
            </span>
          </div>

          {/* 2. Father's Name */}
          <div className="flex items-baseline">
            <span className="font-bold flex-shrink-0">2. Father’s Name:</span>
            <span className="ml-2 flex-1 border-b-[1.5px] border-dotted border-black px-1 font-semibold uppercase tracking-wide min-h-[1.5rem] leading-tight">
              {data.fatherName || ''}
            </span>
          </div>

          {/* 3. Date Of Birth */}
          <div className="flex items-baseline">
            <span className="font-bold flex-shrink-0">3. Date Of Birth:</span>
            <span className="ml-2 flex-1 border-b-[1.5px] border-dotted border-black px-1 font-semibold min-h-[1.5rem] leading-tight">
              {data.dob ? new Date(data.dob).toLocaleDateString('en-GB') : ''}
            </span>
          </div>

          {/* 4. Class & Year */}
          <div className="flex items-baseline">
            <span className="font-bold flex-shrink-0">4. Class:</span>
            <span className="ml-2 flex-1 border-b-[1.5px] border-dotted border-black px-1 font-semibold min-h-[1.5rem] leading-tight">
              {data.className || ''}
            </span>
            <span className="font-bold ml-2 flex-shrink-0">Year:</span>
            <span className="ml-2 w-28 border-b-[1.5px] border-dotted border-black px-1 font-semibold min-h-[1.5rem] leading-tight">
              {data.year || ''}
            </span>
          </div>

          {/* 5. Roll No. */}
          <div className="flex items-baseline">
            <span className="font-bold flex-shrink-0">5. Roll No.:</span>
            <span className="ml-2 flex-1 border-b-[1.5px] border-dotted border-black px-1 font-semibold min-h-[1.5rem] leading-tight">
              {data.rollNo || ''}
            </span>
          </div>

          {/* 6. Address First Line */}
          <div className="flex items-baseline">
            <span className="font-bold flex-shrink-0">6. Address:</span>
            <span className="ml-2 flex-1 border-b-[1.5px] border-dotted border-black px-1 font-normal text-xs sm:text-sm min-h-[1.5rem] leading-tight break-all">
              {data.address || ''}
            </span>
          </div>
        </div>

        {/* Right: Pass Port Size Photo Box (Exact official border box) */}
        <div className="w-32 h-40 sm:w-36 sm:h-44 border-2 border-black flex items-center justify-center p-1 flex-shrink-0 bg-white shadow-sm overflow-hidden">
          {data.photoUrl ? (
            <img
              src={data.photoUrl}
              alt="Passport Photo"
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <div className="text-center font-bold text-xs sm:text-sm uppercase tracking-wider text-slate-800 leading-tight">
              PASS PORT SIZE
              <br />
              PHOTO
            </div>
          )}
        </div>
      </div>

      {/* Address Continued Line (as present in the original scanned sheet) */}
      <div className="mt-3 border-b-[1.5px] border-dotted border-black min-h-[1.5rem]" />

      {/* Bottom Section: Items 7-9 */}
      <div className="mt-4 space-y-4 text-sm sm:text-base font-medium">
        {/* 7. Mobile Number */}
        <div className="flex items-baseline">
          <span className="font-bold flex-shrink-0">7. Mobile Number:</span>
          <span className="ml-2 flex-1 border-b-[1.5px] border-dotted border-black px-1 font-semibold tracking-wider min-h-[1.5rem] leading-tight">
            {data.mobileNumber || ''}
          </span>
        </div>

        {/* 8. Blood Group */}
        <div className="flex items-baseline">
          <span className="font-bold flex-shrink-0">8. Blood Group:</span>
          <span className="ml-2 flex-1 border-b-[1.5px] border-dotted border-black px-1 font-semibold min-h-[1.5rem] leading-tight">
            {data.bloodGroup || ''}
          </span>
        </div>

        {/* 9. Emergency Contact */}
        <div className="flex items-baseline">
          <span className="font-bold flex-shrink-0">9. Emergency Contact:</span>
          <span className="ml-2 flex-1 border-b-[1.5px] border-dotted border-black px-1 font-semibold tracking-wider min-h-[1.5rem] leading-tight">
            {data.emergencyContact || ''}
          </span>
        </div>
      </div>

      {/* Official Stamp & Issuer Slot Footer */}
      <div className="mt-14 pt-8 flex justify-between items-end text-xs font-semibold text-slate-700">
        <div className="text-center border-t border-black pt-1 w-32">
          Verified By
        </div>
        <div className="text-center border-t border-black pt-1 w-40">
          Librarian / Principal
        </div>
      </div>
    </div>
  );
}
