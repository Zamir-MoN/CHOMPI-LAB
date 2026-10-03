import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { sound } from '../../utils/audio';

export const AnimatedButton = ({
  text,
  onClick,
  variant = 'primary',
  className = '',
  style = {},
  icon: Icon = ArrowRight,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const isPrimary = variant === 'primary';

  return (
    <button
      onClick={(e) => {
        sound.pop(540);
        if (onClick) onClick(e);
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`animated-canvas-btn ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '12px',
        padding: '16px 32px',
        borderRadius: '999px',
        backgroundColor: isPrimary ? '#111111' : '#FFFFFF',
        color: isPrimary ? '#FFFFFF' : '#111111',
        border: isPrimary ? 'none' : '1px solid rgba(0, 0, 0, 0.08)',
        fontFamily: 'var(--font-display, inherit)',
        fontSize: '14.5px',
        fontWeight: 800,
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        cursor: 'pointer',
        userSelect: 'none',
        whiteSpace: 'nowrap',
        boxShadow: isHovered
          ? '0 16px 36px rgba(0, 0, 0, 0.22)'
          : isPrimary
          ? '0 10px 24px rgba(0, 0, 0, 0.16)'
          : '0 6px 20px rgba(0, 0, 0, 0.05)',
        transform: isHovered ? 'scale(1.04)' : 'scale(1)',
        transition: 'transform 0.28s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.28s ease, background-color 0.2s ease',
        ...style,
      }}
    >
      <span className="animated-canvas-btn-text">{text}</span>
      <Icon
        size={17}
        className="animated-canvas-btn-icon"
        strokeWidth={2.6}
        style={{
          transform: isHovered ? 'translateX(5px)' : 'translateX(0)',
          transition: 'transform 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />
      <style>{`
        @media (max-width: 768px) {
          .animated-canvas-btn {
            padding: 8px 10px !important;
            font-size: clamp(9px, 2.5vw, 11px) !important;
            gap: 5px !important;
            width: 100% !important;
            justify-content: center !important;
            letter-spacing: 0.02em !important;
          }
          .animated-canvas-btn-icon {
            width: 13px !important;
            height: 13px !important;
          }
        }
        @media (max-width: 380px) {
          .animated-canvas-btn {
            padding: 7px 6px !important;
            font-size: 8.5px !important;
            gap: 3px !important;
          }
          .animated-canvas-btn-icon {
            width: 11px !important;
            height: 11px !important;
          }
        }
      `}</style>
    </button>
  );
};
