import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import { Trash2, Plus, Minus, Tag, Landmark, Award, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export const CartScreen: React.FC = () => {
  const {
    cart,
    removeFromCart,
    updateCartQuantity,
    applyPromoCode,
    clearPromoCode,
    appliedPromo,
    navigateTo,
    products
  } = useApp();

  const [promoInput, setPromoInput] = useState<string>("");
  const [promoError, setPromoError] = useState<string | null>(null);

  // Math totals calculation
  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discountAmount = appliedPromo ? subtotal * 0.20 : 0;
  const netSubtotal = subtotal - discountAmount;
  const shippingCost = netSubtotal > 200 || subtotal === 0 ? 0 : 15.00;
  const tax = netSubtotal * 0.08;
  const total = netSubtotal + shippingCost + tax;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError(null);
    if (!promoInput.trim()) return;

    const success = applyPromoCode(promoInput);
    if (success) {
      setPromoInput("");
    } else {
      setPromoError("Specified promotion code not found");
      setTimeout(() => setPromoError(null), 3000);
    }
  };

  // Cross-sell suggestion items that are not currently in cart
  const crossSells = products
    .filter(p => p.id === "pro-core-shorts" || p.id === "exo-pulse-5" || p.id === "vortex-layer")
    .slice(0, 2);

  if (cart.length === 0) {
    return (
      <div className="py-24 px-6 text-center select-none max-w-lg mx-auto">
        <div className="w-16 h-16 bg-white/5 flex items-center justify-center rounded-full mx-auto mb-6">
          <Trash2 className="w-6 h-6 text-brand-text-dim" />
        </div>
        <h3 className="font-heading text-xl md:text-2xl font-bold uppercase text-white mb-2">
          Your gear set is empty
        </h3>
        <p className="font-sans text-xs text-brand-text-dim leading-relaxed mb-8">
          You have not configured any active high-intensity products. Visit our catalog to construct your setup.
        </p>
        <button
          onClick={() => navigateTo("shop")}
          className="w-full py-4 bg-brand-lime text-brand-dark font-mono text-xs uppercase font-bold tracking-widest rounded cursor-pointer"
        >
          View Technical Catalog
        </button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pb-32 px-4 md:px-12 max-w-7xl mx-auto pt-4"
    >
      <div className="mb-10 text-left">
        <span className="font-mono text-xs text-brand-lime font-bold tracking-widest block mb-1">
          CONFIGURATION SUMMARY
        </span>
        <h2 className="font-heading text-3xl md:text-5xl font-extrabold uppercase italic text-white tracking-tighter">
          Your Active Gear
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Cart Listing Column */}
        <div className="lg:col-span-7 flex flex-col gap-4 text-left">
          <div className="flex flex-col gap-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-brand-surface-low border border-white/5 p-4 rounded flex items-start gap-4"
              >
                {/* Product micro thumb */}
                <div className="w-20 h-20 bg-brand-surface-lowest rounded overflow-hidden flex-shrink-0 cursor-pointer" onClick={() => navigateTo("detail", item.product)}>
                  <img
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                    src={item.product.images[0]}
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Info and amount triggers */}
                <div className="flex-1 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-heading text-md font-bold text-white uppercase tracking-wider hover:text-brand-lime transition-colors cursor-pointer" onClick={() => navigateTo("detail", item.product)}>
                        {item.product.name}
                      </h4>
                      <span className="font-mono text-xs text-white font-bold">
                        ${(item.product.price * item.quantity).toFixed(0)}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-x-3 text-[10px] font-mono text-brand-text-dim uppercase tracking-wider mt-1">
                      <span>Fit: {item.selectedSize}</span>
                      {item.selectedColor && (
                        <span>Accent: {item.selectedColor.name}</span>
                      )}
                    </div>
                  </div>

                  {/* Quantity adjustments */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-1 border border-white/10 rounded overflow-hidden bg-brand-surface-lowest">
                      <button
                        onClick={() => updateCartQuantity(item.id, -1)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-white/5 active:bg-white/10 text-brand-text-secondary transition-colors"
                        title="Reduce Quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center font-mono text-xs text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateCartQuantity(item.id, 1)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-white/5 active:bg-white/10 text-brand-text-secondary transition-colors"
                        title="Increase Quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-brand-text-dim hover:text-red-400 p-2 transition-colors active:scale-95"
                      title="Delete Gear Item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CROSS SELLS BLOCK / COMPLETE KIT */}
          {crossSells.length > 0 && (
            <div className="mt-8 border-t border-white/10 pt-8">
              <span className="font-mono text-[10px] text-brand-lime font-bold tracking-widest block uppercase mb-4">
                COMPLETE YOUR PERFORMANCE SYSTEM
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {crossSells.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => navigateTo("detail", p)}
                    className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded flex items-center gap-4 cursor-pointer transition-colors"
                  >
                    <img
                      alt={p.name}
                      className="w-12 h-12 object-cover rounded"
                      src={p.images[0]}
                    />
                    <div>
                      <h5 className="font-heading text-xs font-bold uppercase text-white tracking-wide">
                        {p.name}
                      </h5>
                      <span className="font-mono text-[10px] text-brand-lime">
                        + ${p.price.toFixed(0)} Add Spec
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Pricing details and Checkout Column */}
        <div className="lg:col-span-5 text-left">
          
          <div className="bg-brand-surface-low border border-white/5 p-6 rounded flex flex-col gap-6">
            <span className="font-heading text-lg font-black uppercase tracking-wider text-white border-b border-white/5 pb-3">
              Telemetry Summary
            </span>

            {/* Promo coupons application input */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="COUPON CODE (e.g. CODELIME)"
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value)}
                  className="w-full bg-brand-surface-lowest border border-white/10 rounded px-3 py-3 font-mono text-xs uppercase text-white tracking-wide outline-none focus:border-brand-lime placeholder-white/20"
                />
                <Tag className="absolute right-3 top-3 w-4 h-4 text-white/20 pointer-events-none" />
              </div>
              <button
                type="submit"
                className="bg-brand-lime text-brand-dark px-4 py-3 font-mono text-xs uppercase font-bold tracking-wider rounded transition-colors hover:bg-white hover:text-black cursor-pointer"
              >
                Apply
              </button>
            </form>

            {promoError && (
              <p className="font-mono text-[10px] text-red-400 capitalize -mt-4 animate-shake">
                {promoError}
              </p>
            )}

            {appliedPromo && (
              <div className="bg-brand-lime/10 border border-brand-lime/30 p-2 px-3 rounded flex items-center justify-between -mt-2">
                <span className="font-mono text-xs text-brand-lime uppercase tracking-wider font-bold">
                  20% OFF ({appliedPromo}) ENGAGED
                </span>
                <button
                  type="button"
                  onClick={clearPromoCode}
                  className="text-brand-text-dim hover:text-white font-mono text-[10px] border border-white/10 rounded px-2 py-0.5"
                >
                  Clear Coupon
                </button>
              </div>
            )}

            {/* BREAKDOWN ROW CARDS */}
            <div className="flex flex-col gap-3 font-mono text-xs text-brand-text-dim uppercase tracking-wider">
              <div className="flex justify-between">
                <span>Total Items value</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              
              {discountAmount > 0 && (
                <div className="flex justify-between text-brand-lime font-bold text-xs">
                  <span>Elite Discount</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Tactical Distribution</span>
                {shippingCost > 0 ? (
                  <span>${shippingCost.toFixed(2)}</span>
                ) : (
                  <span className="text-brand-lime font-semibold">FREE COMPLIMENTARY</span>
                )}
              </div>

              <div className="flex justify-between">
                <span>Environmental Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>

              <div className="border-t border-white/10 my-2" />

              <div className="flex justify-between text-white font-extrabold text-lg font-heading">
                <span>Total gear cost</span>
                <span className="text-brand-lime">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* CHECKOUT CALL TO ACTION */}
            <button
              onClick={() => navigateTo("checkout")}
              className="w-full py-4 bg-brand-lime text-brand-dark hover:bg-white hover:text-black font-mono text-xs uppercase font-bold tracking-widest rounded cursor-pointer transition-all duration-150 transform hover:translate-y-[-1px] shadow-lg flex items-center justify-center gap-3"
              style={{ minHeight: "52px" }}
            >
              Access Secure Checkout
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Secure system badge */}
          <div className="mt-4 flex items-center justify-center gap-2 p-2 px-4 bg-brand-surface border border-white/5 rounded">
            <Landmark className="w-4 h-4 text-brand-lime" />
            <span className="font-mono text-[10px] text-brand-text-dim uppercase tracking-wide">
              Apex military grade 256-bit encryption active
            </span>
          </div>

        </div>

      </div>
    </motion.div>
  );
};
