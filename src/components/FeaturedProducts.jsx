import React, { useState } from 'react';
import { Sparkles, Flame, SlidersHorizontal } from 'lucide-react';
import { PRODUCTS } from '../data/chompiData';
import { ProductCard } from './ProductCard';
import { sound } from '../utils/audio';

export const FeaturedProducts = ({ onAddToCart, onQuickView }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Drops' },
    { id: 'stickers', label: 'Vinyl Stickers' },
    { id: 'Laptop', label: 'Laptop Skins' },
    { id: 'Phone', label: 'Phone Skins' },
    { id: 'Console & Handheld', label: 'Console & Gaming' },
  ];

  const filteredProducts = PRODUCTS.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'stickers') return item.category === 'stickers';
    return item.deviceType === activeFilter;
  });

  return (
    <section
      id="featured"
      style={{
        padding: '90px 0',
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <div className="container">
        {/* Top Header & Filters */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            marginBottom: '44px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '20px',
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: 'clamp(32px, 4.5vw, 54px)',
                  fontWeight: 900,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.05,
                }}
              >
                CURRENTLY CHOMPIN'
              </h2>
            </div>

            <p style={{ maxWidth: '420px', fontSize: '15px' }}>
              Precision-cut skins and heavyweight die-cut stickers. Printed on genuine 3M cast vinyl in Bengaluru.
            </p>
          </div>

          {/* Filter Pills */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              overflowX: 'auto',
              paddingBottom: '8px',
              scrollbarWidth: 'none',
            }}
          >
            {filters.map((filter) => {
              const active = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => {
                    sound.pop(active ? 400 : 560);
                    setActiveFilter(filter.id);
                  }}
                  style={{
                    padding: '10px 22px',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '13px',
                    fontWeight: 700,
                    letterSpacing: '0.01em',
                    backgroundColor: active ? 'var(--foreground)' : 'rgba(17, 17, 17, 0.05)',
                    color: active ? 'var(--white)' : 'var(--foreground)',
                    transition: 'all 0.2s ease',
                    whiteSpace: 'nowrap',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    if (!active) e.currentTarget.style.backgroundColor = 'rgba(17, 17, 17, 0.09)';
                  }}
                  onMouseLeave={(e) => {
                    if (!active) e.currentTarget.style.backgroundColor = 'rgba(17, 17, 17, 0.05)';
                  }}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Grid */}
        <div className="featured-products-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
            />
          ))}
        </div>

        <style>{`
          .featured-products-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }

          @media (min-width: 640px) {
            .featured-products-grid {
              gap: 18px;
            }
          }

          @media (min-width: 768px) {
            .featured-products-grid {
              grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
              gap: 24px;
            }
          }
        `}</style>
      </div>
    </section>
  );
};
