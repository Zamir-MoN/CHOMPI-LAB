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
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 82%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // 2. Swiper Card Deck entrance animation
      if (deckWrapperRef.current) {
        gsap.fromTo(
          deckWrapperRef.current,
          { opacity: 0, y: 60, scale: 0.92 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.95,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: deckWrapperRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
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
        padding: 'clamp(80px, 11vh, 120px) 0',
        backgroundColor: 'var(--background)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div
          ref={headingRef}
          style={{
            textAlign: 'center',
            marginBottom: 'clamp(40px, 6vh, 56px)',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(17, 17, 17, 0.05)',
              padding: '6px 16px',
              borderRadius: '999px',
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#111111',
              marginBottom: '14px',
            }}
          >
            <span>Lab Standards</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(34px, 5.5vw, 60px)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              color: 'var(--foreground)',
            }}
          >
            WHY CHOMPI LAB?
          </h2>
          <p
            style={{
              maxWidth: '560px',
              margin: '14px auto 0',
              fontSize: 'clamp(15px, 2vw, 18px)',
              color: 'var(--foreground-muted)',
              lineHeight: 1.5,
            }}
          >
            We engineered device skins and vinyl stickers so obsessively good that your tech feels brand new again.
          </p>
        </div>

        {/* 3D Stacked Cards Deck (Swiper EffectCards) */}
        <div
          ref={deckWrapperRef}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '520px',
            margin: '0 auto',
            padding: '20px 0 10px',
          }}
        >
          <Swiper
            onSwiper={setSwiper}
            effect="cards"
            grabCursor={true}
            rewind={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              el: '.why-chompi-pagination',
              clickable: true,
            }}
            cardsEffect={{
              perSlideRotate: 4,
              perSlideOffset: 12,
              slideShadows: true,
            }}
            onSlideChange={() => sound.pop(520)}
            modules={[EffectCards, Autoplay, Pagination, Navigation]}
            style={{
              width: 'clamp(280px, 86vw, 360px)',
              height: 'clamp(420px, 56vh, 460px)',
              margin: '0 auto',
              overflow: 'visible',
            }}
          >
            {WHY_CHOMPI_POINTS.map((item, idx) => (
              <SwiperSlide
                key={item.number}
                onClick={() => {
                  sound.pop(540);
                  swiper?.slideNext();
                }}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '32px',
                  padding: 'clamp(28px, 4.5vw, 36px) clamp(24px, 4vw, 32px)',
                  border: '1px solid rgba(17, 17, 17, 0.08)',
                  boxShadow: '0 20px 48px rgba(0, 0, 0, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxSizing: 'border-box',
                  overflow: 'hidden',
                  userSelect: 'none',
                  cursor: 'grab',
                }}
              >
                {/* Giant Watermark Number */}
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '24px',
                    fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
                    fontSize: '68px',
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
                      width: '56px',
                      height: '56px',
                      borderRadius: '18px',
                      backgroundColor: item.bg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '26px',
                    }}
                  >
                    {getIcon(idx)}
                  </div>

                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: 800,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: item.color,
                      marginBottom: '10px',
                    }}
                  >
                    {item.subtitle}
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
                      fontSize: 'clamp(22px, 3vw, 24px)',
                      fontWeight: 900,
                      letterSpacing: '-0.02em',
                      color: 'var(--foreground, #111111)',
                      marginBottom: '14px',
                      lineHeight: 1.15,
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '15px',
                      color: 'var(--foreground-muted, #71717A)',
                      lineHeight: 1.6,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginTop: '20px',
                    fontSize: '12px',
                    fontWeight: 700,
                    color: 'var(--foreground, #111111)',
                  }}
                >
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: item.color,
                      display: 'inline-block',
                      boxShadow: `0 0 10px ${item.color}`,
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
              gap: '18px',
              marginTop: '28px',
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
              <ChevronLeft size={20} />
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
              <ChevronRight size={20} />
            </button>
          </div>

          <div
            style={{
              textAlign: 'center',
              marginTop: '10px',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: 'var(--foreground-subtle, #A1A1AA)',
            }}
          >
            Swipe or use arrows to shuffle cards
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
        .swiper-slide-shadow {
          border-radius: 32px !important;
        }
      `}</style>
    </section>
  );
};
