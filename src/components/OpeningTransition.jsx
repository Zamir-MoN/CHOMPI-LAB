import React, { useEffect, useRef, useState } from 'react';
import { playIntro, destroyIntro } from '../animations/introAnimation';

export const OpeningTransition = ({ onRevealLandingPage, onComplete }) => {
  const containerRef = useRef(null);
  const textWrapRef = useRef(null);
  const logoRef = useRef(null);
  const subtextRef = useRef(null);
  const wipeRef = useRef(null);
  const shutterRowsRef = useRef([]);
  const hasCompletedRef = useRef(false);

  // Odd step count ensures ONE exact single row at the vertical center: 9 on desktop, 7 on tablet, 5 on mobile
  const [stepCount, setStepCount] = useState(() => {
    if (typeof window === 'undefined') return 9;
    const width = window.innerWidth;
    if (width < 640) return 5;
    if (width < 1024) return 7;
    return 9;
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const nextCount = width < 640 ? 5 : width < 1024 ? 7 : 9;
      if (nextCount !== stepCount) {
        setStepCount(nextCount);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [stepCount]);

  useEffect(() => {
    // 1. Lock document scroll while intro plays
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // 2. Play Master GSAP Intro Timeline
    const activeRows = shutterRowsRef.current.slice(0, stepCount).filter(Boolean);

    playIntro({
      container: containerRef.current,
      textWrap: textWrapRef.current,
      logoElement: logoRef.current,
      subtextElement: subtextRef.current,
      shutterRows: activeRows,
      onRevealLandingPage: () => {
        if (onRevealLandingPage) onRevealLandingPage();
      },
      onComplete: () => {
        hasCompletedRef.current = true;
        document.body.style.overflow = originalOverflow || '';
        if (containerRef.current) {
          containerRef.current.style.display = 'none';
          containerRef.current.style.pointerEvents = 'none';
        }
        try {
          sessionStorage.setItem('chompi_intro_played', 'true');
        } catch (e) {
          // ignore storage errors
        }
        if (onComplete) onComplete();
      },
    });

    return () => {
      document.body.style.overflow = originalOverflow || '';
      if (!hasCompletedRef.current) {
        destroyIntro();
      }
    };
  }, [stepCount, onRevealLandingPage, onComplete]);

  return (
    <div
      ref={containerRef}
      className="preloader"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        height: '100dvh',
        backgroundColor: 'transparent',
        zIndex: 99999,
        overflow: 'hidden',
        pointerEvents: 'auto',
      }}
    >
      {/* PHASE 2 & 3: Minimal Center Logo + Subtext */}
      <div
        ref={textWrapRef}
        className="intro-center"
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '14px',
          zIndex: 50,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        <img
          ref={logoRef}
          src="/images/chompi_logo_white.webp"
          alt="CHOMPI LAB"
          style={{
            width: 'clamp(200px, 28vw, 360px)',
            height: 'auto',
            objectFit: 'contain',
            opacity: 0,
            filter: 'drop-shadow(0 12px 28px rgba(255, 255, 255, 0.15))',
          }}
        />
        <div
          ref={subtextRef}
          className="intro-subtext"
          style={{
            fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            fontSize: 'clamp(9.5px, 0.95vw, 12px)',
            fontWeight: 600,
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: 'rgba(255, 255, 255, 0.70)',
            opacity: 0,
            lineHeight: 1,
            marginTop: '2px',
          }}
        >
          THE FIRST-EVER CHOMPI DROP.
        </div>
      </div>

      {/* PHASE 4: Geometric Stepped Black Shutters that reveal the landing page directly */}
      <div
        ref={wipeRef}
        className="wipe"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 20,
          pointerEvents: 'none',
        }}
      >
        {Array.from({ length: stepCount }).map((_, i) => (
          <div
            key={i}
            className={`step step-${i + 1} wipe-step`}
            style={{
              position: 'relative',
              width: '100%',
              flex: 1,
              overflow: 'hidden',
              pointerEvents: 'none',
              // 1px negative margin eliminates any subpixel vertical hairline gap
              marginTop: i > 0 ? '-1px' : '0',
            }}
          >
            {/* Left Black Shutter */}
            <div
              ref={(el) => {
                if (!shutterRowsRef.current[i]) shutterRowsRef.current[i] = {};
                shutterRowsRef.current[i].left = el;
              }}
              className="shutter shutter-left"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '50.2%',
                height: '102%',
                backgroundColor: '#000000',
                willChange: 'transform',
                transformOrigin: 'left center',
              }}
            />

            {/* Right Black Shutter */}
            <div
              ref={(el) => {
                if (!shutterRowsRef.current[i]) shutterRowsRef.current[i] = {};
                shutterRowsRef.current[i].right = el;
              }}
              className="shutter shutter-right"
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '50.2%',
                height: '102%',
                backgroundColor: '#000000',
                willChange: 'transform',
                transformOrigin: 'right center',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
