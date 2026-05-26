import React, { useState, useMemo } from "react";
import { useApp } from "../context/AppContext";
import { Product } from "../types";
import { SlidersHorizontal, ChevronDown, Check, Zap } from "lucide-react";
import { motion } from "motion/react";

export const ShopScreen: React.FC = () => {
  const { products, navigateTo } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("newest");
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState<boolean>(false);
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState<boolean>(false);

  // Filter and Sort selectors
  const categoriesList = [
    { id: "all", name: "ALL" },
    { id: "shoes", name: "SHOES" },
    { id: "apparel", name: "APPAREL" },
    { id: "watches", name: "WATCHES" }
  ];

  const processedProducts = useMemo(() => {
    let list = [...products];

    // Filter by category
    if (selectedCategory !== "all") {
      list = list.filter(p => p.category === selectedCategory);
    }

    // Sort list
    if (sortBy === "newest") {
      list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    } else if (sortBy === "price_high") {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === "price_low") {
      list.sort((a, b) => a.price - b.price);
    }

    return list;
  }, [products, selectedCategory, sortBy]);

  // Handle Spotlight Banner click (find Aero Knit 2.0 or first limited drop)
  const spotlimitedProduct = products.find(p => p.id === "aero-knit-2-0") || products[0];

  const sortingOptions = [
    { id: "newest", name: "Newest" },
    { id: "price_high", name: "Price: High to Low" },
    { id: "price_low", name: "Price: Low to High" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pb-32 px-6 md:px-12 max-w-7xl mx-auto"
    >
      {/* Search Header / Title Block */}
      <section className="mt-8 mb-10 text-left">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs text-brand-lime font-bold tracking-widest block mb-1">
              EQUIPMENT & APPAREL
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold uppercase italic text-white tracking-tighter">
              High-Speed Performance
            </h2>
          </div>

          {/* Categories Horizontal Tabs */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            {categoriesList.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2 rounded-sm font-mono text-xs font-bold transition-all duration-150 active:scale-95 whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? "bg-brand-lime text-brand-dark shadow-md"
                    : "border border-white/10 text-brand-text-secondary hover:border-brand-lime hover:text-white"
                }`}
                style={{ minHeight: "36px" }}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Filters and Counters Bar */}
        <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-6">
          <span className="font-mono text-xs text-brand-text-dim uppercase tracking-wider">
            {processedProducts.length} Products Found
          </span>

          <div className="relative">
            <button
              onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
              className="flex items-center gap-2 font-mono text-xs text-brand-text-secondary hover:text-white transition-colors uppercase cursor-pointer"
            >
              SORT BY: {sortingOptions.find(o => o.id === sortBy)?.name}
              <ChevronDown className="w-3 h-3 text-brand-lime" />
            </button>

            {isSortDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-brand-surface border border-white/10 rounded-sm shadow-xl z-30">
                {sortingOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setSortBy(opt.id);
                      setIsSortDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 text-xs font-mono text-brand-text-secondary hover:bg-white/5 hover:text-brand-lime border-b border-white/5 last:border-0 flex justify-between items-center"
                  >
                    {opt.name}
                    {sortBy === opt.id && <Check className="w-3 h-3 text-brand-lime" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Banner Spotlight (Screen 5 Aero Knit spotlight example) */}
      {selectedCategory === "all" && spotlimitedProduct && (
        <article
          onClick={() => navigateTo("detail", spotlimitedProduct)}
          className="relative aspect-[4/5] md:aspect-[16/7] overflow-hidden bg-brand-surface rounded border border-white/5 mb-8 cursor-pointer group shadow-2xl select-none"
        >
          <img
            alt="Spotlight product background model"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7tWyamJL0iilmhV9jYeX8q2-oeVu3MMoctbLDgmsruhYridY1H9QwbSsU6P6NU3S6HL6eCdKgPa5FkcTRy18yeoC8hkF_72nVuJt-xvDEE67jHtD-0YwDGLIffHmcFijhPsf-vo_NMmlHmt0qimAXkWv8vEw3JpXdWZDzHjstXr2m4obYl_c1qDbIxfKDbS_ClTB0AFkC-0zH-3prkclPV9nO6NQ5wFHqy74xMKb2X3Bw7zkKxMlx02u8BUSJ3fRY2m7cdVwI6I0"
          />
          <div className="absolute inset-x-0 inset-y-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          
          <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full flex flex-col md:flex-row md:items-end justify-between gap-4 text-left z-20">
            <div>
              <span className="font-mono text-xs text-brand-lime font-bold tracking-widest mb-1 block">LIMITED DROP</span>
              <h3 className="font-heading text-2xl md:text-4xl font-extrabold text-white uppercase mb-1 leading-none">
                {spotlimitedProduct.name}
              </h3>
              <p className="font-sans text-xs md:text-sm text-brand-text-dim max-w-sm">
                Seamless technical compression wear engineered specifically for sub-zero fitness.
              </p>
            </div>
            <button className="mt-2 md:mt-0 bg-brand-lime text-brand-dark px-6 py-3 font-mono text-xs uppercase font-bold tracking-widest hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all w-fit rounded">
              SHOP NOW
            </button>
          </div>
        </article>
      )}

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {processedProducts.map((product) => (
          <article
            key={product.id}
            onClick={() => navigateTo("detail", product)}
            className="group bg-brand-surface-low border border-white/5 flex flex-col rounded overflow-hidden shadow-md cursor-pointer select-none"
          >
            {/* Image Wrap */}
            <div className="relative aspect-square items-center overflow-hidden bg-brand-surface-lowest">
              <img
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                src={product.images[0]}
                referrerPolicy="no-referrer"
              />

              {/* Status pill overlay */}
              <div className="absolute top-3 right-3 flex flex-col gap-1 z-20">
                {product.isNew && (
                  <span className="bg-brand-lime text-brand-dark font-mono text-[9px] font-bold tracking-widest px-2 py-1 rounded-sm shadow-md">
                    NEW
                  </span>
                )}
                {product.isLimited && (
                  <span className="bg-white/10 backdrop-blur-md text-brand-lime font-mono text-[9px] font-bold tracking-widest px-2 py-1 border border-white/10 rounded-sm shadow-md">
                    LIMITED
                  </span>
                )}
                {product.isCore && (
                  <span className="bg-brand-surface-highest/80 backdrop-blur-md text-white font-mono text-[9px] font-bold tracking-widest px-2 py-1 border border-white/10 rounded-sm shadow-md">
                    CORE
                  </span>
                )}
              </div>
            </div>

            {/* Content Bottom */}
            <div className="p-4 bg-brand-surface-low border-t border-white/5 text-left flex flex-col flex-1 justify-between">
              <div>
                <div className="flex justify-between items-start gap-2 mb-1">
                  <h4 className="font-heading text-lg font-bold uppercase text-white tracking-wide leading-tight group-hover:text-brand-lime transition-colors">
                    {product.name}
                  </h4>
                  <span className="font-mono text-xs text-brand-lime font-bold whitespace-nowrap bg-brand-lime/5 border border-brand-lime/10 px-1.5 py-0.5 rounded">
                    ${product.price.toFixed(0)}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-brand-text-dim uppercase tracking-wider">
                  {product.subtitle}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Tech Attributes Luxury Footer */}
      <section className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 border-t border-white/10 pt-10 text-left">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-brand-lime text-xs font-bold">01</span>
          <h5 className="font-heading text-lg font-bold uppercase text-white">PRECISION</h5>
          <p className="font-sans text-xs text-brand-text-dim mt-1">Engineered for the elite athlete split millisecond.</p>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-mono text-brand-lime text-xs font-bold">02</span>
          <h5 className="font-heading text-lg font-bold uppercase text-white">ENDURANCE</h5>
          <p className="font-sans text-xs text-brand-text-dim mt-1 font-normal">Materials exhaustively tested under extreme strain.</p>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-mono text-brand-lime text-xs font-bold">03</span>
          <h5 className="font-heading text-lg font-bold uppercase text-white">VELOCITY</h5>
          <p className="font-sans text-xs text-brand-text-dim mt-1">Aerodynamic silhouettes to support speed bursts.</p>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-mono text-brand-lime text-xs font-bold">04</span>
          <h5 className="font-heading text-lg font-bold uppercase text-white">INTELLIGENCE</h5>
          <p className="font-sans text-xs text-brand-text-dim mt-1">Integrated real-time biometric tracking telemetry.</p>
        </div>
      </section>

      {/* Floating Filter FAB */}
      <button
        onClick={() => {
          // simple sort rotate
          const nextSort = sortBy === "newest" ? "price_high" : sortBy === "price_high" ? "price_low" : "newest";
          setSortBy(nextSort);
        }}
        className="fixed bottom-24 right-6 md:bottom-12 md:right-12 z-30 bg-brand-lime text-brand-dark h-14 w-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-115 active:scale-90 transition-all duration-150 tooltip"
        title="Toggle Filter Sort"
      >
        <SlidersHorizontal className="w-5 h-5" />
      </button>
    </motion.div>
  );
};
