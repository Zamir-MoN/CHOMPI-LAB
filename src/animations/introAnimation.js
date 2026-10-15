import gsap from 'gsap';

let activeIntroCtx = null;

/**
 * Geometric Stepped Wipe Intro Animation for CHOMPI LAB
 * 
 * Reveals the actual landing page directly through the geometric stepped aperture!
 * 
 * Sequence:
 * 0.00 - 0.40s: Initial black screen hold
 * 0.40 - 1.05s: White die-cut logo + subtitle reveal (opacity 0 -> 1, scale 0.94 -> 1)
 * 1.05 - 2.15s: Relaxed anticipation hold (~1.1s)
 * 2.15 - 2.45s: Center logo & text fade out gently (opacity 1 -> 0)
 * 2.45 - 3.65s: Black shutters part ways from the center, revealing the REAL LANDING PAGE through the stepped aperture
 * 3.35 - 3.80s: Landing page elements settle seamlessly
 * 3.70s: All black corner shutters exit viewport; preloader unmounts with display: 'none'
 */
export function playIntro({
  container,
  textWrap,
  logoElement,
  subtextElement,
  shutterRows = [],
  onRevealLandingPage,
  onComplete,
}) {
  destroyIntro();

  activeIntroCtx = gsap.context(() => {
    // 0. Initial styles & setup
    gsap.set(container, {
      display: 'block',
      backgroundColor: 'transparent',
      opacity: 1,
      pointerEvents: 'auto',
    });

    if (textWrap) {
      gsap.set(textWrap, { opacity: 1 });
    }

    gsap.set([logoElement, subtextElement].filter(Boolean), {
      opacity: 0,
      scale: 0.94,
      y: 0,
    });

    // All left and right black shutters start closed at 0% (covering the screen)
    shutterRows.forEach(({ left, right }) => {
      if (left) gsap.set(left, { xPercent: 0, force3D: true });
      if (right) gsap.set(right, { xPercent: 0, force3D: true });
    });

    // Master Timeline
    const intro = gsap.timeline({
      defaults: {
        ease: 'power3.inOut',
      },
      onComplete: () => {
        if (container) {
          container.style.display = 'none';
          container.style.pointerEvents = 'none';
        }
        if (onComplete) onComplete();
      },
    });

    // 1. Initial Black Screen Hold & Botanical Bloom (0.0s -> 0.40s)
    intro.to({}, { duration: 0.20 });

    // 2. Garden Canvas & Subtext Reveal (0.20s -> 0.85s)
    if (logoElement) {
      intro.to(
        logoElement,
        {
          opacity: 1,
          scale: 1,
          duration: 0.75,
          ease: 'power2.out',
        },
        0.20
      );
    }

    if (subtextElement) {
      intro.to(
        subtextElement,
        {
          opacity: 0.75,
          scale: 1,
          duration: 0.70,
          ease: 'power2.out',
        },
        0.70
      );
    }

    // 3. Relaxed Full Bloom Anticipation Hold (0.85s -> 2.85s, allowing roses to unfurl & breathe)
    intro.to({}, { duration: 2.00 });

    // 4. Center Botanical Garden & Subtext Fade Out (2.85s -> 3.15s)
    intro.to(
      [logoElement, subtextElement].filter(Boolean),
      {
        opacity: 0,
        scale: 1.02,
        duration: 0.32,
        ease: 'power2.inOut',
      },
      2.85
    );

    // 5. GEOMETRIC STEPPED WIPE (3.15s -> 4.35s)
    // Center row parts ways first, revealing the landing page directly in the center
    // Outer rows follow symmetrically in a staircase sequence
    const totalRows = shutterRows.length;
    const centerIndex = Math.floor((totalRows - 1) / 2);

    shutterRows.forEach(({ left, right }, i) => {
      if (!left || !right) return;

      const distanceFromCenter = Math.abs(i - centerIndex);
      const normDist = distanceFromCenter / (centerIndex || 1);

      // Stagger: Center row starts at 3.15s, each subsequent row delayed by 0.08s
      const rowStartTime = 3.15 + distanceFromCenter * 0.08;
      const rowDuration = 0.92 - normDist * 0.06;

      // Left black curtain slides off to the left (-101% to clear subpixels)
      intro.to(
        left,
        {
          xPercent: -101,
          duration: rowDuration,
          ease: 'power3.inOut',
        },
        rowStartTime
      );

      // Right black curtain slides off to the right (101% to clear subpixels)
      intro.to(
        right,
        {
          xPercent: 101,
          duration: rowDuration,
          ease: 'power3.inOut',
        },
        rowStartTime
      );
    });

    // 6. Callback at ~85% coverage to settle landing page elements (~4.05s)
    intro.call(
      () => {
        if (onRevealLandingPage) onRevealLandingPage();
      },
      null,
      4.05
    );

    // 7. Complete: clean up container styles
    intro.to(
      container,
      {
        opacity: 0,
        duration: 0.15,
        ease: 'none',
      },
      4.40
    );
  }, container);

  return activeIntroCtx;
}

export function destroyIntro() {
  if (activeIntroCtx) {
    activeIntroCtx.kill();
    activeIntroCtx = null;
  }
}
