import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/chompiData';
import { sound } from '../utils/audio';

export const Testimonials = () => {
  const renderCard = (t, idx, keyPrefix) => (
    <div
      key={`${keyPrefix}-${idx}`}
      className="testimonial-marquee-card"
      onMouseEnter={() => {
        try {
          sound?.pop?.(500 + (idx % 10) * 30);
        } catch {}
      }}
    >
      <div>
        {/* 5 Stars */}
        <div className="tm-stars-row">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={17} fill="#FFB800" color="#FFB800" />
          ))}
        </div>

        <p className="tm-quote">
          “{t.quote}”
        </p>
      </div>

      {/* Author & Device info */}
      <div className="tm-author-row">
        <div className="tm-author-info">
          <img
            src={t.avatar}
            alt={t.author}
            className="tm-avatar"
            loading="lazy"
          />
          <div>
            <div className="tm-author-name">
              <span>{t.author}</span>
              <CheckCircle size={14} color="var(--green, #10B981)" />
            </div>
            <div className="tm-author-role">
              {t.role}
            </div>
          </div>
        </div>

        <div className="tm-device-pill">
          {t.device}
        </div>
      </div>
    </div>
  );

  return (
    <section id="reviews" className="testimonials-section">
      <div className="container">
        {/* Header */}
        <div className="tm-header">
          <h2 className="tm-title">
            “MY LAPTOP FINALLY LOOKS LIKE MINE.”
          </h2>
          <p className="tm-subtitle">
            From indie founders and Figma wizards to dorm room coders across the country.
          </p>
        </div>
      </div>

      {/* Full-width Infinite Marquee Container (right to left) */}
      <div className="tm-marquee-outer">
        <div className="tm-marquee-track">
          {TESTIMONIALS.map((t, idx) => renderCard(t, idx, 't1'))}
        </div>
        <div className="tm-marquee-track" aria-hidden="true">
          {TESTIMONIALS.map((t, idx) => renderCard(t, idx, 't2'))}
        </div>
      </div>

      <style>{`
        .testimonials-section {
          padding: 90px 0 100px;
          background-color: #FFFFFF;
          border-top: 1px solid var(--border-subtle, rgba(17, 17, 17, 0.08));
          overflow: hidden;
          width: 100%;
        }

        .tm-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .tm-title {
          font-size: clamp(28px, 4.5vw, 52px);
          font-weight: 900;
          letter-spacing: -0.03em;
          color: var(--foreground, #111111);
          margin: 0;
          line-height: 1.15;
        }

        .tm-subtitle {
          max-width: 520px;
          margin: 12px auto 0;
          font-size: 16px;
          color: var(--foreground-muted, #666666);
          line-height: 1.5;
        }

        .tm-marquee-outer {
          position: relative;
          width: 100%;
          display: flex;
          overflow: hidden;
          user-select: none;
          gap: 24px;
          padding: 12px 0 24px;
          mask-image: linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%);
        }

        .tm-marquee-track {
          display: flex;
          flex-shrink: 0;
          gap: 24px;
          animation: tmScrollLeft 45s linear infinite;
          will-change: transform;
        }

        .tm-marquee-outer:hover .tm-marquee-track {
          animation-play-state: paused;
        }

        @keyframes tmScrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% - 24px));
          }
        }

        .testimonial-marquee-card {
          width: 380px;
          min-width: 380px;
          max-width: 380px;
          background-color: #FFFDF9;
          border-radius: 24px;
          padding: 32px 30px;
          border: 1px solid rgba(17, 17, 17, 0.08);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.03);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-sizing: border-box;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .testimonial-marquee-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.09);
          border-color: rgba(17, 17, 17, 0.16);
        }

        .tm-stars-row {
          display: flex;
          gap: 4px;
          margin-bottom: 18px;
        }

        .tm-quote {
          font-size: 16px;
          font-weight: 600;
          color: var(--foreground, #111111);
          line-height: 1.55;
          margin: 0 0 24px;
        }

        .tm-author-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 18px;
          border-top: 1px solid rgba(17, 17, 17, 0.07);
          gap: 12px;
        }

        .tm-author-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .tm-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #FFFFFF;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          flex-shrink: 0;
        }

        .tm-author-name {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 14.5px;
          font-weight: 800;
          color: var(--foreground, #111111);
        }

        .tm-author-role {
          font-size: 11.5px;
          color: var(--foreground-muted, #71717A);
          margin-top: 1px;
        }

        .tm-device-pill {
          background-color: rgba(17, 17, 17, 0.04);
          border: 1px solid rgba(17, 17, 17, 0.06);
          padding: 5px 11px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 700;
          color: var(--foreground-muted, #555555);
          white-space: nowrap;
          flex-shrink: 0;
        }

        @media (max-width: 640px) {
          .testimonial-marquee-card {
            width: 310px;
            min-width: 310px;
            max-width: 310px;
            padding: 24px 20px;
          }
          .tm-quote {
            font-size: 14.5px;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
