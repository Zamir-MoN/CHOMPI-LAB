import React, { useState } from 'react';
import { AnimatedButton } from './AnimatedButton';
import { FloatingSticker } from './FloatingSticker';
import { sound } from '../../utils/audio';

export const StickerCanvas = ({ onExplore }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="sticker-canvas-wrapper"
      style={{
        position: 'relative',
        width: '100%',
      }}
      onMouseEnter={() => {
        setIsHovered(true);
        sound.pop(480);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Floating Outside Stickers */}
      <FloatingSticker
        type="chompi"
        size={68}
        color="#FF7548"
        top="-24px"
        left="32px"
        rotate={-14}
      />
      <FloatingSticker
        type="star"
        size={54}
        color="#FFD84D"
        top="-16px"
        right="40px"
        rotate={18}
      />
      <FloatingSticker
        type="heart"
        size={46}
        color="#FF7548"
        bottom="18px"
        right="-16px"
        rotate={12}
      />
      <FloatingSticker
        type="flower"
        size={52}
        color="#FF9FCB"
        bottom="-20px"
        left="60px"
        rotate={-8}
      />

      {/* Main Yellow Irregular Rounded Canvas */}
      <div
        className="sticker-canvas-card"
        style={{
          backgroundColor: '#FFF0A8',
          borderRadius: '36px',
          padding: 'clamp(32px, 5vw, 52px)',
          minHeight: '520px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'visible',
          border: '1px solid rgba(240, 200, 70, 0.4)',
          boxShadow: isHovered
            ? '0 28px 65px rgba(110, 85, 0, 0.14), 0 4px 14px rgba(110, 85, 0, 0.04)'
            : '0 20px 50px rgba(110, 85, 0, 0.08), 0 2px 8px rgba(110, 85, 0, 0.02)',
          transform: isHovered ? 'scale(1.012) translateY(-4px)' : 'scale(1) translateY(0)',
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease',
        }}
      >
        {/* Top Content */}
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
            STICKERS.
          </h3>

          {/* Short Supporting Text */}
          <p
            className="canvas-card-sub"
            style={{
              fontSize: '17.5px',
              fontWeight: 700,
              color: '#5C4A00',
              lineHeight: 1.35,
            }}
          >
            Tiny things. Big personality.
          </p>
        </div>

        {/* Visual Layered Sticker Sheets Breaking Out */}
        <div
          className="canvas-visual-box sticker-visual-box"
          style={{
            position: 'relative',
            margin: '32px 0 24px',
            height: '240px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Sheet 2: Layered Underneath (Rotated Left) */}
          <div
            className="sticker-sheet-under"
            style={{
              position: 'absolute',
              width: '74%',
              maxWidth: '300px',
              aspectRatio: '4 / 3',
              borderRadius: '20px',
              overflow: 'hidden',
              backgroundColor: '#FFFFFF',
              boxShadow: '0 16px 36px rgba(110, 85, 0, 0.12)',
              transform: isHovered
                ? 'rotate(-10deg) translate(-28px, 12px) scale(0.96)'
                : 'rotate(-6deg) translate(-20px, 10px) scale(0.94)',
              transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
              border: '4px solid #FFFFFF',
              zIndex: 1,
            }}
          >
            <img
              src="/images/sticker_pack.webp"
              alt="CHOMPI LAB Sticker Pack"
              loading="lazy"
              decoding="async"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Sheet 1: Main Top Layer (Rotated Right) */}
          <div
            className="sticker-sheet-top"
            style={{
              position: 'absolute',
              width: '82%',
              maxWidth: '330px',
              aspectRatio: '4 / 3',
              borderRadius: '22px',
              overflow: 'hidden',
              backgroundColor: '#FFFFFF',
              boxShadow: isHovered
                ? '0 28px 60px rgba(110, 85, 0, 0.22)'
                : '0 20px 45px rgba(110, 85, 0, 0.16)',
              transform: isHovered
                ? 'rotate(5deg) translate(16px, -12px) scale(1.03)'
                : 'rotate(2deg) translate(8px, -4px) scale(1)',
              transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
              border: '5px solid #FFFFFF',
              zIndex: 3,
            }}
          >
            <img
              src="/images/sticker_pack.webp"
              alt="CHOMPI LAB Sticker Sheet"
              loading="lazy"
              decoding="async"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Lower Left Action CTA */}
        <div className="canvas-btn-container" style={{ position: 'relative', zIndex: 10, alignSelf: 'flex-start' }}>
          <AnimatedButton
            text="EXPLORE STICKERS"
            onClick={onExplore}
            variant="primary"
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .sticker-canvas-card {
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
          .canvas-visual-box.sticker-visual-box {
            height: 110px !important;
            margin: 10px 0 12px !important;
          }
          .sticker-sheet-under {
            border-radius: 12px !important;
            border-width: 2px !important;
          }
          .sticker-sheet-top {
            border-radius: 12px !important;
            border-width: 3px !important;
          }
          .canvas-btn-container {
            width: 100% !important;
            align-self: stretch !important;
          }
          .sticker-canvas-wrapper .floating-sticker-item {
            transform: scale(0.6) !important;
            transform-origin: center center !important;
          }
        }
        @media (max-width: 400px) {
          .sticker-canvas-card {
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
          .canvas-visual-box.sticker-visual-box {
            height: 95px !important;
          }
        }
      `}</style>
    </div>
  );
};
