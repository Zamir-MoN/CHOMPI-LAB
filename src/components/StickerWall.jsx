import React, { useState } from 'react';
import { Sparkles, MousePointerClick, RefreshCw } from 'lucide-react';
import { sound } from '../utils/audio';
import {
  ChompiMonster,
  StarSticker,
  BoltSticker,
  SmileySticker,
  ChaiSticker,
  BadgeSticker,
} from './ChompiStickers';

export const StickerWall = () => {
  const [stuckCount, setStuckCount] = useState(0);
  const [lastSticker, setLastSticker] = useState('Chompi Monster');

  const stickers = [
    { id: 1, component: ChompiMonster, color: '#FF7548', rot: -12, top: '15%', left: '8%', name: 'Chompi 01' },
    { id: 2, component: StarSticker, color: '#FFD84D', rot: 14, top: '18%', left: '28%', name: 'Superstar' },
    { id: 3, component: BoltSticker, color: '#4DA2FF', rot: -8, top: '12%', left: '50%', name: 'Hyperbolt' },
    { id: 4, component: SmileySticker, color: '#72D9A4', rot: 20, top: '22%', left: '72%', name: 'Wink Monster' },
    { id: 5, component: ChaiSticker, color: '#FFD84D', rot: -16, top: '16%', left: '88%', name: 'Kadak Chai' },

    { id: 6, component: BadgeSticker, color: '#111111', rot: 6, top: '55%', left: '5%', name: '3M Vinyl Seal' },
    { id: 7, component: ChompiMonster, color: '#B99AEF', rot: 18, top: '62%', left: '24%', name: 'Purple Slime' },
    { id: 8, component: StarSticker, color: '#FF7548', rot: -15, top: '52%', left: '44%', name: 'Orange Nova' },
    { id: 9, component: BoltSticker, color: '#FFD84D', rot: 10, top: '65%', left: '64%', name: 'Volt Spark' },
    { id: 10, component: SmileySticker, color: '#FF9FCB', rot: -6, top: '58%', left: '84%', name: 'Bubblegum Blob' },
  ];

  const handleStickerClick = (sticker) => {
    sound.stickerStick();
    setStuckCount((prev) => prev + 1);
    setLastSticker(sticker.name);
  };

  return (
    <section
      id="sticker-wall"
      style={{
        padding: '100px 0',
        backgroundColor: '#FFFFFF',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <h2
            style={{
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
            }}
          >
            THE STICKER WALL.
          </h2>
          <p style={{ maxWidth: '520px', margin: '12px auto 0', fontSize: '16px' }}>
            Tap, hover, and pop any die-cut design. Every sticker is manufactured from heavy-gauge weatherproof vinyl.
          </p>

          {/* Interactive Tap Counter Badge */}
          <div
            style={{
              marginTop: '18px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              backgroundColor: 'var(--background)',
              padding: '8px 20px',
              borderRadius: 'var(--radius-pill)',
              fontSize: '13px',
              fontWeight: 700,
              border: '1px solid var(--border-subtle)',
            }}
          >
            <span>
              Stickers Slapped: <strong style={{ color: 'var(--orange)' }}>{stuckCount}</strong>
            </span>
            <span style={{ color: 'var(--border-strong)' }}>|</span>
            <span style={{ color: 'var(--foreground-muted)' }}>
              Last popped: <em>{lastSticker}</em>
            </span>
          </div>
        </div>

        {/* Large Rounded Stage Container */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: 'clamp(420px, 50vw, 560px)',
            backgroundColor: 'var(--background)',
            borderRadius: 'var(--radius-xl)',
            border: '2px dashed rgba(17, 17, 17, 0.12)',
            overflow: 'hidden',
            boxShadow: 'inset 0 4px 20px rgba(0, 0, 0, 0.03)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Subtle Grid Pattern Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(rgba(17, 17, 17, 0.08) 1.5px, transparent 1.5px)',
              backgroundSize: '32px 32px',
              opacity: 0.7,
              pointerEvents: 'none',
            }}
          />

          {/* Center Canvas Watermark */}
          <div
            style={{
              textAlign: 'center',
              pointerEvents: 'none',
              userSelect: 'none',
              opacity: 0.15,
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(50px, 12vw, 130px)',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                lineHeight: 0.9,
              }}
            >
              CHOMPI LAB
            </div>
            <div style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '0.2em' }}>
              STICKER PLAYGROUND
            </div>
          </div>

          {/* Scattered Die-Cut Stickers */}
          {stickers.map((stk) => {
            const Component = stk.component;
            return (
              <div
                key={stk.id}
                onClick={() => handleStickerClick(stk)}
                className="interactive-sticker"
                style={{
                  position: 'absolute',
                  top: stk.top,
                  left: stk.left,
                  cursor: 'pointer',
                  transform: `rotate(${stk.rot}deg)`,
                  filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.14))',
                }}
                title={`Click to pop ${stk.name}!`}
              >
                <Component size={82} color={stk.color} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
