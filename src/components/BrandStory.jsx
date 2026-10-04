import React from 'react';
import { Heart, Sparkles, Smile } from 'lucide-react';
import { ChompiMonster, StarSticker } from './ChompiStickers';
import { sound } from '../utils/audio';

export const BrandStory = () => {
  return (
    <section
      id="about"
      style={{
        padding: '110px 0',
        backgroundColor: 'var(--background)',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      <div className="container">
        <div
          style={{
            maxWidth: '1080px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '64px',
            alignItems: 'center',
          }}
        >
          {/* Left: Giant Typography & Story */}
          <div>
            <h2
              style={{
                fontSize: 'clamp(34px, 5.5vw, 62px)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                marginBottom: '28px',
              }}
            >
              WE THINK YOUR DEVICE SHOULD LOOK LIKE YOU.
            </h2>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '18px',
                fontSize: '18px',
                color: 'var(--foreground-muted)',
                lineHeight: 1.65,
              }}
            >
              <p>
                Every day, millions of people carry the exact same space-grey laptops and slab phones into coffee shops, design studios, and lecture halls.
              </p>
              <p>
                CHOMPI LAB was born in a cramped studio apartment in Indiranagar, Bengaluru, out of pure stubbornness. We wanted our everyday devices to spark tactile joy every single time we flipped open the lid.
              </p>
              <p>
                We print on legitimate 3M cast vinyl with micro-air channels so anyone can apply them bubble-free in under 3 minutes. Zero residue. Zero boring gear. Just pure, unapologetic self-expression.
              </p>
            </div>

            {/* Quick stats pills */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
                marginTop: '36px',
              }}
            >
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '16px 24px',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-subtle)',
                  boxShadow: 'var(--shadow-subtle)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '32px',
                    fontWeight: 900,
                    color: 'var(--orange)',
                  }}
                >
                  45,000+
                </div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--foreground)' }}>
                  Devices Chompi’d
                </div>
              </div>

              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '16px 24px',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-subtle)',
                  boxShadow: 'var(--shadow-subtle)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '32px',
                    fontWeight: 900,
                    color: 'var(--blue)',
                  }}
                >
                  0.05 mm
                </div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--foreground)' }}>
                  Laser Cut Tolerance
                </div>
              </div>

              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '16px 24px',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-subtle)',
                  boxShadow: 'var(--shadow-subtle)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '32px',
                    fontWeight: 900,
                    color: 'var(--green)',
                  }}
                >
                  0%
                </div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--foreground)' }}>
                  Sticky Residue Ever
                </div>
              </div>
            </div>
          </div>

          {/* Right: Large Playful Mascot Stage */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: 'clamp(280px, 32vw, 420px)',
                aspectRatio: '1 / 1',
                borderRadius: 'var(--radius-xl)',
                backgroundColor: 'var(--yellow-soft)',
                border: '2px solid rgba(255, 216, 77, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                boxShadow: '0 24px 60px rgba(110, 85, 0, 0.1)',
                cursor: 'pointer',
              }}
              onClick={() => sound.pop(640)}
              className="animate-bob"
            >
              {/* Official Chompi Lab Logo Badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '18px',
                  backgroundColor: '#FFFFFF',
                  padding: '6px 18px',
                  borderRadius: 'var(--radius-pill)',
                  boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  zIndex: 5,
                }}
              >
                <img
                  src="/images/chompi_logo.webp"
                  alt="CHOMPI LAB"
                  style={{ height: '40px', width: 'auto' }}
                />
              </div>

              {/* Giant Chompi Mascot */}
              <ChompiMonster size={210} color="var(--orange)" />

              {/* Floating Star */}
              <div
                style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-10px',
                  transform: 'rotate(20deg)',
                }}
                className="interactive-sticker"
              >
                <StarSticker size={85} color="var(--yellow)" />
              </div>

              {/* Made in India badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '18px',
                  padding: '8px 18px',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: '#111111',
                  color: '#FFFFFF',
                  fontSize: '12px',
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                }}
              >
                MADE WITH 🧡 IN BENGALURU &amp; MUMBAI
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
