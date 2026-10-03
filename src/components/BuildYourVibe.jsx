import React, { useState } from 'react';
import { Sparkles, Palette, ArrowRight } from 'lucide-react';
import { VIBE_MODES } from '../data/chompiData';
import { sound } from '../utils/audio';
import { ChompiMonster, StarSticker, BoltSticker, SmileySticker } from './ChompiStickers';

export const BuildYourVibe = ({ onSelectVibeProducts }) => {
  const [activeVibeId, setActiveVibeId] = useState('LOUD');

  const currentVibe = VIBE_MODES.find((v) => v.id === activeVibeId) || VIBE_MODES[1];

  const handleSelectVibe = (id) => {
    sound.whoosh();
    setActiveVibeId(id);
  };

  return (
    <section
      id="vibe-lab"
      style={{
        padding: '110px 0',
        backgroundColor: currentVibe.bgColor,
        transition: 'background-color 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2
            style={{
              fontSize: 'clamp(34px, 5.5vw, 62px)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              color: currentVibe.textColor,
              transition: 'color 0.5s ease',
            }}
          >
            BUILD YOUR VIBE.
          </h2>
          <p
            style={{
              maxWidth: '560px',
              margin: '14px auto 0',
              fontSize: '18px',
              color: currentVibe.textColor,
              opacity: 0.85,
              transition: 'color 0.5s ease',
            }}
          >
            Select a frequency below to transmute your laptop and phone into pure art.
          </p>

          {/* Vibe Selector Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              marginTop: '32px',
            }}
          >
            {VIBE_MODES.map((vibe) => {
              const isSelected = vibe.id === activeVibeId;
              return (
                <button
                  key={vibe.id}
                  onClick={() => handleSelectVibe(vibe.id)}
                  style={{
                    padding: '12px 28px',
                    borderRadius: 'var(--radius-pill)',
                    fontFamily: 'var(--font-display)',
                    fontSize: '15px',
                    fontWeight: 800,
                    letterSpacing: '0.04em',
                    backgroundColor: isSelected ? vibe.textColor : 'rgba(255, 255, 255, 0.75)',
                    color: isSelected ? '#FFFFFF' : vibe.textColor,
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    boxShadow: isSelected
                      ? '0 8px 24px rgba(0,0,0,0.15)'
                      : '0 2px 8px rgba(0,0,0,0.03)',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    transform: isSelected ? 'scale(1.08)' : 'scale(1)',
                  }}
                >
                  {vibe.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Interactive Stage Card */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--border-subtle)',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.08)',
            padding: 'clamp(28px, 5vw, 64px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center',
            transition: 'all 0.4s ease',
          }}
        >
          {/* Left: Device Preview Stage */}
          <div
            style={{
              position: 'relative',
              borderRadius: '24px',
              padding: '36px',
              background: currentVibe.cardColor,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '380px',
              transition: 'background-color 0.5s ease',
              overflow: 'hidden',
            }}
          >
            {/* Simulated Laptop Lid Skin Preview */}
            <div
              style={{
                width: '100%',
                maxWidth: '380px',
                aspectRatio: '16 / 10',
                background: currentVibe.deviceSkin,
                borderRadius: '16px',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.22)',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.6s ease',
                transform: 'perspective(800px) rotateY(-8deg) rotateX(4deg)',
              }}
            >
              {/* Gloss Reflection Sheen */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 60%)',
                  borderRadius: '16px',
                  pointerEvents: 'none',
                }}
              />

              {/* Chompi Logo Badge on Lid */}
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(255, 255, 255, 0.92)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '22px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                }}
              >
                👾
              </div>

              {/* Tag pill */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  backgroundColor: '#111',
                  color: '#FFF',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '10px',
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                }}
              >
                MacBook Skin Active
              </div>
            </div>

            {/* Decorative Floating Sticker for this Vibe */}
            <div
              style={{
                position: 'absolute',
                top: '20px',
                right: '24px',
                transform: 'rotate(14deg)',
              }}
              className="animate-bob"
            >
              {activeVibeId === 'LOUD' && <BoltSticker size={65} color="var(--blue)" />}
              {activeVibeId === 'SOFT' && <StarSticker size={65} color="var(--pink)" />}
              {activeVibeId === 'WEIRD' && <ChompiMonster size={70} color="var(--purple)" />}
              {activeVibeId === 'MINIMAL' && <SmileySticker size={65} color="#111111" />}
              {activeVibeId === 'CHAOTIC' && <ChompiMonster size={70} color="var(--orange)" />}
            </div>
          </div>

          {/* Right: Info & Included Pack Details */}
          <div>
            <div
              style={{
                display: 'inline-block',
                backgroundColor: currentVibe.accentColor,
                color: activeVibeId === 'MINIMAL' ? '#FFF' : '#111',
                padding: '6px 14px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.08em',
                marginBottom: '16px',
              }}
            >
              VIBE PRESET: {currentVibe.name}
            </div>

            <h3
              style={{
                fontSize: 'clamp(28px, 3.5vw, 42px)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                marginBottom: '14px',
                lineHeight: 1.1,
              }}
            >
              {currentVibe.previewName}
            </h3>

            <p
              style={{
                fontSize: '17px',
                color: 'var(--foreground-muted)',
                marginBottom: '28px',
                lineHeight: 1.6,
              }}
            >
              {currentVibe.tagline} Engineered for creatives, hackers, and students who treat their hardware as personal identity.
            </p>

            {/* Included Stickers in this Vibe */}
            <div style={{ marginBottom: '32px' }}>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 800,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: 'var(--foreground)',
                  marginBottom: '12px',
                }}
              >
                Curated Sticker Pack Pairing:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {currentVibe.stickers.map((stk, idx) => (
                  <span
                    key={idx}
                    style={{
                      padding: '6px 14px',
                      backgroundColor: 'var(--background)',
                      borderRadius: 'var(--radius-pill)',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: 'var(--foreground)',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    {stk}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => {
                sound.cartAdd();
                onSelectVibeProducts?.(currentVibe.id);
              }}
              className="btn-pill btn-pill-primary"
              style={{
                padding: '16px 32px',
                backgroundColor: 'var(--foreground)',
                color: '#FFF',
              }}
            >
              <span>GET THE {currentVibe.name} PACK</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
