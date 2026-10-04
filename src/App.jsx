import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { OpeningTransition } from './components/OpeningTransition';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { CanvasSection } from './components/canvas/CanvasSection';
import { FeaturedProducts } from './components/FeaturedProducts';
import { WhyChompi } from './components/WhyChompi';
import { FlexCarouselSection } from './components/FlexCarouselSection';
import { BadgeMarquee } from './components/BadgeMarquee';
import { Testimonials } from './components/Testimonials';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductModal } from './components/ProductModal';
import { PageTransition } from './components/PageTransition';
import { PRODUCTS } from './data/chompiData';

gsap.registerPlugin(ScrollTrigger);

export function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 'stickers-01',
      name: 'Chompi & Weird Friends Mega Pack',
      price: 449,
      quantity: 1,
      image: '/images/sticker_pack.webp',
      finish: 'Matte & Gloss Mix',
      deviceType: 'Sticker Pack',
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [transitionKey, setTransitionKey] = useState(0);
  const lenisRef = React.useRef(null);

  // Expose replay trigger for easy testing and showcasing
  useEffect(() => {
    window.__replayChompiIntro = () => {
      setPreloaderDone(false);
    };
    return () => {
      delete window.__replayChompiIntro;
    };
  }, []);

  // Initialize Lenis Smooth Scroll only AFTER intro animation finishes
  useEffect(() => {
    if (!preloaderDone) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.2,
      infinite: false,
    });

    lenisRef.current = lenis;
    window.__lenis = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const handleScrollTriggerRefresh = () => {
      lenis.resize();
    };
    ScrollTrigger.addEventListener('refresh', handleScrollTriggerRefresh);

    const tickHandler = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickHandler);
    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.refresh();
    lenis.resize();

    return () => {
      ScrollTrigger.removeEventListener('refresh', handleScrollTriggerRefresh);
      gsap.ticker.remove(tickHandler);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [preloaderDone]);

  // Landing Page Reveal Animation triggered when wipe reaches ~85%
  const handleRevealLandingPage = () => {
    gsap.fromTo(
      '.chompi-navbar',
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out' }
    );
    gsap.fromTo(
      '.hero-heading-reveal',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out', delay: 0.05 }
    );
    gsap.fromTo(
      '.hero-product-reveal',
      { opacity: 0, scale: 0.94 },
      { opacity: 1, scale: 1, duration: 0.7, ease: 'power3.out', delay: 0.1 }
    );
  };

  // Cart Management
  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Smooth Lenis-powered scroll navigation
  const scrollTo = (id) => {
    if (lenisRef.current) {
      if (id === 'hero') {
        lenisRef.current.scrollTo(0, { duration: 1.2 });
      } else {
        const target = document.getElementById(id);
        if (target) {
          lenisRef.current.scrollTo(target, { offset: -70, duration: 1.2 });
        }
      }
    } else {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const triggerWipeTransition = () => {
    setTransitionKey((prev) => prev + 1);
  };

  const handleSelectCategory = (category) => {
    scrollTo('featured');
  };

  const handleSelectVibeProducts = (vibeId) => {
    scrollTo('featured');
  };

  return (
    <div className="chompi-app" style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Premium GSAP Geometric Stepped Wipe Opening Transition */}
      {!preloaderDone && (
        <OpeningTransition
          onRevealLandingPage={handleRevealLandingPage}
          onComplete={() => setPreloaderDone(true)}
        />
      )}

      {/* Global Floating Navigation */}
      <Navbar
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigate={scrollTo}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onExploreStickers={() => scrollTo('pick-your-canvas')}
          onExploreSkins={() => scrollTo('pick-your-canvas')}
        />

        {/* Continuous Infinite Marquee */}
        <Marquee />

        {/* Master Creative Canvas Section: TWO WAYS TO CHOMPI (PICK YOUR CANVAS) */}
        <CanvasSection onSelectCategory={handleSelectCategory} />

        {/* Featured Products: "Currently Chompin'" */}
        <FeaturedProducts
          onAddToCart={handleAddToCart}
          onQuickView={(prod) => setQuickViewProduct(prod)}
        />

        {/* Reverse Marquee */}
        <Marquee
          items={[
            '0.05MM CNC LASER CUT',
            '3M CAST VINYL',
            'ANTI-SCRATCH MATTE',
            'RAINBOW PRISM FOIL',
            'BENGALURU LAB',
            'NO RESIDUE GUARANTEE',
          ]}
          reverse={true}
          speed={24}
          bgColor="var(--yellow)"
          textColor="#111111"
        />

        {/* Interactive "Why Chompi" Features */}
        <WhyChompi />

        {/* Interactive WebGL Liquid FlexCarousel Drop Vault */}
        <FlexCarouselSection onExplore={() => scrollTo('featured')} />

        {/* Dual Opposing Direction Badge Marquee */}
        <BadgeMarquee />

        {/* Creator Community Proof */}
        <Testimonials />

        {/* Final CTA */}
        <FinalCTA
          onExploreStickers={() => scrollTo('featured')}
          onExploreSkins={() => scrollTo('featured')}
        />
      </main>

      {/* Global Footer */}
      <Footer onNavigate={scrollTo} />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Quick View Product Modal */}
      <ProductModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}

export default App;
