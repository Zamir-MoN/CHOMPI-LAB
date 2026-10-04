import React from 'react';
import { Plus, Check, Star } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/audio';

export const ProductCard = ({ product, onAddToCart, onQuickView }) => {
  const [added, setAdded] = React.useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    sound.cartAdd();
    setAdded(true);

    // Fire cute mini confetti burst
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    confetti({
      particleCount: 24,
      spread: 60,
      origin: { x, y },
      colors: ['#FF7548', '#FFD84D', '#4DA2FF', '#72D9A4', '#FF9FCB'],
      disableForReducedMotion: true,
    });

    onAddToCart(product);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <div
      onClick={() => onQuickView(product)}
      className="chompi-card chompi-product-card"
    >
      {/* Product Image Stage */}
      <div className="product-img-stage">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="product-img"
        />

        {/* Badge */}
        {product.badge && (
          <div
            className="product-card-badge"
            style={{
              backgroundColor: product.badgeColor || 'var(--yellow)',
            }}
          >
            {product.badge}
          </div>
        )}

        {/* Rating */}
        <div className="product-card-rating">
          <Star className="product-card-star" fill="#FFB800" color="#FFB800" />
          <span>{product.rating}</span>
        </div>
      </div>

      {/* Product Details */}
      <div className="product-card-content">
        <div className="product-card-meta">
          <span className="product-card-meta-category">
            {product.deviceType || product.category}
          </span>
          <span className="product-card-meta-finish">
            {product.finish}
          </span>
        </div>

        <h4 className="product-card-title">
          {product.name}
        </h4>

        {/* Price & Action Row */}
        <div className="product-card-bottom">
          <div className="product-card-price-wrap">
            <span className="product-card-price">
              ₹{product.price}
            </span>
            {product.originalPrice && (
              <span className="product-card-original-price">
                ₹{product.originalPrice}
              </span>
            )}
          </div>

          {/* Animated Uiverse Cart Button */}
          <button
            type="button"
            onClick={handleAdd}
            data-tooltip={`Price: ₹${product.price}`}
            className={`chompi-buy-btn ${added ? 'added' : ''}`}
            aria-label={`Add ${product.name} to cart`}
          >
            <div className="button-wrapper">
              <div className="text">{added ? 'ADDED' : '+ ADD'}</div>
              <span className="icon">
                {added ? (
                  <Check size={16} strokeWidth={2.6} />
                ) : (
                  <svg
                    viewBox="0 0 16 16"
                    className="bi bi-cart2"
                    fill="currentColor"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                  </svg>
                )}
              </span>
            </div>
          </button>
        </div>
      </div>

      <style>{`
        .chompi-product-card {
          padding: 16px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          cursor: pointer;
          background-color: #FFFFFF;
          border-radius: var(--radius-xl);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
        }

        .chompi-card:hover .product-img {
          transform: scale(1.06);
        }

        .product-img-stage {
          position: relative;
          width: 100%;
          aspect-ratio: 1/1;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background-color: #F5F3ED;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
        }

        .product-img-stage .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s var(--ease-spring);
        }

        .product-card-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          color: #111111;
          padding: 4px 10px;
          border-radius: var(--radius-pill);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.04em;
          box-shadow: 0 4px 10px rgba(0,0,0,0.08);
          pointer-events: none;
          z-index: 2;
        }

        .product-card-rating {
          position: absolute;
          bottom: 12px;
          left: 12px;
          background-color: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(6px);
          padding: 3px 8px;
          border-radius: var(--radius-pill);
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 11px;
          font-weight: 800;
          color: #111;
          pointer-events: none;
          z-index: 2;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }

        .product-card-star {
          width: 11px;
          height: 11px;
        }

        .product-card-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 6px;
          margin-bottom: 4px;
        }

        .product-card-meta-category {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--foreground-subtle);
          letter-spacing: 0.06em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .product-card-meta-finish {
          font-size: 11px;
          font-weight: 600;
          color: var(--foreground-muted);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .product-card-title {
          font-size: 17px;
          font-weight: 800;
          letter-spacing: -0.02em;
          margin-bottom: 14px;
          color: var(--foreground);
          line-height: 1.25;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .product-card-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 10px;
          border-top: 1px solid rgba(17, 17, 17, 0.06);
          gap: 6px;
        }

        .product-card-price-wrap {
          display: flex;
          align-items: baseline;
          gap: 6px;
          min-width: 0;
          flex-wrap: wrap;
        }

        .product-card-price {
          font-family: var(--font-display);
          font-size: 20px;
          font-weight: 800;
          color: var(--foreground);
          line-height: 1;
        }

        .product-card-original-price {
          font-size: 13px;
          color: var(--foreground-subtle);
          text-decoration: line-through;
          line-height: 1;
        }

        /* Buy button */
        .chompi-buy-btn {
          --width: 90px;
          --height: 35px;
          --tooltip-height: 30px;
          --tooltip-width: 95px;
          --gap-between-tooltip-to-button: 12px;
          --button-color: #111111;
          --tooltip-color: #ffffff;
          width: var(--width);
          height: var(--height);
          background: var(--button-color);
          position: relative;
          text-align: center;
          border-radius: 999px;
          font-family: inherit;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.03em;
          border: none;
          cursor: pointer;
          outline: none;
          padding: 0;
          transition: background 0.3s, transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          flex-shrink: 0;
        }

        .chompi-buy-btn:active {
          transform: scale(0.95);
        }

        .chompi-buy-btn.added {
          background: var(--green, #10b981) !important;
          transform: scale(1.06);
        }

        .chompi-buy-btn::before {
          position: absolute;
          content: attr(data-tooltip);
          width: var(--tooltip-width);
          height: var(--tooltip-height);
          background-color: #222222;
          font-size: 11px;
          font-weight: 700;
          color: var(--tooltip-color);
          border-radius: 6px;
          line-height: var(--tooltip-height);
          bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) + 10px);
          left: calc(50% - var(--tooltip-width) / 2);
          pointer-events: none;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.16);
          z-index: 20;
          white-space: nowrap;
        }

        .chompi-buy-btn::after {
          position: absolute;
          content: '';
          width: 0;
          height: 0;
          border: 6px solid transparent;
          border-top-color: #222222;
          left: calc(50% - 6px);
          bottom: calc(100% + var(--gap-between-tooltip-to-button) - 10px);
          pointer-events: none;
          z-index: 20;
        }

        .chompi-buy-btn::after,
        .chompi-buy-btn::before {
          opacity: 0;
          visibility: hidden;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .chompi-buy-btn .button-wrapper {
          overflow: hidden;
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          border-radius: 999px;
          color: #ffffff;
        }

        .chompi-buy-btn.added .button-wrapper {
          color: #0A3B22;
        }

        .chompi-buy-btn .text {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: top 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .chompi-buy-btn .icon {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: top 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .chompi-buy-btn:hover {
          background: #000000;
        }

        .chompi-buy-btn:hover .text {
          top: -100%;
        }

        .chompi-buy-btn:hover .icon {
          top: 0;
        }

        .chompi-buy-btn:hover::before,
        .chompi-buy-btn:hover::after {
          opacity: 1;
          visibility: visible;
        }

        .chompi-buy-btn:hover::after {
          bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) - 20px);
        }

        .chompi-buy-btn:hover::before {
          bottom: calc(var(--height) + var(--gap-between-tooltip-to-button));
        }

        /* 2-Card Row Mobile Styling */
        @media (max-width: 640px) {
          .chompi-product-card {
            padding: 10px;
            border-radius: 18px;
          }
          .product-img-stage {
            margin-bottom: 8px;
            border-radius: 12px;
          }
          .product-card-badge {
            top: 6px;
            left: 6px;
            padding: 2.5px 7px;
            font-size: 8.5px;
            letter-spacing: 0.02em;
          }
          .product-card-rating {
            bottom: 6px;
            left: 6px;
            padding: 2px 6px;
            font-size: 9.5px;
            gap: 3px;
          }
          .product-card-star {
            width: 9.5px;
            height: 9.5px;
          }
          .product-card-meta {
            margin-bottom: 2px;
            gap: 4px;
          }
          .product-card-meta-category,
          .product-card-meta-finish {
            font-size: 9px;
            letter-spacing: 0.02em;
          }
          .product-card-title {
            font-size: 13.5px;
            margin-bottom: 8px;
            -webkit-line-clamp: 1;
          }
          .product-card-bottom {
            padding-top: 6px;
          }
          .product-card-price-wrap {
            gap: 4px;
          }
          .product-card-price {
            font-size: 15px;
          }
          .product-card-original-price {
            font-size: 11px;
          }
          .chompi-buy-btn {
            --width: 64px;
            --height: 29px;
            font-size: 11px;
            font-weight: 800;
          }
          .chompi-buy-btn::before,
          .chompi-buy-btn::after {
            display: none !important;
          }
        }

        @media (max-width: 380px) {
          .chompi-product-card {
            padding: 8px;
            border-radius: 14px;
          }
          .product-card-title {
            font-size: 12px;
          }
          .product-card-price {
            font-size: 13.5px;
          }
          .chompi-buy-btn {
            --width: 58px;
            --height: 26px;
            font-size: 10px;
          }
        }
      `}</style>
    </div>
  );
};
