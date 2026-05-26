import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import { Menu, ShoppingBag, X, Zap, CheckSquare, Watch, Award, Dumbbell } from "lucide-react";

export const Header: React.FC = () => {
  const { cart, navigateTo, activeScreen } = useApp();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const categories = [
    { name: "Shoes", icon: Award, screen: "shop" },
    { name: "Apparel", icon: CheckSquare, screen: "shop" },
    { name: "Watches", icon: Watch, screen: "shop" },
    { name: "New Arrivals", icon: Zap, screen: "shop" },
    { name: "Training", icon: Dumbbell, screen: "shop" }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-45 flex items-center justify-between px-6 h-16 bg-brand-bg/85 backdrop-blur-xl border-b border-white/10 select-none">
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="text-white hover:text-brand-lime transition-all duration-150 active:scale-95 p-1"
          aria-label="Open navigation menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <h1
          onClick={() => navigateTo("home")}
          className="font-heading text-xl md:text-2xl font-bold uppercase tracking-tighter text-white cursor-pointer hover:opacity-80 transition-opacity active:scale-[0.99]"
        >
          APEX PERFORMANCE
        </h1>

        <button
          onClick={() => navigateTo("cart")}
          className={`relative text-white hover:text-brand-lime transition-all duration-150 active:scale-95 p-1 ${
            activeScreen === "cart" ? "text-brand-lime" : ""
          }`}
          aria-label="Open shopping cart"
        >
          <ShoppingBag className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-brand-lime text-brand-dark-bg text-[10px] font-bold h-4 min-w-[16px] px-1 rounded-full flex items-center justify-center animate-pulse">
              {cartCount}
            </span>
          )}
        </button>
      </header>

      {/* Drawer Overlay */}
      {isDrawerOpen && (
        <div
          onClick={() => setIsDrawerOpen(false)}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
        >
          {/* Drawer Sidebar */}
          <aside
            onClick={(e) => e.stopPropagation()}
            className="h-full w-4/5 max-w-xs bg-brand-bg border-r border-white/10 flex flex-col p-6 shadow-2xl relative"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-brand-lime tracking-widest font-medium">CATEGORIES</span>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="text-white hover:text-brand-lime transition-colors active:scale-95"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-6 mt-12">
              {categories.map((cat, idx) => {
                const IconComponent = cat.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setIsDrawerOpen(false);
                      navigateTo(cat.screen);
                    }}
                    className="flex items-center gap-4 text-brand-text-secondary hover:text-brand-lime hover:bg-white/5 p-3 rounded-lg text-left transition-all active:translate-x-1 duration-150"
                  >
                    <IconComponent className="w-5 h-5 text-brand-lime/80" />
                    <span className="font-heading text-lg tracking-wide uppercase">{cat.name}</span>
                  </button>
                );
              })}
            </nav>

            <div className="mt-auto border-t border-white/10 pt-6">
              <p className="font-mono text-[10px] text-brand-text-dim uppercase tracking-widest text-center">
                APEX PERFORMANCE LABS © 2026
              </p>
            </div>
          </aside>
        </div>
      )}
    </>
  );
};
