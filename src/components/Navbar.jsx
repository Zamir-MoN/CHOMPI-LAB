import React, { useState, useEffect, useRef } from 'react';
import { ShoppingBag, Menu, X, ArrowUpRight, Gift, Copy, Check, Truck } from 'lucide-react';
import gsap from 'gsap';
import { StaggeredMenu } from './StaggeredMenu';
import { sound } from '../utils/audio';

export const Navbar = ({ cartCount = 1, onOpenCart, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [couponCopied, setCouponCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('featured');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const navLinks = [
    { label: 'Featured', id: 'featured' },
    { label: 'Stickers', id: 'pick-your-canvas' },
    { label: 'Vibe Lab', id: 'vibe-lab' },
    { label: 'Why Chompi', id: 'why-chompi' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'Sticker Wall', id: 'sticker-wall' },
  ];

  const handleNavClick = (sectionId) => {
    setActiveTab(sectionId);
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(sectionId);
    }
  };

  const handleCopyCoupon = (e) => {
    e.stopPropagation();
    try {
      navigator.clipboard?.writeText('CHOMPI100');
    } catch {}
    setCouponCopied(true);
    setTimeout(() => setCouponCopied(false), 2400);
  };

  return (
    <div
      className="chompi-header-wrapper"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        pointerEvents: 'none',
      }}
    >
      {/* Top of Navigation Bar Announcement Banner */}
      <div
        style={{
          width: '100%',
          backgroundColor: '#FFE566',
          backgroundImage: 'linear-gradient(90deg, #FFE76A 0%, #FFDF40 50%, #FFE76A 100%)',
          borderBottom: '1px solid rgba(17, 17, 17, 0.08)',
          padding: '6px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          pointerEvents: 'auto',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.04)',
        }}
      >
        {/* Soft Diagonal Light Sweep Shimmer */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: '28%',
            background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.5) 50%, transparent 100%)',
            pointerEvents: 'none',
            animation: 'bannerShimmer 6s infinite cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />

        {/* Left Decorative Star Sticker with Wobble Animation */}
        <div
          className="banner-stars-left"
          style={{
            position: 'absolute',
            left: 'clamp(10px, 3.5vw, 48px)',
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              border: '1.5px solid #111111',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.08)',
              animation: 'badgeWobble 4s infinite ease-in-out',
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#111111">
              <path d="M12 2L14.8 8.6L22 9.2L16.6 14L18.2 21L12 17.2L5.8 21L7.4 14L2 9.2L9.2 8.6L12 2Z" />
            </svg>
          </div>
          <span
            style={{
              fontSize: '13px',
              color: '#111111',
              fontWeight: 900,
              display: 'inline-block',
              animation: 'starTwinkle 2.2s infinite ease-in-out',
            }}
          >
            ✦
          </span>
        </div>

        {/* Right Decorative Stars with Twinkle Animation */}
        <div
          className="banner-stars-right"
          style={{
            position: 'absolute',
            right: 'clamp(10px, 3.5vw, 48px)',
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            pointerEvents: 'none',
          }}
        >
          <span
            style={{
              fontSize: '15px',
              color: '#111111',
              fontWeight: 900,
              display: 'inline-block',
              animation: 'starTwinkle 2.6s infinite ease-in-out 0.6s',
            }}
          >
            ✦
          </span>
          <span
            style={{
              fontSize: '11px',
              color: 'rgba(0, 0, 0, 0.45)',
              display: 'inline-block',
              animation: 'starTwinkle 3s infinite ease-in-out 1.2s',
            }}
          >
            ★
          </span>
        </div>

        {/* Banner Content Strip */}
        <div className="chompi-announcement-strip">
          {/* Pill 1: LIMITED TIME OFFER with Jiggling Gift */}
          <div className="banner-pill-offer">
            <span style={{ display: 'inline-flex', animation: 'giftJiggle 2.8s infinite ease-in-out' }}>
              <Gift size={13} color="#E02424" strokeWidth={2.4} />
            </span>
            <span>LIMITED TIME OFFER</span>
          </div>

          {/* Divider */}
          <span className="banner-divider">|</span>

          {/* Offer Highlight Text (Stacked on mobile exactly as in screenshot) */}
          <div className="banner-discount-block">
            <div className="banner-discount-row">
              <span className="banner-get-text">GET </span>
              <span className="banner-pink-text">₹100 OFF</span>
            </div>
            <div className="banner-first-order-text">on your first order</div>
          </div>

          {/* Pill 2: Coupon Code with Interactive Copy */}
          <button
            onClick={handleCopyCoupon}
            title="Click to copy coupon code"
            className={`banner-coupon-pill ${couponCopied ? 'copied' : ''}`}
          >
            <span>
              Use Code:{' '}
              <strong style={{ fontWeight: 900 }}>CHOMPI100</strong>
            </span>
            {couponCopied ? (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', color: '#16a34a' }}>
                <Check size={12} strokeWidth={2.8} />
                <span style={{ fontSize: '9px', fontWeight: 900 }}>COPIED!</span>
              </span>
            ) : (
              <Copy size={12} color="#E05638" />
            )}
          </button>

          {/* Peeking Cute Red Mascot */}
          <div className="banner-mascot" title="Hey! I'm Chompi!">
            <svg width="26" height="22" viewBox="0 0 100 85" fill="none">
              <path
                d="M26 70C15 70 8 62 8 50C8 40 16 32 26 31C28 18 38 10 50 10C62 10 72 18 74 30C84 31 92 39 92 50C92 62 84 70 72 70H26Z"
                fill="#FF5733"
              />
              <circle cx="38" cy="46" r="6" fill="#FFFFFF" />
              <circle cx="39" cy="46" r="3.2" fill="#111111" />
              <circle cx="40" cy="44.5" r="1.2" fill="#FFFFFF" />
              <circle cx="62" cy="46" r="6" fill="#FFFFFF" />
              <circle cx="61" cy="46" r="3.2" fill="#111111" />
              <circle cx="62" cy="44.5" r="1.2" fill="#FFFFFF" />
              <path d="M46 56C48 59 52 59 54 56" stroke="#111111" strokeWidth="2.8" strokeLinecap="round" />
            </svg>
          </div>

          {/* Pill 3: FREE SHIPPING (Desktop Only) */}
          <div className="banner-free-shipping">
            <span style={{ display: 'inline-flex', animation: 'truckDrive 2s infinite linear' }}>
              <Truck size={14} color="#0284c7" strokeWidth={2.2} />
            </span>
            <span>
              <strong style={{ fontWeight: 900 }}>FREE SHIPPING</strong>{' '}
              <span style={{ color: '#444444', fontWeight: 600 }}>Across India &gt; ₹699</span>
            </span>
          </div>
        </div>
      </div>

      {/* Floating Pill Navbar */}
      <header
        className="chompi-navbar"
        style={{
          padding: isScrolled ? '8px 24px' : '14px 32px',
          transition: 'padding 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          pointerEvents: 'none',
        }}
      >
      <nav
        style={{
          maxWidth: '1220px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.94)' : '#FFFFFF',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderRadius: '999px',
          padding: isScrolled ? '8px 18px 8px 24px' : '10px 22px 10px 28px',
          boxShadow: isScrolled
            ? '0 14px 34px rgba(0, 0, 0, 0.07), 0 2px 6px rgba(0, 0, 0, 0.03)'
            : '0 8px 28px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.02)',
          border: '1px solid rgba(0, 0, 0, 0.04)',
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          pointerEvents: 'auto',
        }}
      >
        {/* Brand Official Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('hero');
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
          }}
        >
          <img
            src="/images/chompi_logo.webp"
            alt="CHOMPI LAB"
            className="navbar-brand-logo"
            loading="eager"
            decoding="async"
            style={{
              height: isScrolled ? '46px' : '54px',
              width: 'auto',
              objectFit: 'contain',
              transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), height 0.3s ease',
              filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.08))',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06) rotate(-2deg)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1) rotate(0deg)')}
          />
        </a>

        {/* Center Desktop Navigation Links */}
        <div
          className="desktop-nav-links"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '28px',
          }}
        >
          {navLinks.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  fontSize: '13.5px',
                  fontWeight: isActive ? 700 : 600,
                  color: isActive ? '#111111' : '#444444',
                  padding: '4px 2px',
                  position: 'relative',
                  cursor: 'pointer',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = '#111111';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = '#444444';
                }}
              >
                <span>{item.label}</span>
                {/* Active Indicator Underline Dash */}
                <span
                  style={{
                    width: isActive ? '12px' : '0px',
                    height: '2.5px',
                    backgroundColor: '#111111',
                    borderRadius: '999px',
                    marginTop: '3px',
                    transition: 'width 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                />
              </button>
            );
          })}
        </div>

        {/* Right Action Icons: Cart + Hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>

          {/* Black Pill Cart Button with Yellow Circular Counter */}
          <button
            onClick={() => {
              sound.pop(620);
              onOpenCart();
            }}
            aria-label="Open Cart"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 14px 8px 16px',
              borderRadius: '999px',
              backgroundColor: '#111111',
              color: '#FFFFFF',
              fontSize: '12.5px',
              fontWeight: 800,
              letterSpacing: '0.04em',
              boxShadow: '0 4px 12px rgba(17, 17, 17, 0.15)',
              transition: 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), background-color 0.2s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.04)';
              e.currentTarget.style.backgroundColor = '#222222';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.backgroundColor = '#111111';
            }}
          >
            <ShoppingBag size={14} strokeWidth={2.4} />
            <span>CART</span>
            <span
              style={{
                backgroundColor: '#FFD84D',
                color: '#111111',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '11px',
                fontWeight: 900,
              }}
            >
              {cartCount}
            </span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            className="mobile-menu-btn"
            onClick={(e) => {
              e.stopPropagation();
              try {
                sound?.pop?.(500);
              } catch {}
              setMobileMenuOpen((prev) => !prev);
            }}
            aria-label="Toggle navigation menu"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#F4F2EB',
              color: '#111111',
              cursor: 'pointer',
              border: 'none',
              outline: 'none',
              WebkitTapHighlightColor: 'transparent',
              touchAction: 'manipulation',
            }}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* React Bits StaggeredMenu with CHOMPI Brand Palette */}
      <StaggeredMenu
        isOpen={mobileMenuOpen}
        onMenuOpen={() => setMobileMenuOpen(true)}
        onMenuClose={() => setMobileMenuOpen(false)}
        items={navLinks.map((item) => ({
          label: item.label,
          id: item.id,
          ariaLabel: `Navigate to ${item.label}`,
          link: `#${item.id}`,
        }))}
        socialItems={[
          { label: 'Instagram', link: 'https://instagram.com' },
          { label: 'Twitter / X', link: 'https://x.com' },
          { label: 'Discord', link: 'https://discord.com' },
          { label: 'YouTube', link: 'https://youtube.com' },
        ]}
        colors={['#FFD84D', '#FF7548', '#FF3388', '#4DA2FF']}
        accentColor="#FF7548"
        logoUrl="/images/chompi_logo.webp"
        displayItemNumbering={true}
        displaySocials={true}
        onSelectItem={(item) => handleNavClick(item.id)}
      />

      {/* Responsive & Banner CSS */}
      <style>{`
        @keyframes chompiPeekBob {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          20% {
            transform: translateY(-4px) rotate(-4deg);
          }
          40% {
            transform: translateY(0.5px) rotate(0deg);
          }
          60% {
            transform: translateY(-3px) rotate(4deg);
          }
          80% {
            transform: translateY(0px) rotate(0deg);
          }
        }

        @keyframes giftJiggle {
          0%, 75%, 100% {
            transform: scale(1) rotate(0deg);
          }
          80% {
            transform: scale(1.22) rotate(-12deg);
          }
          86% {
            transform: scale(1.22) rotate(12deg);
          }
          92% {
            transform: scale(1.15) rotate(-6deg);
          }
          96% {
            transform: scale(1.05) rotate(0deg);
          }
        }

        @keyframes pinkPulse {
          0%, 100% {
            transform: scale(1);
            filter: drop-shadow(0 0 0px rgba(255, 20, 147, 0));
          }
          50% {
            transform: scale(1.07);
            filter: drop-shadow(0 2px 7px rgba(255, 20, 147, 0.45));
          }
        }

        @keyframes truckDrive {
          0%, 100% {
            transform: translateX(0px) translateY(0px);
          }
          25% {
            transform: translateX(1px) translateY(-1px);
          }
          50% {
            transform: translateX(2px) translateY(0px);
          }
          75% {
            transform: translateX(1px) translateY(-0.8px);
          }
        }

        @keyframes starTwinkle {
          0%, 100% {
            transform: scale(0.9) rotate(0deg);
            opacity: 0.75;
          }
          50% {
            transform: scale(1.28) rotate(18deg);
            opacity: 1;
          }
        }

        @keyframes badgeWobble {
          0%, 100% {
            transform: rotate(-10deg) scale(1);
          }
          50% {
            transform: rotate(8deg) scale(1.08);
          }
        }

        @keyframes couponPulse {
          0%, 100% {
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
          }
          50% {
            box-shadow: 0 3px 12px rgba(255, 149, 0, 0.32);
          }
        }

        @keyframes bannerShimmer {
          0% {
            transform: translateX(-150%) skewX(-20deg);
          }
          25%, 100% {
            transform: translateX(450%) skewX(-20deg);
          }
        }

        .chompi-announcement-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(8px, 1.3vw, 16px);
          font-size: 12px;
          color: #111111;
          font-family: var(--font-display, "Space Grotesk", sans-serif);
          z-index: 1;
        }

        .banner-pill-offer {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background-color: #FFF8D6;
          border: 1px solid rgba(17, 17, 17, 0.1);
          padding: 3px 12px;
          border-radius: 999px;
          fontSize: 11px;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #111111;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
          white-space: nowrap;
        }

        .banner-divider {
          color: rgba(17, 17, 17, 0.25);
          font-weight: 300;
        }

        .banner-discount-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          line-height: 1.15;
          text-align: center;
          white-space: nowrap;
        }

        .banner-discount-row {
          display: flex;
          align-items: baseline;
          gap: 3px;
        }

        .banner-get-text {
          font-weight: 900;
          font-size: 12.5px;
          letter-spacing: -0.01em;
          color: #111111;
        }

        .banner-pink-text {
          color: #FF007A;
          font-weight: 900;
          font-size: 13px;
          text-shadow: 0 1px 2px rgba(255, 0, 122, 0.15);
          animation: pinkPulse 2.4s infinite ease-in-out;
        }

        .banner-first-order-text {
          font-size: 9px;
          font-weight: 700;
          color: #333333;
          line-height: 1;
        }

        .banner-coupon-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background-color: #FFFDF0;
          border: 1.5px dashed #FF9500;
          padding: 3px 12px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 800;
          color: #111111;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
          white-space: nowrap;
          animation: couponPulse 3s infinite ease-in-out;
          transition: all 0.2s ease;
        }

        .banner-coupon-pill.copied {
          background-color: #F0FDF4 !important;
          border-color: #16a34a !important;
          color: #15803d !important;
          animation: none !important;
        }

        .banner-mascot {
          display: inline-flex;
          align-items: center;
          cursor: pointer;
          animation: chompiPeekBob 3.6s infinite ease-in-out;
          transform-origin: bottom center;
          margin-left: 2px;
        }

        .banner-free-shipping {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background-color: #FFF8D6;
          border: 1px solid rgba(17, 17, 17, 0.1);
          padding: 3px 12px;
          border-radius: 999px;
          font-size: 11px;
          color: #111111;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
          white-space: nowrap;
        }

        @media (max-width: 900px) {
          .desktop-nav-links {
            display: none !important;
          }
        }
        @media (min-width: 901px) {
          .mobile-menu-btn {
            display: none !important;
          }
        }

        /* Mobile single-row behavior matching user screenshot */
        @media (max-width: 768px) {
          .navbar-brand-logo {
            height: 42px !important;
          }
          .banner-stars-left,
          .banner-stars-right,
          .banner-free-shipping {
            display: none !important;
          }

          .chompi-announcement-strip {
            display: flex !important;
            flex-wrap: nowrap !important;
            justify-content: center !important;
            align-items: center !important;
            gap: 6px !important;
            width: 100% !important;
            padding: 3px 4px !important;
            white-space: nowrap !important;
          }

          .banner-pill-offer {
            padding: 3px 7px !important;
            font-size: 8.5px !important;
            gap: 3px !important;
          }

          .banner-pill-offer svg {
            width: 11px !important;
            height: 11px !important;
          }

          .banner-divider {
            margin: 0 1px !important;
            font-size: 10px !important;
          }

          .banner-get-text {
            font-size: 10px !important;
          }

          .banner-pink-text {
            font-size: 10.5px !important;
          }

          .banner-first-order-text {
            font-size: 8px !important;
          }

          .banner-coupon-pill {
            padding: 3px 7px !important;
            font-size: 9px !important;
            gap: 4px !important;
          }

          .banner-coupon-pill svg {
            width: 10.5px !important;
            height: 10.5px !important;
          }

          .banner-mascot svg {
            width: 24px !important;
            height: 20px !important;
          }

          /* Floating navbar capsule on mobile */
          .chompi-navbar {
            padding: 6px 12px !important;
          }

          .chompi-navbar nav {
            padding: 6px 10px 6px 14px !important;
            gap: 8px !important;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08) !important;
          }
        }

        @media (max-width: 390px) {
          .chompi-announcement-strip {
            gap: 3px !important;
          }
          .banner-pill-offer {
            padding: 2.5px 5px !important;
            font-size: 8px !important;
          }
          .banner-coupon-pill {
            padding: 2.5px 5px !important;
            font-size: 8px !important;
          }
          .banner-get-text {
            font-size: 9px !important;
          }
          .banner-pink-text {
            font-size: 9.5px !important;
          }
          .banner-first-order-text {
            font-size: 7px !important;
          }
        }
      `}</style>
      </header>
    </div>
  );
};
