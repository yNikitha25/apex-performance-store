import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import { ShippingDetails } from "../types";
import { ArrowLeft, CreditCard, Apple, CheckCircle, Landmark, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export const CheckoutScreen: React.FC = () => {
  const { cart, placeOrder, navigateBack, appliedPromo } = useApp();

  const [form, setForm] = useState<ShippingDetails>({
    fullName: "",
    email: "",
    streetAddress: "",
    city: "",
    postalCode: ""
  });

  const [paymentMethod, setPaymentMethod] = useState<"apple_pay" | "credit_card">("credit_card");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  // Calculations
  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discountAmount = appliedPromo ? subtotal * 0.20 : 0;
  const netSubtotal = subtotal - discountAmount;
  const shippingCost = netSubtotal > 200 ? 0 : 15.00;
  const tax = netSubtotal * 0.08;
  const total = netSubtotal + shippingCost + tax;

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!form.fullName.trim()) errors.fullName = "Full name is requested";
    if (!form.email.trim()) {
      errors.email = "Email is requested";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errors.email = "Please specify a valid email address";
    }
    if (!form.streetAddress.trim()) errors.streetAddress = "Mailing address is requested";
    if (!form.city.trim()) errors.city = "City is requested";
    if (!form.postalCode.trim()) errors.postalCode = "Postal code is requested";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      placeOrder(form, paymentMethod);
      setIsSubmitting(false);
    }, 1500); // realistic payment loading
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pb-32 px-4 md:px-12 max-w-7xl mx-auto pt-4"
    >
      {/* Return triggers */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={navigateBack}
          className="flex items-center gap-1 font-mono text-xs text-brand-text-secondary hover:text-white transition-colors uppercase py-2"
        >
          <ArrowLeft className="w-4 h-4 text-brand-lime" />
          Modify Session Cart
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Checkout Shipping Form Form Column */}
        <div className="lg:col-span-7 text-left">
          
          <form onSubmit={handlePlaceOrder} className="flex flex-col gap-6">
            
            {/* Step Card: Shipping info */}
            <div className="bg-brand-surface-low border border-white/5 p-6 rounded">
              <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider mb-5 flex items-center gap-2">
                <span className="w-5 h-5 bg-brand-lime text-brand-dark rounded-full flex items-center justify-center text-[10px] font-mono">1</span>
                TACTICAL DISTRIBUTION ADDRESS
              </h3>

              <div className="flex flex-col gap-4">
                {/* Full name input */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="fullName" className="font-mono text-[10px] text-brand-text-dim uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleInputChange}
                    placeholder="Athena Archer"
                    className="w-full bg-brand-surface-lowest border border-white/10 rounded px-4 py-3 text-sm text-white focus:border-brand-lime outline-none"
                    style={{ minHeight: "44px" }}
                  />
                  {formErrors.fullName && (
                    <span className="font-mono text-[10px] text-red-400 uppercase">{formErrors.fullName}</span>
                  )}
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="font-mono text-[10px] text-brand-text-dim uppercase tracking-wider">
                    Email Security Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                    placeholder="athena@performance.com"
                    className="w-full bg-brand-surface-lowest border border-white/10 rounded px-4 py-3 text-sm text-white focus:border-brand-lime outline-none"
                    style={{ minHeight: "44px" }}
                  />
                  {formErrors.email && (
                    <span className="font-mono text-[10px] text-red-400 uppercase">{formErrors.email}</span>
                  )}
                </div>

                {/* Street address */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="streetAddress" className="font-mono text-[10px] text-brand-text-dim uppercase tracking-wider">
                    Mailing Address
                  </label>
                  <input
                    id="streetAddress"
                    type="text"
                    name="streetAddress"
                    value={form.streetAddress}
                    onChange={handleInputChange}
                    placeholder="99 Apex Ridge Road, Suite 50"
                    className="w-full bg-brand-surface-lowest border border-white/10 rounded px-4 py-3 text-sm text-white focus:border-brand-lime outline-none"
                    style={{ minHeight: "44px" }}
                  />
                  {formErrors.streetAddress && (
                    <span className="font-mono text-[10px] text-red-400 uppercase">{formErrors.streetAddress}</span>
                  )}
                </div>

                {/* City & Zip Code */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="city" className="font-mono text-[10px] text-brand-text-dim uppercase tracking-wider">
                      City
                    </label>
                    <input
                      id="city"
                      type="text"
                      name="city"
                      value={form.city}
                      onChange={handleInputChange}
                      placeholder="Speedcrest"
                      className="w-full bg-brand-surface-lowest border border-white/10 rounded px-4 py-3 text-sm text-white focus:border-brand-lime outline-none"
                      style={{ minHeight: "44px" }}
                    />
                    {formErrors.city && (
                      <span className="font-mono text-[10px] text-red-400 uppercase">{formErrors.city}</span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="postalCode" className="font-mono text-[10px] text-brand-text-dim uppercase tracking-wider">
                      Postal Code
                    </label>
                    <input
                      id="postalCode"
                      type="text"
                      name="postalCode"
                      value={form.postalCode}
                      onChange={handleInputChange}
                      placeholder="90210"
                      className="w-full bg-brand-surface-lowest border border-white/10 rounded px-4 py-3 text-sm text-white focus:border-brand-lime outline-none"
                      style={{ minHeight: "44px" }}
                    />
                    {formErrors.postalCode && (
                      <span className="font-mono text-[10px] text-red-400 uppercase">{formErrors.postalCode}</span>
                    )}
                  </div>
                </div>

              </div>
            </div>

            {/* Step Card: Payment info options */}
            <div className="bg-brand-surface-low border border-white/5 p-6 rounded">
              <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider mb-5 flex items-center gap-2">
                <span className="w-5 h-5 bg-brand-lime text-brand-dark rounded-full flex items-center justify-center text-[10px] font-mono">2</span>
                TELEMETRY TRANSACTION INTERFACE
              </h3>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {/* Apple pay button selection */}
                <button
                  type="button"
                  onClick={() => setPaymentMethod("apple_pay")}
                  className={`py-3 rounded flex items-center justify-center gap-2 font-mono text-xs uppercase font-bold tracking-widest transition-all ${
                    paymentMethod === "apple_pay"
                      ? "bg-white text-black font-extrabold border-white"
                      : "border border-white/10 text-brand-text-secondary hover:border-white/20"
                  }`}
                  style={{ minHeight: "48px" }}
                >
                  <Apple className="w-4 h-4" />
                   Pay
                </button>

                {/* Credit card selection */}
                <button
                  type="button"
                  onClick={() => setPaymentMethod("credit_card")}
                  className={`py-3 rounded flex items-center justify-center gap-2 font-mono text-xs uppercase font-bold tracking-widest transition-all ${
                    paymentMethod === "credit_card"
                      ? "bg-brand-lime text-brand-dark font-extrabold border-brand-lime"
                      : "border border-white/10 text-brand-text-secondary hover:border-white/20"
                  }`}
                  style={{ minHeight: "48px" }}
                >
                  <CreditCard className="w-4 h-4" />
                  Credit Card
                </button>
              </div>

              {paymentMethod === "credit_card" ? (
                <div className="flex flex-col gap-4">
                  {/* Mock card input details */}
                  <div className="p-4 bg-brand-surface-lowest border border-white/10 rounded text-left relative flex flex-col gap-3">
                    <span className="font-mono text-[9px] text-brand-text-dim uppercase tracking-widest block mb-1">
                      MOCK VISA / ELECTRONIC CHIP
                    </span>
                    <input
                      type="text"
                      placeholder="Card Number: 4000 1234 5678 9010"
                      maxLength={19}
                      className="bg-transparent border-b border-white/15 focus:border-brand-lime py-2 font-mono text-xs tracking-widest outline-none text-white w-full"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        maxLength={5}
                        className="bg-transparent border-b border-white/15 focus:border-brand-lime py-2 font-mono text-xs tracking-widest outline-none text-white"
                      />
                      <input
                        type="password"
                        placeholder="CVV"
                        maxLength={4}
                        className="bg-transparent border-b border-white/15 focus:border-brand-lime py-2 font-mono text-xs tracking-widest outline-none text-white"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-brand-lime/5 border border-brand-lime/10 rounded flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-lime" />
                  <p className="font-mono text-xs text-brand-text-dim uppercase tracking-wide">
                    Apple Pay integration active. Tapping checkout will sync directly with face ID biometric signatures.
                  </p>
                </div>
              )}
            </div>

            {/* Placed order button trigger */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded font-mono text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-3 ${
                isSubmitting
                  ? "bg-brand-surface-low border border-white/10 text-brand-text-secondary cursor-not-allowed"
                  : "bg-brand-lime text-brand-dark hover:bg-white hover:text-black cursor-pointer"
              }`}
              style={{ minHeight: "52px" }}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  TRANSMITTING ENCRYPTED ORDER DATA...
                </>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4" />
                  PLACE ORDER & INITIATE SHIPPING
                </>
              )}
            </button>

          </form>

        </div>

        {/* Invoice details summary COLUMN */}
        <div className="lg:col-span-5 text-left">
          
          <div className="bg-brand-surface-low border border-white/5 p-6 rounded flex flex-col gap-6">
            <h4 className="font-heading text-lg font-bold uppercase tracking-wider text-white border-b border-white/5 pb-3">
              Items summary
            </h4>

            {/* Mini items log list */}
            <div className="flex flex-col gap-3">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-3 items-center text-left">
                  <img
                    alt={item.product.name}
                    className="w-10 h-10 object-cover rounded"
                    src={item.product.images[0]}
                  />
                  <div className="flex-1">
                    <span className="font-heading text-xs uppercase font-extrabold text-white tracking-wide block">
                      {item.product.name}
                    </span>
                    <span className="font-mono text-[9px] text-brand-text-dim">
                      {item.selectedSize} × {item.quantity}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-white">
                    ${(item.product.price * item.quantity).toFixed(0)}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 my-1" />

            {/* Calculations rundown */}
            <div className="flex flex-col gap-3 font-mono text-xs text-brand-text-dim uppercase tracking-wider">
              <div className="flex justify-between">
                <span>Value</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              
              {discountAmount > 0 && (
                <div className="flex justify-between text-brand-lime font-bold">
                  <span>Elite Discount</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shippingCost.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Environmental Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>

              <div className="border-t border-white/10 my-1" />

              <div className="flex justify-between text-white font-extrabold text-md font-heading">
                <span>Total amount</span>
                <span className="text-brand-lime">${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 p-3 bg-brand-surface border border-white/5 rounded mt-4">
              <Landmark className="w-4 h-4 text-brand-lime flex-shrink-0" />
              <p className="font-mono text-[9px] text-brand-text-dim uppercase tracking-widest leading-relaxed">
                Orders are processed at the central laboratory facility within six standard hours.
              </p>
            </div>

          </div>

        </div>

      </div>
    </motion.div>
  );
};
