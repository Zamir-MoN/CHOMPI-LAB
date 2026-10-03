import React from 'react';
import { Star, CheckCircle, MessageSquareQuote } from 'lucide-react';
import { TESTIMONIALS } from '../data/chompiData';
import { sound } from '../utils/audio';

export const Testimonials = () => {
  return (
    <section
      id="reviews"
      style={{
        padding: '100px 0',
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2
            style={{
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
            }}
          >
            “MY LAPTOP FINALLY LOOKS LIKE MINE.”
          </h2>
          <p style={{ maxWidth: '520px', margin: '12px auto 0', fontSize: '17px' }}>
            From indie founders and Figma wizards to dorm room coders across the country.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
          }}
        >
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="testimonial-card"
              onMouseEnter={() => sound.pop(500 + idx * 30)}
              style={{
                backgroundColor: 'var(--background)',
                borderRadius: 'var(--radius-xl)',
                padding: '36px',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.35s ease, box-shadow 0.35s ease',
              }}
            >
              <div>
                {/* 5 Stars */}
                <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#FFB800" color="#FFB800" />
                  ))}
                </div>

                <p
                  style={{
                    fontSize: '18px',
                    fontWeight: 600,
                    color: 'var(--foreground)',
                    lineHeight: 1.5,
                    marginBottom: '28px',
                  }}
                >
                  “{t.quote}”
                </p>
              </div>

              {/* Author & Device info */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '20px',
                  borderTop: '1px solid rgba(17, 17, 17, 0.08)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <img
                    src={t.avatar}
                    alt={t.author}
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid #FFFFFF',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    }}
                  />
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '15px',
                        fontWeight: 800,
                        color: 'var(--foreground)',
                      }}
                    >
                      <span>{t.author}</span>
                      <CheckCircle size={14} color="var(--green)" />
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--foreground-muted)' }}>
                      {t.role}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: 'var(--foreground-muted)',
                  }}
                >
                  {t.device}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonial-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-card);
        }
      `}</style>
    </section>
  );
};
