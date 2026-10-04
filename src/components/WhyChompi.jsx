import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Shield, Cpu, Palette, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { WHY_CHOMPI_POINTS } from '../data/chompiData';
import { sound } from '../utils/audio';

gsap.registerPlugin(ScrollTrigger);

export const WhyChompi = () => {
  const [swiper, setSwiper] = useState(null);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const deckWrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header entrance animation
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      // 2. Swiper Card Deck entrance animation (clean, no scale nesting)
      if (deckWrapperRef.current) {
        gsap.fromTo(
          deckWrapperRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: deckWrapperRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getIcon = (idx) => {
    switch (idx) {
      case 0:
        return <Palette size={26} color="var(--orange)" />;
      case 1:
        return <Shield size={26} color="var(--blue)" />;
      case 2:
        return <Cpu size={26} color="var(--green)" />;
      case 3:
      default:
        return <Sparkles size={26} color="var(--purple)" />;
    }
  };

  return (
    <section
      id="why-chompi"
      ref={sectionRef}
      style={{
        paddingTop: 'clamp(85px, 11vh, 115px)',
        paddingBottom: 'clamp(20px, 3vh, 36px)',
        minHeight: '100vh',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#FFFBF2',
        backgroundImage: "url('/images/playful_pastel_labscape.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        {/* Section Header */}
        <div
          ref={headingRef}
          style={{
            textAlign: 'center',
            marginBottom: 'clamp(14px, 2.2vh, 22px)',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(28px, 3.8vw, 46px)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: 'var(--foreground)',
              margin: '0 0 6px',
            }}
          >
            WHY CHOMPI LAB?
          </h2>
          <p
            style={{
              maxWidth: '520px',
              margin: '0 auto',
              fontSize: 'clamp(13px, 1.4vw, 15px)',
              color: 'var(--foreground-muted)',
              lineHeight: 1.45,
            }}
          >
            We engineered device skins and vinyl stickers so obsessively good that your tech feels brand new again.
          </p>
        </div>

        {/* 3D Stacked Cards Deck (Optimized Swiper EffectCards) */}
        <div
          ref={deckWrapperRef}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '520px',
            margin: '0 auto',
            padding: '4px 0',
          }}
        >
          <Swiper
            onSwiper={setSwiper}
            effect="cards"
            grabCursor={true}
            rewind={true}
            speed={380}
            touchAngle={35}
            threshold={8}
            touchStartPreventDefault={false}
            touchMoveStopPropagation={false}
            passiveListeners={true}
            watchSlidesProgress={true}
            pagination={{
              el: '.why-chompi-pagination',
              clickable: true,
            }}
            cardsEffect={{
              perSlideRotate: 4,
              perSlideOffset: 12,
              slideShadows: false, // Disabled heavy real-time shadows for 60fps smoothness
            }}
            modules={[EffectCards, Pagination, Navigation]}
            style={{
              width: 'clamp(260px, 80vw, 320px)',
              height: 'clamp(320px, 44vh, 375px)',
              margin: '0 auto',
              overflow: 'visible',
            }}
          >
            {WHY_CHOMPI_POINTS.map((item, idx) => (
              <SwiperSlide
                key={item.number}
                className="why-chompi-slide-card"
                onClick={() => {
                  sound.pop(540);
                  swiper?.slideNext();
                }}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '24px',
                  padding: 'clamp(18px, 2.6vh, 24px) clamp(18px, 2.5vw, 24px)',
                  border: '1px solid rgba(17, 17, 17, 0.08)',
                  boxShadow: '0 14px 34px rgba(0, 0, 0, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxSizing: 'border-box',
                  overflow: 'hidden',
                  userSelect: 'none',
                  cursor: 'grab',
                  transform: 'translate3d(0, 0, 0)',
                  WebkitBackfaceVisibility: 'hidden',
                  backfaceVisibility: 'hidden',
                  willChange: 'transform',
                }}
              >
                {/* Giant Watermark Number */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '18px',
                    fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
                    fontSize: '52px',
                    fontWeight: 900,
                    color: 'rgba(17, 17, 17, 0.06)',
                    userSelect: 'none',
                    lineHeight: 1,
                    pointerEvents: 'none',
                  }}
                >
                  {item.number}
                </div>

                <div>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '14px',
                      backgroundColor: item.bg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '14px',
                    }}
                  >
                    {getIcon(idx)}
                  </div>

                  <div
                    style={{
                      fontSize: '10px',
                      fontWeight: 800,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: item.color,
                      marginBottom: '6px',
                    }}
                  >
                    {item.subtitle}
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
                      fontSize: 'clamp(18px, 2.2vw, 21px)',
                      fontWeight: 900,
                      letterSpacing: '-0.02em',
                      color: 'var(--foreground, #111111)',
                      marginBottom: '8px',
                      lineHeight: 1.15,
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '13px',
                      color: 'var(--foreground-muted, #71717A)',
                      lineHeight: 1.45,
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '7px',
                    marginTop: '12px',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: 'var(--foreground, #111111)',
                  }}
                >
                  <span
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      backgroundColor: item.color,
                      display: 'inline-block',
                      boxShadow: `0 0 8px ${item.color}`,
                    }}
                  />
                  <span>Laboratory Tested</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Interactive Navigation & Pagination Deck Controls */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              marginTop: '14px',
            }}
          >
            <button
              className="why-chompi-prev why-chompi-nav-btn"
              type="button"
              aria-label="Previous card"
              onClick={() => {
                sound.pop(480);
                swiper?.slidePrev();
              }}
            >
              <ChevronLeft size={18} />
            </button>

            {/* Pagination Dots */}
            <div
              className="why-chompi-pagination"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 'auto',
              }}
            />

            <button
              className="why-chompi-next why-chompi-nav-btn"
              type="button"
              aria-label="Next card"
              onClick={() => {
                sound.pop(540);
                swiper?.slideNext();
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .why-chompi-nav-btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background-color: #FFFFFF;
          border: 1px solid rgba(17, 17, 17, 0.1);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #111111;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .why-chompi-nav-btn:hover {
          background-color: #111111;
          color: #FFFFFF;
          transform: scale(1.08);
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.15);
        }
        .why-chompi-nav-btn:active {
          transform: scale(0.94);
        }
        .why-chompi-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background-color: #D1D5DB;
          opacity: 1;
          border-radius: 999px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          margin: 0 4px !important;
          cursor: pointer;
        }
        .why-chompi-pagination .swiper-pagination-bullet-active {
          width: 24px;
          background-color: #111111;
          border-radius: 999px;
        }
        .why-chompi-slide-card {
          will-change: transform;
          transform: translate3d(0, 0, 0);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          contain: paint;
        }
      `}</style>
    </section>
  );
};
