import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import {
  ChevronLeft,
  ShoppingBag,
  Check,
  Diamond,
  Droplets,
  Activity,
  Zap,
  Dumbbell,
  Shield,
  ShieldAlert,
  Info
} from "lucide-react";
import { motion } from "motion/react";

// Helpler mapper for Lucide icons
const IconMapper: React.FC<{ iconName: string; className?: string }> = ({ iconName, className }) => {
  const cn = className || "w-6 h-6 text-brand-lime";
  switch (iconName) {
    case "diamond":
      return <Diamond className={cn} />;
    case "water_drop":
      return <Droplets className={cn} />;
    case "monitor_heart":
      return <Activity className={cn} />;
    case "bolt":
      return <Zap className={cn} />;
    case "weight":
      return <Dumbbell className={cn} />;
    case "shield_with_heart":
      return <Shield className={cn} />;
    default:
      return <Info className={cn} />;
  }
};

export const ProductDetailScreen: React.FC = () => {
  const { selectedProduct, navigateBack, addToCart, navigateTo } = useApp();

  const [activeImageIdx, setActiveImageIdx] = useState<number>(0);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<{ name: string; hex: string } | undefined>(
    selectedProduct?.colors ? selectedProduct.colors[0] : undefined
  );
  const [showSuccessToast, setShowSuccessToast] = useState<boolean>(false);
  const [sizeAlert, setSizeAlert] = useState<boolean>(false);

  if (!selectedProduct) {
    return (
      <div className="py-24 px-6 text-center select-none">
        <p className="text-brand-text-dim text-sm uppercase font-mono mb-4">No Product Selected</p>
        <button
          onClick={navigateBack}
          className="px-6 py-2 bg-brand-lime text-brand-dark font-mono text-xs uppercase font-bold"
        >
          Go Back
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      setSizeAlert(true);
      setTimeout(() => setSizeAlert(false), 2500);
      return;
    }

    addToCart(selectedProduct, selectedSize, selectedColor);
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
      className="pb-32 px-4 md:px-12 max-w-7xl mx-auto pt-4"
    >
      {/* Navigation and Feedbacks */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={navigateBack}
          className="flex items-center gap-1 font-mono text-xs text-brand-text-secondary hover:text-white transition-colors uppercase py-2 px-1 active:scale-95 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 text-brand-lime" />
          Back to gallery
        </button>

        <span className="font-mono text-[10px] text-brand-text-dim uppercase tracking-widest bg-white/5 px-2 py-1 border border-white/10 rounded">
          {selectedProduct.category} Catalog
        </span>
      </div>

      {showSuccessToast && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-[#162a14] border border-[#2d5c29] text-white px-6 py-3 rounded-lg shadow-2xl flex items-center gap-3 font-mono text-xs uppercase tracking-wider animate-bounce">
          <Check className="w-4 h-4 text-brand-lime" />
          Gear added to your active configuration!
          <button
            onClick={() => navigateTo("cart")}
            className="text-brand-lime underline font-bold ml-2"
          >
            Go to Cart
          </button>
        </div>
      )}

      {/* Main product showcase split */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Pictures Column */}
        <div className="flex flex-col gap-4">
          <div className="aspect-square bg-brand-surface-lowest items-center rounded overflow-hidden relative border border-white/5">
            <img
              alt={selectedProduct.name}
              className="w-full h-full object-cover"
              src={selectedProduct.images[activeImageIdx]}
              referrerPolicy="no-referrer"
            />
            
            {/* Limited ribbon */}
            {selectedProduct.isLimited && (
              <span className="absolute bottom-4 left-4 bg-brand-dark text-brand-lime px-3 py-1 font-mono text-[10px] font-semibold border border-brand-lime/20 tracking-widest rounded-sm">
                LIMITED LABORATORY SPEC
              </span>
            )}
          </div>

          {/* Thumbnail row if multiple photos exist */}
          {selectedProduct.images.length > 1 && (
            <div className="flex gap-3">
              {selectedProduct.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`w-20 h-20 rounded bg-brand-surface border overflow-hidden active:scale-95 transition-all outline-none ${
                    idx === activeImageIdx ? "border-brand-lime scale-102" : "border-white/10 hover:border-white/20"
                  }`}
                >
                  <img
                    alt={`Thumbnail view ${idx}`}
                    className="w-full h-full object-cover"
                    src={img}
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Configurations details COLUMN */}
        <div className="text-left flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs text-brand-lime font-bold tracking-widest block mb-1 uppercase">
              {selectedProduct.subtitle}
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold uppercase italic text-white tracking-tighter leading-none mb-3">
              {selectedProduct.name}
            </h2>

            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xl text-white font-bold">
                ${selectedProduct.price.toFixed(2)}
              </span>
              <span className="text-brand-text-dim text-xs font-mono uppercase bg-white/5 px-2.5 py-1 border border-white/5 rounded">
                Telemetry Engaged
              </span>
            </div>

            <p className="font-sans text-sm text-brand-text-dim leading-relaxed mb-8">
              {selectedProduct.description}
            </p>

            {/* COLOR SWITCHER (IF AVAILABLE) */}
            {selectedProduct.colors && selectedProduct.colors.length > 0 && (
              <div className="mb-6">
                <span className="font-mono text-xs text-white block mb-3 uppercase tracking-wider">
                  Select Accent Option: <span className="text-brand-lime">{selectedColor?.name}</span>
                </span>
                <div className="flex gap-3">
                  {selectedProduct.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                        selectedColor?.name === color.name ? "border-white scale-110" : "border-white/10 hover:scale-105"
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    >
                      {selectedColor?.name === color.name && (
                        <Check className="w-4 h-4 text-white drop-shadow mix-blend-difference" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* SIZING OPTIONS */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="font-mono text-xs text-white uppercase tracking-wider">
                  Select Fit Specification:
                </span>
                {sizeAlert && (
                  <span className="font-mono text-[10px] text-red-400 uppercase font-bold tracking-widest animate-pulse">
                    Please specify a size
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => {
                      setSelectedSize(size);
                      setSizeAlert(false);
                    }}
                    className={`px-4 py-3 min-w-[56px] font-mono text-xs font-semibold rounded transition-all active:scale-90 ${
                      selectedSize === size
                        ? "bg-brand-lime text-brand-dark border-brand-lime shadow-md shadow-brand-lime/10"
                        : "border border-white/10 text-brand-text-secondary hover:border-white/20 hover:text-white"
                    }`}
                    style={{ minHeight: "44px" }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* PRIMARY CTA BAR */}
          <div className="flex flex-col gap-3 mt-4">
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 rounded font-mono text-xs font-bold uppercase tracking-widest transition-all duration-150 active:scale-[0.98] ${
                selectedSize
                  ? "bg-brand-lime text-brand-dark hover:bg-white hover:text-black cursor-pointer"
                  : "bg-white/5 border border-white/10 text-brand-text-secondary hover:border-white/20"
              }`}
              style={{ minHeight: "52px" }}
            >
              Add to Active Gear-set
            </button>
            <p className="font-mono text-[10px] text-brand-text-dim text-center uppercase tracking-widest">
              Complimentary global shipping on configurations over $200
            </p>
          </div>

        </div>
      </section>

      {/* Bento style Technical Specs grid details */}
      {selectedProduct.bentoSpecs && selectedProduct.bentoSpecs.length > 0 && (
        <section className="mt-16 border-t border-white/10 pt-12 text-left">
          <span className="font-mono text-xs text-brand-lime font-bold tracking-widest mb-2 block uppercase">
            DETAILED METRICS
          </span>
          <h3 className="font-heading text-2xl md:text-3xl font-extrabold uppercase mb-8 text-white">
            SPECIFICATION MATRIX
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {selectedProduct.bentoSpecs.map((spec, idx) => (
              <div
                key={idx}
                className="bg-brand-surface-low border border-white/5 p-6 rounded flex items-center gap-5 relative overflow-hidden"
              >
                <div className="w-12 h-12 bg-brand-lime/10 flex items-center justify-center rounded">
                  <IconMapper iconName={spec.icon} />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-brand-text-dim uppercase tracking-widest block">
                    {spec.label}
                  </span>
                  <span className="font-heading text-md font-bold text-white uppercase tracking-wider block mt-1">
                    {spec.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Accordion Specs info if generic specs exist */}
      {selectedProduct.specs && selectedProduct.specs.length > 0 && (
        <section className="mt-12 border-t border-white/10 pt-12 text-left">
          <h4 className="font-heading text-xl font-bold uppercase text-white tracking-wide mb-6">
            Laboratory Testing Details
          </h4>
          <div className="flex flex-col gap-4 max-w-3xl">
            {selectedProduct.specs.map((item, idx) => (
              <div key={idx} className="border-b border-white/5 pb-4">
                <h5 className="font-heading text-md font-bold text-brand-lime uppercase tracking-wide">
                  {item.title}
                </h5>
                <p className="font-sans text-xs text-brand-text-dim mt-1.5 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Sizing Information accordion helper block */}
      <section className="mt-12 bg-white/5 border border-white/15 p-6 rounded text-left flex items-start gap-4">
        <Info className="w-5 h-5 text-brand-lime flex-shrink-0 mt-0.5" />
        <div>
          <h5 className="font-heading text-md font-black uppercase text-white tracking-wide">
            APEX COMPRESSION FIT GUIDE
          </h5>
          <p className="font-sans text-xs text-brand-text-dim mt-1.5 leading-relaxed">
            Our items are built to provide physical support under tension. Fits may align highly compressed next to skin. If you prefer a loose fitness standard, consider selecting one size level higher than standard measurements specify.
          </p>
        </div>
      </section>
    </motion.div>
  );
};
