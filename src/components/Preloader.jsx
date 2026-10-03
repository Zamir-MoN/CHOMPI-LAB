import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ChompiMonster, StarSticker, BoltSticker } from './ChompiStickers';

export const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const progressBarRef = useRef(null);
  const progressTextRef = useRef(null);
  const sticker1Ref = useRef(null);
  const sticker2Ref = useRef(null);
  const sticker3Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

    // Initial states
    gsap.set(logoRef.current, { scale: 0.75, opacity: 0, y: 30 });
    gsap.set([sticker1Ref.current, sticker2Ref.current, sticker3Ref.current], {
      scale: 0,
      opacity: 0,
    });
    gsap.set(progressBarRef.current, { width: '0%' });

    // Snappy 1.2s playful sequence
    tl.to(logoRef.current, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.45,
      ease: 'back.out(2)',
    })
      .to(
        [sticker1Ref.current, sticker2Ref.current, sticker3Ref.current],
        {
          scale: 1,
          opacity: 1,
          stagger: 0.08,
          duration: 0.35,
          ease: 'back.out(2.5)',
        },
        '-=0.2'
      )
      .to(
        progressBarRef.current,
        {
          width: '100%',
          duration: 0.6,
          ease: 'power2.inOut',
          onUpdate: function () {
            const progress = Math.round(this.progress() * 100);
            if (progressTextRef.current) {
              progressTextRef.current.innerText = `${progress}%`;
            }
          },
        },
        '-=0.4'
      )
      .to(logoRef.current, {
        scale: 1.08,
        rotation: 3,
        duration: 0.15,
        yoyo: true,
        repeat: 1,
        ease: 'power1.inOut',
      })
      .to(containerRef.current, {
        yPercent: -100,
        borderBottomLeftRadius: '80px',
        borderBottomRightRadius: '80px',
        duration: 0.65,
        ease: 'power4.inOut',
        onComplete: () => {
          if (containerRef.current) {
            containerRef.current.style.display = 'none';
          }
          if (onComplete) onComplete();
        },
      });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#F7F5EF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Floating Playful Stickers */}
        <div
          ref={sticker1Ref}
          style={{ position: 'absolute', top: -50, left: -40, transform: 'rotate(-15deg)' }}
        >
          <StarSticker size={54} color="#FFD84D" />
        </div>
        <div
          ref={sticker2Ref}
          style={{ position: 'absolute', top: -35, right: -50, transform: 'rotate(20deg)' }}
        >
          <BoltSticker size={50} color="#4DA2FF" />
        </div>
        <div
          ref={sticker3Ref}
          style={{ position: 'absolute', bottom: -30, right: 30, transform: 'rotate(-10deg)' }}
        >
          <ChompiMonster size={55} color="#FF7548" />
        </div>

        {/* Official Brand Logo */}
        <div
          ref={logoRef}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <img
            src="/images/chompi_logo.png"
            alt="CHOMPI LAB"
            style={{
              width: 'clamp(200px, 32vw, 300px)',
              height: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 16px 32px rgba(0, 0, 0, 0.14))',
            }}
          />
          <span
            style={{
              fontSize: '12px',
              fontWeight: 800,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#666666',
            }}
          >
            STICKERS ✦ SKINS ✦ LAB
          </span>
        </div>

        {/* Progress Container */}
        <div
          style={{
            marginTop: '36px',
            width: '180px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '6px',
              backgroundColor: 'rgba(17, 17, 17, 0.08)',
              borderRadius: '999px',
              overflow: 'hidden',
            }}
          >
            <div
              ref={progressBarRef}
              style={{
                height: '100%',
                backgroundColor: '#111111',
                borderRadius: '999px',
                width: '0%',
              }}
            />
          </div>
          <span
            ref={progressTextRef}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '12px',
              fontWeight: 700,
              color: '#555555',
            }}
          >
            0%
          </span>
        </div>
      </div>
    </div>
  );
};
