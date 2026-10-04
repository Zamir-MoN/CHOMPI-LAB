import React, { useState } from 'react';
import { ArrowRight, Check, ChevronDown, ChevronRight } from 'lucide-react';
import { sound } from '../utils/audio';

export const Footer = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Accordion toggle states for mobile (first two collapsed, last one expanded by default)
  const [openShopDrops, setOpenShopDrops] = useState(false);
  const [openTheLab, setOpenTheLab] = useState(false);
  const [openSocial, setOpenSocial] = useState(true);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    try {
      sound?.pop?.(650);
    } catch {}
    setSubscribed(true);
    setEmail('');
  };

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    try {
      sound?.pop?.(500);
    } catch {}
    if (onNavigate) {
      onNavigate(sectionId);
    }
  };

  return (
    <>
      <footer className="chompi-main-footer">
        {/* ========================================================= */}
        {/* DESKTOP FOOTER VIEW (Min-width: 769px)                     */}
        {/* ========================================================= */}
        <div className="footer-desktop-view">
          <div className="df-top-container">
            {/* 4-column Grid */}
            <div className="df-cards-grid">
              
              {/* Column 1: Brand Info & Badges */}
              <div className="df-brand-col">
                <div className="df-logo-wrap">
                  {/* Yellow Star Doodle */}
                  <svg className="df-star-doodle" width="28" height="28" viewBox="0 0 36 36" fill="none">
                    <path d="M18 2L22 13L34 14L25 22L28 34L18 27L8 34L11 22L2 14L14 13L18 2Z" fill="#FFD84D" stroke="#111" strokeWidth="2.4" strokeLinejoin="round"/>
                  </svg>
                  {/* Small black crown doodle */}
                  <svg className="df-crown-doodle" width="30" height="20" viewBox="0 0 46 32" fill="none">
                    <path d="M5 26L2 10L13 17L21 5L29 17L40 10L37 26H5Z" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {/* Lightning / lines */}
                  <svg className="df-doodle-left-lines" width="20" height="20" viewBox="0 0 30 30" fill="none">
                    <path d="M6 10L24 6M10 20L28 16" stroke="#111" strokeWidth="2.2" strokeLinecap="round"/>
                  </svg>
                  <img
                    src="/images/chompi_logo.webp"
                    alt="CHOMPI LAB"
                    className="df-logo-img"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Yellow swirl doodle */}
                  <svg className="df-doodle-right-swirl" width="22" height="22" viewBox="0 0 30 30" fill="none">
                    <path d="M6 12C12 6 22 8 20 18C18 26 8 24 12 16" stroke="#F59E0B" strokeWidth="2.6" strokeLinecap="round"/>
                  </svg>
                </div>

                <p className="df-brand-desc">
                  Stickers &amp; skins for people who don’t do boring. Handcrafted with genuine 3M™ Cast Vinyl in India.
                </p>

                {/* 4 Feature Badges in a Row */}
                <div className="df-badges-row">
                  <div className="df-badge-item">
                    <div className="df-badge-circle" style={{ backgroundColor: '#FFE566' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 3h12l4 6-10 12L2 9z"/>
                        <path d="M11 3v6 12"/>
                        <path d="M2 9h20"/>
                      </svg>
                    </div>
                    <span className="df-badge-text">Premium<br />Quality</span>
                  </div>

                  <div className="df-badge-item">
                    <div className="df-badge-circle" style={{ backgroundColor: '#FEF3C7' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="1" y="3" width="15" height="13" rx="1"/>
                        <polygon points="16 8 20 8 23 11 23 16 16 16 8"/>
                        <circle cx="5.5" cy="18.5" r="2.5"/>
                        <circle cx="18.5" cy="18.5" r="2.5"/>
                      </svg>
                    </div>
                    <span className="df-badge-text">Fast<br />Shipping</span>
                  </div>

                  <div className="df-badge-item">
                    <div className="df-badge-circle" style={{ backgroundColor: '#EADDFE' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        <path d="m9 12 2 2 4-4"/>
                      </svg>
                    </div>
                    <span className="df-badge-text">Safe<br />Packaging</span>
                  </div>

                  <div className="df-badge-item">
                    <div className="df-badge-circle" style={{ backgroundColor: '#FFD8E4' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="#FF477E" stroke="#FF477E" strokeWidth="1.5">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                      </svg>
                    </div>
                    <span className="df-badge-text">Made<br />in India</span>
                  </div>
                </div>
              </div>

              {/* Column 2: SHOP DROPS Card */}
              <div className="df-card-col">
                <div className="df-card-wrapper">
                  {/* Black Crown Doodle above card */}
                  <svg className="df-crown-above-shop" width="30" height="22" viewBox="0 0 46 32" fill="none">
                    <path d="M5 26L2 10L13 17L21 5L29 17L40 10L37 26H5Z" stroke="#111" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>

                  <div className="df-card">
                    <div className="df-card-header">
                      <div className="df-icon-pill" style={{ backgroundColor: '#FFE566' }}>
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                          <line x1="3" y1="6" x2="21" y2="6"/>
                          <path d="M16 10a4 4 0 0 1-8 0"/>
                        </svg>
                      </div>
                      <div className="df-title-wrap">
                        <span className="df-card-title">SHOP DROPS</span>
                        <svg className="df-brush-underline" width="55" height="5" viewBox="0 0 70 8" fill="none">
                          <path d="M2 5C22 2 48 3 68 5" stroke="#FFE566" strokeWidth="5.5" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>

                    <div className="df-links-list">
                      <a href="#featured" onClick={(e) => handleLinkClick(e, 'featured')} className="df-link-row">
                        <span>All Products</span>
                        <ChevronRight size={14} className="df-chevron" />
                      </a>
                      <a href="#stickers" onClick={(e) => handleLinkClick(e, 'featured')} className="df-link-row">
                        <span>Vinyl Sticker Packs</span>
                        <ChevronRight size={14} className="df-chevron" />
                      </a>
                      <a href="#skins" onClick={(e) => handleLinkClick(e, 'skins')} className="df-link-row">
                        <span>MacBook Skins</span>
                        <ChevronRight size={14} className="df-chevron" />
                      </a>
                      <a href="#skins" onClick={(e) => handleLinkClick(e, 'skins')} className="df-link-row">
                        <span>iPhone &amp; Pixel Skins</span>
                        <ChevronRight size={14} className="df-chevron" />
                      </a>
                      <a href="#skins" onClick={(e) => handleLinkClick(e, 'skins')} className="df-link-row">
                        <span>Gaming &amp; Consoles</span>
                        <ChevronRight size={14} className="df-chevron" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 3: THE LAB Card */}
              <div className="df-card-col">
                <div className="df-card-wrapper">
                  <div className="df-card">
                    <div className="df-card-header">
                      <div className="df-icon-pill" style={{ backgroundColor: '#EADDFE' }}>
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M10 2v7.31L4.1 19.38A2 2 0 0 0 5.8 22h12.4a2 2 0 0 0 1.7-2.62L14 9.31V2"/>
                          <line x1="8" y1="2" x2="16" y2="2"/>
                          <line x1="8.5" y1="14" x2="15.5" y2="14"/>
                        </svg>
                      </div>
                      <div className="df-title-wrap">
                        <span className="df-card-title">THE LAB</span>
                        <svg className="df-brush-underline" width="50" height="5" viewBox="0 0 65 8" fill="none">
                          <path d="M2 5C20 2 44 3 63 5" stroke="#D8B4FE" strokeWidth="5.5" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>

                    <div className="df-links-list">
                      <a href="#vibe-lab" onClick={(e) => handleLinkClick(e, 'vibe-lab')} className="df-link-row">
                        <span>Build Your Vibe</span>
                        <ChevronRight size={14} className="df-chevron" />
                      </a>
                      <a href="#sticker-wall" onClick={(e) => handleLinkClick(e, 'sticker-wall')} className="df-link-row">
                        <span>Interactive Sticker Wall</span>
                        <ChevronRight size={14} className="df-chevron" />
                      </a>
                      <a href="#why-chompi" onClick={(e) => handleLinkClick(e, 'why-chompi')} className="df-link-row">
                        <span>3M Cast Vinyl Tech</span>
                        <ChevronRight size={14} className="df-chevron" />
                      </a>
                      <a href="#cta" onClick={(e) => handleLinkClick(e, 'cta')} className="df-link-row">
                        <span>Custom Drops</span>
                        <ChevronRight size={14} className="df-chevron" />
                      </a>
                      <a href="#reviews" onClick={(e) => handleLinkClick(e, 'reviews')} className="df-link-row">
                        <span>Creator Reviews</span>
                        <ChevronRight size={14} className="df-chevron" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 4: Newsletter & Social Cards Stacked */}
              <div className="df-right-stack-col">
                {/* Dark Newsletter Card */}
                <div className="df-newsletter-card">
                  {/* Yellow burst doodle rays at top right */}
                  <svg className="df-news-rays-top" width="22" height="18" viewBox="0 0 28 22" fill="none">
                    <line x1="4" y1="20" x2="10" y2="4" stroke="#F59E0B" strokeWidth="2.8" strokeLinecap="round"/>
                    <line x1="14" y1="20" x2="19" y2="2" stroke="#F59E0B" strokeWidth="2.8" strokeLinecap="round"/>
                    <line x1="22" y1="18" x2="26" y2="8" stroke="#F59E0B" strokeWidth="2.8" strokeLinecap="round"/>
                  </svg>

                  <div className="df-news-top-row">
                    <div className="df-news-icon-pill">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </div>
                    <div className="df-news-title-text">
                      <span className="df-news-title">GET SECRET DROPS + ₹100 OFF</span>
                    </div>
                  </div>

                  <p className="df-news-desc">
                    Be the first to know about new drops, exclusive deals and more.
                  </p>

                  <form onSubmit={handleSubscribe} className="df-news-form">
                    <div className="df-news-input-pill">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="df-news-input"
                        required
                      />
                      <button
                        type="submit"
                        aria-label="Subscribe to newsletter"
                        className="df-news-submit-btn"
                      >
                        {subscribed ? <Check size={16} strokeWidth={3} /> : <ArrowRight size={16} strokeWidth={2.8} />}
                      </button>
                    </div>
                    {subscribed && (
                      <div className="df-news-success-text">
                        ✦ You're in! Use coupon code <strong>CHOMPI100</strong> for ₹100 off.
                      </div>
                    )}
                  </form>
                </div>

                {/* White Social & Studio Card */}
                <div className="df-social-card">
                  <div className="df-social-left">
                    <div className="df-icon-pill" style={{ backgroundColor: '#D1FAE5' }}>
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                    </div>
                    <div className="df-social-info">
                      <div className="df-title-wrap">
                        <span className="df-card-title">SOCIAL &amp; STUDIO</span>
                        <svg className="df-brush-underline" width="65" height="5" viewBox="0 0 85 8" fill="none">
                          <path d="M2 5C26 2 56 3 83 5" stroke="#A7F3D0" strokeWidth="5.5" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <div className="df-studio-sub">
                        <strong>CHOMPI LAB Studio</strong><br />
                        12th Main, Indiranagar, Bengaluru, KA 560038
                      </div>
                    </div>
                  </div>

                  <div className="df-social-icons-row">
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="df-social-btn df-insta-btn">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                      </svg>
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="df-social-btn df-yt-btn">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="#FFFFFF">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                    <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X" className="df-social-btn df-x-btn">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="#FFFFFF">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>



            {/* Cityscape Panorama Spacer */}
            <div className="df-palace-spacer" />
          </div>

          {/* Solid Full-Width Dark Bottom Bar matching reference */}
          <div className="df-bottom-dark-bar">
            <div className="df-bottom-bar-inner">
              <div className="df-copyright-text">
                © 2026 <strong>DELTA X</strong>. All rights reserved.
              </div>
              <div className="df-bottom-nav-links">
                <button
                  type="button"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'instant' });
                    if (window.__replayChompiIntro) {
                      window.__replayChompiIntro();
                    }
                  }}
                  className="df-bottom-btn"
                >
                  Replay Intro ↺
                </button>
                <span className="df-sep">|</span>
                <span className="df-bottom-link">Privacy Policy</span>
                <span className="df-sep">|</span>
                <span className="df-bottom-link">Terms of Service</span>
                <span className="df-sep">|</span>
                <span className="df-bottom-link">Laser Cut Tolerances</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* MOBILE FOOTER VIEW (Max-width: 768px)                       */}
        {/* Exact 1:1 match to Pastel Fantasy Cityscape reference       */}
        {/* ========================================================= */}
        <div className="footer-mobile-view">
          {/* Main wallpaper container so wallpaper background is 100% visible */}
          <div className="mf-wallpaper-body">
            {/* Top Branding Section with Doodles */}
            <div className="mf-top-brand-area">
              {/* Logo Container with Fun Doodles */}
              <div className="mf-logo-wrap">
                {/* Left lightning doodle */}
                <svg className="mf-doodle-lightning" width="28" height="28" viewBox="0 0 40 40" fill="none">
                  <path d="M14 4L6 20H18L13 36L34 16H20L27 4H14Z" stroke="#111111" strokeWidth="2.8" strokeLinejoin="round" fill="none"/>
                </svg>

                {/* Top microphone / sparkle doodle */}
                <svg className="mf-doodle-sparkle-top" width="24" height="20" viewBox="0 0 30 26" fill="none">
                  <path d="M6 14C6 8 10 4 15 4C20 4 24 8 24 14" stroke="#111111" strokeWidth="2.4" strokeLinecap="round"/>
                  <path d="M15 4V1M7 7L4 4M23 7L26 4" stroke="#111111" strokeWidth="2.4" strokeLinecap="round"/>
                </svg>

                {/* Right Crown doodle M1 */}
                <svg className="mf-doodle-crown-top" width="38" height="26" viewBox="0 0 54 36" fill="none">
                  <path d="M6 30L2 12L15 20L24 6L33 20L46 12L42 30H6Z" stroke="#111111" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <text x="35" y="24" fontSize="13" fontWeight="900" fill="#111111" fontFamily="'Space Grotesk', sans-serif">1</text>
                </svg>

                {/* Main Chompi Lab Brand Logo */}
                <img
                  src="/images/chompi_logo.webp"
                  alt="CHOMPI LAB"
                  className="mf-logo-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Subtitle text with yellow curved doodle arrows */}
              <div className="mf-subtitle-wrap">
                <p className="mf-sub-line-1">
                  Stickers &amp; skins for people who don’t do boring.
                </p>
                <div className="mf-sub-line-2-wrap">
                  {/* Left doodle arrow */}
                  <svg className="mf-arrow-left" width="16" height="16" viewBox="0 0 28 28" fill="none">
                    <path d="M22 6C14 6 7 10 7 20M7 20L13 16M7 20L4 14" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>

                  <span className="mf-sub-line-2">
                    Handcrafted with genuine 3M™ Cast Vinyl
                  </span>

                  {/* Right doodle arrow */}
                  <svg className="mf-arrow-right" width="16" height="16" viewBox="0 0 28 28" fill="none">
                    <path d="M6 6C14 6 21 10 21 20M21 20L15 16M21 20L24 14" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="mf-sub-line-3">in India.</p>
              </div>
            </div>

            {/* 4 Feature Badges Row */}
            <div className="mf-badges-grid">
              {/* Badge 1: Premium Quality */}
              <div className="mf-badge-item">
                <div className="mf-badge-circle" style={{ backgroundColor: '#FFE566' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 3h12l4 6-10 12L2 9z"/>
                    <path d="M11 3v6 12"/>
                    <path d="M2 9h20"/>
                  </svg>
                </div>
                <span className="mf-badge-label">Premium<br />Quality</span>
              </div>

              {/* Badge 2: Fast Shipping */}
              <div className="mf-badge-item">
                <div className="mf-badge-circle" style={{ backgroundColor: '#D5EDFF' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13" rx="1"/>
                    <polygon points="16 8 20 8 23 11 23 16 16 16 8"/>
                    <circle cx="5.5" cy="18.5" r="2.5"/>
                    <circle cx="18.5" cy="18.5" r="2.5"/>
                  </svg>
                </div>
                <span className="mf-badge-label">Fast<br />Shipping</span>
              </div>

              {/* Badge 3: Safe Packaging */}
              <div className="mf-badge-item">
                <div className="mf-badge-circle" style={{ backgroundColor: '#E8DCFF' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                </div>
                <span className="mf-badge-label">Safe<br />Packaging</span>
              </div>

              {/* Badge 4: Made in India */}
              <div className="mf-badge-item">
                <div className="mf-badge-circle" style={{ backgroundColor: '#FFD8E4' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#FF477E" stroke="#FF477E" strokeWidth="1.5">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </div>
                <span className="mf-badge-label">Made<br />in India</span>
              </div>
            </div>

            {/* Accordion White Cards Container */}
            <div className="mf-cards-container">
              {/* Card 1: SHOP DROPS */}
              <div className="mf-card">
                <button
                  className="mf-card-header"
                  onClick={() => setOpenShopDrops(!openShopDrops)}
                  type="button"
                  aria-expanded={openShopDrops}
                >
                  <div className="mf-card-title-group">
                    <div className="mf-card-icon-pill" style={{ backgroundColor: '#FFE566' }}>
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                        <line x1="3" y1="6" x2="21" y2="6"/>
                        <path d="M16 10a4 4 0 0 1-8 0"/>
                      </svg>
                    </div>
                    <div className="mf-card-title-wrap">
                      <span className="mf-card-title">SHOP DROPS</span>
                      {/* Yellow brush stroke underline */}
                      <svg className="mf-title-brush" width="50" height="5" viewBox="0 0 70 8" fill="none">
                        <path d="M2 5C22 2 48 3 68 5" stroke="#FFE566" strokeWidth="5.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>
                  <ChevronDown
                    size={16}
                    className={`mf-card-chevron ${openShopDrops ? 'is-open' : ''}`}
                  />
                </button>

                {openShopDrops && (
                  <div className="mf-card-content mf-shop-drops-content">
                    <div className="mf-links-col">
                      <a href="#featured" onClick={(e) => handleLinkClick(e, 'featured')}>All Products</a>
                      <a href="#stickers" onClick={(e) => handleLinkClick(e, 'featured')}>Vinyl Sticker Packs</a>
                      <a href="#skins" onClick={(e) => handleLinkClick(e, 'skins')}>MacBook Skins</a>
                      <a href="#skins" onClick={(e) => handleLinkClick(e, 'skins')}>Phone &amp; Pixel Skins</a>
                      <a href="#skins" onClick={(e) => handleLinkClick(e, 'skins')}>Gaming &amp; Consoles</a>
                    </div>
                  </div>
                )}
              </div>

              {/* Card 2: THE LAB */}
              <div className="mf-card">
                <button
                  className="mf-card-header"
                  onClick={() => setOpenTheLab(!openTheLab)}
                  type="button"
                  aria-expanded={openTheLab}
                >
                  <div className="mf-card-title-group">
                    <div className="mf-card-icon-pill" style={{ backgroundColor: '#EADDFE' }}>
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10 2v7.31L4.1 19.38A2 2 0 0 0 5.8 22h12.4a2 2 0 0 0 1.7-2.62L14 9.31V2"/>
                        <line x1="8" y1="2" x2="16" y2="2"/>
                        <line x1="8.5" y1="14" x2="15.5" y2="14"/>
                      </svg>
                    </div>
                    <div className="mf-card-title-wrap">
                      <span className="mf-card-title">THE LAB</span>
                      {/* Purple brush stroke underline */}
                      <svg className="mf-title-brush" width="46" height="5" viewBox="0 0 65 8" fill="none">
                        <path d="M2 5C20 2 44 3 63 5" stroke="#D8B4FE" strokeWidth="5.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>
                  <ChevronDown
                    size={16}
                    className={`mf-card-chevron ${openTheLab ? 'is-open' : ''}`}
                  />
                </button>

                {openTheLab && (
                  <div className="mf-card-content mf-the-lab-content">
                    <div className="mf-links-col">
                      <a href="#vibe-lab" onClick={(e) => handleLinkClick(e, 'vibe-lab')}>Build Your Vibe</a>
                      <a href="#sticker-wall" onClick={(e) => handleLinkClick(e, 'sticker-wall')}>Interactive Sticker Wall</a>
                      <a href="#why-chompi" onClick={(e) => handleLinkClick(e, 'why-chompi')}>3M Cast Vinyl Tech</a>
                      <a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>Brand Manifesto</a>
                      <a href="#reviews" onClick={(e) => handleLinkClick(e, 'reviews')}>Creator Reviews</a>
                    </div>
                  </div>
                )}
              </div>

              {/* Card 3: SOCIAL & STUDIO */}
              <div className="mf-card">
                <button
                  className="mf-card-header"
                  onClick={() => setOpenSocial(!openSocial)}
                  type="button"
                  aria-expanded={openSocial}
                >
                  <div className="mf-card-title-group">
                    <div className="mf-card-icon-pill" style={{ backgroundColor: '#D1FAE5' }}>
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                    </div>
                    <div className="mf-card-title-wrap">
                      <span className="mf-card-title">SOCIAL &amp; STUDIO</span>
                      {/* Green brush stroke underline */}
                      <svg className="mf-title-brush" width="70" height="5" viewBox="0 0 90 8" fill="none">
                        <path d="M2 5C30 2 60 3 88 5" stroke="#A7F3D0" strokeWidth="5.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>
                  <ChevronDown
                    size={16}
                    className={`mf-card-chevron ${openSocial ? 'is-open' : ''}`}
                  />
                </button>

                {openSocial && (
                  <div className="mf-card-content mf-social-content">
                    <div className="mf-studio-address-group">
                      <div className="mf-studio-title">CHOMPI LAB Studio</div>
                      <div className="mf-studio-desc">12th Main, Indiranagar, Bengaluru, KA 560038</div>
                    </div>

                    {/* 4 Social Pill Icons */}
                    <div className="mf-social-icons-row">
                      {/* Instagram with vibrant gradient */}
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram"
                        className="mf-social-btn mf-insta-btn"
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                        </svg>
                      </a>

                      {/* YouTube with bright red */}
                      <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="YouTube"
                        className="mf-social-btn mf-yt-btn"
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="#FFFFFF">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </a>

                      {/* Discord with blurple */}
                      <a
                        href="https://discord.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Discord"
                        className="mf-social-btn mf-discord-btn"
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="#FFFFFF">
                          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                        </svg>
                      </a>

                      {/* X / Twitter with black */}
                      <a
                        href="https://x.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="X"
                        className="mf-social-btn mf-x-btn"
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="#FFFFFF">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Dark Newsletter Card */}
            <div className="mf-newsletter-card">
              <div className="mf-news-top-row">
                <div className="mf-news-icon-pill">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>

                <div className="mf-news-text-wrap">
                  <div className="mf-news-title-row">
                    <span className="mf-news-title">GET SECRET DROPS + ₹100 OFF</span>
                    {/* Yellow doodle rays */}
                    <svg className="mf-news-rays" width="18" height="14" viewBox="0 0 24 18" fill="none">
                      <line x1="2" y1="16" x2="8" y2="4" stroke="#F59E0B" strokeWidth="2.6" strokeLinecap="round"/>
                      <line x1="12" y1="16" x2="16" y2="2" stroke="#F59E0B" strokeWidth="2.6" strokeLinecap="round"/>
                      <line x1="20" y1="16" x2="22" y2="8" stroke="#F59E0B" strokeWidth="2.6" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <p className="mf-news-desc">
                    Be the first to know about new drops, exclusive deals and more.
                  </p>
                </div>
              </div>

              {/* Input Pill Form */}
              <form onSubmit={handleSubscribe} className="mf-news-form">
                <div className="mf-news-input-pill">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mf-news-input"
                    required
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="mf-news-submit-btn"
                  >
                    {subscribed ? <Check size={14} strokeWidth={3} /> : <ArrowRight size={15} strokeWidth={2.8} />}
                  </button>
                </div>
                {subscribed && (
                  <div className="mf-news-success-text">
                    ✦ You're in! Use coupon code <strong>CHOMPI100</strong> for ₹100 off.
                  </div>
                )}
              </form>
            </div>

            {/* Doodles above Cityscape Base */}
            <div className="mf-cityscape-doodles-row">
              {/* Left curved slogan */}
              <div className="mf-cityscape-doodle-left">
                <svg width="18" height="18" viewBox="0 0 30 30" fill="none">
                  <path d="M15 2L18 10L26 7L21 15L28 20L19 22L18 30L12 23L4 26L8 18L2 13L10 11Z" fill="#FFE566" stroke="#111111" strokeWidth="2.2" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Right curved slogan */}
              <div className="mf-cityscape-doodle-right">
                <div className="mf-city-right-icons">
                  <svg width="16" height="16" viewBox="0 0 30 30" fill="none">
                    <path d="M15 2L18 10L26 7L21 15L28 20L19 22L18 30L12 23L4 26L8 18L2 13L10 11Z" fill="#FFE566" stroke="#111111" strokeWidth="2.2" strokeLinejoin="round"/>
                  </svg>
                  <svg width="22" height="16" viewBox="0 0 36 28" fill="none">
                    <path d="M4 24L2 10L10 16L18 4L26 16L34 10L32 24H4Z" stroke="#111111" strokeWidth="2.4" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Illustrated Cityscape Spacer to show the palaces & palm trees in full glory */}
            <div className="mf-cityscape-spacer" />
          </div>

          {/* Dark Solid Copyright Bar */}
          <div className="mf-bottom-dark-bar">
            <div className="mf-bottom-bar-content">
              <div className="mf-copyright-text">
                © 2026 <strong>DELTA X</strong>. All rights reserved.
              </div>

              <div className="mf-bottom-links-grid">
                <button
                  type="button"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'instant' });
                    if (window.__replayChompiIntro) {
                      window.__replayChompiIntro();
                    }
                  }}
                  className="mf-bottom-link-btn"
                >
                  Replay Intro ↺
                </button>
                <span className="mf-bottom-link">Privacy Policy</span>
                <span className="mf-bottom-link">Terms of Service</span>
                <span className="mf-bottom-link">Laser Cut Tolerances</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scoped CSS Styles for Desktop and Mobile Footers */}
      <style>{`
        .chompi-main-footer {
          position: relative;
          width: 100%;
          box-sizing: border-box;
          overflow: hidden;
        }

        /* -------------------------------------------------- */
        /* DESKTOP FOOTER STYLES                              */
        /* -------------------------------------------------- */
        @media (min-width: 769px) {
          .footer-mobile-view {
            display: none !important;
          }
          .footer-desktop-view {
            display: flex !important;
            flex-direction: column;
            position: relative;
            width: 100%;
            background-image: url('/images/pastel_palace_sunset.webp');
            background-size: cover;
            background-position: center bottom;
            background-repeat: no-repeat;
            padding-top: 32px;
            box-sizing: border-box;
            border-top: 1px solid rgba(17, 17, 17, 0.08);
            font-family: var(--font-body, "Plus Jakarta Sans", sans-serif);
          }

          .df-top-container {
            max-width: 1360px;
            margin: 0 auto;
            padding: 0 32px;
            width: 100%;
            box-sizing: border-box;
            position: relative;
            z-index: 2;
          }

          .df-cards-grid {
            display: grid;
            grid-template-columns: 1.15fr 0.9fr 0.9fr 1.35fr;
            gap: 20px;
            align-items: start;
          }

          /* Column 1: Brand */
          .df-brand-col {
            display: flex;
            flex-direction: column;
            padding-right: 8px;
          }

          .df-logo-wrap {
            position: relative;
            display: inline-flex;
            align-items: center;
            margin-bottom: 4px;
          }

          .df-logo-img {
            height: 60px;
            width: auto;
            object-fit: contain;
          }

          .df-star-doodle {
            position: absolute;
            top: -14px;
            left: -12px;
            animation: dfWobble 4s infinite ease-in-out;
          }

          .df-crown-doodle {
            position: absolute;
            top: -12px;
            right: 12px;
          }

          .df-doodle-left-lines {
            position: absolute;
            left: -18px;
            bottom: 4px;
          }

          .df-doodle-right-swirl {
            position: absolute;
            right: -16px;
            bottom: 0px;
          }

          .df-brand-desc {
            font-size: 13px;
            color: #374151;
            line-height: 1.55;
            font-weight: 500;
            margin: 8px 0 16px;
            max-width: 290px;
          }

          .df-badges-row {
            display: flex;
            align-items: flex-start;
            gap: 10px;
          }

          .df-badge-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 5px;
          }

          .df-badge-circle {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(17, 17, 17, 0.08);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
            transition: transform 0.2s ease;
          }

          .df-badge-circle:hover {
            transform: scale(1.08);
          }

          .df-badge-text {
            font-size: 9.5px;
            font-weight: 700;
            color: #111111;
            line-height: 1.2;
          }

          /* Column 2 & 3: White Cards */
          .df-card-col {
            display: flex;
            flex-direction: column;
          }

          .df-card-wrapper {
            position: relative;
          }

          .df-crown-above-shop {
            position: absolute;
            top: -16px;
            right: -10px;
            z-index: 3;
            transform: rotate(12deg);
          }

          .df-card {
            background: rgba(255, 255, 255, 0.45);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border-radius: 22px;
            padding: 16px 18px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.55);
          }

          .df-card-header {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 12px;
          }

          .df-icon-pill {
            width: 34px;
            height: 34px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            border: 1px solid rgba(17, 17, 17, 0.08);
          }

          .df-title-wrap {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }

          .df-card-title {
            font-size: 13px;
            font-weight: 900;
            letter-spacing: 0.04em;
            color: #111111;
            font-family: var(--font-display, "Space Grotesk", sans-serif);
          }

          .df-brush-underline {
            margin-top: 1px;
          }

          .df-links-list {
            display: flex;
            flex-direction: column;
            gap: 9px;
          }

          .df-link-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 12px;
            font-weight: 600;
            color: #4B5563;
            text-decoration: none;
            transition: all 0.2s ease;
            padding: 2px 0;
          }

          .df-link-row:hover {
            color: #111111;
            transform: translateX(3px);
          }

          .df-chevron {
            color: #9CA3AF;
            transition: transform 0.2s ease, color 0.2s ease;
          }

          .df-link-row:hover .df-chevron {
            color: #111111;
            transform: translateX(2px);
          }

          /* Column 4: Newsletter & Social Stack */
          .df-right-stack-col {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .df-newsletter-card {
            background-color: #13141F;
            border-radius: 22px;
            padding: 16px 20px;
            color: #FFFFFF;
            box-shadow: 0 10px 28px rgba(19, 20, 31, 0.25);
            position: relative;
          }

          .df-news-rays-top {
            position: absolute;
            top: -12px;
            right: -10px;
          }

          .df-news-top-row {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 6px;
          }

          .df-news-icon-pill {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background-color: #EADDFE;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }

          .df-news-title {
            font-size: 12px;
            font-weight: 900;
            letter-spacing: 0.02em;
            color: #FFFFFF;
            font-family: var(--font-display, "Space Grotesk", sans-serif);
          }

          .df-news-desc {
            font-size: 11px;
            color: #9EA3B8;
            margin: 0 0 10px;
            line-height: 1.35;
          }

          .df-news-form {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }

          .df-news-input-pill {
            display: flex;
            align-items: center;
            background-color: #242635;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 999px;
            padding: 2px 4px 2px 14px;
          }

          .df-news-input {
            flex: 1;
            background: none;
            border: none;
            outline: none;
            color: #FFFFFF;
            font-size: 12px;
            font-family: inherit;
          }

          .df-news-input::placeholder {
            color: #8C92A6;
          }

          .df-news-submit-btn {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            background-color: #FFD84D;
            color: #111111;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.2s ease, background-color 0.2s ease;
          }

          .df-news-submit-btn:hover {
            transform: scale(1.08);
            background-color: #FFE566;
          }

          .df-news-success-text {
            font-size: 11px;
            color: #86EFAC;
            margin-top: 4px;
          }

          /* Social Card */
          .df-social-card {
            background: rgba(255, 255, 255, 0.45);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border-radius: 22px;
            padding: 12px 16px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.55);
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
          }

          .df-social-left {
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .df-social-info {
            display: flex;
            flex-direction: column;
            gap: 2px;
          }

          .df-studio-sub {
            font-size: 10px;
            color: #6B7280;
            line-height: 1.35;
          }

          .df-studio-sub strong {
            color: #111111;
          }

          .df-social-icons-row {
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .df-social-btn {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.2s ease;
          }

          .df-social-btn:hover {
            transform: scale(1.1);
          }

          .df-insta-btn {
            background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
          }

          .df-yt-btn {
            background-color: #FF0000;
          }

          .df-x-btn {
            background-color: #000000;
          }

          /* Palace Spacer */
          .df-palace-spacer {
            height: 160px;
            width: 100%;
          }

          /* Bottom Full Width Dark Bar */
          .df-bottom-dark-bar {
            background-color: #07080B;
            color: #E2E4EB;
            padding: 16px 32px 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 28px 28px 0 0;
            position: relative;
            margin-top: -36px;
            z-index: 5;
            box-shadow: 0 -8px 24px rgba(0, 0, 0, 0.35);
          }

          .df-bottom-bar-inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            max-width: 1360px;
            margin: 0 auto;
            width: 100%;
            font-size: 11.5px;
          }

          .df-copyright-text {
            color: #9EA3B8;
            font-weight: 500;
          }

          .df-bottom-nav-links {
            display: flex;
            align-items: center;
            gap: 14px;
          }

          .df-bottom-btn {
            background: none;
            border: none;
            padding: 0;
            color: #E2E4EB;
            font-size: 11.5px;
            font-weight: 600;
            cursor: pointer;
            transition: color 0.2s ease;
          }

          .df-bottom-btn:hover {
            color: #FFD84D;
          }

          .df-bottom-link {
            color: #9EA3B8;
            font-weight: 500;
            cursor: pointer;
            font-size: 11.5px;
            transition: color 0.2s ease;
          }

          .df-bottom-link:hover {
            color: #FFFFFF;
          }

          .df-sep {
            color: rgba(255, 255, 255, 0.2);
            font-size: 11px;
          }

          @keyframes dfWobble {
            0%, 100% { transform: rotate(0deg) scale(1); }
            50% { transform: rotate(6deg) scale(1.05); }
          }
        }

        /* -------------------------------------------------- */
        /* MOBILE FOOTER STYLES                               */
        /* Exact 1:1 match to Pastel Fantasy Cityscape mockup */
        /* -------------------------------------------------- */
        @media (max-width: 768px) {
          .footer-desktop-view {
            display: none !important;
          }

          .footer-mobile-view {
            display: flex !important;
            flex-direction: column;
            position: relative;
            width: 100%;
            box-sizing: border-box;
            border-top: 1.5px solid rgba(17, 17, 17, 0.08);
            font-family: var(--font-body, "Plus Jakarta Sans", sans-serif);
            background-color: transparent;
          }

          /* The wallpaper container matches native aspect ratio */
          .mf-wallpaper-body {
            position: relative;
            width: 100%;
            background-image: url('/images/pastel_cityscape_wallpaper.webp');
            background-size: 100% 100%;
            background-position: center top;
            background-repeat: no-repeat;
            padding: 24px 14px 0;
            box-sizing: border-box;
          }

          /* Top Branding */
          .mf-top-brand-area {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            margin-bottom: 14px;
            position: relative;
          }

          .mf-logo-wrap {
            position: relative;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 6px;
            padding: 2px 10px;
          }

          .mf-logo-img {
            height: 52px;
            width: auto;
            object-fit: contain;
            filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.06));
          }

          .mf-doodle-lightning {
            position: absolute;
            left: -14px;
            top: -8px;
            animation: mfFloat 3s infinite ease-in-out;
          }

          .mf-doodle-sparkle-top {
            position: absolute;
            top: -10px;
            left: 54%;
            transform: translateX(-50%);
          }

          .mf-doodle-crown-top {
            position: absolute;
            right: -18px;
            top: -6px;
            animation: mfWobble 4s infinite ease-in-out;
          }

          .mf-subtitle-wrap {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1px;
          }

          .mf-sub-line-1,
          .mf-sub-line-3 {
            font-size: 11.5px;
            font-weight: 600;
            color: #2D2D2D;
            margin: 0;
            line-height: 1.35;
          }

          .mf-sub-line-2-wrap {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 4px;
          }

          .mf-sub-line-2 {
            font-size: 11.5px;
            font-weight: 600;
            color: #2D2D2D;
            line-height: 1.35;
          }

          .mf-arrow-left,
          .mf-arrow-right {
            flex-shrink: 0;
          }

          /* 4 Badges */
          .mf-badges-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 6px;
            max-width: 305px;
            margin: 0 auto 16px;
          }

          .mf-badge-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 4px;
          }

          .mf-badge-circle {
            width: 38px;
            height: 38px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(17, 17, 17, 0.08);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
            transition: transform 0.2s ease;
          }

          .mf-badge-circle:hover {
            transform: scale(1.06);
          }

          .mf-badge-label {
            font-size: 9.5px;
            font-weight: 700;
            line-height: 1.2;
            color: #111111;
          }

          /* Cards Container */
          .mf-cards-container {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-bottom: 12px;
          }

          .mf-card {
            background: #FFFFFF;
            border-radius: 18px;
            padding: 12px 14px;
            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02);
            border: 1px solid rgba(17, 17, 17, 0.05);
            transition: all 0.2s ease;
          }

          .mf-card-header {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: none;
            border: none;
            padding: 0;
            cursor: pointer;
            text-align: left;
          }

          .mf-card-title-group {
            display: flex;
            align-items: center;
            gap: 9px;
          }

          .mf-card-icon-pill {
            width: 34px;
            height: 34px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            border: 1px solid rgba(17, 17, 17, 0.06);
          }

          .mf-card-title-wrap {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }

          .mf-card-title {
            font-size: 12.5px;
            font-weight: 900;
            letter-spacing: 0.04em;
            color: #111111;
            font-family: var(--font-display, "Space Grotesk", sans-serif);
          }

          .mf-title-brush {
            margin-top: 1px;
          }

          .mf-card-chevron {
            color: #111111;
            transition: transform 0.25s ease;
          }

          .mf-card-chevron.is-open {
            transform: rotate(180deg);
          }

          .mf-card-content {
            margin-top: 10px;
            padding-top: 8px;
            border-top: 1px dashed rgba(17, 17, 17, 0.08);
            position: relative;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }

          .mf-links-col {
            display: flex;
            flex-direction: column;
            gap: 6px;
          }

          .mf-links-col a {
            font-size: 11.5px;
            font-weight: 600;
            color: #444444;
            text-decoration: none;
            transition: color 0.2s ease, transform 0.2s ease;
            display: inline-block;
          }

          .mf-links-col a:hover {
            color: #111111;
            transform: translateX(3px);
          }

          /* Social Content */
          .mf-social-content {
            flex-direction: column;
            gap: 8px;
            position: relative;
          }

          .mf-studio-address-group {
            display: flex;
            flex-direction: column;
            gap: 2px;
          }

          .mf-studio-title {
            font-size: 12px;
            font-weight: 800;
            color: #111111;
          }

          .mf-studio-desc {
            font-size: 11px;
            font-weight: 500;
            color: #666666;
            line-height: 1.35;
          }

          .mf-social-icons-row {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-top: 2px;
          }

          .mf-social-btn {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            transition: transform 0.2s ease;
          }

          .mf-social-btn:hover {
            transform: scale(1.1);
          }

          .mf-insta-btn {
            background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
          }

          .mf-yt-btn {
            background-color: #FF0000;
          }

          .mf-discord-btn {
            background-color: #5865F2;
          }

          .mf-x-btn {
            background-color: #000000;
          }

          /* Newsletter Card */
          .mf-newsletter-card {
            background-color: #13141F;
            border-radius: 18px;
            padding: 14px;
            color: #FFFFFF;
            box-shadow: 0 10px 30px rgba(19, 20, 31, 0.25);
            margin-bottom: 12px;
            position: relative;
            overflow: hidden;
          }

          .mf-news-top-row {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            margin-bottom: 12px;
          }

          .mf-news-icon-pill {
            width: 34px;
            height: 34px;
            border-radius: 50%;
            background-color: #EADDFE;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }

          .mf-news-text-wrap {
            display: flex;
            flex-direction: column;
            gap: 2px;
          }

          .mf-news-title-row {
            display: flex;
            align-items: center;
            gap: 5px;
          }

          .mf-news-title {
            font-size: 11.5px;
            font-weight: 900;
            letter-spacing: 0.02em;
            color: #FFFFFF;
            font-family: var(--font-display, "Space Grotesk", sans-serif);
          }

          .mf-news-desc {
            font-size: 10.5px;
            color: #9EA3B8;
            margin: 0;
            line-height: 1.35;
          }

          .mf-news-form {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }

          .mf-news-input-pill {
            display: flex;
            align-items: center;
            background-color: #242635;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 999px;
            padding: 2px 4px 2px 14px;
          }

          .mf-news-input {
            flex: 1;
            background: none;
            border: none;
            outline: none;
            color: #FFFFFF;
            font-size: 11.5px;
            font-family: inherit;
          }

          .mf-news-input::placeholder {
            color: #8C92A6;
          }

          .mf-news-submit-btn {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            background-color: #FFD84D;
            color: #111111;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.2s ease, background-color 0.2s ease;
          }

          .mf-news-submit-btn:hover {
            transform: scale(1.06);
            background-color: #FFE566;
          }

          .mf-news-success-text {
            font-size: 10.5px;
            color: #86EFAC;
            margin-top: 2px;
            padding-left: 8px;
          }

          /* Cityscape Doodles Row */
          .mf-cityscape-doodles-row {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin-top: 4px;
            margin-bottom: 2px;
            padding: 0 4px;
          }

          .mf-cityscape-doodle-left {
            display: flex;
            align-items: center;
            gap: 4px;
            transform: rotate(-3deg);
          }

          .mf-city-text-left {
            font-size: 10px;
            font-weight: 900;
            color: #111111;
            line-height: 1.15;
            font-family: var(--font-display, "Space Grotesk", sans-serif);
            text-shadow: 0 1px 3px rgba(255, 255, 255, 0.95), 0 0 6px rgba(255, 255, 255, 0.85);
          }

          .mf-cityscape-doodle-right {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 2px;
            transform: rotate(3deg);
          }

          .mf-city-right-icons {
            display: flex;
            align-items: center;
            gap: 5px;
          }

          .mf-city-text-right {
            font-size: 10.5px;
            font-weight: 900;
            color: #111111;
            text-align: right;
            line-height: 1.15;
            font-family: var(--font-display, "Space Grotesk", sans-serif);
            text-shadow: 0 1px 3px rgba(255, 255, 255, 0.95), 0 0 6px rgba(255, 255, 255, 0.85);
          }

          /* Spacer to allow full view of background palaces and palm trees */
          .mf-cityscape-spacer {
            height: 140px;
            width: 100%;
          }

          /* Bottom Solid Dark Bar */
          .mf-bottom-dark-bar {
            background-color: #07080B;
            color: #E2E4EB;
            padding: 18px 16px 24px;
            border-top: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 28px 28px 0 0;
            position: relative;
            margin-top: -36px;
            z-index: 5;
            box-shadow: 0 -8px 24px rgba(0, 0, 0, 0.35);
          }

          .mf-bottom-bar-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 12px;
          }

          .mf-copyright-text {
            font-size: 11px;
            color: #9EA3B8;
            line-height: 1.5;
            font-weight: 500;
            text-align: center;
          }

          .mf-bottom-links-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 8px 16px;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            padding-top: 12px;
            width: 100%;
          }

          .mf-bottom-link-btn {
            background: none;
            border: none;
            padding: 0;
            color: #E2E4EB;
            font-size: 10.5px;
            font-weight: 600;
            cursor: pointer;
            text-align: center;
            transition: color 0.2s ease;
          }

          .mf-bottom-link-btn:hover {
            color: #FFD84D;
          }

          .mf-bottom-link {
            font-size: 10.5px;
            color: #9EA3B8;
            font-weight: 500;
            cursor: pointer;
            text-align: center;
            transition: color 0.2s ease;
          }

          .mf-bottom-link:hover {
            color: #FFFFFF;
          }

          @keyframes mfFloat {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-3px) rotate(3deg); }
          }

          @keyframes mfWobble {
            0%, 100% { transform: rotate(0deg) scale(1); }
            50% { transform: rotate(4deg) scale(1.04); }
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
