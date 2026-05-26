import { Product } from "../types";

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: "exo-pulse-5",
    name: "EXO-PULSE 5",
    subtitle: "BIOMETRIC TRACKING / TITANIUM",
    category: "watches",
    price: 450.00,
    description: "Advanced biometric intelligence with real-time performance tracking and 14-day battery life. Engineered for elite athletes with ultra-hard casing.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBDWuWx39jME-2KrTtIFEolhB0Ewy0c0v4s6p9S5f6KElpgxe8V4FBQqZy2JfKdNTWohDIWPV8kNR0j2FYThAvAhbxT-tOCgCdCHFt8qwnJxCJWtkE_tRdc0BoK6NiCVyZPvU9yKF3PCCJVNsFtZxvKoy2_c_qA7BtYYf06O33Srz71w1AVKl-AZxLTHLvDm0msTiYXersNg8J4OBilnL2SRJ-8kONI90K7NvHBZliSM-plIjtoL8nwiv4Ap1LwHu3xrOdUjikaes0",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQZGaro9-bs9dsQnEazZoqZFiY9IJs306f0-TTpNarxxgmMv8_3bYz8DlodRh-c2LhscDKQ-woT98259q7jDo8rkUEZ7iibRqZnh5srpfNOty5j0qBH10y9g12uqTajIaLFexqgKCEKP-XCUNhtdoh8g-BqKlPgNLokoiXm_AUiwi4nnXjfqYXdnMvaZDWGTykLsmTT63BBzKsmcyA6g6oNJthC8y0EFDwajmwA_iM3Pftx_W2SCUgVGIKjQ4Z5k1KbnKc0_cvMtQ"
    ],
    sizes: ["44MM", "48MM"],
    colors: [
      { name: "Obsidian", hex: "#000000" },
      { name: "Carbon", hex: "#333535" },
      { name: "Neon", hex: "#abd600" }
    ],
    isNew: true,
    specs: [
      { title: "Battery Life", description: "Up to 14 days in high telemetry tracking mode." },
      { title: "Optics Casing", description: "Dual-ion tempered sapphire crystal." }
    ],
    bentoSpecs: [
      { icon: "diamond", label: "OPTICS", value: "Sapphire Glass" },
      { icon: "water_drop", label: "RATING", value: "50m WR" },
      { icon: "monitor_heart", label: "SENSORS", value: "Heart Rate & SpO2" }
    ]
  },
  {
    id: "neo-strike-w-pro-v3",
    name: "NEO-STRIKE W-PRO V3",
    subtitle: "PERFORMANCE TRAINER / CARBON-CORE",
    category: "shoes",
    price: 285.00,
    description: "Highly aerodynamic athletic trainer. Built for speed with a reactive carbon fiber propulsion plate, offering explosive return of energy and structured heel stability.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAiNINVgHUgUte-Fg-XdOCwMVIwOLMaxiHY77CpoE-x2kLSudYBYpBIaB8uNcWajX3EakdT2ux5xT6f5pxTB7oGDlxAf8yz2yaxBXX4MUL0VMbW2l3kwzQhN6aY8UzlpNsUe2lEv5qNv0cfQEKDUKxOSgkmNPrVcen83xx_NPBbiuM3LA_dvDxKmEfAuo_FaT4qlbysEldXpcvNY5oGcKjcbAoNaPhwRwXawvnQ0sZyXzsMwLBbKAA9D_8YCcyfocZsyfcm0z-aIjc",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC5LzjFrzvBiIO_qlArEMkqCffwwD7rc-JAKH0uRQxyTJurdBJKWCyFS50bcpRN_TzmNlwXYOeN7M43HXyWds1lE94ri7b1kWDK5sZLlhcBB4Z-a7yYg7dRmUviWEQHBxCjjMqepdXzT9yjCJBHSGPZe1JTtyzdOUEib5-YBOJ4Qj-fnHL695iGK9EX2uI-gR5aP9x5TVn2UGDvcWqFA4h0r6AN6F1oIJ6rJwJudT00UcXosKVrf3kDT4Bs8Z5VjpK3b7imIOYevLk",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD0enw1zgt1anrm1gGzzYVG3DFnfi9v6W4SMEn3uuU_gz88MhqKOYwXGFWSR8BYVmeZUEjvItnoOGCTAxalGyrKaSU5V7PLf5wpLnJxRUc4oTRiMJcrBqTaWrk2lWE1sP7yUzYCwNXV2Uj0r5CAnvnCxJ6ZChzl_aQ38TQEzE-uPJkBqWKQe0PBT6f1tpixRxQEP0ixUFpbiRhZVthtNKSN2qTPX4uE862uKUQAqM_-7c_XYUBWBU4VevuSEBMXRcfx2GcTgPrUvMQ"
    ],
    sizes: ["7", "8", "9", "10", "11", "12"],
    isLimited: true,
    specs: [
      { title: "Carbon-Core™ Midsole", description: "High-energy return plate for explosive take-offs." },
      { title: "Aero-Weave Upper", description: "Single-thread technical mesh for maximum ventilation." }
    ],
    bentoSpecs: [
      { icon: "bolt", label: "POWER TRANSFER", value: "Engineered with 12mm drop" },
      { icon: "weight", label: "ULTRALIGHT", value: "Lightest competitive trainer, 170g" },
      { icon: "shield_with_heart", label: "DURABILITY", value: "Longevity over 500+ miles" }
    ]
  },
  {
    id: "neo-strike-pro-v3",
    name: "NEO-STRIKE PRO V3",
    subtitle: "PERFORMANCE TRAINER / CARBON-CORE",
    category: "shoes",
    price: 285.00,
    description: "Reflective aerodynamic performance trainers designed to maximize kinetic output with aggressive electric lime highlighting.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDuEjM7OdcLAaHQqXbZ9bnzSGDgbWrl5KEG6lLqOPiaDn5gYC3BGdkvJNwPV21z6aZtXcDDfei5VVI-3XkzWr2iv9jRXLRFc46tOH6kV2EG-AXro9XT0yxhwjFsQ8_o-MUlGKD-Cl5ZC3rQssbbffIgFv37ZuIl_6fUVgc_gYV3V-izhJCL5OyT7QvoSXZHuXdnz2A9POYccXf4zxfX7tS48WC2LCf6ZWFh8ZPvJgQdJIY0syNGZtVb7R5TbMFmRAa5j2usR8P-l-c",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ_xGoLQbLeKo14XcBXAVysoFZ5okoRFahhMdKWGjt8A0RqxBM51xnggCN48mtwSu3Gs6oxVtKJhioFn_yfM1V3-nB2KKWcdEhf5dBkop4wcJaTn8nFt1alsPseGdXq6PE-7wuMIjwgkmPw241Tlo7O00vcw2eUktjA2WyTgX2vmgadi-Ll_6b8CVjVxGTSN9ZFviqV2c1EdNZrDl1QGDzootttGNJAlGukNmjmstY3AUFkOMZ3_SCgrujrPgWYHl9MewqtKHi1wU",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCN-sBz8rVx_qaihhQ-7AMaY26B-PAh2sApt2RMNAk8gVpGzn3SW3MzkStDnUtxkhGnyotgRB_tat35qXcFPboVTO_9JHY9ptCGURvekLFGe2pRU79iyy7HHBQ9Z1jITN3wV27Ocvrw_Sf0wVGFUsuzC_Fk546ohYS__GU-kZfTrSTyMkNSPm6T0pDAFoBRz9pExeMiodsFE8XPO9Jz3YfC7ZySGYP3n9AcLyVIB7uznwQ4ynfjDZjevaWq-1VtbkIQSjsZa-5-u-M"
    ],
    sizes: ["7", "8", "9", "10", "11", "12"],
    isNew: true,
    specs: [
      { title: "Carbon-Core™ Midsole", description: "High-energy return plate for explosive take-offs." },
      { title: "Aero-Weave Upper", description: "Single-thread technical mesh for maximum ventilation." }
    ],
    bentoSpecs: [
      { icon: "bolt", label: "POWER TRANSFER", value: "12mm drop and carbon plate" },
      { icon: "weight", label: "ULTRALIGHT", value: "Our lightest competitive runner, 185g" },
      { icon: "shield_with_heart", label: "DURABILITY", value: "500+ miles lifespan" }
    ]
  },
  {
    id: "apex-velocity-tr-1",
    name: "APEX VELOCITY TR-1",
    subtitle: "CARBON BLACK / LIME",
    category: "shoes",
    price: 180.00,
    description: "Studio-perfected track and gym shoe featuring an ultra-breathable carbon weave overlay and durable shock damping soles for aggressive speed splits.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDf8FX3rTq4M6xluyzJLEzJqa6kYNPe-T4sXdyAK0XLZG__WLCDudvIa9t64L-UyJ_1jlFSziBb3RGFdl4ahPawI_AMszIEYDK-rfgN4Fwgv810OUJM58g2FMW54zzcpK4n_zbirrFcEt6B_-WR5ijv3yzkQVezyp49tRUzuzeJIHp1uMnqPwRsGM31SpYfOKKzcR1ajnLfa6hwGgd3dOpZKuUw2871Qv7MZoJ4qlBKlSBDf1QHcAIFte1q4Uu7qSjMXHrps0QZqik"
    ],
    sizes: ["7", "8", "9", "10", "10.5", "11", "12"],
    specs: [
      { title: "Split sole", description: "Zoned electric lime high abrasion tracking tread." }
    ],
    bentoSpecs: [
      { icon: "bolt", label: "DESIGN", value: "Ergonomic lock laces" }
    ]
  },
  {
    id: "iso-dry-tech-top",
    name: "ISO-DRY TECH TOP",
    subtitle: "STEALTH GREY",
    category: "apparel",
    price: 130.00,
    description: "High-end heat-mapped technical athletic top. Mesh micro-perforations enhance ventilation when output peaks, complete with anti-chafing stitching.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAgflr8TsbU7ic7hfPK2ZRKMIx_tjYBTZF4KeEiH2VAoJ3vp6FZpu1mx20_5VNmt5lotnvRSkFZP1UUGk-lITRTq2fVXIxzT0ArjRCaMD8uEJg9CQGkb53BIdyIK6yvsp4tG7BEd2KrCzIB9XLFXdTxR62EOrBZTY4nxGHCCo7x-_rhBgtFm6J6X4jz4x_gwffJB7chuADTdRqkjmcWSLZotScHGB72SRsHD281oZBJ3Wz2pBTskrWV-B46n8HClvJAvc4hCBA_kMQ"
    ],
    sizes: ["S", "M", "L", "XL"],
    isCore: true
  },
  {
    id: "titan-chrono-smart",
    name: "TITAN CHRONO SMART",
    subtitle: "BRUSHED TITANIUM",
    category: "watches",
    price: 450.00,
    description: "Heavy brushed titanium biometric monitor display designed for high impact sprints and advanced heart metrics tracking.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBAUiU6aea4ZJOuNWxPkyKpb9eLFiwAnbeDs5GIVFPZmU_pxvL8ZVp1xcw5Yq8ewevk0zRUf4Q-hIoognH2h8Mvoa5CwtcVeLsr2Xr5x0ZkkrgXritANQi1qqt97nouKYPqHcpmc2DRdiKSIboJ7LiWKFleQmBshOKX9xW4HZ44gBmVYHE0fHySKaxQnFfZltoVk8xi2mnepn8xy59GeMDgMyBQ6XKX0_JGITRAfM6LcvSdgbYe-RFifBklOVqPTR-BLplXD-OfAGs"
    ],
    sizes: ["One Size"]
  },
  {
    id: "apex-runner-v2",
    name: "APEX RUNNER V2",
    subtitle: "LIME / RED",
    category: "shoes",
    price: 240.00,
    description: "Extreme speed trainer. High contrast red mesh overlay is coupled with structured side supports to prevent ankle exhaustion on rugged tracks.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBVAOcKniMrj4G9Nfb8KK9N1f1BYly1p5vnkzbQCea4qKQb7Mmxt0btA37v2rmC1wVqCZeDOX36NUQl0upVM51xYNMYLQXNN97zsur5Ef7p6dkEZuUhtqErplWNkPfewqJB3xexI1EI3mgNx5Le04tBDi7aiXwHqCPYLmdcFirfn5wDhnkJLhfAs1AClhFi_MbpLofQ8kctzrAjWaMNbxdwmk7M1gtjWUi4B8Wap-aonkggZ-3ZoyCKWhEKAfHIfzQHMT4Cfc81OI0"
    ],
    sizes: ["8", "9", "10", "10.5", "11", "12"]
  },
  {
    id: "pro-core-shorts",
    name: "PRO-CORE SHORTS",
    subtitle: "ELITE COMPRESSION",
    category: "apparel",
    price: 65.00,
    description: "Form-retaining core compression apparel shown in studio lightning. Muscle activation threads improve bloodflow split timings under training strain.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD3LGx7OLiADEdFlYDBlkU8rBR9cRhvzwbL8kdWrWPe_FQ_UEK4CurrLZPxgEpbsQ6Zw3hhiwJwr-mT9opCvQWbR_8CIj_yju5S9rr7Zfb-uwXnZkFVV7JW5d-TqM5XBPy3Y-ynBrQ4xlupBgiot5ESiOR5Iht3YWmcl7fgpYZkaMo9z8kgD5Ifmmlqn1APnWT8TOAY8SmQz5vLivqI91TMZUs7TtKfE_riAnG7r9ZWUxHNE3n5EQOIVsb47I-y0U-6-AMdcTapJSw"
    ],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "aero-knit-2-0",
    name: "AERO-KNIT 2.0",
    subtitle: "LIMITED DROP / SUB-ZERO",
    category: "apparel",
    price: 210.00,
    description: "Highly breathable seamless thermodynamic construction. Kept flexible to insulate muscle performance splits in sub-zero gym spaces.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC7tWyamJL0iilmhV9jYeX8q2-oeVu3MMoctbLDgmsruhYridY1H9QwbSsU6P6NU3S6HL6eCdKgPa5FkcTRy18yeoC8hkF_72nVuJt-xvDEE67jHtD-0YwDGLIffHmcFijhPsf-vo_NMmlHmt0qimAXkWv8vEw3JpXdWZDzHjstXr2m4obYl_c1qDbIxfKDbS_ClTB0AFkC-0zH-3prkclPV9nO6NQ5wFHqy74xMKb2X3Bw7zkKxMlx02u8BUSJ3fRY2m7cdVwI6I0"
    ],
    sizes: ["S", "M", "L"],
    isLimited: true
  },
  {
    id: "vortex-layer",
    name: "VORTEX LAYER",
    subtitle: "COMPRESSION GEAR",
    category: "apparel",
    price: 95.00,
    description: "Durable activewear engineered for extreme friction routines. Hydrophilic capillary weave rapidly pulls moisture away from athletic surfaces.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBMSBB8WJMZiGD7e4K05DtIUs_y4p7OvnFs9ltyheaOMU4qsLZtxMQd7GuwZOLqcve_cGP4FlU_izxil4bjKP_kCWAGmeA9iE3UZB6oBanWkkQIv7ag7XT0oP2QfH-bEYOmw-dtY9LXRsykhRBUk0YQWDolpwOJ_I8mWhUl7bwGFA0dZJvgY8OaiGl5ctcTqEnruNHeMUvWASCU97DiGVk5jT6N6pIPVgtyZnvP-s06o4K1EipJ4nLatr_OxX0cb0P8fayoCcVROGM"
    ],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "apex-runner-v3",
    name: "APEX RUNNER V3",
    subtitle: "CARBON FIBER CORE",
    category: "shoes",
    price: 220.00,
    description: "Matte-black micro-knit composite outer shell with energetic electric lime elements positioned for sprint propulsion tests.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA98s17MSzcoYBzf-Mgu8EDMVwi20lDNSGEc41DL_yitM2edsWJ7fXdm8hLtuQEYPf9uixfTqg3ZibMVLddwyF-4GjKFSZS8fAfsNkjViRVLlrULRupwXWghgF9mPZgt1bWFOFXwF6eQ1UzVAm-t-0DOHHIT4iPRuBEgsVh3GmexyWS8F45ZeB5pw9wsYat-ld-dzTHxzKA8f4OR5BuiFqYy4pqrZBlTr-vBNsMH4CDSbkiPLDu9UvPk8lI-jY07P8JVYjVdswrXuA"
    ],
    sizes: ["7", "8", "9", "10", "11", "12"]
  },
  {
    id: "titan-sprint",
    name: "TITAN SPRINT",
    subtitle: "ELITE TRACK FOOTWEAR",
    category: "shoes",
    price: 180.00,
    description: "Minimalist titanium spikes track runner optimized to eliminate drag coefficient when sprinting.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDYwZ7l5pjQlZpP8cZdNMTWYViE6SIvZua84WBLkI7H4tw-yv_I10oTto173E8Him73NOxAk-Tb0o7MJSQh72D87vm6Pzal6Yr38yTL6yt5R0Z2PmwYfe3kS4dyRoRMMEeyGyWs9b5VlogOUn_W53SjKJoApZQMUsk2UlU4GNjweRg0txorLvPYKhjMyPBgbLqAUwGKwYBmi-chfQs0g8AwwUo-nUvQu6-AvN_OX8y982lqMaHcniFUrBwrsGigSSiSx_xL2tsmLeQ"
    ],
    sizes: ["7", "8", "9", "10", "11"]
  },
  {
    id: "compression-leggings",
    name: "TITAN COMPRESSION",
    subtitle: "THERMAL REGULATION",
    category: "apparel",
    price: 110.00,
    description: "Heavy compression active tights engineered with micro insulated heat cells shielding muscles from performance splits.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDnKclHG2JDZzpYCR5q3-XgW5FEf9H4Jw3-CpV8wB4LgLLdDBJvnCC85faw_I3fhHTnxnJ_0mPRdPeUUuCdFiqEP1wPhvZuGBY9E3Q5M_BL0j6uLb7H7dHCec9Ko3U1PD_dwkGPd6Xlymo30JeeADzlxd9NcBr6_l85GEhagStAX1hNXpE9K3Lx5BFN9PAgEKpwSL7NZLl_5kkuFBKt8rDhyv9RRAL1aQ0JV_gkhg_aFT1J3dQM_U5CNcti2HpVgv90jRjqlAqUuiQ"
    ],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "shield-windshell",
    name: "SHIELD WINDSHELL",
    subtitle: "ULTRA-LIGHT RIPSTOP",
    category: "apparel",
    price: 185.00,
    description: "Micro ripstop active windbreaker optimized with water-repelling outer seals and laser-vented thermal exit points.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBkSnPqHIjCFQ-QwApRr0ZwK3uhjAfNubk7KfjIspwHeV1llg1uYbqOmaHpQgT70NAA0Ku7NnH90XVGLkuzAoeg87w36q1qIixiF3IkKYEVwbhfjiIH_Lj2DKfbxZTBTP8NNNixHDgfMg_qAi6BYrIV9NPhx_2wy9ZJ5VpSa4kxhy0uBaraCQ7NRgW55mcUgc5TARQMuaOH8kl5x2_5dy_Vw2tCzPwtySOy82C40yxmS2HhX3CAo3ALf0i0-3igKnELx6lR9CXAevM"
    ],
    sizes: ["S", "M", "L"]
  },
  {
    id: "performance-dress",
    name: "AERO PERFORMANCE DRESS",
    subtitle: "ELITE SPORT",
    category: "dresses",
    price: 125.00,
    description: "Aerodynamic technical female active shape dress woven inside deep breathable charcoal fibers ensuring full dynamic stride range.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuACYvkQMYf7iLNr3P2Upd67rKUiI-RWjDxXNa2lTJ7orLlnwrIAnnW18lO8bYn5CxjVXGA0B3H8G2EXrbM_h3HCVwrzmKl6YkDIvIoRZJ8MdTRrusLwcV1kdEdqAPTda3Jf6Nmb6Yvf0GVgN0kEGFIvX0iAOkfvfUOnjDyaj1riMP-aIxGJEELDwv8B8u8ZojRc9fgqc3knWOF_Id9nVGFijyxKPNiRvNU2XZ4ib5X4EjjFJiM4UFH5vAE_YHgG5vBUhaKGXnUBbqA"
    ],
    sizes: ["XS", "S", "M", "L"]
  }
];
