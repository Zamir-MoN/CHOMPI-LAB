import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/audio';

export const CartDrawer = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [promoInput, setPromoInput] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const total = Math.max(0, subtotal - discountAmount);

  const freeShippingThreshold = 699;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const freeShippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoInput.trim().toUpperCase() === 'CHOMPI10') {
      sound.cartAdd();
      setDiscountPercent(10);
      setPromoError('');
    } else {
      sound.pop(300);
      setPromoError('Invalid code. Try "CHOMPI10"');
    }
  };

  const handleCheckout = () => {
    sound.cartAdd();
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderComplete(true);
      confetti({
        particleCount: 80,
        spread: 100,
        origin: { y: 0.6 },
      });
      onClearCart();
    }, 1200);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`drawer-backdrop ${isOpen ? 'open' : ''}`}
        onClick={onClose}
        aria-hidden={!isOpen}
      />

      {/* Slide-over Drawer */}
      <div
        className={`cart-drawer ${isOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping Cart"
      >
        {/* Header */}
        <div
          style={{
            padding: '24px 28px',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#FFFFFF',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'var(--yellow)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ShoppingBag size={16} color="#111" />
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '-0.02em' }}>
              YOUR CHOMPI CART
            </h3>
            <span
              style={{
                backgroundColor: 'rgba(17, 17, 17, 0.08)',
                padding: '2px 8px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '12px',
                fontWeight: 700,
              }}
            >
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close cart drawer"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'var(--background)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div
          style={{
            padding: '14px 28px',
            backgroundColor: '#FFF2B2',
            borderBottom: '1px solid rgba(255, 216, 77, 0.4)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '12px',
              fontWeight: 800,
              color: '#524300',
              marginBottom: '6px',
            }}
          >
            <span>
              {remainingForFreeShipping === 0
                ? '🎉 FREE SHIPPING UNLOCKED ACROSS INDIA!'
                : `Add ₹${remainingForFreeShipping} more for FREE Shipping!`}
            </span>
            <span>{Math.round(freeShippingProgress)}%</span>
          </div>
          <div
            style={{
              width: '100%',
              height: '6px',
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
              borderRadius: 'var(--radius-pill)',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${freeShippingProgress}%`,
                backgroundColor: '#111111',
                borderRadius: 'var(--radius-pill)',
                transition: 'width 0.4s ease',
              }}
            />
          </div>
        </div>

        {/* Body Content */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '24px 28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {orderComplete ? (
            <div
              style={{
                margin: 'auto 0',
                textAlign: 'center',
                padding: '40px 20px',
              }}
            >
              <div
                style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--green-soft)',
                  color: '#156B3D',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                }}
              >
                <CheckCircle2 size={40} />
              </div>
              <h4 style={{ fontSize: '24px', fontWeight: 900, marginBottom: '8px' }}>
                ORDER PLACED!
              </h4>
              <p style={{ fontSize: '15px', color: 'var(--foreground-muted)', marginBottom: '24px' }}>
                Your custom laser-cut skins are now prepping in our Bengaluru studio. Tracking link sent to your email!
              </p>
              <button
                onClick={() => {
                  setOrderComplete(false);
                  onClose();
                }}
                className="btn-pill btn-pill-primary"
              >
                KEEP SHOPPING
              </button>
            </div>
          ) : cartItems.length === 0 ? (
            <div
              style={{
                margin: 'auto 0',
                textAlign: 'center',
                padding: '40px 20px',
              }}
            >
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>👾</div>
              <h4 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '8px' }}>
                Your cart is empty!
              </h4>
              <p style={{ fontSize: '14px', color: 'var(--foreground-muted)', marginBottom: '24px' }}>
                Add some fresh vinyl drops or precision skins to start chompin'.
              </p>
              <button onClick={onClose} className="btn-pill btn-pill-secondary">
                EXPLORE PRODUCTS
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  gap: '16px',
                  backgroundColor: '#FFFFFF',
                  padding: '14px',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div
                  style={{
                    width: '74px',
                    height: '74px',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    backgroundColor: 'var(--background)',
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={item.image || '/images/hero_laptop.jpg'}
                    alt={item.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <h5 style={{ fontSize: '14px', fontWeight: 800, color: 'var(--foreground)' }}>
                        {item.name}
                      </h5>
                      <span style={{ fontSize: '11px', color: 'var(--foreground-muted)' }}>
                        {item.deviceType || item.finish || 'Standard'}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        sound.pop(350);
                        onRemoveItem(item.id);
                      }}
                      aria-label="Remove item"
                      style={{ color: 'var(--foreground-subtle)', cursor: 'pointer', padding: '4px' }}
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px' }}>
                    {/* Quantity Selector */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        backgroundColor: 'var(--background)',
                        borderRadius: 'var(--radius-pill)',
                        padding: '4px 10px',
                      }}
                    >
                      <button
                        onClick={() => {
                          sound.pop(400);
                          onUpdateQuantity(item.id, Math.max(1, item.quantity - 1));
                        }}
                        style={{ cursor: 'pointer', display: 'flex' }}
                      >
                        <Minus size={12} />
                      </button>
                      <span style={{ fontSize: '12px', fontWeight: 800 }}>{item.quantity}</span>
                      <button
                        onClick={() => {
                          sound.pop(500);
                          onUpdateQuantity(item.id, item.quantity + 1);
                        }}
                        style={{ cursor: 'pointer', display: 'flex' }}
                      >
                        <Plus size={12} />
                      </button>
                    </div>

                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: 800 }}>
                      ₹{item.price * item.quantity}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout Summary */}
        {cartItems.length > 0 && !orderComplete && (
          <div
            style={{
              padding: '24px 28px',
              backgroundColor: '#FFFFFF',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            {/* Promo Code Form */}
            <form onSubmit={handleApplyPromo} style={{ display: 'flex', gap: '8px' }}>
              <input
                type="text"
                placeholder='Coupon code (Try "CHOMPI10")'
                value={promoInput}
                onChange={(e) => setPromoInput(e.target.value)}
                style={{
                  flex: 1,
                  padding: '10px 16px',
                  borderRadius: 'var(--radius-pill)',
                  border: '1px solid var(--border-subtle)',
                  fontSize: '12px',
                  fontFamily: 'inherit',
                  outline: 'none',
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '10px 18px',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: 'var(--foreground)',
                  color: '#FFF',
                  fontSize: '12px',
                  fontWeight: 800,
                  cursor: 'pointer',
                }}
              >
                APPLY
              </button>
            </form>
            {discountPercent > 0 && (
              <div style={{ fontSize: '12px', color: '#166534', fontWeight: 700 }}>
                ✓ Coupon CHOMPI10 applied (10% OFF)!
              </div>
            )}
            {promoError && (
              <div style={{ fontSize: '12px', color: '#DC2626', fontWeight: 600 }}>
                {promoError}
              </div>
            )}

            {/* Calculations */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--foreground-muted)' }}>
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              {discountPercent > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#166534' }}>
                  <span>Discount ({discountPercent}%)</span>
                  <span>-₹{discountAmount}</span>
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--foreground-muted)' }}>
                <span>Shipping across India</span>
                <span>{remainingForFreeShipping === 0 ? 'FREE' : '₹49'}</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  paddingTop: '8px',
                  borderTop: '1px solid var(--border-subtle)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '18px',
                  fontWeight: 900,
                }}
              >
                <span>Total</span>
                <span>₹{remainingForFreeShipping === 0 ? total : total + 49}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="btn-pill btn-pill-primary"
              style={{
                width: '100%',
                padding: '16px',
                fontSize: '15px',
                backgroundColor: 'var(--foreground)',
                color: '#FFF',
              }}
            >
              {isCheckingOut ? (
                <span>PREPARING LASER CUTTER...</span>
              ) : (
                <>
                  <span>PROCEED TO SECURE CHECKOUT</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </>
  );
};
