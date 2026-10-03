import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

export const PageTransition = ({ triggerKey }) => {
  const [visible, setVisible] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    if (!triggerKey) return;
    setVisible(true);

    let tl = null;
    const timer = setTimeout(() => {
      if (!panelRef.current) return;
      tl = gsap.timeline({
        onComplete: () => {
          setVisible(false);
        },
      });

      tl.fromTo(
        panelRef.current,
        { yPercent: 100, borderTopLeftRadius: '80px', borderTopRightRadius: '80px' },
        {
          yPercent: 0,
          borderTopLeftRadius: '0px',
          borderTopRightRadius: '0px',
          duration: 0.3,
          ease: 'power3.in',
        }
      ).to(panelRef.current, {
        yPercent: -100,
        borderBottomLeftRadius: '80px',
        borderBottomRightRadius: '80px',
        duration: 0.35,
        ease: 'power3.out',
      });
    }, 10);

    return () => {
      clearTimeout(timer);
      if (tl) tl.kill();
      setVisible(false);
    };
  }, [triggerKey]);

  if (!visible) return null;

  return (
    <div
      ref={panelRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9998,
        backgroundColor: '#FF7548',
        pointerEvents: 'none',
      }}
    />
  );
};
