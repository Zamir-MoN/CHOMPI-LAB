import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionHeading } from './SectionHeading';
import { StickerCanvas } from './StickerCanvas';
import { SkinCanvas } from './SkinCanvas';

gsap.registerPlugin(ScrollTrigger);

export const CanvasSection = ({ onSelectCategory }) => {
  const sectionRef = useRef(null);
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Headline entrance
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // 2. Canvases entrance
      gsap.fromTo(
        [leftPanelRef.current, rightPanelRef.current],
        { opacity: 0, scale: 0.95, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: leftPanelRef.current,
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="pick-your-canvas"
      ref={sectionRef}
      style={{
        backgroundColor: '#F8F6F0',
        padding: 'clamp(80px, 10vw, 130px) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10,
        }}
      >
        {/* Top 25%: Centered Section Heading */}
        <div ref={headingRef}>
          <SectionHeading />
        </div>

        {/* Main Content: Two Large Perfectly Aligned Canvases */}
        <div
          className="canvas-panels-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: 'clamp(24px, 3.5vw, 36px)',
            alignItems: 'stretch',
          }}
        >
          {/* LEFT PANEL: STICKERS */}
          <div ref={leftPanelRef} style={{ height: '100%' }}>
            <StickerCanvas onExplore={() => onSelectCategory('stickers')} />
          </div>

          {/* RIGHT PANEL: SKINS */}
          <div ref={rightPanelRef} style={{ height: '100%' }}>
            <SkinCanvas onExplore={() => onSelectCategory('skins')} />
          </div>
        </div>
      </div>

      {/* Responsive adjustments: 2 cards in a row for mobile UI */}
      <style>{`
        @media (max-width: 768px) {
          .canvas-panels-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
          }
        }

        @media (min-width: 480px) and (max-width: 768px) {
          .canvas-panels-grid {
            gap: 14px !important;
          }
        }

        @media (min-width: 769px) {
          .canvas-panels-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: clamp(24px, 3.5vw, 36px) !important;
          }
        }
      `}</style>
    </section>
  );
};
