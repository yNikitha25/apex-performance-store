import React from "react";
import { useApp } from "../context/AppContext";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Activity, Zap, Droplet, Thermometer, Compass } from "lucide-react";

export const HomeScreen: React.FC = () => {
  const { products, navigateTo } = useApp();

  // Selected featured items
  const featured = products.filter(p => p.id === "neo-strike-w-pro-v3" || p.id === "exo-pulse-5" || p.id === "iso-dry-tech-top" || p.id === "apex-runner-v3");

  const categories = [
    {
      id: "shoes",
      name: "SHOES",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBu_rGpweLa4ZzYkGj32-M06bp5XPA2devTLMlUe9joYMBgJAb03oC4EuwxhP8wOfYkVimlbsu0iIlC_1Wrj6_nBFbRgd3GhgZyUyhubm-05hfCkFYya0AnYA97yDNOx_thrsww3s-1g84C1C_mIrKexWrEv3__f01_l6z3nMXPf9coTlPntqyz1FvV9szM5PaieE8s1pgLnwbYyNkANjnkt5A5UKU19PixZMY6mzBQ4BL5QV1kLQjxrvc4_aAiIZxBhLGj3hz7boE"
    },
    {
      id: "apparel",
      name: "APPAREL",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwdct5F8yKlzvA28w3AZ_BW9W1y8E9InABFP4O8Z42YTF8E5WA14L1yWlhbXVxivOjSbwNxNsQc0aF48vTJF9BnspHl8eM1aoNjHegw39UNu-BmlbwKF8vvk_u0layLFKuNAQgUwJ_sVWDUiZ8M9jRUl6qEXbt_CY3XtwkRcgjUndnZ0-ZljqelA0N857miVijpNONZPAzOAlLFSkyhoiS8_sHXIU5nk7A_2MMX69qbNtK4zMVXIYnQWluhJcLT2_gV2gGY_Jkqpc"
    },
    {
      id: "watches",
      name: "WATCHES",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0cM1JFAXjv1FQANAWLDC66lg1dwdO841bG4xl1mm_9MBnr3m4iWYkelY34JmWwDdZvoPGoVTAXpmdU938ucUSykWCqaa0D2E3E4EUc4ScTi24M-ClWRxPtSnXRFKBWxtVovhrK0ikXjZizNiN1vLiQdAXufQPmi_cS44a6ijtI93CvxBS3_CXbJhoyeQZ30WSK-5hpcc4J1MFIieFsPaT9CAsB0NxzRiOyUIPNCs3LLO7DCfH2XPJmdUFJAXN2rqSrsaDgNJqgRU"
    },
    {
      id: "dresses",
      name: "DRESSES",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuACYvkQMYf7iLNr3P2Upd67rKUiI-RWjDxXNa2lTJ7orLlnwrIAnnW18lO8bYn5CxjVXGA0B3H8G2EXrbM_h3HCVwrzmKl6YkDIvIoRZJ8MdTRrusLwcV1kdEdqAPTda3Jf6Nmb6Yvf0GVgN0kEGFIvX0iAOkfvfUOnjDyaj1riMP-aIxGJEELDwv8B8u8ZojRc9fgqc3knWOF_Id9nVGFijyxKPNiRvNU2XZ4ib5X4EjjFJiM4UFH5vAE_YHgG5vBUhaKGXnUBbqA"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pb-32"
    >
      {/* Dynamic Hero Section */}
      <section className="relative w-full h-[650px] flex flex-col justify-end p-6 md:p-12 overflow-hidden select-none">
        <img
          alt="Athlete focused on performance training"
          className="absolute inset-0 w-full h-full object-cover object-center z-0 scale-105"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-PEVrufhyEJ4pefahIngw7OmmmPVju7IKed9o4zY3wzCLnf5B4AuUU59Npy2rUjW60kn4zsXx_Gt1Zx1BDiMub-csLWM_L-SvOFoz9tJ5Zpa0vfnD6va-Zwiflzq0oXIkiRA_ycg4pEr0LXzYzIw_LtOKRXoOTZFS56W3onAG_EWhYunL6WemfJUtc-cdkIQdEG1x2-QAzqTyDHJXvD75A8E5paJRcN39pJmrX2xWwVTUUpZKJUxspLuSBot3N-JVNGVYKK1Ots8"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent z-10" />
        
        <div className="relative z-20 max-w-2xl text-left">
          <span className="font-mono text-xs text-brand-lime font-semibold tracking-widest mb-2 block uppercase">
            NEW SEASON ARRIVAL
          </span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase leading-none mb-4 text-white">
            PUSH BEYOND<br />LIMITS
          </h2>
          <p className="font-sans text-sm md:text-base text-brand-text-secondary mb-8 max-w-md">
            Engineering the future of human performance. Lightweight technical apparel designed for elite endurance.
          </p>
          <button
            onClick={() => navigateTo("shop")}
            className="px-8 py-4 bg-brand-lime text-brand-dark font-mono text-xs uppercase font-bold tracking-widest hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all duration-150 rounded"
          >
            Shop Collection
          </button>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-4">
          <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase text-white tracking-tighter">
            Categories
          </h3>
          <button
            onClick={() => navigateTo("shop")}
            className="font-mono text-xs text-brand-lime hover:underline tracking-widest"
          >
            VIEW ALL
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => navigateTo("shop")}
              className="group relative aspect-[4/5] bg-brand-surface rounded overflow-hidden cursor-pointer shadow-lg border border-white/5"
            >
              <img
                alt={cat.name}
                className="absolute inset-x-0 inset-y-0 w-full h-full object-cover filter brightness-75 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500 ease-out"
                src={cat.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
              <div className="absolute bottom-4 left-4 z-20">
                <span className="font-heading text-lg font-bold text-white tracking-wider block">
                  {cat.name}
                </span>
                <div className="h-[2px] w-0 group-hover:w-full bg-brand-lime transition-all duration-300 mt-1" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Performance Tray */}
      <section className="py-12 bg-brand-surface-lowest">
        <div className="px-6 md:px-12 max-w-7xl mx-auto mb-8 flex justify-between items-end">
          <div>
            <span className="font-mono text-[10px] text-brand-lime font-semibold tracking-widest block mb-1">
              ELITE SELECTIONS
            </span>
            <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase text-white tracking-tighter">
              Featured Performance
            </h3>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full hover:bg-white/5 transition-colors">
              <ArrowLeft className="w-4 h-4 text-white" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full hover:bg-white/5 transition-colors" onClick={() => navigateTo("shop")}>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        <div className="flex overflow-x-auto no-scrollbar gap-6 px-6 md:px-12 pb-4 scroll-smooth">
          {featured.map((product) => (
            <div
              key={product.id}
              onClick={() => navigateTo("detail", product)}
              className="min-w-[280px] md:min-w-[340px] group cursor-pointer select-none"
            >
              <div className="relative aspect-[3/4] bg-brand-surface-low rounded overflow-hidden border border-white/5 mb-4">
                {product.isNew && (
                  <span className="absolute top-4 left-4 z-20 bg-brand-lime text-brand-dark px-2 py-1 font-mono text-[9px] font-bold tracking-widest rounded-sm">
                    NEW
                  </span>
                )}
                <img
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={product.images[0]}
                />
                <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 glass-panel border-t border-white/10 flex justify-center z-20">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-brand-lime font-bold">
                    View Technical Specifications
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-heading text-lg font-bold text-white tracking-wide uppercase leading-tight group-hover:text-brand-lime transition-colors">
                    {product.name}
                  </h4>
                  <p className="font-sans text-xs text-brand-text-dim mt-1">
                    {product.subtitle}
                  </p>
                </div>
                <span className="font-mono text-xs text-white font-bold bg-white/5 px-2 py-1 border border-white/10 rounded">
                  ${product.price.toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Performance Lab Bento Grid */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-10 text-left border-b border-white/10 pb-4">
          <span className="font-mono text-xs text-brand-lime tracking-widest font-semibold block mb-1">
            OUR TECHNOLOGY
          </span>
          <h3 className="font-heading text-3xl font-bold uppercase text-white tracking-tighter">
            THE PERFORMANCE LAB
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6">
          <div className="md:col-span-2 md:row-span-2 bg-[#121212] border border-white/5 p-8 flex flex-col justify-center rounded-lg relative overflow-hidden group">
            <div className="relative z-10 text-left">
              <Zap className="text-brand-lime w-10 h-10 mb-6 animate-pulse" />
              <h4 className="font-heading text-2xl md:text-3xl font-extrabold uppercase mb-4 text-white leading-tight">
                KINETIC ENERGY<br />RETURN
              </h4>
              <p className="font-sans text-sm text-brand-text-dim leading-relaxed max-w-md">
                Our proprietary sole technology converts downward athlete impact metrics into explosive forward propulsion, reducing fatigue over marathon splits.
              </p>
            </div>
            <div className="absolute bottom-0 right-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-300 pointer-events-none">
              <Zap className="w-72 h-72 text-white" />
            </div>
          </div>

          <div className="md:col-span-2 bg-[#121212] border border-white/5 p-6 rounded-lg flex items-center gap-6">
            <div className="w-14 h-14 flex-shrink-0 bg-brand-lime/10 flex items-center justify-center rounded">
              <Droplet className="text-brand-lime w-6 h-6" />
            </div>
            <div className="text-left">
              <h5 className="font-heading text-lg font-bold text-white uppercase tracking-wide">
                ZERO-MOISTURE FABRIC
              </h5>
              <p className="font-sans text-xs text-brand-text-dim mt-1">
                Advanced capillary action pull wicks sweat instantly off training surfaces.
              </p>
            </div>
          </div>

          <div className="md:col-span-1 bg-[#121212] border border-white/5 p-6 rounded-lg flex flex-col justify-between text-left">
            <Thermometer className="text-brand-lime w-6 h-6" />
            <h5 className="font-heading text-lg font-bold text-white uppercase tracking-wide mt-6">
              THERMAL CONTROL
            </h5>
          </div>

          <div className="md:col-span-1 bg-[#121212] border border-white/5 p-6 rounded-lg flex flex-col justify-between text-left">
            <Compass className="text-brand-lime w-6 h-6" />
            <h5 className="font-heading text-lg font-bold text-white uppercase tracking-wide mt-6">
              AERO FIT SPEC
            </h5>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
