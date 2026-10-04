import React from 'react';

// Sticker 1: Rocket Thruster (Top Left peeking into top row)
const RocketSticker = () => (
  <svg
    width="90"
    height="100"
    viewBox="0 0 90 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.45))',
      transform: 'rotate(-10deg)',
    }}
  >
    {/* Outer Die-cut White border */}
    <path
      d="M45 4C45 4 64 26 66 52L78 68C81 72 78 78 72 78H18C12 78 9 72 12 68L24 52C26 26 45 4 45 4Z"
      fill="#FFFFFF"
      stroke="#000000"
      strokeWidth="5"
      strokeLinejoin="round"
    />
    {/* Rocket Cone (Orange) */}
    <path
      d="M45 10C45 10 60 28 62 48H28C30 28 45 10 45 10Z"
      fill="#FF4D17"
      stroke="#000000"
      strokeWidth="4"
    />
    {/* Rocket Wings (Orange) */}
    <path
      d="M24 52L14 68C12 71 14 74 18 74H28V52H24Z"
      fill="#FF4D17"
      stroke="#000000"
      strokeWidth="4"
    />
    <path
      d="M66 52L76 68C78 71 76 74 72 74H62V52H66Z"
      fill="#FF4D17"
      stroke="#000000"
      strokeWidth="4"
    />
    {/* Body White */}
    <path
      d="M28 48H62V74H28V48Z"
      fill="#FFFFFF"
      stroke="#000000"
      strokeWidth="4"
    />
    {/* Thruster Flame (Lilac / Purple) */}
    <path
      d="M36 74C36 74 34 88 40 94C42 96 48 96 50 94C56 88 54 74 54 74H36Z"
      fill="#D8B4FE"
      stroke="#000000"
      strokeWidth="4"
    />
    {/* Window */}
    <circle cx="45" cy="58" r="7" fill="#2563EB" stroke="#000000" strokeWidth="3" />
    <circle cx="43" cy="56" r="2" fill="#FFFFFF" />
  </svg>
);

// Sticker 2: Chompi Coin (Bottom Left)
const CoinSticker = () => (
  <svg
    width="92"
    height="92"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.5))',
      transform: 'rotate(-6deg)',
    }}
  >
    {/* Outer white outline */}
    <circle cx="50" cy="50" r="46" fill="#FFFFFF" stroke="#000000" strokeWidth="5" />
    {/* Mint inner ring */}
    <circle cx="50" cy="50" r="39" fill="#34D399" stroke="#000000" strokeWidth="4" />
    <circle cx="50" cy="50" r="32" fill="#10B981" stroke="#000000" strokeWidth="3" />
    {/* Sparkle highlight */}
    <path
      d="M72 26L74 32L80 34L74 36L72 42L70 36L64 34L70 32L72 26Z"
      fill="#FFFFFF"
    />
    {/* Chompi 'C' / Wave in black */}
    <path
      d="M62 40C58 35 48 35 42 40C36 46 36 54 42 60C48 65 58 65 62 60"
      stroke="#000000"
      strokeWidth="8"
      strokeLinecap="round"
    />
  </svg>
);

// Sticker 3: Happy Face Sticker (Middle Right between rows)
const HappySmileySticker = () => (
  <svg
    width="86"
    height="86"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      filter: 'drop-shadow(0 10px 22px rgba(0,0,0,0.45))',
      transform: 'rotate(12deg)',
    }}
  >
    {/* Die-cut white border */}
    <circle cx="50" cy="50" r="46" fill="#FFFFFF" stroke="#000000" strokeWidth="5" />
    {/* Yellow body */}
    <circle cx="50" cy="50" r="39" fill="#FACC15" stroke="#000000" strokeWidth="4" />
    {/* Eyes looking up-right */}
    <ellipse cx="40" cy="38" rx="6" ry="9" fill="#000000" />
    <ellipse cx="38" cy="36" rx="2.5" ry="3.5" fill="#FFFFFF" />
    <ellipse cx="60" cy="38" rx="6" ry="9" fill="#000000" />
    <ellipse cx="58" cy="36" rx="2.5" ry="3.5" fill="#FFFFFF" />
    {/* Open happy smile */}
    <path
      d="M34 54C34 54 40 68 50 68C60 68 66 54 66 54"
      stroke="#000000"
      strokeWidth="5"
      strokeLinecap="round"
    />
    {/* Rosy cheeks */}
    <ellipse cx="28" cy="50" rx="4" ry="2.5" fill="#FB7185" />
    <ellipse cx="72" cy="50" rx="4" ry="2.5" fill="#FB7185" />
  </svg>
);

