import React from 'react';
import { ArrowRight, Sparkles, Layers } from 'lucide-react';
import { sound } from '../utils/audio';
import { ChompiMonster, StarSticker } from './ChompiStickers';

export const CategoryCards = ({ onSelectCategory }) => {
  return (
    <section
      id="categories"
      style={{
        padding: '100px 0 60px',
        backgroundColor: 'var(--background)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2
            style={{
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
            }}
          >
            PICK YOUR CANVAS.
          </h2>
          <p style={{ maxWidth: '520px', margin: '14px auto 0', fontSize: '17px' }}>
            Whether you want micro-doses of personality or full device coverage, we’ve got your gear protected in style.
          </p>
        </div>

        {/* 2-Column Split Cards Grid */}
        <div className="category-cards-grid">
          {/* Card 1: STICKERS */}
          <div
            className="category-card"
            onClick={() => {
              sound.pop(540);
              onSelectCategory('stickers');
            }}
            style={{
              backgroundColor: '#FFF2B2',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(28px, 4vw, 48px)',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              border: '1px solid rgba(255, 216, 77, 0.4)',
              transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '480px',
            }}
          >
            {/* Top Info */}
            <div style={{ position: 'relative', zIndex: 10 }}>
              <div
                style={{
                  display: 'inline-block',
                  backgroundColor: '#111111',
                  color: 'var(--yellow)',
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.06em',
                  marginBottom: '20px',
                }}
              >
                100+ ORIGINAL DESIGNS
              </div>
              <h3
                style={{
                  fontSize: 'clamp(36px, 4.5vw, 52px)',
                  fontWeight: 900,
                  letterSpacing: '-0.04em',
                  color: '#111111',
                  lineHeight: 1,
                  marginBottom: '12px',
                }}
              >
                STICKERS.
              </h3>
              <p
                style={{
                  fontSize: '19px',
                  fontWeight: 700,
                  color: '#524300',
                  lineHeight: 1.3,
                  maxWidth: '320px',
                }}
              >
                Tiny things. Big personality.
              </p>
            </div>

            {/* Visual Center Image with Floating Deco */}
            <div
              style={{
                position: 'relative',
                margin: '28px 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                className="category-image-wrap"
                style={{
                  width: '100%',
                  maxWidth: '340px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 45px rgba(110, 85, 0, 0.2)',
                  transition: 'transform 0.4s ease',
                }}
              >
                <img
                  src="/images/sticker_pack.jpg"
                  alt="Chompi Stickers"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>

              {/* Decorative Floating Mascot */}
              <div
                className="deco-sticker"
                style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '10px',
                  transform: 'rotate(12deg)',
                  transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                }}
              >
                <ChompiMonster size={75} color="var(--orange)" />
              </div>
            </div>

            {/* Bottom CTA Pill */}
            <div style={{ position: 'relative', zIndex: 10 }}>
              <div
                className="category-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  backgroundColor: '#111111',
                  color: '#FFFFFF',
                  padding: '14px 28px',
                  borderRadius: 'var(--radius-pill)',
                  fontWeight: 800,
                  fontSize: '15px',
                  letterSpacing: '0.02em',
                  transition: 'all 0.3s ease',
                }}
              >
                <span>EXPLORE STICKERS</span>
                <ArrowRight size={18} className="cta-arrow" />
              </div>
            </div>
          </div>

          {/* Card 2: SKINS */}
          <div
            className="category-card"
            onClick={() => {
              sound.pop(580);
              onSelectCategory('skins');
            }}
            style={{
              backgroundColor: '#DCEEFF',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(28px, 4vw, 48px)',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              border: '1px solid rgba(77, 162, 255, 0.4)',
              transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '480px',
            }}
          >
            {/* Top Info */}
            <div style={{ position: 'relative', zIndex: 10 }}>
              <div
                style={{
                  display: 'inline-block',
                  backgroundColor: '#111111',
                  color: 'var(--blue)',
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.06em',
                  marginBottom: '20px',
                }}
              >
                MACBOOK ✦ IPHONE ✦ CONSOLES
              </div>
              <h3
                style={{
                  fontSize: 'clamp(36px, 4.5vw, 52px)',
                  fontWeight: 900,
                  letterSpacing: '-0.04em',
                  color: '#111111',
                  lineHeight: 1,
                  marginBottom: '12px',
                }}
              >
                SKINS.
              </h3>
              <p
                style={{
                  fontSize: '19px',
                  fontWeight: 700,
                  color: '#0D3F75',
                  lineHeight: 1.3,
                  maxWidth: '320px',
                }}
              >
                Turn your device into yours.
              </p>
            </div>

            {/* Visual Center Image with Floating Deco */}
            <div
              style={{
                position: 'relative',
                margin: '28px 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                className="category-image-wrap"
                style={{
                  width: '100%',
                  maxWidth: '340px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 45px rgba(20, 80, 150, 0.2)',
                  transition: 'transform 0.4s ease',
                }}
              >
                <img
                  src="/images/hero_laptop.jpg"
                  alt="Chompi Precision Skins"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>

              {/* Decorative Star */}
              <div
                className="deco-sticker"
                style={{
                  position: 'absolute',
                  bottom: '-10px',
                  left: '15px',
                  transform: 'rotate(-8deg)',
                  transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                }}
              >
                <StarSticker size={70} color="var(--yellow)" />
              </div>
            </div>

            {/* Bottom CTA Pill */}
            <div style={{ position: 'relative', zIndex: 10 }}>
              <div
                className="category-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  backgroundColor: '#111111',
                  color: '#FFFFFF',
                  padding: '14px 28px',
                  borderRadius: 'var(--radius-pill)',
                  fontWeight: 800,
                  fontSize: '15px',
                  letterSpacing: '0.02em',
                  transition: 'all 0.3s ease',
                }}
              >
                <span>EXPLORE SKINS</span>
                <ArrowRight size={18} className="cta-arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hover Micro-interaction CSS */}
      <style>{`
        .category-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);
        }
        .category-card:hover .category-image-wrap {
          transform: scale(1.04) rotate(-1deg);
        }
        .category-card:hover .deco-sticker {
          transform: rotate(24deg) scale(1.15) !important;
        }
        .category-card:hover .category-btn {
          background-color: var(--orange) !important;
        }
        .category-card:hover .cta-arrow {
          transform: translateX(4px);
        }

        .category-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        @media (min-width: 480px) and (max-width: 768px) {
          .category-cards-grid {
            gap: 14px;
          }
        }

        @media (min-width: 769px) {
          .category-cards-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
          }
        }

        @media (max-width: 768px) {
          .category-card {
            padding: 14px 10px !important;
            border-radius: 18px !important;
            min-height: 290px !important;
          }
          .category-card h3 {
            font-size: clamp(20px, 5.5vw, 28px) !important;
            margin-bottom: 4px !important;
          }
          .category-card p {
            font-size: clamp(10px, 2.7vw, 12px) !important;
          }
          .category-btn {
            padding: 8px 10px !important;
            font-size: 11px !important;
            gap: 5px !important;
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
};
