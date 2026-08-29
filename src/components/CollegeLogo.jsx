import React from 'react';

/**
 * High-resolution official emblem for Government College, Sector-9 Gurugram
 */
export default function CollegeLogo({ className = "w-16 h-16", showText = false }) {
  return (
    <div className="flex items-center gap-3">
      <svg
        className={className}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer concentric rings */}
        <circle cx="80" cy="80" r="76" stroke="#92400e" strokeWidth="2.5" strokeDasharray="3 3" />
        <circle cx="80" cy="80" r="72" stroke="#b45309" strokeWidth="3" fill="#fffbeb" />
        <circle cx="80" cy="80" r="54" stroke="#b45309" strokeWidth="1.5" fill="#fef3c7" />

        {/* Circular text path guide */}
        <path
          id="collegeTextCircle"
          d="M 28 80 A 52 52 0 1 1 132 80"
          fill="none"
        />

        {/* Hindi collegiate inscription */}
        <text fontSize="8.5" fontWeight="bold" fill="#78350f" letterSpacing="0.8">
          <textPath href="#collegeTextCircle" startOffset="50%" textAnchor="middle">
            राजकीय महाविद्यालय, सैक्टर-9, गुरुग्राम
          </textPath>
        </text>

        {/* Central Traditional Jyoti / Deepam Lamp with Knowledge Flame */}
        <g transform="translate(80, 78)">
          {/* Flame radiant rays */}
          <circle cx="0" cy="-16" r="14" fill="#fef08a" opacity="0.6" />
          <path
            d="M 0 -30 Q 8 -18 4 -10 Q 0 -4 -4 -10 Q -8 -18 0 -30 Z"
            fill="#ea580c"
          />
          <path
            d="M 0 -25 Q 4 -16 2 -10 Q 0 -6 -2 -10 Q -4 -16 0 -25 Z"
            fill="#facc15"
          />

          {/* Deepam Bowl */}
          <path
            d="M -18 -4 Q -16 10 0 11 Q 16 10 18 -4 Z"
            fill="#b45309"
            stroke="#78350f"
            strokeWidth="1.5"
          />
          {/* Base Stand */}
          <path
            d="M -12 11 L 12 11 L 16 18 L -16 18 Z"
            fill="#78350f"
          />
          {/* Open Book of Knowledge below lamp */}
          <path
            d="M -14 20 C -7 18 0 20 0 20 C 0 20 7 18 14 20 L 12 25 C 6 23 0 25 0 25 C 0 25 -6 23 -12 25 Z"
            fill="#f8fafc"
            stroke="#92400e"
            strokeWidth="1"
          />
        </g>

        {/* Bottom Banner Ribbon with Sanskrit Motto */}
        <path
          d="M 28 116 C 50 126 110 126 132 116 L 130 128 C 110 138 50 138 26 128 Z"
          fill="#9a3412"
        />
        <text
          x="80"
          y="126"
          fontSize="7.5"
          fontWeight="bold"
          fill="#ffffff"
          textAnchor="middle"
          fontFamily="serif"
        >
          ★ तमसो मा ज्योतिर्गमय ★
        </text>
      </svg>

      {showText && (
        <div className="text-left leading-tight">
          <div className="font-extrabold text-xs tracking-wider text-amber-900 uppercase">
            Govt. College, Sector-9
          </div>
          <div className="text-[11px] font-medium text-slate-600">Gurugram (Haryana)</div>
        </div>
      )}
    </div>
  );
}