// Sticker 4: Purple Wallet / Pouch (Bottom Right)
const WalletSticker = () => (
  <svg
    width="95"
    height="85"
    viewBox="0 0 100 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.5))',
      transform: 'rotate(14deg)',
    }}
  >
    {/* White outline */}
    <rect x="6" y="16" width="88" height="68" rx="18" fill="#FFFFFF" stroke="#000000" strokeWidth="5" />
    {/* Cards peeking out */}
    <rect x="22" y="8" width="40" height="24" rx="5" fill="#6EE7B7" stroke="#000000" strokeWidth="3" />
    <rect x="34" y="4" width="40" height="24" rx="5" fill="#FFFFFF" stroke="#000000" strokeWidth="3" />
    {/* Purple Wallet Body */}
    <rect x="10" y="20" width="80" height="60" rx="14" fill="#6366F1" stroke="#000000" strokeWidth="4" />
    {/* Wallet fold line */}
    <path d="M10 40H90" stroke="#4F46E5" strokeWidth="3" />
    {/* Clasp */}
    <rect x="70" y="44" width="20" height="14" rx="4" fill="#818CF8" stroke="#000000" strokeWidth="3" />
    <circle cx="82" cy="51" r="2.5" fill="#FFFFFF" />
  </svg>
);

const TOP_ROW_ITEMS = [
  { text: 'GET CHOMPI', bg: '#FFFFFF' },
  { text: 'GET CHOMPI', bg: '#FF4D17' },
  { text: 'GET CHOMPI', bg: '#2563EB' },
  { text: 'GET CHOMPI', bg: '#FEF3C7' },
  { text: 'GET CHOMPI', bg: '#34D399' },
  { text: 'GET CHOMPI', bg: '#F43F5E' },
  { text: 'GET CHOMPI', bg: '#FACC15' },
  { text: 'GET CHOMPI', bg: '#A855F7' },
];

const MIDDLE_ROW_ITEMS = [
  { text: 'GET CHOMPI', bg: '#2563EB' },
  { text: 'GET CHOMPI', bg: '#FEF3C7' },
  { text: 'GET CHOMPI', bg: '#34D399' },
  { text: 'GET CHOMPI', bg: '#FF4D17' },
  { text: 'GET CHOMPI', bg: '#FFFFFF' },
  { text: 'GET CHOMPI', bg: '#A855F7' },
  { text: 'GET CHOMPI', bg: '#F43F5E' },
  { text: 'GET CHOMPI', bg: '#FACC15' },
];

const BOTTOM_ROW_ITEMS = [
  { text: 'GET CHOMPI', bg: '#FACC15' },
  { text: 'GET CHOMPI', bg: '#A855F7' },
  { text: 'GET CHOMPI', bg: '#FF4D17' },
  { text: 'GET CHOMPI', bg: '#FFFFFF' },
  { text: 'GET CHOMPI', bg: '#2563EB' },
  { text: 'GET CHOMPI', bg: '#34D399' },
  { text: 'GET CHOMPI', bg: '#FEF3C7' },
  { text: 'GET CHOMPI', bg: '#F43F5E' },
];

