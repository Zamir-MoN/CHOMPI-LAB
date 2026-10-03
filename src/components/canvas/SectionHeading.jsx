import React from 'react';

export const SectionHeading = ({ className = '' }) => {
  return (
    <div
      className={`section-heading-container ${className}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 'clamp(40px, 6vw, 68px)',
        position: 'relative',
      }}
    >
      {/* Main Oversized Headline */}
      <div style={{ position: 'relative', display: 'inline-block' }}>
        {/* Left hand-drawn decorative mark */}
        <div
          style={{
            position: 'absolute',
            top: '4px',
            left: '-36px',
            pointerEvents: 'none',
          }}
        >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path d="M4 20L8 4" stroke="#111111" strokeWidth="3" strokeLinecap="round" />
            <path d="M14 22L20 8" stroke="#111111" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>

        {/* Right hand-drawn decorative mark */}
        <div
          style={{
            position: 'absolute',
            bottom: '12px',
            right: '-38px',
            pointerEvents: 'none',
          }}
        >
          <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
            <path d="M4 6H22" stroke="#111111" strokeWidth="3" strokeLinecap="round" />
            <path d="M8 14H26" stroke="#111111" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>

        <h2
          className="canvas-headline"
          style={{
            fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
            fontSize: 'clamp(44px, 6.5vw, 84px)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            lineHeight: 0.95,
            textTransform: 'uppercase',
            color: '#111111',
          }}
        >
          PICK YOUR
          <br />
          <span
            style={{
              background: 'linear-gradient(90deg, #FF6644 0%, #FF4D79 50%, #9D4EDD 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            CANVAS.
          </span>
        </h2>
      </div>
    </div>
  );
};
