import React, { useState } from 'react';
import { ArrowRight, Sparkles, Check } from 'lucide-react';

export const Footer = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer
      style={{
        position: 'relative',
        backgroundImage: `url('/images/pastel_palace_sunset.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat',
        borderTop: '1px solid rgba(17, 17, 17, 0.08)',
        padding: '60px 0 10px',
        minHeight: '700px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
      }}
    >
      {/* Top Content Area */}
      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        {/* Top Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '48px',
          }}
        >
          {/* Brand Col */}
          <div style={{ maxWidth: '320px' }}>
            <div style={{ marginBottom: '18px' }}>
              <img
                src="/images/chompi_logo.png"
                alt="CHOMPI LAB"
                style={{
                  height: '48px',
                  width: 'auto',
                  objectFit: 'contain',
                }}
              />
            </div>
            <p style={{ fontSize: '15px', color: 'var(--foreground-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
              Stickers &amp; skins for people who don’t do boring. Handcrafted with genuine 3M™ Cast Vinyl in India.
            </p>

            {/* Newsletter input */}
            <form onSubmit={handleSubscribe}>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                  color: 'var(--foreground)',
                }}
              >
                Get Secret Drops + ₹100 Off
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.88)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: 'var(--radius-pill)',
                  padding: '4px 6px 4px 16px',
                  border: '1px solid rgba(17, 17, 17, 0.1)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)',
                }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: 1,
                    border: 'none',
                    background: 'none',
                    outline: 'none',
                    fontSize: '13px',
                    fontFamily: 'inherit',
                    color: 'var(--foreground)',
                  }}
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: subscribed ? 'var(--green)' : 'var(--foreground)',
                    color: subscribed ? '#000' : '#FFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {subscribed ? <Check size={16} /> : <ArrowRight size={16} />}
                </button>
              </div>
              {subscribed && (
                <div style={{ marginTop: '8px', fontSize: '12px', color: '#166534', fontWeight: 700 }}>
                  ✦ Welcome to the Lab! Use code <strong style={{ color: 'var(--orange)' }}>CHOMPI10</strong> at checkout.
                </div>
              )}
            </form>
          </div>

          {/* Shop Col */}
          <div>
            <div
              style={{
                fontSize: '13px',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--foreground)',
                marginBottom: '18px',
              }}
            >
              Shop Drops
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
              <li>
                <a href="#featured" onClick={() => onNavigate?.('featured')} style={{ color: 'var(--foreground-muted)' }}>
                  All Products
                </a>
              </li>
              <li>
                <a href="#stickers" onClick={() => onNavigate?.('featured')} style={{ color: 'var(--foreground-muted)' }}>
                  Vinyl Sticker Packs
                </a>
              </li>
              <li>
                <a href="#skins" onClick={() => onNavigate?.('skins')} style={{ color: 'var(--foreground-muted)' }}>
                  MacBook Skins
                </a>
              </li>
              <li>
                <a href="#skins" onClick={() => onNavigate?.('skins')} style={{ color: 'var(--foreground-muted)' }}>
                  iPhone &amp; Pixel Skins
                </a>
              </li>
              <li>
                <a href="#skins" onClick={() => onNavigate?.('skins')} style={{ color: 'var(--foreground-muted)' }}>
                  Gaming &amp; Consoles
                </a>
              </li>
            </ul>
          </div>

          {/* Explore Col */}
          <div>
            <div
              style={{
                fontSize: '13px',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--foreground)',
                marginBottom: '18px',
              }}
            >
              The Lab
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
              <li>
                <a href="#vibe-lab" onClick={() => onNavigate?.('vibe-lab')} style={{ color: 'var(--foreground-muted)' }}>
                  Build Your Vibe
                </a>
              </li>
              <li>
                <a href="#sticker-wall" onClick={() => onNavigate?.('sticker-wall')} style={{ color: 'var(--foreground-muted)' }}>
                  Interactive Sticker Wall
                </a>
              </li>
              <li>
                <a href="#why-chompi" onClick={() => onNavigate?.('why-chompi')} style={{ color: 'var(--foreground-muted)' }}>
                  3M Cast Vinyl Tech
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => onNavigate?.('about')} style={{ color: 'var(--foreground-muted)' }}>
                  Brand Manifesto
                </a>
              </li>
              <li>
                <a href="#reviews" onClick={() => onNavigate?.('reviews')} style={{ color: 'var(--foreground-muted)' }}>
                  Creator Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Socials & Help */}
          <div>
            <div
              style={{
                fontSize: '13px',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--foreground)',
                marginBottom: '18px',
              }}
            >
              Social &amp; Studio
            </div>
            <p style={{ fontSize: '14px', color: 'var(--foreground-muted)', marginBottom: '16px' }}>
              CHOMPI LAB Studio<br />
              12th Main, Indiranagar<br />
              Bengaluru, KA 560038
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow CHOMPI LAB on Instagram"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.88)',
                  backdropFilter: 'blur(8px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--foreground)',
                  border: '1px solid rgba(17, 17, 17, 0.1)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)',
                }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Subscribe to CHOMPI LAB on YouTube"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.88)',
                  backdropFilter: 'blur(8px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--foreground)',
                  border: '1px solid rgba(17, 17, 17, 0.1)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)',
                }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar Area - Pushed to the very bottom */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          marginTop: 'auto',
          paddingTop: '80px',
          paddingBottom: '4px',
        }}
      >
        {/* Bottom Bar with frosted glass pill */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            padding: '14px 22px',
            backgroundColor: 'rgba(255, 255, 255, 0.88)',
            backdropFilter: 'blur(10px)',
            borderRadius: '14px',
            border: '1px solid rgba(255, 255, 255, 0.95)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
            fontSize: '13px',
            color: 'var(--foreground)',
            fontWeight: 500,
          }}
        >
          <div>
            © 2026 CHOMPI LAB Technologies Pvt. Ltd. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'instant' });
                if (window.__replayChompiIntro) {
                  window.__replayChompiIntro();
                }
              }}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--foreground)',
                fontWeight: 600,
                fontSize: '13px',
                padding: '4px 8px',
                borderRadius: '6px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
              }}
              title="Replay opening GSAP geometric wipe"
            >
              Replay Intro ↺
            </button>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Laser Cut Tolerances</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
