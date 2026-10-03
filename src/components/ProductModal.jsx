import React, { useState } from 'react';
import { X, Star, ShieldCheck, Sparkles, Check, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/audio';

export const ProductModal = ({ product, isOpen, onClose, onAddToCart }) => {
  if (!isOpen || !product) return null;

  const [selectedDevice, setSelectedDevice] = useState(
    product.compatibility ? product.compatibility[0] : 'Universal'
  );
  const [selectedFinish, setSelectedFinish] = useState(product.finish || 'Ultra-Matte');

  const handleAdd = (e) => {
    sound.cartAdd();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    confetti({
      particleCount: 30,
      spread: 70,
      origin: { x, y },
      colors: ['#FF7548', '#FFD84D', '#4DA2FF', '#72D9A4'],
    });

    onAddToCart({
      ...product,
      deviceType: selectedDevice,
      finish: selectedFinish,
    });
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1050,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(17, 17, 17, 0.65)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}
      />

      {/* Modal Dialog Box */}
      <div
        role="dialog"
        aria-modal="true"
        style={{
          position: 'relative',
          zIndex: 1051,
          width: '100%',
          maxWidth: '820px',
          maxHeight: '90vh',
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.3)',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close product modal"
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            zIndex: 10,
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        >
          <X size={18} />
        </button>

        {/* Left Image Stage */}
        <div
          style={{
            backgroundColor: '#F7F5EF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '32px',
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: '100%',
              maxWidth: '360px',
              height: 'auto',
              borderRadius: 'var(--radius-lg)',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.12)',
            }}
          />
        </div>

        {/* Right Info & Selectors */}
        <div
          style={{
            padding: '36px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            overflowY: 'auto',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span
                style={{
                  backgroundColor: product.badgeColor || 'var(--yellow)',
                  color: '#111',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '11px',
                  fontWeight: 800,
                }}
              >
                {product.badge || 'AUTHENTIC CHOMPI'}
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', fontWeight: 800 }}>
                <Star size={13} fill="#FFB800" color="#FFB800" />
                <span>{product.rating} ({product.reviewsCount} reviews)</span>
              </div>
            </div>

            <h3
              style={{
                fontSize: '28px',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                marginBottom: '10px',
              }}
            >
              {product.name}
            </h3>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '16px' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 900 }}>
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <span style={{ fontSize: '16px', color: 'var(--foreground-subtle)', textDecoration: 'line-through' }}>
                  ₹{product.originalPrice}
                </span>
              )}
            </div>

            <p style={{ fontSize: '14px', color: 'var(--foreground-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
              {product.description}
            </p>

            {/* Device compatibility options */}
            {product.compatibility && product.compatibility.length > 0 && (
              <div style={{ marginBottom: '20px' }}>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  Select Device Fit
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {product.compatibility.map((dev) => (
                    <button
                      key={dev}
                      onClick={() => {
                        sound.pop(480);
                        setSelectedDevice(dev);
                      }}
                      style={{
                        padding: '6px 14px',
                        borderRadius: 'var(--radius-pill)',
                        fontSize: '12px',
                        fontWeight: 700,
                        backgroundColor: selectedDevice === dev ? 'var(--foreground)' : 'var(--background)',
                        color: selectedDevice === dev ? '#FFF' : 'var(--foreground)',
                        border: '1px solid var(--border-subtle)',
                        cursor: 'pointer',
                      }}
                    >
                      {dev}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Guarantees */}
            <div
              style={{
                backgroundColor: 'var(--background)',
                padding: '12px 16px',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '12px',
                fontWeight: 600,
                color: 'var(--foreground-muted)',
                marginBottom: '24px',
              }}
            >
              <ShieldCheck size={18} color="var(--green)" />
              <span>Genuine 3M™ Cast Vinyl ✦ Bubble-Free Microchannels ✦ Zero Residue</span>
            </div>
          </div>

          {/* Add to Cart Action */}
          <button
            onClick={handleAdd}
            className="btn-pill btn-pill-primary"
            style={{
              width: '100%',
              padding: '16px',
              fontSize: '15px',
              backgroundColor: 'var(--foreground)',
              color: '#FFF',
            }}
          >
            <span>ADD TO CART — ₹{product.price}</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
