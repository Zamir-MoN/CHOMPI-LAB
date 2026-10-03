import React, { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Flame, Truck } from 'lucide-react';
import confetti from 'canvas-confetti';
import gsap from 'gsap';
import { sound } from '../utils/audio';
import {
  ChompiMonster,
  StarSticker,
  BoltSticker,
  SmileySticker,
  ChaiSticker,
  BadgeSticker,
  FlowerSticker,
} from './ChompiStickers';

export const Hero = ({ onExploreStickers, onExploreSkins }) => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const floatingContainerRef = useRef(null);

  // Floating elements refs for mouse parallax
  const laptopRef = useRef(null);
  const phoneRef = useRef(null);
  const stickerPackRef = useRef(null);
  const starRef = useRef(null);
  const boltRef = useRef(null);
  const monsterRef = useRef(null);
  const chaiRef = useRef(null);
  const badgeRef = useRef(null);

  const handleStickerClick = (e, soundFreq = 540) => {
    sound.pop(soundFreq);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    confetti({
      particleCount: 16,
      spread: 50,
      origin: { x, y },
      colors: ['#FF7548', '#FFD84D', '#4DA2FF', '#FF9FCB'],
      disableForReducedMotion: true,
    });
  };

  useEffect(() => {
    // Initial entrance animation
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current?.querySelectorAll('.hero-line'),
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.15,
        }
      );

      gsap.fromTo(
        [
          laptopRef.current,
          phoneRef.current,
          starRef.current,
          boltRef.current,
          monsterRef.current,
          badgeRef.current,
        ].filter(Boolean),
        { scale: 0.85, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.9,
          stagger: 0.06,
          ease: 'back.out(1.6)',
          delay: 0.3,
        }
      );
    }, heroRef);

    // Desktop Mouse Parallax
    const handleMouseMove = (e) => {
      if (window.innerWidth < 1024) return;
      const { clientX, clientY } = e;
      const xNorm = (clientX / window.innerWidth - 0.5) * 2;
      const yNorm = (clientY / window.innerHeight - 0.5) * 2;

      // laptopRef (Sticker sheet) & phoneRef (Precision Skins) stay completely still per user request
      // Gentle micro-parallax so stickers never drift over center text or buttons
      gsap.to(monsterRef.current, {
        x: -xNorm * 8,
        y: yNorm * 6,
        rotation: xNorm * 4,
        duration: 1.4,
        ease: 'power2.out',
      });
      gsap.to(starRef.current, {
        x: xNorm * 8,
        y: yNorm * 8,
        rotation: -xNorm * 5,
        duration: 1.2,
        ease: 'power2.out',
      });
      gsap.to(boltRef.current, {
        x: -xNorm * 8,
        y: -yNorm * 8,
        duration: 1.3,
        ease: 'power2.out',
      });
      gsap.to(badgeRef.current, {
        x: xNorm * 6,
        y: yNorm * 6,
        duration: 1.5,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      ctx.revert();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="hero-section"
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: 'clamp(135px, 16vh, 160px)',
        paddingBottom: 'clamp(60px, 8vh, 90px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 50% 30%, #FFFFFF 0%, #F8F6F0 75%)',
      }}
    >
      {/* Decorative Floating Product Cards & Stickers */}
      <div
        ref={floatingContainerRef}
        className="hero-product-reveal hero-desktop-only"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        {/* Top Left: Die-Cut Sticker Sheet Still Showcase */}
        <div
          ref={laptopRef}
          style={{
            position: 'absolute',
            top: 'clamp(175px, 23vh, 260px)',
            left: 'clamp(16px, 3.8vw, 65px)',
            width: 'clamp(270px, 27vw, 420px)',
            pointerEvents: 'auto',
            zIndex: 15,
            userSelect: 'none',
          }}
        >
          {/* Hand-drawn Annotation: 100+ Original Designs */}
          <div
            style={{
              position: 'absolute',
              top: '-20px',
              left: '-18px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              zIndex: 10,
              pointerEvents: 'none',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '12px',
                fontWeight: 900,
                lineHeight: 1.15,
                textAlign: 'center',
                color: '#111111',
                letterSpacing: '-0.02em',
              }}
            >
              100+<br />
              ORIGINAL<br />
              DESIGNS
            </div>
            <svg
              width="36"
              height="36"
              viewBox="0 0 40 40"
              fill="none"
              stroke="#111111"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginTop: '2px', marginLeft: '10px' }}
            >
              <path d="M 10 4 C 8 18, 16 28, 32 28" />
              <path d="M 24 21 L 33 28 L 26 35" />
            </svg>
          </div>

          {/* Top Right Yellow Star Accent */}
          <div
            style={{
              position: 'absolute',
              top: '-10px',
              right: '-12px',
              transform: 'rotate(16deg)',
              zIndex: 6,
              cursor: 'pointer',
            }}
            className="interactive-sticker"
            onClick={(e) => handleStickerClick(e, 740)}
            title="Click Star!"
          >
            <StarSticker size={50} color="var(--yellow)" />
          </div>

          {/* Main Sticker Sheet Graphic (STILL) */}
          <img
            src="/images/chompi_sticker_sheet.png"
            alt="CHOMPI LAB Die-Cut Sticker Sheet"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              filter: 'drop-shadow(0 20px 45px rgba(0, 0, 0, 0.10))',
              cursor: 'pointer',
            }}
            onClick={() => {
              sound.pop(580);
              onExploreStickers?.();
            }}
            title="Click to explore Sticker Packs"
          />

          {/* Bottom Left Pink Flower Accent */}
          <div
            style={{
              position: 'absolute',
              bottom: '2%',
              left: '-20px',
              transform: 'rotate(-10deg)',
              zIndex: 6,
              cursor: 'pointer',
            }}
            className="interactive-sticker"
            onClick={(e) => handleStickerClick(e, 620)}
            title="Click Flower!"
          >
            <FlowerSticker size={58} color="#FF75B5" />
          </div>

          {/* Bottom Right Yellow Star Accent */}
          <div
            style={{
              position: 'absolute',
              bottom: '6%',
              right: '-14px',
              transform: 'rotate(-12deg)',
              zIndex: 6,
              cursor: 'pointer',
            }}
            className="interactive-sticker"
            onClick={(e) => handleStickerClick(e, 700)}
            title="Click Star!"
          >
            <StarSticker size={44} color="var(--yellow)" />
          </div>
        </div>

        {/* Right: Precision Tech Skins Still Showcase */}
        <div
          ref={phoneRef}
          style={{
            position: 'absolute',
            top: 'clamp(175px, 23vh, 260px)',
            right: 'clamp(16px, 3.8vw, 65px)',
            width: 'clamp(280px, 28vw, 430px)',
            pointerEvents: 'auto',
            zIndex: 15,
            userSelect: 'none',
          }}
        >
          <img
            src="/images/chompi_camo_tech.png"
            alt="CHOMPI LAB Designer Precision Skins - MacBook & iPhone"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              filter: 'drop-shadow(0 20px 45px rgba(0, 0, 0, 0.10))',
              cursor: 'pointer',
              transition: 'transform 0.35s ease',
            }}
            onClick={() => {
              sound.pop(620);
              onExploreSkins?.();
            }}
            title="Click to explore Precision Skins"
          />
        </div>

        {/* Layered Floating Die-Cut Vector Stickers (Safe corner & accent zones, no overlap with text) */}
        {/* Bottom Left Mascot Peek: far away from center text */}
        <div
          ref={monsterRef}
          style={{
            position: 'absolute',
            bottom: '24px',
            left: '36px',
            pointerEvents: 'auto',
            cursor: 'pointer',
            zIndex: 10,
          }}
          className="interactive-sticker hero-sticker-reveal"
          onClick={(e) => handleStickerClick(e, 520)}
          title="Click Chompi Monster!"
        >
          <ChompiMonster size={72} color="var(--orange)" />
        </div>

        {/* Top Right Star: open space above right camo mockup */}
        <div
          ref={starRef}
          style={{
            position: 'absolute',
            top: '10%',
            right: '10%',
            pointerEvents: 'auto',
            cursor: 'pointer',
            zIndex: 10,
          }}
          className="interactive-sticker hero-sticker-reveal"
          onClick={(e) => handleStickerClick(e, 740)}
          title="Click Yellow Star!"
        >
          <StarSticker size={48} color="var(--yellow)" />
        </div>

        {/* Blue Bolt: accent between header and camo tech mockup */}
        <div
          ref={boltRef}
          style={{
            position: 'absolute',
            top: '26%',
            right: '32%',
            pointerEvents: 'auto',
            cursor: 'pointer',
            zIndex: 10,
          }}
          className="interactive-sticker hero-sticker-reveal"
          onClick={(e) => handleStickerClick(e, 680)}
          title="Click Electric Bolt!"
        >
          <BoltSticker size={52} color="var(--blue)" />
        </div>

        {/* Bottom Right 3M Quality Badge: safe open corner below camo tech mockup */}
        <div
          ref={badgeRef}
          style={{
            position: 'absolute',
            bottom: '24px',
            right: '36px',
            pointerEvents: 'auto',
            cursor: 'pointer',
            zIndex: 10,
            transform: 'rotate(-8deg)',
          }}
          className="interactive-sticker hero-sticker-reveal"
          onClick={(e) => handleStickerClick(e, 640)}
          title="Click Holographic Badge!"
        >
          <BadgeSticker size={76} />
        </div>
      </div>

      {/* Main Hero Center Typography & CTAs (Desktop Only) */}
      <div
        className="container hero-heading-reveal hero-desktop-only"
        style={{
          position: 'relative',
          zIndex: 30,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '920px',
        }}
      >
        {/* Hero Black Logo Display */}
        <div ref={titleRef} style={{ marginBottom: '36px', display: 'flex', justifyContent: 'center' }}>
          <img
            src="/images/chompi_logo.png"
            alt="CHOMPI LAB"
            className="hero-line"
            style={{
              width: 'clamp(280px, 44vw, 560px)',
              height: 'auto',
              objectFit: 'contain',
              display: 'block',
              filter: 'drop-shadow(0 14px 34px rgba(0, 0, 0, 0.10))',
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* Hero Pill Action Buttons */}
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
            className="btn-pill btn-pill-primary"
            style={{
              padding: '18px 36px',
              fontSize: '15px',
              fontWeight: 800,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: '#111111',
              color: '#FFFFFF',
              borderRadius: '999px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 12px 28px rgba(17,17,17,0.20)',
              transition: 'transform 0.25s ease, background 0.25s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0) scale(1)')}
          >
            <span>SHOP STICKERS</span>
            <ArrowRight size={18} />
          </button>

          <button
            onClick={() => {
              sound.pop(560);
              onExploreSkins?.();
            }}
            className="btn-pill btn-pill-secondary"
            style={{
              padding: '18px 36px',
              fontSize: '15px',
              fontWeight: 800,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: '#FFFFFF',
              color: '#111111',
              borderRadius: '999px',
              border: '1px solid rgba(0,0,0,0.1)',
              cursor: 'pointer',
              boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
              transition: 'transform 0.25s ease, background 0.25s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0) scale(1)')}
          >
            <span>SHOP SKINS</span>
            <Sparkles size={18} color="var(--orange)" />
          </button>
        </div>

        {/* Tactile Highlights Bar */}
        <div
          style={{
            marginTop: '56px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '28px',
            color: 'var(--foreground-muted)',
            fontSize: '13px',
            fontWeight: 600,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={16} color="var(--green)" />
            <span>0.05mm Laser Cut Precision</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Flame size={16} color="var(--orange)" />
            <span>100% Waterproof &amp; UV Proof</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={16} color="var(--blue)" />
            <span>Free Shipping Across India &gt; ₹699</span>
          </div>
        </div>
      </div>

      {/* Mobile Only Landing Page Layout */}
      <div className="hero-mobile-layout">
        {/* Top Header Block */}
        <div className="hero-mobile-header">
          <div className="hero-mobile-headline-row">
            <div className="hero-mobile-title-wrap">
              {/* Top doodle rays */}
              <div className="hero-mobile-rays">
                <svg width="42" height="20" viewBox="0 0 42 20" fill="none">
                  <path d="M4 17L8 5" stroke="#111111" strokeWidth="2.8" strokeLinecap="round" />
                  <path d="M18 15L20 4" stroke="#111111" strokeWidth="2.8" strokeLinecap="round" />
                  <path d="M32 17L30 5" stroke="#111111" strokeWidth="2.8" strokeLinecap="round" />
                </svg>
              </div>
              <h1 className="hero-mobile-title">
                <span className="title-stick-it">STICK IT</span>
                <span className="title-your-way">YOUR WAY</span>
              </h1>
            </div>

            {/* 100+ Original Designs Callout Badge */}
            <div className="hero-mobile-badge-callout">
              <div className="hero-mobile-badge-pill">
                <span className="badge-pink-num">100+</span>
                <span className="badge-label">ORIGINAL<br />DESIGNS</span>
              </div>
              {/* Crown and arrow doodles */}
              <div className="hero-mobile-badge-doodles">
                <svg width="44" height="38" viewBox="0 0 44 38" fill="none">
                  <path d="M6 14L11 20L18 12L25 20L30 14L28 24H8L6 14Z" stroke="#111111" strokeWidth="2.4" strokeLinejoin="round" fill="none" />
                  <path d="M28 8C33 13 32 22 25 28" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" strokeDasharray="3 3" />
                  <path d="M25 24L25 29L30 28" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          <p className="hero-mobile-sub">
            Stickers &amp; skins for people who don't do boring. Handcrafted with genuine 3M™ Cast Vinyl in India.
          </p>

          {/* Yellow brush curve accent */}
          <div className="hero-mobile-brush-stroke">
            <svg width="190" height="12" viewBox="0 0 190 12" fill="none">
              <path d="M4 8C45 2 130 2 186 9" stroke="#FFD84D" strokeWidth="6" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Visual Breathing Room for the background illustration's stickers & skins */}
        <div className="hero-mobile-visual-space" />

        {/* Mobile Action Buttons and Benefits Card */}
        <div className="hero-mobile-footer">
          {/* Action Buttons */}
          <div className="hero-mobile-btns-row">
            <button
              onClick={() => {
                sound.pop(540);
                onExploreStickers?.();
              }}
              className="hero-mobile-btn-stickers"
            >
              <span>SHOP STICKERS</span>
              <ArrowRight size={17} strokeWidth={2.4} />
            </button>

            <button
              onClick={() => {
                sound.pop(560);
                onExploreSkins?.();
              }}
              className="hero-mobile-btn-skins"
            >
              <span>SHOP SKINS</span>
              <Sparkles size={17} color="#FF7548" strokeWidth={2.4} />
            </button>
          </div>

          {/* 3-Column Benefits Card */}
          <div className="hero-mobile-benefit-card">
            <div className="benefit-col">
              <div className="benefit-icon-badge icon-green">
                <ShieldCheck size={18} color="#10B981" strokeWidth={2.4} />
              </div>
              <div className="benefit-text">
                <strong>0.05mm</strong>
                <span>Laser Cut Precision</span>
              </div>
            </div>

            <div className="benefit-divider" />

            <div className="benefit-col">
              <div className="benefit-icon-badge icon-orange">
                <Flame size={18} color="#FF7548" strokeWidth={2.4} />
              </div>
              <div className="benefit-text">
                <strong>100% Waterproof</strong>
                <span>&amp; UV Proof</span>
              </div>
            </div>

            <div className="benefit-divider" />

            <div className="benefit-col">
              <div className="benefit-icon-badge icon-blue">
                <Truck size={18} color="#3B82F6" strokeWidth={2.4} />
              </div>
              <div className="benefit-text">
                <strong>Free Shipping</strong>
                <span>Across India &gt; ₹699</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Desktop defaults */
        .hero-mobile-layout {
          display: none !important;
        }

        /* Mobile specific layout and background */
        @media (max-width: 768px) {
          #hero.hero-section {
            background-image: url('/images/playful_sticker_shop_display.png') !important;
            background-repeat: no-repeat !important;
            background-position: center top !important;
            background-size: 100% auto !important;
            background-color: #FEF9E6 !important;
            min-height: 100vh !important;
            padding-top: 105px !important;
            padding-bottom: 24px !important;
            padding-left: 14px !important;
            padding-right: 14px !important;
            justify-content: flex-start !important;
          }

          .hero-desktop-only {
            display: none !important;
          }

          .hero-mobile-layout {
            display: flex !important;
            flex-direction: column !important;
            width: 100% !important;
            max-width: 440px !important;
            min-height: calc(100vh - 180px) !important;
            justify-content: space-between !important;
            position: relative !important;
            z-index: 20 !important;
          }

          .hero-mobile-header {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
            position: relative;
            padding-left: 4px;
            padding-right: 4px;
          }

          .hero-mobile-headline-row {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            width: 100%;
            gap: 8px;
          }

          .hero-mobile-title-wrap {
            position: relative;
          }

          .hero-mobile-rays {
            margin-bottom: -4px;
            margin-left: 4px;
          }

          .hero-mobile-title {
            margin: 0;
            line-height: 0.95;
          }

          .title-stick-it {
            display: block;
            font-family: var(--font-display, "Space Grotesk", sans-serif);
            font-size: clamp(34px, 9.5vw, 44px);
            font-weight: 900;
            letter-spacing: -0.04em;
            color: #111111;
            line-height: 0.95;
            transform: rotate(-1.5deg);
          }

          .title-your-way {
            display: block;
            font-family: var(--font-display, "Space Grotesk", sans-serif);
            font-size: clamp(38px, 10.5vw, 48px);
            font-weight: 900;
            letter-spacing: -0.03em;
            color: #FFC800;
            line-height: 0.95;
            text-shadow: 0 3px 0 #E5AC00, 0 5px 12px rgba(229, 172, 0, 0.3);
            transform: rotate(1deg);
          }

          .hero-mobile-badge-callout {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            margin-top: 4px;
            flex-shrink: 0;
          }

          .hero-mobile-badge-pill {
            background: #FFFFFF;
            border: 1.5px dashed #111111;
            border-radius: 12px;
            padding: 5px 8px;
            text-align: center;
            box-shadow: 0 4px 12px rgba(0,0,0,0.06);
          }

          .badge-pink-num {
            background: #FF2E93;
            color: #FFFFFF;
            font-weight: 900;
            font-size: 13.5px;
            padding: 2px 7px;
            border-radius: 999px;
            display: inline-block;
            transform: rotate(-4deg);
          }

          .badge-label {
            display: block;
            font-size: 8.5px;
            font-weight: 900;
            color: #111111;
            letter-spacing: 0.04em;
            line-height: 1.15;
            margin-top: 3px;
          }

          .hero-mobile-badge-doodles {
            margin-top: -4px;
            margin-right: -6px;
          }

          .hero-mobile-sub {
            font-size: 13.5px;
            font-weight: 600;
            color: #2c2c2c;
            line-height: 1.35;
            margin-top: 8px;
            margin-bottom: 4px;
            max-width: 320px;
          }

          .hero-mobile-brush-stroke {
            margin-top: 2px;
            margin-bottom: 8px;
          }

          .hero-mobile-visual-space {
            flex: 1;
            min-height: clamp(170px, 32vh, 260px);
            pointer-events: none;
          }

          .hero-mobile-footer {
            display: flex;
            flex-direction: column;
            gap: 12px;
            width: 100%;
          }

          .hero-mobile-btns-row {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            width: 100%;
          }

          .hero-mobile-btn-stickers {
            flex: 1;
            padding: 13px 16px;
            font-size: 13px;
            font-weight: 800;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 7px;
            background-color: #111111;
            color: #FFFFFF;
            border-radius: 999px;
            border: none;
            cursor: pointer;
            box-shadow: 0 10px 24px rgba(17, 17, 17, 0.22);
            transition: transform 0.2s ease;
          }

          .hero-mobile-btn-skins {
            flex: 1;
            padding: 13px 16px;
            font-size: 13px;
            font-weight: 800;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 7px;
            background-color: #FFFFFF;
            color: #111111;
            border-radius: 999px;
            border: 1px solid rgba(0, 0, 0, 0.08);
            cursor: pointer;
            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
            transition: transform 0.2s ease;
          }

          .hero-mobile-benefit-card {
            width: 100%;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(14px);
            -webkit-backdrop-filter: blur(14px);
            border-radius: 20px;
            padding: 11px 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            box-shadow: 0 10px 26px rgba(0, 0, 0, 0.06);
            border: 1px solid rgba(255, 255, 255, 0.85);
          }

          .benefit-col {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            flex: 1;
            min-width: 0;
          }

          .benefit-icon-badge {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 3px;
          }

          .benefit-icon-badge.icon-green {
            background: #E8FDF2;
          }

          .benefit-icon-badge.icon-orange {
            background: #FFF1EC;
          }

          .benefit-icon-badge.icon-blue {
            background: #EFF6FF;
          }

          .benefit-text strong {
            font-size: 10.5px;
            font-weight: 800;
            color: #111111;
            line-height: 1.15;
            display: block;
          }

          .benefit-text span {
            font-size: 8px;
            font-weight: 600;
            color: #666666;
            line-height: 1.15;
            display: block;
          }

          .benefit-divider {
            width: 1px;
            height: 34px;
            background: rgba(0, 0, 0, 0.08);
            margin: 0 2px;
            flex-shrink: 0;
          }
        }
      `}</style>
    </section>
  );
};
