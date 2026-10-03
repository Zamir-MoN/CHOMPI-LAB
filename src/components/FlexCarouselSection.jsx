import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FlexCarousel from './FlexCarousel';

gsap.registerPlugin(ScrollTrigger);

export const FlexCarouselSection = ({ onExplore }) => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const carouselWrapperRef = useRef(null);
  const carouselRef = useRef(null);

  const drops = [
    {
      src: '/images/chompi_camo_tech.png',
      alt: 'Camo Flow MacBook & iPhone Skins',
      title: 'Camo Flow Tech Duo',
      subtitle: '3M Precision Skin Drop',
    },
    {
      src: '/images/chompi_sticker_sheet.png',
      alt: 'Chompi Die-Cut Sticker Sheet',
      title: 'Chompi & Weird Friends',
      subtitle: 'Weatherproof Vinyl Sheet',
    },
    {
      src: '/images/hero_laptop.jpg',
      alt: 'Acid Terrazzo MacBook Skin',
      title: 'Acid Terrazzo 3M Skin',
      subtitle: 'Ultra-Matte Precision Fit',
    },
    {
      src: '/images/phone_skins.jpg',
      alt: 'Cyber Flame Holo Phone Skins',
      title: 'Cyber Flame Holo',
      subtitle: 'Prism Holographic Reflection',
    },
    {
      src: '/images/sticker_pack.jpg',
      alt: '18-Sticker Mega Vinyl Pack',
      title: 'Weird Friends Mega Pack',
      subtitle: '18 Heavy-Gauge Die-Cuts',
    },
    {
      src: 'https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?w=1200&q=80&auto=format&fit=max',
      alt: 'Streetwear Sneaker Vinyl',
      title: 'Street Kick Decals',
      subtitle: 'Tactile Adhesive Series',
    },
    {
      src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&q=80&auto=format&fit=max',
      alt: 'Retro Arcade Game Deck',
      title: 'Retro Synthwave Deck',
      subtitle: 'Console & Controller Skins',
    },
    {
      src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80&auto=format&fit=max',
      alt: 'Mercury Melt Foil',
      title: 'Mercury Melt Foil',
      subtitle: 'Limited Edition Hologram',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;
      const scrollDistance = isMobile ? 1800 : 2500;

      // Pin the section when it fully appears at top of viewport
      // Scroll scrubs images 1 to 8 smoothly, then unpins to allow page to scroll again
      ScrollTrigger.create({
        id: 'liquid-vault-pin',
        trigger: sectionRef.current,
        start: 'top top',
        end: `+=${scrollDistance}`,
        pin: true,
        pinSpacing: true,
        scrub: 0.8,
        anticipatePin: 1,
        onUpdate: (self) => {
          // self.progress goes from 0 (card 1) to 1 (card 8)
          carouselRef.current?.setProgress(self.progress);
        },
      });
    }, sectionRef);

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
      window.__lenis?.resize();
    }, 200);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="sticker-wall"
      ref={sectionRef}
      style={{
        backgroundColor: '#F8F6F0',
        height: '100vh',
        minHeight: '680px',
        maxHeight: '1080px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 'clamp(70px, 9vh, 90px) 0 clamp(20px, 3vh, 36px)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(17, 17, 17, 0.06)',
        boxSizing: 'border-box',
      }}
    >
      {/* Background Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90vw',
          maxWidth: '1200px',
          height: '600px',
          background: 'radial-gradient(ellipse, rgba(255, 216, 77, 0.12) 0%, rgba(77, 162, 255, 0.08) 50%, transparent 75%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Section Heading */}
      <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <div
          ref={headingRef}
          style={{
            textAlign: 'center',
            maxWidth: '720px',
            margin: '0 auto clamp(16px, 2.5vh, 28px)',
          }}
        >

          <h2
            style={{
              fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
              fontSize: 'clamp(28px, 4.5vw, 50px)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 1.1,
              color: '#111111',
              marginBottom: 0,
            }}
          >
            THE LIQUID DROP VAULT.
          </h2>
        </div>
      </div>

      {/* Full-width Edge-to-Edge WebGL FlexCarousel Scrubbed by ScrollTrigger */}
      <div
        ref={carouselWrapperRef}
        style={{
          width: '100%',
          flex: 1,
          maxHeight: 'clamp(440px, 58vh, 560px)',
          position: 'relative',
          overflow: 'hidden',
          zIndex: 10,
        }}
      >
        <FlexCarousel
          ref={carouselRef}
          items={drops}
          preset="liquid"
          intro="none"
          cardHeight={0.52}
          gap={20}
          radius={22}
          squeeze={0.2}
          focusOnClick={true}
          captions={true}
          autoplay={false}
          captureWheel={false}
          onSelect={(idx, item) => {
            onExplore?.(item);
          }}
        />
      </div>
    </section>
  );
};
