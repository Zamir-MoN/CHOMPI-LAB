import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';

export const FinalCTA = ({ onExploreStickers, onExploreSkins }) => {
  return (
    <section
      id="cta"
      style={{
        padding: '100px 0 80px',
        backgroundColor: 'var(--background)',
      }}
    >
      <div className="container">
        {/* Large Rounded Container Stage */}
        <div
          style={{
            position: 'relative',
            backgroundColor: '#0F1015',
            backgroundImage: "url('/images/kawaii_banner_bg.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            borderRadius: 'var(--radius-xl, 32px)',
            padding: 'clamp(56px, 8vw, 100px) clamp(24px, 5vw, 60px)',
            textAlign: 'center',
            color: '#FFFFFF',
            overflow: 'hidden',
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.35)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >

          {/* Center Content */}
          <div style={{ position: 'relative', zIndex: 10, maxWidth: '780px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: 'clamp(36px, 6.5vw, 76px)',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                lineHeight: 1,
                color: '#FFFFFF',
                marginBottom: '24px',
              }}
            >
              READY TO CHOMPI YOUR DEVICE?
            </h2>

            <p
              style={{
                fontSize: 'clamp(16px, 2.2vw, 20px)',
                color: '#AAAAAA',
                maxWidth: '560px',
                margin: '0 auto 40px',
                lineHeight: 1.5,
              }}
            >
              Transform your laptop, phone, or console today. Fast doorstep delivery across India with 100% money-back fit guarantee.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
              }}
            >
              <button
                onClick={() => {
                  sound.pop(540);
                  onExploreStickers?.();
                }}
                className="btn-pill"
                style={{
                  backgroundColor: 'var(--orange)',
                  color: '#FFFFFF',
                  padding: '18px 36px',
                  fontSize: '16px',
                }}
              >
                <span>SHOP STICKERS</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => {
                  sound.pop(580);
                  onExploreSkins?.();
                }}
                className="btn-pill"
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#111111',
                  padding: '18px 36px',
                  fontSize: '16px',
                }}
              >
                <span>SHOP SKINS</span>
                <Sparkles size={18} color="var(--orange)" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
