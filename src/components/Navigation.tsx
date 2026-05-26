import React from "react";
import { useApp } from "../context/AppContext";
import { Home, Search, ShoppingCart, User } from "lucide-react";

export const Navigation: React.FC = () => {
  const { activeScreen, navigateTo } = useApp();

  const handleTabClick = (screen: string) => {
    navigateTo(screen);
  };

  const tabs = [
    { id: "home", label: "Home", icon: Home },
    { id: "shop", label: "Shop", icon: Search },
    { id: "cart", label: "Cart", icon: ShoppingCart },
    { id: "profile", label: "Profile", icon: User }
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-40 flex justify-around items-center px-4 py-3 pb-safe-bottom bg-brand-surface-low/90 backdrop-blur-2xl border-t border-white/10 rounded-t-xl select-none">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeScreen === tab.id || (tab.id === "shop" && activeScreen === "detail") || (tab.id === "cart" && activeScreen === "checkout");
        return (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`flex flex-col items-center justify-center py-2 px-4 transition-all duration-150 active:scale-90 ease-out ${
              isActive ? "text-brand-lime" : "text-brand-text-secondary hover:text-white"
            }`}
            style={{ minWidth: "64px", minHeight: "44px" }}
          >
            <Icon className={`w-5 h-5 transition-transform ${isActive ? "scale-110" : ""}`} />
            <span className="font-heading text-[10px] uppercase tracking-widest mt-1">
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};
