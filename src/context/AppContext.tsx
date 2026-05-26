import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, CartItem, Order, ShippingDetails } from "../types";
import { INITIAL_PRODUCTS } from "../data/products";

interface AppContextType {
  products: Product[];
  cart: CartItem[];
  orders: Order[];
  promoCode: string;
  appliedPromo: string | null;
  activeScreen: string; // "home", "shop", "cart", "profile", "detail", "checkout"
  screenHistory: string[];
  selectedProduct: Product | null;
  navigateTo: (screen: string, productContext?: Product | null) => void;
  navigateBack: () => void;
  addToCart: (product: Product, size: string, color?: { name: string; hex: string }) => void;
  removeFromCart: (cartItemId: string) => void;
  updateCartQuantity: (cartItemId: string, amount: number) => void;
  applyPromoCode: (code: string) => boolean;
  clearPromoCode: () => void;
  placeOrder: (shipping: ShippingDetails, paymentMethod: "apple_pay" | "credit_card") => Order;
  addNewProduct: (product: Product) => void;
  removeProduct: (productId: string) => void;
  resetDatabase: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Products Local DB State
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem("apex_products");
    return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
  });

  // Cart State
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem("apex_cart");
    return saved ? JSON.parse(saved) : [
      // Pre-populate with items visible in Screen 2 for realistic initial show
      {
        id: "apex-velocity-tr-1-10.5",
        product: INITIAL_PRODUCTS.find(p => p.id === "apex-velocity-tr-1") || INITIAL_PRODUCTS[3],
        selectedSize: "10.5",
        selectedColor: { name: "Carbon Black", hex: "#333535" },
        quantity: 1
      },
      {
        id: "iso-dry-tech-top-L",
        product: INITIAL_PRODUCTS.find(p => p.id === "iso-dry-tech-top") || INITIAL_PRODUCTS[4],
        selectedSize: "L",
        quantity: 2
      },
      {
        id: "titan-chrono-smart-One Size",
        product: INITIAL_PRODUCTS.find(p => p.id === "titan-chrono-smart") || INITIAL_PRODUCTS[5],
        selectedSize: "One Size",
        quantity: 1
      }
    ];
  });

  // Orders State
  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem("apex_orders");
    return saved ? JSON.parse(saved) : [];
  });

  // Navigation State
  const [activeScreen, setActiveScreen] = useState<string>("home");
  const [screenHistory, setScreenHistory] = useState<string[]>(["home"]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Promo Code State
  const [promoCode, setPromoCode] = useState<string>("");
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);

  // Sync to outer storage
  useEffect(() => {
    localStorage.setItem("apex_products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem("apex_cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("apex_orders", JSON.stringify(orders));
  }, [orders]);

  // Dynamic Navigation Management
  const navigateTo = (screen: string, productContext: Product | null = null) => {
    if (productContext) {
      setSelectedProduct(productContext);
    }
    setScreenHistory(prev => [...prev, screen]);
    setActiveScreen(screen);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateBack = () => {
    if (screenHistory.length > 1) {
      const historyCopy = [...screenHistory];
      historyCopy.pop(); // remove current
      const prevScreen = historyCopy[historyCopy.length - 1];
      setScreenHistory(historyCopy);
      setActiveScreen(prevScreen);
    } else {
      setActiveScreen("home");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Add Item to active Cart
  const addToCart = (product: Product, size: string, color?: { name: string; hex: string }) => {
    const cartId = `${product.id}-${size}-${color ? color.name : "default"}`;
    setCart(prevCart => {
      const existingIdx = prevCart.findIndex(item => item.id === cartId);
      if (existingIdx > -1) {
        const updated = [...prevCart];
        updated[existingIdx].quantity += 1;
        return updated;
      } else {
        return [
          ...prevCart,
          {
            id: cartId,
            product,
            selectedSize: size,
            selectedColor: color,
            quantity: 1
          }
        ];
      }
    });
  };

  // Remove Item from Cart
  const removeFromCart = (cartItemId: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== cartItemId));
  };

  // Update quantity on cart list
  const updateCartQuantity = (cartItemId: string, amount: number) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === cartItemId) {
          const newQty = Math.max(1, item.quantity + amount);
          return { ...item, quantity: newQty };
        }
        return item;
      });
    });
  };

  // Apply code coupons
  const applyPromoCode = (code: string): boolean => {
    setPromoCode(code);
    const codeClean = code.trim().toUpperCase();
    if (codeClean === "APEX2026" || codeClean === "CODELIME" || codeClean === "KINETIC") {
      setAppliedPromo(codeClean);
      return true;
    }
    return false;
  };

  const clearPromoCode = () => {
    setPromoCode("");
    setAppliedPromo(null);
  };

  // Process order checkout
  const placeOrder = (shipping: ShippingDetails, paymentMethod: "apple_pay" | "credit_card"): Order => {
    const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
    const discMultiplier = appliedPromo ? 0.8 : 1.0; // 20% Discount
    const finalSubtotal = subtotal * discMultiplier;
    const shippingCost = finalSubtotal > 200 ? 0 : 15.00;
    const tax = finalSubtotal * 0.08;
    const total = finalSubtotal + shippingCost + tax;

    const newOrder: Order = {
      id: "APX-" + Math.floor(100000 + Math.random() * 900000),
      items: [...cart],
      shipping,
      paymentMethod,
      subtotal: finalSubtotal,
      shippingCost,
      tax,
      total,
      date: new Date().toISOString()
    };

    setOrders(prev => [newOrder, ...prev]);
    setCart([]); // Clear Cart
    clearPromoCode();
    navigateTo("profile"); // go to user profile tab showing stats & success orders list!
    return newOrder;
  };

  // Administrative DB actions
  const addNewProduct = (product: Product) => {
    setProducts(prev => [product, ...prev]);
  };

  const removeProduct = (productId: string) => {
    setProducts(prev => prev.filter(p => p.id !== productId));
  };

  const resetDatabase = () => {
    setProducts(INITIAL_PRODUCTS);
    localStorage.setItem("apex_products", JSON.stringify(INITIAL_PRODUCTS));
  };

  return (
    <AppContext.Provider
      value={{
        products,
        cart,
        orders,
        promoCode,
        appliedPromo,
        activeScreen,
        screenHistory,
        selectedProduct,
        navigateTo,
        navigateBack,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        applyPromoCode,
        clearPromoCode,
        placeOrder,
        addNewProduct,
        removeProduct,
        resetDatabase
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
