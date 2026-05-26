export interface SpecItem {
  title: string;
  description: string;
}

export interface BentoSpec {
  icon: string; // Lucide icon name
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: "shoes" | "apparel" | "watches" | "dresses";
  price: number;
  description: string;
  images: string[];
  sizes: string[];
  colors?: { name: string; hex: string }[];
  isNew?: boolean;
  isLimited?: boolean;
  isCore?: boolean;
  specs?: SpecItem[];
  bentoSpecs?: BentoSpec[];
}

export interface CartItem {
  id: string; // Combination of productId + selectedSize + selectedColor
  product: Product;
  selectedSize: string;
  selectedColor?: { name: string; hex: string };
  quantity: number;
}

export interface ShippingDetails {
  fullName: string;
  email: string;
  streetAddress: string;
  city: string;
  postalCode: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  shipping: ShippingDetails;
  paymentMethod: "apple_pay" | "credit_card";
  subtotal: number;
  shippingCost: number;
  tax: number;
  total: number;
  date: string;
}
