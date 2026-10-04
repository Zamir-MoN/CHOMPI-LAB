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
            src="/images/chompi_sticker_sheet.webp"
            alt="CHOMPI LAB Die-Cut Sticker Sheet"
            loading="eager"
            decoding="async"
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
            src="/images/chompi_camo_tech.webp"
            alt="CHOMPI LAB Designer Precision Skins - MacBook & iPhone"
            loading="eager"
            decoding="async"
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
            src="/images/chompi_logo.webp"
            alt="CHOMPI LAB"
            className="hero-line"
            loading="eager"
            decoding="async"
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
              <div className="title-doodle-container">
                {/* Row 1: STICK IT with action marks & glossy bubble specular shine */}
                <div className="title-row-stick-it">
                  {/* Top-left radiating rays */}
                  <svg className="rays-top-left" width="34" height="26" viewBox="0 0 34 26" fill="none">
                    <path d="M 6 22 L 2 10" stroke="#111111" strokeWidth="2.8" strokeLinecap="round" />
                    <path d="M 16 18 L 15 5" stroke="#111111" strokeWidth="2.8" strokeLinecap="round" />
                    <path d="M 27 20 L 31 8" stroke="#111111" strokeWidth="2.8" strokeLinecap="round" />
                  </svg>
                  {/* Left 2 action dashes */}
                  <svg className="dashes-left" width="18" height="24" viewBox="0 0 18 24" fill="none">
                    <path d="M 14 6 L 4 10" stroke="#111111" strokeWidth="2.8" strokeLinecap="round" />
                    <path d="M 14 18 L 2 17" stroke="#111111" strokeWidth="2.8" strokeLinecap="round" />
                  </svg>

                  {/* STICK IT bubble word */}
                  <div className="bubble-text-wrapper stick-it-wrap">
                    <span className="title-stick-it">STICK IT</span>
                    {/* SVG Glossy Specular Shine Overlay */}
                    <svg className="bubble-shine-overlay" viewBox="0 0 185 48" fill="none">
                      {/* S shine */}
                      <path d="M 8 16 C 8 11, 14 9, 18 10 C 15 11, 11 13, 11 17 Z" fill="#FFFFFF" opacity="0.95" />
                      {/* T shine */}
                      <rect x="32" y="11" width="10" height="3" rx="1.5" fill="#FFFFFF" opacity="0.95" />
                      <rect x="37" y="18" width="3" height="8" rx="1.5" fill="#FFFFFF" opacity="0.9" />
                      {/* I shine */}
                      <rect x="52" y="16" width="3.5" height="12" rx="1.75" fill="#FFFFFF" opacity="0.95" />
                      {/* C shine */}
                      <path d="M 72 16 C 73 11, 80 9, 84 10 C 80 11, 75 13, 75 17 Z" fill="#FFFFFF" opacity="0.95" />
                      {/* K shine */}
                      <rect x="94" y="15" width="3.5" height="13" rx="1.75" fill="#FFFFFF" opacity="0.95" />
                      <rect x="105" y="13" width="7" height="3" rx="1.5" transform="rotate(30 105 13)" fill="#FFFFFF" opacity="0.95" />
                      {/* I shine */}
                      <rect x="133" y="16" width="3.5" height="12" rx="1.75" fill="#FFFFFF" opacity="0.95" />
                      {/* T shine */}
                      <rect x="150" y="11" width="10" height="3" rx="1.5" fill="#FFFFFF" opacity="0.95" />
                      <rect x="155" y="18" width="3" height="8" rx="1.5" fill="#FFFFFF" opacity="0.9" />
                    </svg>
                  </div>

                  {/* Right 2 action dashes near IT */}
                  <svg className="dashes-right-it" width="20" height="24" viewBox="0 0 20 24" fill="none">
                    <path d="M 4 8 L 16 3" stroke="#111111" strokeWidth="2.8" strokeLinecap="round" />
                    <path d="M 4 17 L 17 18" stroke="#111111" strokeWidth="2.8" strokeLinecap="round" />
                  </svg>
                </div>

                {/* Row 2: YOUR WAY in golden yellow with 3D shadow and action dashes */}
                <div className="title-row-your-way">
                  <div className="bubble-text-wrapper your-way-wrap">
                    <span className="title-your-way">YOUR WAY</span>
                    {/* SVG Glossy Specular Shine Overlay */}
                    <svg className="bubble-shine-overlay" viewBox="0 0 220 54" fill="none">
                      {/* Y shine */}
                      <rect x="12" y="12" width="7" height="3" rx="1.5" transform="rotate(-30 12 12)" fill="#FFFFFF" opacity="0.95" />
                      <rect x="25" y="10" width="7" height="3" rx="1.5" transform="rotate(30 25 10)" fill="#FFFFFF" opacity="0.95" />
                      {/* O shine */}
                      <path d="M 43 18 C 44 12, 52 10, 56 12 C 51 13, 46 16, 46 20 Z" fill="#FFFFFF" opacity="0.95" />
                      {/* U shine */}
                      <rect x="73" y="16" width="3.5" height="11" rx="1.75" fill="#FFFFFF" opacity="0.95" />
                      <rect x="88" y="16" width="3.5" height="8" rx="1.75" fill="#FFFFFF" opacity="0.9" />
                      {/* R shine */}
                      <path d="M 103 16 C 104 11, 111 10, 115 12 C 111 13, 106 15, 106 18 Z" fill="#FFFFFF" opacity="0.95" />
                      <rect x="103" y="22" width="3.5" height="7" rx="1.75" fill="#FFFFFF" opacity="0.9" />
                      {/* W shine */}
                      <rect x="135" y="15" width="3.5" height="11" rx="1.75" fill="#FFFFFF" opacity="0.95" />
                      <rect x="146" y="17" width="3.5" height="9" rx="1.75" fill="#FFFFFF" opacity="0.9" />
                      <rect x="157" y="15" width="3.5" height="11" rx="1.75" fill="#FFFFFF" opacity="0.95" />
                      {/* A shine */}
                      <path d="M 174 20 C 175 14, 182 13, 186 15 C 182 16, 177 18, 177 22 Z" fill="#FFFFFF" opacity="0.95" />
                      {/* Y shine */}
                      <rect x="202" y="12" width="7" height="3" rx="1.5" transform="rotate(-30 202 12)" fill="#FFFFFF" opacity="0.95" />
                      <rect x="215" y="10" width="7" height="3" rx="1.5" transform="rotate(30 215 10)" fill="#FFFFFF" opacity="0.95" />
                    </svg>
                  </div>

                  {/* Right 2 action dashes on WAY */}
                  <svg className="dashes-right-way" width="22" height="26" viewBox="0 0 22 26" fill="none">
                    <path d="M 4 8 L 18 6" stroke="#111111" strokeWidth="2.8" strokeLinecap="round" />
                    <path d="M 3 19 L 16 23" stroke="#111111" strokeWidth="2.8" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>

            {/* 100+ Original Designs Callout Badge */}
            <div className="hero-mobile-badge-callout">
              <div className="hero-mobile-badge-pill">
                <span className="badge-pink-num">100+</span>
                <span className="badge-label">ORIGINAL<br />DESIGNS</span>
              </div>
            </div>
          </div>

          <p className="hero-mobile-sub">
            Stickers &amp; skins for people who don't do boring.<br />
            Handcrafted with genuine 3M™ Cast Vinyl<br />
            in India.
          </p>

          {/* Yellow brush curve accent */}
          <div className="hero-mobile-brush-stroke">
            <svg width="155" height="12" viewBox="0 0 155 12" fill="none">
              <path d="M 4 8 C 42 4, 105 4, 151 7" stroke="#FFD84D" strokeWidth="6" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Mobile Center Showcase: Kawaii Sticker Tech Collage (Stickers + MacBook + Phone) */}
        <div className="hero-mobile-collage-wrap">
          <img
            src="/images/kawaii_sticker_tech_collage.webp"
            alt="CHOMPI LAB Die-Cut Stickers & Precision Skins Collage"
            className="hero-mobile-collage-img"
            loading="eager"
            decoding="async"
            onClick={() => {
              sound.pop(600);
              onExploreStickers?.();
            }}
          />
        </div>

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
            background-image: url('/images/kawaii_pastel_doodle_wallpaper.webp') !important;
            background-repeat: no-repeat !important;
            background-position: center top !important;
            background-size: cover !important;
            background-color: #FDFAEC !important;
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
            padding-left: 12px;
            padding-right: 8px;
            padding-top: 6px;
          }

          .hero-mobile-headline-row {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            width: 100%;
            gap: 6px;
          }

          .hero-mobile-title-wrap {
            position: relative;
            flex: 1;
            min-width: 0;
            padding-left: 6px;
          }

          .title-doodle-container {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            position: relative;
          }

          .title-row-stick-it {
            display: inline-flex;
            align-items: center;
            position: relative;
            transform: rotate(-5.5deg);
            transform-origin: left bottom;
          }

          .rays-top-left {
            position: absolute;
            top: -18px;
            left: 2px;
            pointer-events: none;
          }

          .dashes-left {
            position: absolute;
            left: -15px;
            top: 10px;
            pointer-events: none;
          }

          .dashes-right-it {
            position: absolute;
            right: -20px;
            top: 4px;
            pointer-events: none;
          }

          .bubble-text-wrapper {
            position: relative;
            display: inline-block;
          }

          .bubble-shine-overlay {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
          }

          .title-stick-it {
            display: block;
            font-family: 'Baberry', var(--font-display, cursive, sans-serif);
            font-size: clamp(38px, 10.5vw, 46px);
            font-weight: normal;
            letter-spacing: 0.02em;
            color: #111111;
            line-height: 1;
            user-select: none;
          }

          .title-row-your-way {
            display: inline-flex;
            align-items: center;
            position: relative;
            transform: rotate(-1.5deg);
            transform-origin: left top;
            margin-top: -3px;
            margin-left: 2px;
          }

          .title-your-way {
            display: block;
            font-family: 'Baberry', var(--font-display, cursive, sans-serif);
            font-size: clamp(42px, 11.5vw, 52px);
            font-weight: normal;
            letter-spacing: 0.02em;
            color: #FFB703;
            line-height: 1;
            text-shadow: 0 4px 0 #D48800, 0 6px 14px rgba(212, 136, 0, 0.25);
            user-select: none;
          }

          .dashes-right-way {
            position: absolute;
            right: -22px;
            top: 12px;
            pointer-events: none;
          }

          .hero-mobile-badge-callout {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            margin-top: 2px;
            margin-right: 4px;
            flex-shrink: 0;
          }

          .hero-mobile-badge-pill {
            background: #FFFFFF;
            border: 2px dashed #111111;
            border-radius: 18px;
            padding: 7px 11px 8px;
            text-align: center;
            box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .badge-pink-num {
            background: #FF2B85;
            color: #FFFFFF;
            font-family: var(--font-display, "Space Grotesk", sans-serif);
            font-weight: 900;
            font-size: 14.5px;
            line-height: 1;
            padding: 3px 9px 4px;
            border-radius: 999px;
            display: inline-block;
            transform: rotate(-4deg);
            box-shadow: 0 2px 5px rgba(255, 43, 133, 0.25);
          }

          .badge-label {
            display: block;
            font-family: var(--font-display, "Space Grotesk", sans-serif);
            font-size: 9px;
            font-weight: 900;
            color: #111111;
            letter-spacing: 0.06em;
            line-height: 1.18;
            margin-top: 4px;
            text-align: center;
          }

          .hero-mobile-sub {
            font-family: var(--font-sans, "Plus Jakarta Sans", sans-serif);
            font-size: 13.5px;
            font-weight: 700;
            color: #1a1a1a;
            line-height: 1.42;
            margin-top: 12px;
            margin-bottom: 2px;
            margin-left: 6px;
            max-width: 310px;
            letter-spacing: -0.01em;
          }

          .hero-mobile-brush-stroke {
            margin-top: 3px;
            margin-bottom: 8px;
            margin-left: 6px;
          }

          .hero-mobile-collage-wrap {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            margin-top: -6px;
            margin-bottom: 8px;
            z-index: 10;
          }

          .hero-mobile-collage-img {
            width: 100%;
            max-width: 400px;
            height: auto;
            object-fit: contain;
            display: block;
            filter: drop-shadow(0 16px 36px rgba(0, 0, 0, 0.10));
            user-select: none;
            cursor: pointer;
            transition: transform 0.25s ease;
          }

          .hero-mobile-collage-img:active {
            transform: scale(0.98);
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
