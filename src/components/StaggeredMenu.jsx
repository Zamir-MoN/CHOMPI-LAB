import React, { useCallback, useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { sound } from '../utils/audio';

export const StaggeredMenu = ({
  position = 'right',
  colors = ['#FFD84D', '#FF7548', '#FF3388', '#4DA2FF'],
  items = [],
  socialItems = [
    { label: 'Instagram', link: 'https://instagram.com' },
    { label: 'Twitter / X', link: 'https://x.com' },
    { label: 'Discord', link: 'https://discord.com' },
    { label: 'YouTube', link: 'https://youtube.com' },
  ],
  displaySocials = true,
  displayItemNumbering = true,
  className = '',
  logoUrl = '/images/chompi_logo.webp',
  menuButtonColor = '#111111',
  openMenuButtonColor = '#111111',
  changeMenuColorOnOpen = true,
  accentColor = '#FF7548',
  isFixed = true,
  closeOnClickAway = true,
  isOpen = undefined,
  onMenuOpen,
  onMenuClose,
  onSelectItem,
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = isOpen !== undefined;
  const open = isControlled ? isOpen : internalOpen;
  const openRef = useRef(open);

  const panelRef = useRef(null);
  const preLayersRef = useRef(null);
  const preLayerElsRef = useRef([]);

  const plusHRef = useRef(null);
  const plusVRef = useRef(null);
  const iconRef = useRef(null);

  const textInnerRef = useRef(null);
  const textWrapRef = useRef(null);
  const [textLines, setTextLines] = useState(['Menu', 'Close']);

  const openTlRef = useRef(null);
  const closeTweenRef = useRef(null);
  const spinTweenRef = useRef(null);
  const textCycleAnimRef = useRef(null);
  const colorTweenRef = useRef(null);

  const toggleBtnRef = useRef(null);
  const busyRef = useRef(false);
  const itemEntranceTweenRef = useRef(null);

  useEffect(() => {
    openRef.current = open;
  }, [open]);

  // Initial offscreen placement
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panel = panelRef.current;
      const preContainer = preLayersRef.current;

      const plusH = plusHRef.current;
      const plusV = plusVRef.current;
      const icon = iconRef.current;
      const textInner = textInnerRef.current;

      if (!panel || !preContainer) return;

      const preLayers = Array.from(preContainer.querySelectorAll('.sm-prelayer'));
      preLayerElsRef.current = preLayers;

      const offscreen = position === 'left' ? -100 : 100;
      gsap.set([panel, ...preLayers], { xPercent: offscreen, opacity: 1 });
      gsap.set(preContainer, { xPercent: 0, opacity: 1 });

      if (plusH && plusV && icon) {
        gsap.set(plusH, { transformOrigin: '50% 50%', rotate: 0 });
        gsap.set(plusV, { transformOrigin: '50% 50%', rotate: 90 });
        gsap.set(icon, { rotate: 0, transformOrigin: '50% 50%' });
      }

      if (textInner) {
        gsap.set(textInner, { yPercent: 0 });
      }

      if (toggleBtnRef.current) gsap.set(toggleBtnRef.current, { color: menuButtonColor });
    });
    return () => ctx.revert();
  }, [menuButtonColor, position]);

  const buildOpenTimeline = useCallback(() => {
    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return null;

    openTlRef.current?.kill();
    if (closeTweenRef.current) {
      closeTweenRef.current.kill();
      closeTweenRef.current = null;
    }
    itemEntranceTweenRef.current?.kill();

    const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel'));
    const numberEls = Array.from(
      panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item')
    );
    const socialTitle = panel.querySelector('.sm-socials-title');
    const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link'));

    const offscreen = position === 'left' ? -100 : 100;
    const layerStates = layers.map((el) => ({ el, start: offscreen }));
    const panelStart = offscreen;

    if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 });
    if (numberEls.length) gsap.set(numberEls, { '--sm-num-opacity': 0 });
    if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
    if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    layerStates.forEach((ls, i) => {
      tl.fromTo(ls.el, { xPercent: ls.start }, { xPercent: 0, duration: 0.5, ease: 'power4.out' }, i * 0.07);
    });

    const lastTime = layerStates.length ? (layerStates.length - 1) * 0.07 : 0;
    const panelInsertTime = lastTime + (layerStates.length ? 0.08 : 0);
    const panelDuration = 0.65;

    tl.fromTo(
      panel,
      { xPercent: panelStart },
      { xPercent: 0, duration: panelDuration, ease: 'power4.out' },
      panelInsertTime
    );

    if (itemEls.length) {
      const itemsStartRatio = 0.15;
      const itemsStart = panelInsertTime + panelDuration * itemsStartRatio;

      tl.to(
        itemEls,
        { yPercent: 0, rotate: 0, duration: 0.9, ease: 'power4.out', stagger: { each: 0.08, from: 'start' } },
        itemsStart
      );

      if (numberEls.length) {
        tl.to(
          numberEls,
          { duration: 0.5, ease: 'power2.out', '--sm-num-opacity': 1, stagger: { each: 0.06, from: 'start' } },
          itemsStart + 0.1
        );
      }
    }

    if (socialTitle || socialLinks.length) {
      const socialsStart = panelInsertTime + panelDuration * 0.4;

      if (socialTitle) tl.to(socialTitle, { opacity: 1, duration: 0.45, ease: 'power2.out' }, socialsStart);
      if (socialLinks.length) {
        tl.to(
          socialLinks,
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: 'power3.out',
            stagger: { each: 0.07, from: 'start' },
            onComplete: () => {
              gsap.set(socialLinks, { clearProps: 'opacity' });
            },
          },
          socialsStart + 0.04
        );
      }
    }

    openTlRef.current = tl;
    return tl;
  }, [position]);

  const playOpen = useCallback(() => {
    // Kill any active closing animation immediately
    if (closeTweenRef.current) {
      closeTweenRef.current.kill();
      closeTweenRef.current = null;
    }
    busyRef.current = true;
    const tl = buildOpenTimeline();
    if (tl) {
      tl.eventCallback('onComplete', () => {
        busyRef.current = false;
      });
      tl.play(0);
    } else {
      busyRef.current = false;
    }
  }, [buildOpenTimeline]);

  const playClose = useCallback(() => {
    openTlRef.current?.kill();
    openTlRef.current = null;
    itemEntranceTweenRef.current?.kill();

    const panel = panelRef.current;
    const layers = preLayerElsRef.current && preLayerElsRef.current.length > 0
      ? preLayerElsRef.current
      : (preLayersRef.current ? Array.from(preLayersRef.current.querySelectorAll('.sm-prelayer')) : []);
    if (!panel) return;

    const all = [...layers, panel];
    closeTweenRef.current?.kill();

    const offscreen = position === 'left' ? -100 : 100;

    closeTweenRef.current = gsap.to(all, {
      xPercent: offscreen,
      duration: 0.32,
      ease: 'power3.in',
      overwrite: 'auto',
      onComplete: () => {
        const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel'));
        if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 });

        const numberEls = Array.from(
          panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item')
        );
        if (numberEls.length) gsap.set(numberEls, { '--sm-num-opacity': 0 });

        const socialTitle = panel.querySelector('.sm-socials-title');
        const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link'));
        if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
        if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 });

        busyRef.current = false;
        closeTweenRef.current = null;
      },
    });
  }, [position]);

  const animateIcon = useCallback((opening) => {
    const icon = iconRef.current;
    const h = plusHRef.current;
    const v = plusVRef.current;
    if (!icon || !h || !v) return;

    spinTweenRef.current?.kill();

    if (opening) {
      gsap.set(icon, { rotate: 0, transformOrigin: '50% 50%' });
      spinTweenRef.current = gsap
        .timeline({ defaults: { ease: 'power4.out' } })
        .to(h, { rotate: 45, duration: 0.5 }, 0)
        .to(v, { rotate: -45, duration: 0.5 }, 0);
    } else {
      spinTweenRef.current = gsap
        .timeline({ defaults: { ease: 'power3.inOut' } })
        .to(h, { rotate: 0, duration: 0.35 }, 0)
        .to(v, { rotate: 90, duration: 0.35 }, 0)
        .to(icon, { rotate: 0, duration: 0.001 }, 0);
    }
  }, []);

  const animateColor = useCallback(
    (opening) => {
      const btn = toggleBtnRef.current;
      if (!btn) return;
      colorTweenRef.current?.kill();
      if (changeMenuColorOnOpen) {
        const targetColor = opening ? openMenuButtonColor : menuButtonColor;
        colorTweenRef.current = gsap.to(btn, { color: targetColor, delay: 0.18, duration: 0.3, ease: 'power2.out' });
      } else {
        gsap.set(btn, { color: menuButtonColor });
      }
    },
    [openMenuButtonColor, menuButtonColor, changeMenuColorOnOpen]
  );

  const animateText = useCallback((opening) => {
    const inner = textInnerRef.current;
    if (!inner) return;

    textCycleAnimRef.current?.kill();

    const currentLabel = opening ? 'Menu' : 'Close';
    const targetLabel = opening ? 'Close' : 'Menu';
    const cycles = 3;

    const seq = [currentLabel];
    let last = currentLabel;
    for (let i = 0; i < cycles; i++) {
      last = last === 'Menu' ? 'Close' : 'Menu';
      seq.push(last);
    }
    if (last !== targetLabel) seq.push(targetLabel);
    seq.push(targetLabel);

    setTextLines(seq);
    gsap.set(inner, { yPercent: 0 });

    const lineCount = seq.length;
    const finalShift = ((lineCount - 1) / lineCount) * 100;

    textCycleAnimRef.current = gsap.to(inner, {
      yPercent: -finalShift,
      duration: 0.5 + lineCount * 0.07,
      ease: 'power4.out',
    });
  }, []);

  // Prevent playClose from triggering on initial page mount
  const isFirstMount = useRef(true);

  // React to controlled or internal open state changes
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      if (!open) return;
    }

    if (open) {
      document.body.style.overflow = 'hidden';
      playOpen();
      animateIcon(true);
      animateColor(true);
      animateText(true);
    } else {
      document.body.style.overflow = '';
      playClose();
      animateIcon(false);
      animateColor(false);
      animateText(false);
    }
  }, [open, playOpen, playClose, animateIcon, animateColor, animateText]);

  const toggleMenu = useCallback(() => {
    const target = !openRef.current;
    try {
      sound?.pop?.(target ? 520 : 440);
    } catch {}
    if (!isControlled) {
      setInternalOpen(target);
    }
    if (target) {
      onMenuOpen?.();
    } else {
      onMenuClose?.();
    }
  }, [isControlled, onMenuOpen, onMenuClose]);

  const closeMenu = useCallback(() => {
    try {
      sound?.pop?.(440);
    } catch {}
    if (!isControlled) {
      setInternalOpen(false);
    }
    onMenuClose?.();
  }, [isControlled, onMenuClose]);

  const handleItemClick = (e, item) => {
    e.preventDefault();
    try {
      sound?.pop?.(620);
    } catch {}
    if (onSelectItem) {
      onSelectItem(item);
    }
    closeMenu();
  };

  useEffect(() => {
    if (!closeOnClickAway || !open) return;

    const handleClickOutside = (event) => {
      // Don't trigger click-outside if clicking on the hamburger toggle button
      const hamburger = document.querySelector('.mobile-menu-btn');
      if (hamburger && hamburger.contains(event.target)) {
        return;
      }

      if (
        panelRef.current &&
        !panelRef.current.contains(event.target) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside, { passive: true });
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [closeOnClickAway, open, closeMenu]);

  return (
    <div
      className={`sm-scope ${isFixed ? 'sm-fixed-scope' : 'sm-relative-scope'}`}
      style={{ pointerEvents: open ? 'auto' : 'none' }}
    >
      <div
        className={`staggered-menu-wrapper ${className} ${open ? 'is-open' : ''}`}
        style={{
          '--sm-accent': accentColor,
        }}
        data-position={position}
        data-open={open || undefined}
      >
        {/* Soft Backdrop overlay when open */}
        <div
          className="sm-backdrop"
          onClick={closeMenu}
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            opacity: open ? 1 : 0,
            pointerEvents: open ? 'auto' : 'none',
            transition: 'opacity 0.35s ease',
            zIndex: 1,
          }}
        />

        {/* Layered brand color curtains that slide in staggered order */}
        <div ref={preLayersRef} className="sm-prelayers" aria-hidden="true">
          {colors.map((c, i) => (
            <div
              key={i}
              className="sm-prelayer"
              style={{ backgroundColor: c }}
            />
          ))}
        </div>

        {/* Main Staggered Slide-In Panel */}
        <aside
          id="staggered-menu-panel"
          ref={panelRef}
          className="staggered-menu-panel"
          aria-hidden={!open}
        >
          {/* Panel Top Header Bar with Brand Logo & Animated Close Toggle */}
          <div className="sm-panel-top-bar">
            <div className="sm-logo" aria-label="Logo">
              <img
                src={logoUrl}
                alt="CHOMPI LAB"
                className="sm-logo-img"
                draggable={false}
              />
            </div>

            <button
              ref={toggleBtnRef}
              className="sm-toggle"
              aria-label="Close menu"
              onClick={closeMenu}
              type="button"
            >
              <span ref={textWrapRef} className="sm-toggle-textWrap" aria-hidden="true">
                <span ref={textInnerRef} className="sm-toggle-textInner">
                  {textLines.map((l, i) => (
                    <span className="sm-toggle-line" key={i}>
                      {l}
                    </span>
                  ))}
                </span>
              </span>

              <span ref={iconRef} className="sm-icon" aria-hidden="true">
                <span ref={plusHRef} className="sm-icon-line sm-icon-line-h" />
                <span ref={plusVRef} className="sm-icon-line sm-icon-line-v" />
              </span>
            </button>
          </div>

          <div className="sm-panel-inner">
            {/* Numbered Category Navigation List */}
            <ul
              className="sm-panel-list"
              role="list"
              data-numbering={displayItemNumbering || undefined}
            >
              {items && items.length > 0 ? (
                items.map((it, idx) => (
                  <li className="sm-panel-itemWrap" key={it.label + idx}>
                    <a
                      className="sm-panel-item"
                      href={it.link || `#${it.id}`}
                      aria-label={it.ariaLabel || it.label}
                      data-index={idx + 1}
                      onClick={(e) => handleItemClick(e, it)}
                    >
                      <span className="sm-panel-itemLabel">
                        {it.label}
                      </span>
                    </a>
                  </li>
                ))
              ) : null}
            </ul>

            {/* Social Links Footer Section */}
            {displaySocials && socialItems && socialItems.length > 0 && (
              <div className="sm-socials" aria-label="Social links">
                <h3 className="sm-socials-title">✦ Connect with the Lab</h3>
                <ul className="sm-socials-list" role="list">
                  {socialItems.map((s, i) => (
                    <li key={s.label + i} className="sm-socials-item">
                      <a
                        href={s.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sm-socials-link"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="sm-panel-brand-badge">
                  <span>CHOMPI LAB © 2026</span>
                  <span>•</span>
                  <span>BENGALURU // MUMBAI</span>
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>

      <style>{`
        .sm-scope {
          font-family: var(--font-display, "Space Grotesk", sans-serif);
        }

        .sm-scope.sm-fixed-scope {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          z-index: 1050;
        }

        .sm-scope.sm-relative-scope {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .sm-scope .staggered-menu-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          z-index: 40;
        }

        .sm-scope .sm-prelayers {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: clamp(300px, 48vw, 520px);
          pointer-events: none;
          z-index: 5;
        }

        .sm-scope [data-position='left'] .sm-prelayers {
          right: auto;
          left: 0;
        }

        .sm-scope .sm-prelayer {
          position: absolute;
          top: 0;
          right: 0;
          height: 100%;
          width: 100%;
          will-change: transform;
        }

        .sm-scope .sm-panel-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding-bottom: 2rem;
          user-select: none;
        }

        .sm-scope .sm-logo {
          display: flex;
          align-items: center;
          user-select: none;
        }

        .sm-scope .sm-logo-img {
          display: block;
          height: 34px;
          width: auto;
          object-fit: contain;
          filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.08));
        }

        .sm-scope .sm-toggle {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(17, 17, 17, 0.1);
          border-radius: 999px;
          padding: 8px 16px;
          cursor: pointer;
          color: #111111;
          font-weight: 800;
          font-size: 13px;
          letter-spacing: 0.02em;
          line-height: 1;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
          backdrop-filter: blur(12px);
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .sm-scope .sm-toggle:hover {
          transform: scale(1.04);
          background: #FFFFFF;
        }

        .sm-scope .sm-toggle-textWrap {
          position: relative;
          display: inline-block;
          height: 1.1em;
          overflow: hidden;
          white-space: nowrap;
          width: auto;
        }

        .sm-scope .sm-toggle-textInner {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

        .sm-scope .sm-toggle-line {
          display: block;
          height: 1.1em;
          line-height: 1.1;
          font-weight: 800;
        }

        .sm-scope .sm-icon {
          position: relative;
          width: 14px;
          height: 14px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          will-change: transform;
        }

        .sm-scope .sm-icon-line {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 100%;
          height: 2.2px;
          background: currentColor;
          border-radius: 2px;
          transform: translate(-50%, -50%);
          will-change: transform;
        }

        .sm-scope .staggered-menu-panel {
          position: absolute;
          top: 0;
          right: 0;
          width: clamp(300px, 48vw, 520px);
          height: 100%;
          background: #FDFBF5;
          border-left: 1.5px solid rgba(17, 17, 17, 0.08);
          box-shadow: -15px 0 50px rgba(0, 0, 0, 0.15);
          display: flex;
          flex-direction: column;
          padding: 1.75rem 2rem 2rem 2rem;
          overflow-y: auto;
          z-index: 10;
          pointer-events: auto;
        }

        .sm-scope [data-position='left'] .staggered-menu-panel {
          right: auto;
          left: 0;
          border-left: none;
          border-right: 1.5px solid rgba(17, 17, 17, 0.08);
        }

        .sm-scope .sm-panel-inner {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1.5rem;
        }

        .sm-scope .sm-panel-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .sm-scope .sm-panel-itemWrap {
          position: relative;
          overflow: hidden;
          line-height: 1.1;
        }

        .sm-scope .sm-panel-item {
          position: relative;
          color: #111111;
          font-family: var(--font-display, "Space Grotesk", sans-serif);
          font-weight: 800;
          font-size: clamp(2rem, 7.5vw, 3.2rem);
          cursor: pointer;
          line-height: 1.05;
          letter-spacing: -0.03em;
          text-transform: uppercase;
          transition: color 0.2s ease, transform 0.2s ease;
          display: inline-block;
          text-decoration: none;
          padding-right: 2.2em;
        }

        .sm-scope .sm-panel-item:hover {
          color: var(--sm-accent, #FF7548);
          transform: translateX(6px);
        }

        .sm-scope .sm-panel-itemLabel {
          display: inline-block;
          will-change: transform;
          transform-origin: 50% 100%;
        }

        .sm-scope .sm-panel-list[data-numbering] {
          counter-reset: smItem;
        }

        .sm-scope .sm-panel-list[data-numbering] .sm-panel-item::after {
          counter-increment: smItem;
          content: counter(smItem, decimal-leading-zero);
          position: absolute;
          top: 0.15em;
          right: 0.8em;
          font-family: var(--font-sans, sans-serif);
          font-size: 14px;
          font-weight: 800;
          color: var(--sm-accent, #FF7548);
          letter-spacing: 0;
          pointer-events: none;
          user-select: none;
          opacity: var(--sm-num-opacity, 0);
          transition: opacity 0.3s ease;
        }

        .sm-scope .sm-socials {
          margin-top: auto;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(17, 17, 17, 0.08);
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .sm-scope .sm-socials-title {
          margin: 0;
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--sm-accent, #FF7548);
        }

        .sm-scope .sm-socials-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        .sm-scope .sm-socials-link {
          font-size: 1.05rem;
          font-weight: 700;
          color: #222222;
          text-decoration: none;
          position: relative;
          display: inline-block;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .sm-scope .sm-socials-link:hover {
          color: var(--sm-accent, #FF7548);
          transform: translateY(-2px);
        }

        .sm-scope .sm-panel-brand-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 700;
          color: #888888;
          letter-spacing: 0.06em;
          margin-top: 0.5rem;
        }

        /* Mobile full-screen panel */
        @media (max-width: 768px) {
          .sm-scope .staggered-menu-panel,
          .sm-scope .sm-prelayers {
            width: 100% !important;
            left: 0 !important;
            right: 0 !important;
          }

          .sm-scope .staggered-menu-panel {
            padding: 5.5em 1.5em 1.75em 1.5em;
          }

          .sm-scope .sm-panel-item {
            font-size: clamp(2rem, 9.5vw, 2.8rem);
          }

          .sm-scope .staggered-menu-header {
            padding: 1rem 1.25rem;
          }
        }
      `}</style>
    </div>
  );
};

export default StaggeredMenu;
