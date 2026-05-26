import React from "react";
import { AppProvider, useApp } from "./context/AppContext";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { HomeScreen } from "./screens/HomeScreen";
import { ShopScreen } from "./screens/ShopScreen";
import { ProductDetailScreen } from "./screens/ProductDetailScreen";
import { CartScreen } from "./screens/CartScreen";
import { CheckoutScreen } from "./screens/CheckoutScreen";
import { ProfileScreen } from "./screens/ProfileScreen";

const ScreenRenderer: React.FC = () => {
  const { activeScreen } = useApp();

  switch (activeScreen) {
    case "home":
      return <HomeScreen />;
    case "shop":
      return <ShopScreen />;
    case "detail":
      return <ProductDetailScreen />;
    case "cart":
      return <CartScreen />;
    case "checkout":
      return <CheckoutScreen />;
    case "profile":
      return <ProfileScreen />;
    default:
      return <HomeScreen />;
  }
};

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-brand-bg text-white selection:bg-brand-lime selection:text-brand-dark">
        {/* Top Floating App Bar */}
        <Header />

        {/* Core Main Viewport Container */}
        <main className="pt-16 pb-20">
          <ScreenRenderer />
        </main>

        {/* Bottom Persistent Navigation Dock */}
        <Navigation />
      </div>
    </AppProvider>
  );
}