export const BadgeMarquee = () => {
  return (
    <section
      id="vibe-lab"
      style={{
        position: 'relative',
        backgroundColor: '#000000',
        padding: 'clamp(44px, 5vw, 72px) 0',
        overflow: 'hidden',
        userSelect: 'none',
        borderTop: '2px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '2px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <style>{`
        @keyframes badgeMarqueeRight {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0%, 0, 0);
          }
        }

        @keyframes badgeMarqueeLeft {
          0% {
            transform: translate3d(0%, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .badge-marquee-track-right {
          display: flex;
          width: max-content;
          animation: badgeMarqueeRight 55s linear infinite;
          will-change: transform;
        }

        .badge-marquee-track-left {
          display: flex;
          width: max-content;
          animation: badgeMarqueeLeft 55s linear infinite;
          will-change: transform;
        }

        .badge-marquee-track-right:hover,
        .badge-marquee-track-left:hover {
          animation-play-state: paused;
        }

        .chompi-badge-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: clamp(8px, 1.4vw, 18px) clamp(22px, 3.5vw, 56px);
          border-radius: clamp(14px, 1.8vw, 22px);
          border: 3.5px solid #000000;
          box-shadow: 0 4px 0 #000000;
          margin-right: clamp(14px, 2vw, 26px);
          font-family: 'Anton', 'Bebas Neue', Impact, sans-serif;
          font-size: clamp(36px, 5.5vw, 92px);
          line-height: 0.92;
          letter-spacing: 0.01em;
          color: #000000;
          text-transform: uppercase;
          white-space: nowrap;
          cursor: pointer;
          transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease;
        }

        .chompi-badge-pill:hover {
          transform: translateY(-4px) scale(1.03);
          box-shadow: 0 8px 0 #000000;
        }

        /* Desktop sticker decorations */
        .marquee-sticker-wrapper {
          display: block;
          position: absolute;
          z-index: 20;
          pointer-events: none;
        }

        /* Responsive sticker adjustments for tablets and mobile */
        @media (max-width: 1024px) {
          .marquee-sticker-wrapper {
            transform: scale(0.75);
          }
        }

        @media (max-width: 768px) {
          .marquee-sticker-wrapper {
            transform: scale(0.55);
            transform-origin: center center;
          }
          .marquee-sticker-rocket {
            top: -18px !important;
            left: 2% !important;
          }
          .marquee-sticker-coin {
            bottom: -15px !important;
            left: 8% !important;
          }
          .marquee-sticker-smiley {
            top: 28% !important;
            right: 2% !important;
          }
          .marquee-sticker-wallet {
            bottom: -18px !important;
            right: 14% !important;
          }
          .chompi-badge-pill {
            border-width: 2.5px;
            box-shadow: 0 3px 0 #000000;
            padding: 8px 22px;
            font-size: 34px;
            margin-right: 12px;
            border-radius: 12px;
          }
        }
      `}</style>

      {/* Floating Decorative Die-Cut Stickers */}
      <div
        className="marquee-sticker-wrapper marquee-sticker-rocket"
        style={{
          top: '-15px',
          left: '7%',
        }}
      >
        <RocketSticker />
      </div>

      <div
        className="marquee-sticker-wrapper marquee-sticker-coin"
        style={{
          bottom: '-12px',
          left: '12%',
        }}
      >
        <CoinSticker />
      </div>

      <div
        className="marquee-sticker-wrapper marquee-sticker-smiley"
        style={{
          top: '32%',
          right: '8%',
        }}
      >
        <HappySmileySticker />
      </div>

      <div
        className="marquee-sticker-wrapper marquee-sticker-wallet"
        style={{
          bottom: '-16px',
          right: '20%',
        }}
      >
        <WalletSticker />
      </div>

      {/* Line 1 (Top): Goes RIGHT */}
      <div style={{ marginBottom: 'clamp(12px, 1.6vw, 22px)', overflow: 'hidden' }}>
        <div className="badge-marquee-track-right">
          {[...TOP_ROW_ITEMS, ...TOP_ROW_ITEMS].map((badge, idx) => (
            <div
              key={`top-${idx}`}
              className="chompi-badge-pill"
              style={{ backgroundColor: badge.bg }}
            >
              {badge.text}
            </div>
          ))}
        </div>
      </div>

      {/* Line 2 (Middle): Goes LEFT */}
      <div style={{ marginBottom: 'clamp(12px, 1.6vw, 22px)', overflow: 'hidden' }}>
        <div className="badge-marquee-track-left">
          {[...MIDDLE_ROW_ITEMS, ...MIDDLE_ROW_ITEMS].map((badge, idx) => (
            <div
              key={`mid-${idx}`}
              className="chompi-badge-pill"
              style={{ backgroundColor: badge.bg }}
            >
              {badge.text}
            </div>
          ))}
        </div>
      </div>

      {/* Line 3 (Bottom): Goes RIGHT */}
      <div style={{ overflow: 'hidden' }}>
        <div className="badge-marquee-track-right">
          {[...BOTTOM_ROW_ITEMS, ...BOTTOM_ROW_ITEMS].map((badge, idx) => (
            <div
              key={`bot-${idx}`}
              className="chompi-badge-pill"
              style={{ backgroundColor: badge.bg }}
            >
              {badge.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
