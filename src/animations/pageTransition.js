import gsap from 'gsap';

let activeTransitionCtx = null;

export function playPageTransition({
  overlay,
  slices = [],
  onMidpoint,
  onComplete,
}) {
  if (activeTransitionCtx) {
    activeTransitionCtx.revert();
  }

  activeTransitionCtx = gsap.context(() => {
    gsap.set(overlay, { display: 'block', opacity: 1, pointerEvents: 'auto' });
    
    // Close slices to center
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(overlay, { display: 'none', pointerEvents: 'none' });
        if (onComplete) onComplete();
      },
    });

    const total = slices.length;
    const center = (total - 1) / 2;

    // 1. Wipe In (Close)
    slices.forEach(({ left, right }, i) => {
      const dist = Math.abs(i - center);
      tl.to([left, right], { xPercent: 0, duration: 0.28, ease: 'power3.in' }, dist * 0.03);
    });

    // Midpoint callback
    tl.call(() => {
      if (onMidpoint) onMidpoint();
    }, null, '+=0.05');

    // 2. Wipe Out (Re-open)
    slices.forEach(({ left, right }, i) => {
      const dist = Math.abs(i - center);
      tl.to(left, { xPercent: -101, duration: 0.32, ease: 'power3.out' }, `+=0.05+=${dist * 0.03}`);
      tl.to(right, { xPercent: 101, duration: 0.32, ease: 'power3.out' }, `+=0.05+=${dist * 0.03}`);
    });
  }, overlay);

  return activeTransitionCtx;
}
