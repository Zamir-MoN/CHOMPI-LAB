import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initScrollReveal(elements, options = {}) {
  const {
    trigger = elements,
    start = 'top 85%',
    y = 40,
    opacity = 0,
    duration = 0.8,
    stagger = 0.1,
    ease = 'power3.out',
  } = options;

  return gsap.fromTo(
    elements,
    { opacity, y },
    {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      ease,
      scrollTrigger: {
        trigger,
        start,
        toggleActions: 'play none none reverse',
      },
    }
  );
}

export function initParallax(element, { y = 30, scrub = 1, trigger = element } = {}) {
  return gsap.to(element, {
    y,
    ease: 'none',
    scrollTrigger: {
      trigger,
      start: 'top bottom',
      end: 'bottom top',
      scrub,
    },
  });
}
