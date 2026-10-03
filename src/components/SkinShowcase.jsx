import React, { useState } from 'react';
import { Laptop, Smartphone, Tablet, Gamepad2, Check, Sparkles, Layers } from 'lucide-react';
import { sound } from '../utils/audio';

export const SkinShowcase = ({ onOrderCustomSkin }) => {
  const [selectedDevice, setSelectedDevice] = useState('laptop');
  const [selectedFinish, setSelectedFinish] = useState('matte');
  const [selectedPattern, setSelectedPattern] = useState('terrazzo');

  const devices = [
    { id: 'laptop', label: 'MacBook Pro 16″', icon: Laptop },
    { id: 'phone', label: 'iPhone 16 Pro', icon: Smartphone },
    { id: 'tablet', label: 'iPad Pro 13″', icon: Tablet },
    { id: 'console', label: 'Nintendo Switch', icon: Gamepad2 },
  ];

  const finishes = [
    { id: 'matte', name: 'Ultra-Matte Satin', desc: 'Zero glare, anti-fingerprint velvet feel' },
    { id: 'holo', name: 'Prism Holographic', desc: 'Rainbow prism foil reflections' },
    { id: 'leather', name: 'Soft-Touch Leather', desc: 'Tactile textured organic grip' },
    { id: 'gloss', name: 'Deep Gloss UV', desc: 'High-shine candied liquid finish' },
  ];

  const patterns = [
    {
      id: 'terrazzo',
      name: 'Acid Terrazzo',
      color: '#FF7548',
      preview: 'radial-gradient(circle, #FF7548 10%, #FFD84D 40%, #4DA2FF 90%)',
    },
    {
      id: 'midnight',
      name: 'Tokyo Midnight',
      color: '#4DA2FF',
      preview: 'linear-gradient(135deg, #0A192F 0%, #172A45 50%, #64FFDA 100%)',
    },
    {
      id: 'matcha',
      name: 'Matcha Foam',
      color: '#72D9A4',
      preview: 'radial-gradient(circle, #72D9A4 0%, #DDF7E9 60%, #B99AEF 100%)',
    },
    {
      id: 'cyber',
      name: 'Prism Violet',
      color: '#B99AEF',
      preview: 'linear-gradient(135deg, #B99AEF 0%, #FF9FCB 50%, #FFD84D 100%)',
    },
  ];

  return (
    <section
      id="skins"
      style={{
        padding: '110px 0',
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2
            style={{
              fontSize: 'clamp(32px, 5.2vw, 58px)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
            }}
          >
            PRECISION SKIN SHOWCASE.
          </h2>
          <p style={{ maxWidth: '540px', margin: '12px auto 0', fontSize: '17px' }}>
            Preview our custom laser-cut skins on your exact hardware with bespoke tactile finishes.
          </p>

          {/* Device Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              marginTop: '32px',
            }}
          >
            {devices.map((dev) => {
              const Icon = dev.icon;
              const active = selectedDevice === dev.id;
              return (
                <button
                  key={dev.id}
                  onClick={() => {
                    sound.pop(active ? 420 : 540);
                    setSelectedDevice(dev.id);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 24px',
                    borderRadius: 'var(--radius-pill)',
                    fontFamily: 'var(--font-display)',
                    fontSize: '14px',
                    fontWeight: 800,
                    backgroundColor: active ? 'var(--foreground)' : 'var(--background)',
                    color: active ? 'var(--white)' : 'var(--foreground)',
                    border: '1px solid var(--border-subtle)',
                    transition: 'all 0.25s ease',
                    boxShadow: active ? '0 8px 20px rgba(0,0,0,0.12)' : 'none',
                    cursor: 'pointer',
                  }}
                >
                  <Icon size={16} />
                  <span>{dev.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3D Stage Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center',
            backgroundColor: 'var(--background)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(28px, 5vw, 64px)',
            border: '1px solid var(--border-subtle)',
          }}
        >
          {/* Hardware Mockup Display */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '400px',
            }}
          >
            {/* Ambient Shadow glow */}
            <div
              style={{
                position: 'absolute',
                width: '75%',
                height: '60%',
                background:
                  patterns.find((p) => p.id === selectedPattern)?.color || 'var(--orange)',
                filter: 'blur(80px)',
                opacity: 0.25,
                zIndex: 1,
                borderRadius: '50%',
              }}
            />

            {/* Laptop Mockup */}
            {selectedDevice === 'laptop' && (
              <div
                style={{
                  position: 'relative',
                  zIndex: 2,
                  width: '100%',
                  maxWidth: '520px',
                  aspectRatio: '16 / 10',
                  borderRadius: '20px',
                  background: '#1C1C1E',
                  padding: '12px 12px 28px',
                  boxShadow: '0 40px 80px rgba(0, 0, 0, 0.22)',
                  display: 'flex',
                  flexDirection: 'column',
                  transform: 'perspective(1000px) rotateX(12deg) rotateY(-8deg)',
                  transition: 'transform 0.5s ease',
                }}
              >
                <div
                  style={{
                    flex: 1,
                    borderRadius: '14px',
                    position: 'relative',
                    overflow: 'hidden',
                    background:
                      patterns.find((p) => p.id === selectedPattern)?.preview || 'var(--orange)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '16px',
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '24px',
                      boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
                    }}
                  >
                    👾
                  </div>
                  {/* Holographic or Matte Overlay */}
                  {selectedFinish === 'holo' && (
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background:
                          'linear-gradient(45deg, rgba(255,0,0,0.15), rgba(0,255,0,0.15), rgba(0,0,255,0.15))',
                        mixBlendMode: 'screen',
                        pointerEvents: 'none',
                      }}
                    />
                  )}
                  {selectedFinish === 'gloss' && (
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background:
                          'linear-gradient(135deg, rgba(255,255,255,0.45) 0%, transparent 50%)',
                        pointerEvents: 'none',
                      }}
                    />
                  )}
                </div>
                {/* Trackpad notch */}
                <div
                  style={{
                    height: '10px',
                    width: '60px',
                    backgroundColor: '#2A2A2E',
                    margin: '10px auto 0',
                    borderRadius: '4px',
                  }}
                />
              </div>
            )}

            {/* Phone Mockup */}
            {selectedDevice === 'phone' && (
              <div
                style={{
                  position: 'relative',
                  zIndex: 2,
                  width: '240px',
                  aspectRatio: '9 / 19',
                  borderRadius: '42px',
                  background: '#1A1A1A',
                  padding: '10px',
                  boxShadow: '0 36px 80px rgba(0, 0, 0, 0.25)',
                  transform: 'perspective(900px) rotateY(-14deg) rotateX(6deg)',
                  transition: 'transform 0.5s ease',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '32px',
                    position: 'relative',
                    overflow: 'hidden',
                    background:
                      patterns.find((p) => p.id === selectedPattern)?.preview || 'var(--orange)',
                  }}
                >
                  {/* Camera Module Island */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      width: '84px',
                      height: '84px',
                      borderRadius: '24px',
                      backgroundColor: 'rgba(20, 20, 20, 0.92)',
                      padding: '8px',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: '6px',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
                    }}
                  >
                    <div
                      style={{
                        borderRadius: '50%',
                        background: '#050505',
                        border: '2px solid #333',
                      }}
                    />
                    <div
                      style={{
                        borderRadius: '50%',
                        background: '#050505',
                        border: '2px solid #333',
                      }}
                    />
                    <div
                      style={{
                        borderRadius: '50%',
                        background: '#050505',
                        border: '2px solid #333',
                      }}
                    />
                    <div
                      style={{
                        borderRadius: '50%',
                        background: '#FFD84D',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '9px',
                      }}
                    >
                      ⚡
                    </div>
                  </div>

                  {/* Chompi Center Stamp */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '55%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      fontSize: '32px',
                    }}
                  >
                    👾
                  </div>
                </div>
              </div>
            )}

            {/* Tablet Mockup */}
            {selectedDevice === 'tablet' && (
              <div
                style={{
                  position: 'relative',
                  zIndex: 2,
                  width: '360px',
                  aspectRatio: '4 / 3',
                  borderRadius: '28px',
                  background: '#1A1A1A',
                  padding: '10px',
                  boxShadow: '0 36px 80px rgba(0, 0, 0, 0.22)',
                  transform: 'perspective(1000px) rotateY(10deg) rotateX(8deg)',
                  transition: 'transform 0.5s ease',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '20px',
                    position: 'relative',
                    overflow: 'hidden',
                    background:
                      patterns.find((p) => p.id === selectedPattern)?.preview || 'var(--orange)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div style={{ fontSize: '38px' }}>👾</div>
                </div>
              </div>
            )}

            {/* Console Mockup */}
            {selectedDevice === 'console' && (
              <div
                style={{
                  position: 'relative',
                  zIndex: 2,
                  width: '100%',
                  maxWidth: '460px',
                  aspectRatio: '16 / 7',
                  borderRadius: '24px',
                  background: '#222',
                  padding: '8px',
                  boxShadow: '0 36px 80px rgba(0, 0, 0, 0.22)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transform: 'perspective(1000px) rotateX(8deg)',
                  transition: 'transform 0.5s ease',
                }}
              >
                {/* Left Joycon */}
                <div
                  style={{
                    width: '65px',
                    height: '100%',
                    borderRadius: '16px',
                    backgroundColor: 'var(--blue)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    padding: '8px 0',
                  }}
                >
                  <div
                    style={{
                      width: '26px',
                      height: '26px',
                      borderRadius: '50%',
                      background: '#111',
                    }}
                  />
                  <div style={{ fontSize: '10px', color: '#FFF' }}>➕</div>
                </div>

                {/* Center Screen */}
                <div
                  style={{
                    flex: 1,
                    height: '100%',
                    borderRadius: '14px',
                    background:
                      patterns.find((p) => p.id === selectedPattern)?.preview || 'var(--orange)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div style={{ fontSize: '32px' }}>👾</div>
                </div>

                {/* Right Joycon */}
                <div
                  style={{
                    width: '65px',
                    height: '100%',
                    borderRadius: '16px',
                    backgroundColor: 'var(--orange)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    padding: '8px 0',
                  }}
                >
                  <div style={{ fontSize: '10px', color: '#FFF' }}>➖</div>
                  <div
                    style={{
                      width: '26px',
                      height: '26px',
                      borderRadius: '50%',
                      background: '#111',
                    }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Right: Customization Controls */}
          <div>
            {/* Pattern Switcher */}
            <div style={{ marginBottom: '32px' }}>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--foreground-subtle)',
                  display: 'block',
                  marginBottom: '12px',
                }}
              >
                1. Select Design Pattern
              </span>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                {patterns.map((p) => {
                  const isSelected = selectedPattern === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => {
                        sound.pop(500);
                        setSelectedPattern(p.id);
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '10px 14px',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: '#FFFFFF',
                        border: isSelected
                          ? '2px solid var(--foreground)'
                          : '1px solid var(--border-subtle)',
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <div
                        style={{
                          width: '22px',
                          height: '22px',
                          borderRadius: '50%',
                          background: p.preview,
                        }}
                      />
                      <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--foreground)' }}>
                        {p.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Finish Switcher */}
            <div style={{ marginBottom: '36px' }}>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--foreground-subtle)',
                  display: 'block',
                  marginBottom: '12px',
                }}
              >
                2. Select Tactile Vinyl Finish
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {finishes.map((f) => {
                  const isSelected = selectedFinish === f.id;
                  return (
                    <div
                      key={f.id}
                      onClick={() => {
                        sound.pop(460);
                        setSelectedFinish(f.id);
                      }}
                      style={{
                        padding: '12px 18px',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: isSelected ? '#FFFFFF' : 'transparent',
                        border: isSelected
                          ? '2px solid var(--foreground)'
                          : '1px solid var(--border-subtle)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontSize: '14px',
                            fontWeight: 800,
                            color: 'var(--foreground)',
                          }}
                        >
                          {f.name}
                        </div>
                        <div style={{ fontSize: '12px', color: 'var(--foreground-muted)' }}>
                          {f.desc}
                        </div>
                      </div>
                      {isSelected && (
                        <div
                          style={{
                            width: '22px',
                            height: '22px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--foreground)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#FFF',
                          }}
                        >
                          <Check size={13} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Order Action */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <button
                onClick={() => {
                  sound.cartAdd();
                  onOrderCustomSkin?.({
                    device: devices.find((d) => d.id === selectedDevice)?.label,
                    pattern: patterns.find((p) => p.id === selectedPattern)?.name,
                    finish: finishes.find((f) => f.id === selectedFinish)?.name,
                    price: 999,
                  });
                }}
                className="btn-pill btn-pill-primary"
                style={{ flex: 1, padding: '16px 28px' }}
              >
                <Sparkles size={16} color="var(--yellow)" />
                <span>ORDER THIS CUSTOM SKIN (₹999)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
