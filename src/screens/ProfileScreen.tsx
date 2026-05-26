import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import { Product } from "../types";
import {
  User,
  History,
  Database,
  RefreshCw,
  PlusCircle,
  Trash2,
  Cpu,
  Zap,
  Check,
  ShieldAlert,
  Dumbbell
} from "lucide-react";
import { motion } from "motion/react";

export const ProfileScreen: React.FC = () => {
  const {
    orders,
    products,
    addNewProduct,
    removeProduct,
    resetDatabase,
    navigateTo
  } = useApp();

  const [activeTab, setActiveTab] = useState<"stats" | "orders" | "database">("stats");
  
  // Custom Product Creation Form state
  const [dbForm, setDbForm] = useState({
    name: "",
    subtitle: "",
    category: "shoes" as "shoes" | "apparel" | "watches" | "dresses",
    price: "",
    description: "",
    imageUrl: ""
  });
  
  const [formSuccess, setFormSuccess] = useState<boolean>(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleCreateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!dbForm.name || !dbForm.subtitle || !dbForm.price || !dbForm.description || !dbForm.imageUrl) {
      setFormError("All configurations fields must be populated");
      return;
    }

    const priceNum = parseFloat(dbForm.price);
    if (isNaN(priceNum) || priceNum <= 0) {
      setFormError("Please enter a valid product price");
      return;
    }

    // Hotlink image validation
    if (!dbForm.imageUrl.startsWith("http://") && !dbForm.imageUrl.startsWith("https://")) {
      setFormError("Specified photo must be a valid hotlinked absolute URL");
      return;
    }

    const newCustomProduct: Product = {
      id: "custom-" + Math.floor(1000 + Math.random() * 9000),
      name: dbForm.name,
      subtitle: dbForm.subtitle,
      category: dbForm.category,
      price: priceNum,
      description: dbForm.description,
      images: [dbForm.imageUrl],
      sizes: dbForm.category === "shoes" ? ["8", "9", "10", "11"] : dbForm.category === "watches" ? ["44MM", "48MM"] : ["S", "M", "L"],
      isNew: true
    };

    addNewProduct(newCustomProduct);
    setFormSuccess(true);
    setDbForm({
      name: "",
      subtitle: "",
      category: "shoes",
      price: "",
      description: "",
      imageUrl: ""
    });

    setTimeout(() => setFormSuccess(false), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pb-32 px-4 md:px-12 max-w-7xl mx-auto pt-4"
    >
      {/* Header Bio section */}
      <section className="bg-brand-surface-low border border-white/5 p-6 rounded-lg mb-8 flex flex-col md:flex-row items-center gap-6 text-left relative overflow-hidden select-none">
        <div className="w-20 h-20 rounded-full bg-brand-lime flex items-center justify-center border-4 border-white/10 relative z-10 flex-shrink-0">
          <User className="w-10 h-10 text-brand-dark" />
        </div>
        <div className="flex-1 relative z-10">
          <div className="flex items-center gap-3">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-white uppercase tracking-wide">
              Athena Archer
            </h2>
            <span className="bg-brand-lime/10 border border-brand-lime/20 text-brand-lime font-mono text-[9px] font-bold tracking-widest px-2 py-0.5 rounded-sm">
              ELITE LEVEL V
            </span>
          </div>
          <p className="font-mono text-xs text-brand-text-dim mt-1.5 uppercase tracking-wide">
            Telemetry Sync: ACTIVE | Member ID: APX2026-9483011
          </p>
        </div>
        <div className="absolute right-0 top-0 opacity-[0.02] pointer-events-none">
          <Cpu className="w-48 h-48 text-white" />
        </div>
      </section>

      {/* Internal Tabs Switch Controller */}
      <section className="flex gap-2 border-b border-white/10 pb-4 mb-8">
        <button
          onClick={() => setActiveTab("stats")}
          className={`flex-1 py-3 px-4 font-mono text-xs font-bold uppercase tracking-widest border transition-all rounded ${
            activeTab === "stats"
              ? "bg-brand-lime text-brand-dark border-brand-lime"
              : "border-white/10 text-brand-text-secondary hover:text-white"
          }`}
          style={{ minHeight: "44px" }}
        >
          <Dumbbell className="w-4 h-4 inline-block mr-2" />
          Active Stats
        </button>

        <button
          onClick={() => setActiveTab("orders")}
          className={`relative flex-1 py-3 px-4 font-mono text-xs font-bold uppercase tracking-widest border transition-all rounded ${
            activeTab === "orders"
              ? "bg-brand-lime text-brand-dark border-brand-lime"
              : "border-white/10 text-brand-text-secondary hover:text-white"
          }`}
          style={{ minHeight: "44px" }}
        >
          <History className="w-4 h-4 inline-block mr-2" />
          Invoices ({orders.length})
        </button>

        <button
          onClick={() => setActiveTab("database")}
          className={`flex-1 py-3 px-4 font-mono text-xs font-bold uppercase tracking-widest border transition-all rounded ${
            activeTab === "database"
              ? "bg-brand-lime text-brand-dark border-brand-lime"
              : "border-white/10 text-brand-text-secondary hover:text-white"
          }`}
          style={{ minHeight: "44px" }}
        >
          <Database className="w-4 h-4 inline-block mr-2" />
          Catalog DB
        </button>
      </section>

      {/* TAB 1 CONTENT: Active sports telemetry stats */}
      {activeTab === "stats" && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
        >
          <div className="bg-[#121212] border border-white/5 p-6 rounded relative overflow-hidden">
            <span className="font-mono text-[9px] text-brand-text-dim block mb-1 tracking-widest uppercase">TRACKED KILOMETRAGE</span>
            <span className="font-heading text-4xl font-extrabold text-white">412.8 KM</span>
            <span className="font-mono text-[9px] text-brand-lime block mt-2">+12% over typical week</span>
          </div>

          <div className="bg-[#121212] border border-white/5 p-6 rounded relative overflow-hidden">
            <span className="font-mono text-[9px] text-brand-text-dim block mb-1 tracking-widest uppercase">AVERAGE CALORIES PULSE</span>
            <span className="font-heading text-4xl font-extrabold text-white">164 BPM</span>
            <span className="font-mono text-[9px] text-blue-400 block mt-2">Optimal metabolic range</span>
          </div>

          <div className="bg-[#121212] border border-white/5 p-6 rounded relative overflow-hidden">
            <span className="font-mono text-[9px] text-brand-text-dim block mb-1 tracking-widest uppercase">SPLITS RECORD HOUR</span>
            <span className="font-heading text-4xl font-extrabold text-white">03:14 MIN/KM</span>
            <span className="font-mono text-[9px] text-red-400 block mt-2">Personal season micro record</span>
          </div>

          <div className="md:col-span-3 bg-white/5 p-6 rounded text-left border border-white/10 flex items-center gap-4">
            <Zap className="w-6 h-6 text-brand-lime animate-pulse flex-shrink-0" />
            <p className="font-sans text-xs text-brand-text-dim leading-relaxed">
              Biometric telemetry stats are synced in real time off connected smartwatches and wearable trackers. All activity history logs are preserved inside local sandbox databases.
            </p>
          </div>
        </motion.div>
      )}

      {/* TAB 2 CONTENT: Invoice log list history */}
      {activeTab === "orders" && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-6 text-left"
        >
          {orders.length === 0 ? (
            <div className="p-12 text-center bg-[#121212] border border-white/5 rounded">
              <History className="w-8 h-8 text-brand-text-dim mx-auto mb-4" />
              <p className="font-mono text-xs text-brand-text-dim uppercase tracking-wider">No historic transactions recorded</p>
              <button
                onClick={() => navigateTo("shop")}
                className="mt-4 px-6 py-2 border border-brand-lime text-brand-lime font-mono text-[10px] uppercase font-bold tracking-widest rounded"
              >
                Access products catalog
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {orders.map((ord) => (
                <div key={ord.id} className="bg-[#121212] border border-white/15 rounded p-6">
                  {/* Status header banner */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/5 pb-4 mb-4 gap-2">
                    <div>
                      <span className="font-mono text-xs text-brand-lime font-bold tracking-widest whitespace-nowrap bg-brand-lime/10 p-1.5 rounded-sm">
                        ORDER DETECTED: {ord.id}
                      </span>
                      <p className="font-sans text-[10px] text-brand-text-dim mt-2 tracking-wide">
                        Processed on {new Date(ord.date).toLocaleDateString()} at {new Date(ord.date).toLocaleTimeString()}
                      </p>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="font-mono text-sm text-white font-extrabold whitespace-nowrap">
                        Total Invoice: ${ord.total.toFixed(2)}
                      </span>
                      <span className="font-mono text-[9px] text-green-400 font-bold uppercase tracking-widest mt-1">
                        ● Central Dispatch Processing
                      </span>
                    </div>
                  </div>

                  {/* Items within list */}
                  <div className="flex flex-col gap-3">
                    {ord.items.map((item, idx) => (
                      <div key={idx} className="flex gap-4 items-center">
                        <img
                          alt={item.product.name}
                          className="w-10 h-10 object-cover rounded"
                          src={item.product.images[0]}
                        />
                        <div className="flex-1">
                          <h4 className="font-heading text-xs font-black uppercase text-white tracking-wide">
                            {item.product.name}
                          </h4>
                          <span className="font-mono text-[9px] text-brand-text-dim">
                            Fit Size: {item.selectedSize} | Quantity: {item.quantity}
                          </span>
                        </div>
                        <span className="font-mono text-xs text-white">
                          ${(item.product.price * item.quantity).toFixed(0)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-white/5 pt-4 mt-4 text-[10px] items-center text-brand-text-dim font-mono uppercase tracking-widest flex gap-2">
                    <Check className="w-4 h-4 text-brand-lime" />
                    Shipped to {ord.shipping.fullName}, {ord.shipping.streetAddress}, {ord.shipping.city} {ord.shipping.postalCode}
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      )}

      {/* TAB 3 CONTENT: Product Catalog DB management panel */}
      {activeTab === "database" && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left"
        >
          {/* Left panel: Add custom product hotlinks Form */}
          <div className="lg:col-span-6 bg-brand-surface-low border border-white/5 p-6 rounded">
            <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider mb-5 flex items-center justify-between">
              <span>Insert Custom Product Specification</span>
              <PlusCircle className="w-5 h-5 text-brand-lime" />
            </h3>

            <p className="font-sans text-xs text-brand-text-dim leading-relaxed mb-6">
              You can populate the active database by registering custom items here. Provide hotlinked image absolute URLs, and they will render live inside catalog filters.
            </p>

            <form onSubmit={handleCreateProduct} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="font-mono text-[9px] text-brand-text-dim uppercase tracking-wider">Product ID / Name</label>
                <input
                  type="text"
                  placeholder="e.g. APEX RACER ALPHA-X"
                  value={dbForm.name}
                  onChange={(e) => setDbForm(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-brand-surface-lowest border border-white/10 rounded px-3 py-2 text-xs text-white outline-none focus:border-brand-lime"
                  style={{ minHeight: "40px" }}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="font-mono text-[9px] text-brand-text-dim uppercase tracking-wider">Sub-title / Colors</label>
                  <input
                    type="text"
                    placeholder="e.g. CARBON LIME / MAGENTA"
                    value={dbForm.subtitle}
                    onChange={(e) => setDbForm(prev => ({ ...prev, subtitle: e.target.value }))}
                    className="w-full bg-brand-surface-lowest border border-white/10 rounded px-3 py-2 text-xs text-white outline-none focus:border-brand-lime"
                    style={{ minHeight: "40px" }}
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-mono text-[9px] text-brand-text-dim uppercase tracking-wider">Price (USD)</label>
                  <input
                    type="number"
                    placeholder="e.g. 290"
                    value={dbForm.price}
                    onChange={(e) => setDbForm(prev => ({ ...prev, price: e.target.value }))}
                    className="w-full bg-brand-surface-lowest border border-white/10 rounded px-3 py-2 text-xs text-white outline-none focus:border-brand-lime"
                    style={{ minHeight: "40px" }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="font-mono text-[9px] text-brand-text-dim uppercase tracking-wider">Category Sector</label>
                  <select
                    value={dbForm.category}
                    onChange={(e) => setDbForm(prev => ({ ...prev, category: e.target.value as any }))}
                    className="w-full bg-brand-surface-lowest border border-white/10 rounded px-3 py-2 text-xs text-white outline-none focus:border-brand-lime"
                    style={{ minHeight: "40px" }}
                  >
                    <option value="shoes">Shoes Collection</option>
                    <option value="apparel">Apparel Gear</option>
                    <option value="watches">Telemetry Watches</option>
                    <option value="dresses">Performance Dresses</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-mono text-[9px] text-brand-text-dim uppercase tracking-wider">Image Hotlink URL</label>
                  <input
                    type="text"
                    placeholder="https://lh3.googleusercontent.com/..."
                    value={dbForm.imageUrl}
                    onChange={(e) => setDbForm(prev => ({ ...prev, imageUrl: e.target.value }))}
                    className="w-full bg-brand-surface-lowest border border-white/10 rounded px-3 py-2 text-xs text-white outline-none focus:border-brand-lime truncate"
                    style={{ minHeight: "40px" }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-mono text-[9px] text-brand-text-dim uppercase tracking-wider">Brief Description</label>
                <textarea
                  placeholder="Describe technical material feedback..."
                  rows={2}
                  value={dbForm.description}
                  onChange={(e) => setDbForm(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full bg-brand-surface-lowest border border-white/10 rounded px-3 py-2 text-xs text-white outline-none focus:border-brand-lime resize-none"
                />
              </div>

              {formError && (
                <p className="font-mono text-[10px] text-red-400 font-bold uppercase tracking-wider">{formError}</p>
              )}

              {formSuccess && (
                <p className="font-mono text-[10px] text-brand-lime font-bold uppercase tracking-wider flex items-center gap-1">
                  <Check className="w-3" /> Custom specifications published of Catalog!
                </p>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-brand-lime text-brand-dark hover:bg-white hover:text-black font-mono text-[10px] uppercase font-extrabold tracking-widest rounded transition-all cursor-pointer"
                style={{ minHeight: "40px" }}
              >
                Register Spec Inside Database
              </button>
            </form>
          </div>

          {/* Right panel: Active catalog listing & database resets */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Database admin reset actions card */}
            <div className="bg-brand-surface-low border border-white/5 p-6 rounded text-left">
              <h4 className="font-heading text-md font-bold text-white uppercase tracking-wider mb-4 flex items-center justify-between">
                <span>Database Administration Tools</span>
                <Cpu className="w-4 h-4 text-brand-text-dim" />
              </h4>

              <p className="font-sans text-xs text-brand-text-dim leading-relaxed mb-4">
                You can flush custom-added configurations or restore the factory-calibrated catalogs by triggering database resets.
              </p>

              <button
                type="button"
                onClick={() => {
                  if (confirm("Restore preloaded APEX product catalog dataset?")) {
                    resetDatabase();
                  }
                }}
                className="flex items-center justify-center gap-2 border border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-dark py-3 px-4 rounded w-full font-mono text-[10px] uppercase font-bold tracking-widest transition-all cursor-pointer"
                style={{ minHeight: "44px" }}
              >
                <RefreshCw className="w-4 h-4" />
                Restore default preloaded assets
              </button>
            </div>

            {/* List current products inside database */}
            <div className="bg-brand-surface-low border border-white/5 p-6 rounded flex-1">
              <h4 className="font-heading text-md font-bold text-white uppercase tracking-wider mb-4">
                Active Catalog Components ({products.length})
              </h4>
              <div className="flex flex-col gap-3 max-h-[280px] overflow-y-auto pr-2 no-scrollbar">
                {products.map((p) => {
                  const isCustom = p.id.startsWith("custom-");
                  return (
                    <div
                      key={p.id}
                      className="p-2.5 bg-brand-surface-lowest rounded flex items-center justify-between border border-white/5 gap-4"
                    >
                      <img
                        alt={p.name}
                        className="w-8 h-8 object-cover rounded"
                        src={p.images[0]}
                      />
                      <div className="flex-1 text-left min-w-0">
                        <span className="font-heading text-xs font-black uppercase text-white truncate block">
                          {p.name}
                        </span>
                        <span className="font-mono text-[9px] text-brand-text-dim block capitalize">
                          {p.category} | ${p.price.toFixed(0)}
                        </span>
                      </div>
                      <div className="flex-shrink-0">
                        {isCustom ? (
                          <button
                            onClick={() => removeProduct(p.id)}
                            className="text-brand-text-dim hover:text-red-400 p-1.5 transition-colors"
                            title="Remove custom entry"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        ) : (
                          <span className="font-mono text-[8px] text-brand-text-dim tracking-widest border border-white/10 rounded px-1.5 py-0.5">
                            CORE
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </motion.div>
      )}

    </motion.div>
  );
};
