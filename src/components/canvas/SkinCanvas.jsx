import React, { useState } from 'react';
import { AnimatedButton } from './AnimatedButton';
import { FloatingSticker } from './FloatingSticker';
import { sound } from '../../utils/audio';

export const SkinCanvas = ({ onExplore }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="skin-canvas-wrapper"
      style={{
        position: 'relative',
        width: '100%',
      }}
      onMouseEnter={() => {
        setIsHovered(true);
        sound.pop(520);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Floating Outside Accents */}
      <FloatingSticker
        type="star"
        size={50}
        color="#4DA2FF"
        top="-20px"
        right="50px"
        rotate={-12}
      />
      <FloatingSticker
        type="bolt"
        size={44}
        color="#FFD84D"
        bottom="-18px"
        right="65px"
        rotate={14}
      />

      {/* Main Pastel-Blue Canvas Card */}
      <div
        className="skin-canvas-card"
        style={{
          backgroundColor: '#DCEEFF',
          borderRadius: '36px',
          padding: 'clamp(32px, 5vw, 52px)',
          minHeight: '520px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'visible',
          border: '1px solid rgba(77, 162, 255, 0.35)',
          boxShadow: isHovered
            ? '0 28px 65px rgba(20, 80, 160, 0.14), 0 4px 14px rgba(20, 80, 160, 0.04)'
            : '0 20px 50px rgba(20, 80, 160, 0.08), 0 2px 8px rgba(20, 80, 160, 0.02)',
          transform: isHovered ? 'scale(1.012) translateY(-4px)' : 'scale(1) translateY(0)',
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease',
        }}
      >
        {/* Top Content Row: Headings */}
        <div className="canvas-header-block" style={{ position: 'relative', zIndex: 10, maxWidth: '340px' }}>
          {/* Heading */}
          <h3
            className="canvas-card-title"
            style={{
              fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
              fontSize: 'clamp(40px, 5vw, 56px)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 0.95,
              color: '#111111',
              textTransform: 'uppercase',
              marginBottom: '10px',
            }}
          >
            SKINS.
          </h3>

          {/* Short Supporting Text */}
          <p
            className="canvas-card-sub"
            style={{
              fontSize: '17.5px',
              fontWeight: 700,
              color: '#0D3E74',
              lineHeight: 1.35,
            }}
          >
            Turn your device into yours.
          </p>
        </div>

        {/* Visual Realistic Products Overlapping Each Other */}
        <div
          className="canvas-visual-box skin-visual-box"
          style={{
            position: 'relative',
            margin: '28px 0 20px',
            height: '250px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Main Product: Laptop with CHOMPI LAB skin (Angle) */}
          <div
            className="skin-laptop-mockup"
            style={{
              position: 'absolute',
              left: '8%',
              width: '68%',
              maxWidth: '310px',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: isHovered
                ? '0 30px 65px rgba(10, 40, 90, 0.25)'
                : '0 20px 48px rgba(10, 40, 90, 0.16)',
              transform: isHovered
                ? 'rotate(-7deg) translate(-6px, -12px) scale(1.04)'
                : 'rotate(-4deg) translate(0px, 0px) scale(1)',
              transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
              zIndex: 2,
            }}
          >
            <img
              src="/images/hero_laptop.jpg"
              alt="CHOMPI LAB MacBook Designer Skin"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

          {/* Secondary Overlapping Product: Smartphone leaning on the right */}
          <div
            className="skin-phone-mockup"
            style={{
              position: 'absolute',
              right: '8%',
              width: '35%',
              maxWidth: '155px',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: isHovered
                ? '0 26px 55px rgba(0, 0, 0, 0.28)'
                : '0 18px 40px rgba(0, 0, 0, 0.18)',
              transform: isHovered
                ? 'rotate(8deg) translate(8px, -16px) scale(1.05)'
                : 'rotate(5deg) translate(0px, -6px) scale(1)',
              transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
              zIndex: 4,
            }}
          >
            <img
              src="/images/phone_skins.jpg"
              alt="CHOMPI LAB iPhone Skin"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>

        {/* Lower Left Action CTA */}
        <div className="canvas-btn-container" style={{ position: 'relative', zIndex: 10, alignSelf: 'flex-start' }}>
          <AnimatedButton
            text="EXPLORE SKINS"
            onClick={onExplore}
            variant="primary"
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skin-canvas-card {
            padding: 14px 10px !important;
            border-radius: 20px !important;
            min-height: 290px !important;
          }
          .canvas-card-title {
            font-size: clamp(20px, 5.5vw, 28px) !important;
            margin-bottom: 3px !important;
          }
          .canvas-card-sub {
            font-size: clamp(10px, 2.7vw, 12px) !important;
            line-height: 1.25 !important;
          }
          .canvas-visual-box.skin-visual-box {
            height: 110px !important;
            margin: 10px 0 12px !important;
          }
          .skin-laptop-mockup {
            border-radius: 12px !important;
          }
          .skin-phone-mockup {
            border-radius: 12px !important;
          }
          .canvas-btn-container {
            width: 100% !important;
            align-self: stretch !important;
          }
          .skin-canvas-wrapper .floating-sticker-item {
            transform: scale(0.6) !important;
            transform-origin: center center !important;
          }
        }
        @media (max-width: 400px) {
          .skin-canvas-card {
            padding: 10px 8px !important;
            border-radius: 16px !important;
            min-height: 270px !important;
          }
          .canvas-card-title {
            font-size: 19px !important;
          }
          .canvas-card-sub {
            font-size: 9.5px !important;
          }
          .canvas-visual-box.skin-visual-box {
            height: 95px !important;
          }
        }
      `}</style>
    </div>
  );
};
