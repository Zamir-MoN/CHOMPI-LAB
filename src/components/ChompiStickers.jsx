import React from 'react';

// Reusable tactile die-cut vector stickers with customizable colors, sizes, and peel effects
export const ChompiMonster = ({ size = 80, color = '#FF7548', className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`sticker-svg ${className}`}
    style={{ filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.14))' }}
    {...props}
  >
    {/* White Die-cut Border */}
    <path
      d="M32 15C31 8 38 6 42 12C45 10 55 10 58 12C62 6 69 8 68 15C82 17 88 32 86 48C84 62 82 82 66 86C60 88 56 84 50 84C44 84 40 88 34 86C18 82 16 62 14 48C12 32 18 17 32 15Z"
      fill="#FFFFFF"
    />
    {/* Monster Body */}
    <path
      d="M34 19C33 13 39 12 42 16C45 14 55 14 58 16C61 12 67 13 66 19C78 21 83 34 81 48C79 60 77 78 64 81C59 83 55 80 50 80C45 80 41 83 36 81C23 78 21 60 19 48C17 34 22 21 34 19Z"
      fill={color}
    />
    {/* Eyes */}
    <circle cx="38" cy="38" r="7" fill="#FFFFFF" />
    <circle cx="38" cy="38" r="4" fill="#111111" />
    <circle cx="40" cy="36" r="1.5" fill="#FFFFFF" />

    <circle cx="50" cy="30" r="8" fill="#FFFFFF" />
    <circle cx="50" cy="30" r="4.5" fill="#111111" />
    <circle cx="52" cy="28" r="1.8" fill="#FFFFFF" />

    <circle cx="62" cy="38" r="7" fill="#FFFFFF" />
    <circle cx="62" cy="38" r="4" fill="#111111" />
    <circle cx="64" cy="36" r="1.5" fill="#FFFFFF" />

    {/* Smile */}
    <path
      d="M40 54C44 60 56 60 60 54"
      stroke="#111111"
      strokeWidth="4"
      strokeLinecap="round"
    />
    {/* Cheeks */}
    <ellipse cx="33" cy="52" rx="4" ry="2.5" fill="#FF9FCB" />
    <ellipse cx="67" cy="52" rx="4" ry="2.5" fill="#FF9FCB" />
  </svg>
);

