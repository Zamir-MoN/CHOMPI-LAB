import React from 'react';

export const Marquee = ({
  items = [
    'STICKERS',
    '3M AIR-RELEASE VINYL',
    'PRECISION SKINS',
    'ZERO RESIDUE',
    'CHOMPI LAB',
    'BUBBLE FREE',
    'WATERPROOF & UV PROOF',
    'DESIGNED IN INDIA',
    'GOOD VIBES ONLY',
  ],
  reverse = false,
  speed = 22,
  bgColor = 'var(--foreground)',
  textColor = 'var(--white)',
}) => {
  // Parse numeric duration safely (handles both numbers 22 and strings "22s" or "30s")
  const durationSec = typeof speed === 'string' ? parseFloat(speed) || 22 : Number(speed) || 22;
  const animationName = reverse ? 'chompi-marquee-reverse' : 'chompi-marquee-forward';

  return (
    <div
      style={{
        width: '100%',
        overflow: 'hidden',
        backgroundColor: bgColor,
        padding: '18px 0',
        whiteSpace: 'nowrap',
        userSelect: 'none',
        position: 'relative',
        zIndex: 20,
      }}
    >
      <div
        className="marquee-track"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          width: 'max-content',
          willChange: 'transform',
          animation: `${animationName} ${durationSec}s linear infinite`,
        }}
      >
        {/* Render 4 repeated blocks for flawless infinite looping on ultra-wide & standard screens */}
        {[1, 2, 3, 4].map((blockNum) => (
          <div
            key={blockNum}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '36px',
              paddingRight: '36px',
            }}
          >
            {items.map((text, idx) => (
              <div
                key={`b${blockNum}-${idx}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '36px',
                  fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
                  fontSize: '18px',
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                  color: textColor,
                  textTransform: 'uppercase',
                }}
              >
                <span>{text}</span>
                <span style={{ color: bgColor === 'var(--yellow)' ? '#111111' : 'var(--yellow)', fontSize: '14px' }}>
                  ✦
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes chompi-marquee-forward {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @keyframes chompi-marquee-reverse {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>
    </div>
  );
};
