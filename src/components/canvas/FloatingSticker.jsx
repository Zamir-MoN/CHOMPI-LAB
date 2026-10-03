import React from 'react';
import { sound } from '../../utils/audio';
import { ChompiMonster, StarSticker, BoltSticker, SmileySticker } from '../ChompiStickers';

export const FloatingSticker = ({
  type = 'star',
  size = 50,
  color = '#FFD84D',
  top,
  bottom,
  left,
  right,
  rotate = 0,
  className = '',
  style = {},
  onClick,
}) => {
  const handleClick = (e) => {
    sound.stickerStick();
    if (onClick) onClick(e);
  };

  const renderGraphic = () => {
    switch (type) {
      case 'chompi':
        return <ChompiMonster size={size} color={color} />;
      case 'star':
        return <StarSticker size={size} color={color} />;
      case 'smiley':
        return <SmileySticker size={size} color={color} />;
      case 'bolt':
        return <BoltSticker size={size} color={color} />;
      case 'heart':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
            {/* White die cut border */}
            <path
              d="M50 88C50 88 12 62 12 34C12 20 23 10 37 10C45 10 50 16 50 16C50 16 55 10 63 10C77 10 88 20 88 34C88 62 50 88 50 88Z"
              fill="#FFFFFF"
              stroke="#FFFFFF"
              strokeWidth="8"
              strokeLinejoin="round"
            />
            <path
              d="M50 88C50 88 12 62 12 34C12 20 23 10 37 10C45 10 50 16 50 16C50 16 55 10 63 10C77 10 88 20 88 34C88 62 50 88 50 88Z"
              fill={color}
            />
            {/* Cute eyes */}
            <circle cx="40" cy="38" r="4" fill="#111111" />
            <circle cx="60" cy="38" r="4" fill="#111111" />
            <path d="M44 48C46 52 54 52 56 48" stroke="#111111" strokeWidth="3" strokeLinecap="round" />
          </svg>
        );
      case 'flower':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
            <path
              d="M50 14C55 14 58 22 55 28C62 25 70 30 68 37C75 38 78 46 73 51C79 55 77 64 70 65C73 72 67 79 60 77C60 84 52 86 48 81C43 85 36 82 36 75C29 76 25 69 28 63C21 61 21 52 27 48C21 44 24 35 31 35C30 27 38 23 44 27C43 20 48 14 50 14Z"
              fill="#FFFFFF"
              stroke="#FFFFFF"
              strokeWidth="8"
            />
            <circle cx="50" cy="50" r="34" fill={color} />
            <circle cx="50" cy="50" r="14" fill="#FFD84D" />
            <circle cx="45" cy="48" r="2.5" fill="#111111" />
            <circle cx="55" cy="48" r="2.5" fill="#111111" />
          </svg>
        );
      default:
        return <StarSticker size={size} color={color} />;
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`floating-sticker-item ${className}`}
      style={{
        position: 'absolute',
        top,
        bottom,
        left,
        right,
        transform: `rotate(${rotate}deg)`,
        filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.12))',
        cursor: 'pointer',
        zIndex: 15,
        userSelect: 'none',
        transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = `rotate(${rotate + 12}deg) scale(1.18)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = `rotate(${rotate}deg) scale(1)`;
      }}
    >
      {renderGraphic()}
    </div>
  );
};