export const StarSticker = ({ size = 70, color = '#FFD84D', className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`sticker-svg ${className}`}
    style={{ filter: 'drop-shadow(0 6px 14px rgba(0,0,0,0.12))' }}
    {...props}
  >
    {/* Die-Cut Outer White */}
    <path
      d="M50 5L61 35L92 38L68 60L75 91L50 74L25 91L32 60L8 38L39 35L50 5Z"
      fill="#FFFFFF"
      stroke="#FFFFFF"
      strokeWidth="8"
      strokeLinejoin="round"
    />
    {/* Inner Star */}
    <path
      d="M50 5L61 35L92 38L68 60L75 91L50 74L25 91L32 60L8 38L39 35L50 5Z"
      fill={color}
    />
    {/* Cute Face */}
    <circle cx="43" cy="48" r="3.5" fill="#111111" />
    <circle cx="57" cy="48" r="3.5" fill="#111111" />
    <path
      d="M46 56C48 59 52 59 54 56"
      stroke="#111111"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

export const BoltSticker = ({ size = 65, color = '#4DA2FF', className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`sticker-svg ${className}`}
    style={{ filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.15))' }}
    {...props}
  >
    {/* Die-Cut Outer White */}
    <path
      d="M58 8L20 54H48L38 92L82 42H52L58 8Z"
      fill="#FFFFFF"
      stroke="#FFFFFF"
      strokeWidth="8"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    <path
      d="M58 8L20 54H48L38 92L82 42H52L58 8Z"
      fill={color}
    />
    <path
      d="M48 24L32 50H50L44 76L68 44H46L48 24Z"
      fill="#FFFFFF"
      opacity="0.3"
    />
  </svg>
);

export const SmileySticker = ({ size = 75, color = '#72D9A4', className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`sticker-svg ${className}`}
    style={{ filter: 'drop-shadow(0 6px 14px rgba(0,0,0,0.12))' }}
    {...props}
  >
    {/* White Border */}
    <circle cx="50" cy="50" r="44" fill="#FFFFFF" />
    <circle cx="50" cy="50" r="38" fill={color} />
    {/* Eye 1 */}
    <ellipse cx="37" cy="42" rx="4.5" ry="7" fill="#111111" />
    {/* Eye 2 (Wink or Star) */}
    <path
      d="M58 40L63 43L68 40M63 43V48"
      stroke="#111111"
      strokeWidth="4"
      strokeLinecap="round"
    />
    {/* Big Tongue Smile */}
    <path
      d="M32 55C36 70 64 70 68 55"
      fill="#111111"
    />
    <path
      d="M44 63C46 68 54 68 56 63"
      fill="#FF7548"
    />
  </svg>
);

export const ChaiSticker = ({ size = 70, color = '#FFD84D', className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`sticker-svg ${className}`}
    style={{ filter: 'drop-shadow(0 6px 14px rgba(0,0,0,0.12))' }}
    {...props}
  >
    <rect x="22" y="24" width="56" height="64" rx="14" fill="#FFFFFF" />
    <rect x="26" y="28" width="48" height="56" rx="10" fill="#E8EDF2" />
    {/* Chai Liquid */}
    <path d="M26 44C34 42 42 46 50 44C58 42 66 46 74 44V74C74 80 68 84 62 84H38C32 84 26 80 26 74V44Z" fill="#C87A38" />
    {/* Steam */}
    <path d="M40 18C38 14 42 10 40 6" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
    <path d="M50 20C48 15 53 11 50 7" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
    <path d="M60 19C58 14 62 10 60 6" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
    {/* Label */}
    <rect x="36" y="54" width="28" height="14" rx="4" fill="#FFFFFF" />
    <text x="50" y="64" fill="#111111" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">CHAI</text>
  </svg>
);

export const BadgeSticker = ({ size = 90, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`sticker-svg ${className}`}
    style={{ filter: 'drop-shadow(0 8px 18px rgba(0,0,0,0.16))' }}
    {...props}
  >
    <circle cx="50" cy="50" r="46" fill="#FFFFFF" />
    <circle cx="50" cy="50" r="40" fill="#111111" />
    <circle cx="50" cy="50" r="37" stroke="#FFD84D" strokeWidth="1.5" strokeDasharray="3 3" />
    <text x="50" y="44" fill="#FFFFFF" fontSize="10" fontWeight="900" textAnchor="middle" letterSpacing="1" fontFamily="sans-serif">GENUINE</text>
    <text x="50" y="58" fill="#FFD84D" fontSize="13" fontWeight="900" textAnchor="middle" letterSpacing="0.5" fontFamily="sans-serif">3M VINYL</text>
    <text x="50" y="70" fill="#72D9A4" fontSize="7.5" fontWeight="bold" textAnchor="middle" letterSpacing="0.5" fontFamily="sans-serif">ZERO RESIDUE</text>
  </svg>
);

export const FlowerSticker = ({ size = 70, color = '#FF75B5', className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`sticker-svg ${className}`}
    style={{ filter: 'drop-shadow(0 6px 14px rgba(0,0,0,0.12))' }}
    {...props}
  >
    {/* Die-Cut Outer White */}
    <g fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="8" strokeLinejoin="round">
      <circle cx="50" cy="22" r="16" />
      <circle cx="76" cy="42" r="16" />
      <circle cx="66" cy="74" r="16" />
      <circle cx="34" cy="74" r="16" />
      <circle cx="24" cy="42" r="16" />
      <circle cx="50" cy="50" r="20" />
    </g>
    {/* Petals */}
    <g fill={color}>
      <circle cx="50" cy="22" r="15" />
      <circle cx="76" cy="42" r="15" />
      <circle cx="66" cy="74" r="15" />
      <circle cx="34" cy="74" r="15" />
      <circle cx="24" cy="42" r="15" />
    </g>
    {/* Center */}
    <circle cx="50" cy="50" r="16" fill="#FFD84D" />
    {/* Cute Face */}
    <circle cx="44" cy="48" r="2.8" fill="#111111" />
    <circle cx="56" cy="48" r="2.8" fill="#111111" />
    <path
      d="M46 54C48 57 52 57 54 54"
      stroke="#111111"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </svg>
);

