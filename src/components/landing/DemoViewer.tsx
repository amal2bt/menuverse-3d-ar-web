import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Move3d, ScanLine, Flame } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import ARQRCodeModal from "../menu/ARQRCodeModal";
import { buildArUrl } from "../menu/menuModels";

type TastingDish = {
  id: string;
  number: string;
  categoryKey: string;     // Internal key for category filtering
  categoryLabel: string;   // Display label for the badge
  name: string;
  desc: string;
  priceTRY: string;
  priceAED: string;
  calories: string;
  model: string;
  iosModel?: string;
};

const CATEGORIES = [
  { id: "main-dishes", label: "Main Dishes" },
  { id: "desserts", label: "Desserts" },
  { id: "drinks", label: "Drinks" },
];

const TASTING_DISHES: TastingDish[] = [
  {
    id: "pizza",
    number: "01",
    categoryKey: "main-dishes",
    categoryLabel: "MAIN DISHES",
    name: "Trüf Pizzası",
    desc: "El açma hamur, kara kış trüfü, mozzarella di bufala, San Marzano domates.",
    priceTRY: "₺680",
    priceAED: "AED 90",
    calories: "820 kcal",
    model: "/dist/models/pizza_modern_plate1.glb",
    iosModel: "/dist/models/finalpizza.usdz",
  },
  {
    id: "ice-cream",
    number: "02",
    categoryKey: "desserts",
    categoryLabel: "DESSERTS",
    name: "Wagyu Burger",
    desc: "A5 Japon wagyu, kavurma kömüründe pişirilmiş, brioche ekmek, eski kaşar.",
    priceTRY: "₺1.250",
    priceAED: "AED 165",
    calories: "940 kcal",
    model: "/dist/models/icecreamfinal.glb",
    iosModel: "/dist/models/ice_cream_sundae_AR.usdz"
  },
  {
    id: "sushi",
    number: "03",
    categoryKey: "main-dishes",
    categoryLabel: "MAIN DISHES",
    name: "Omakase Sushi",
    desc: "Şefin seçtiği 8 parça nigiri, mavi yüzgeçli ton, uni, hokkaido tarağı.",
    priceTRY: "₺1.890",
    priceAED: "AED 245",
    calories: "610 kcal",
    model: "/dist/models/REALISTIC_SUSHI_AR3.glb",
    iosModel: "/dist/models/REALISTIC_SUSHI_AR3.usdz",
  },
    {
    id: "coffee",
    number: "04",
    categoryKey: "drinks",
    categoryLabel: "DRINKS",
    name: "Signature Coffee",
    desc: "Freshly brewed specialty coffee, served in a handcrafted ceramic cup.",
    priceTRY: "₺180",
    priceAED: "AED 24",
    calories: "5 kcal",
    model: "/dist/models/Coffee_Cup_AR.glb",
    iosModel: "/dist/models/Coffee_Cup_AR.usdz",
  },
];

export default function DemoViewer() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("main-dishes");

  // Filter dishes based on the selected category tab
  const filteredDishes = TASTING_DISHES.filter((d) => d.categoryKey === selectedCategory);

  const [active, setActive] = useState<TastingDish>(filteredDishes[0] || TASTING_DISHES[0]);
  const [showArModal, setShowArModal] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Update active dish automatically when category changes
  useEffect(() => {
    if (filteredDishes.length > 0 && !filteredDishes.some((d) => d.id === active.id)) {
      setActive(filteredDishes[0]);
    }
  }, [selectedCategory, filteredDishes, active.id]);

  useEffect(() => {
    setLoaded(false);
  }, [active.id]);

  function handleShowOnTable() {
    setShowArModal(true);
  }

  return (
    <section id="demo" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#FF6B00] mb-3 inline-block">
            Live Demo
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
            {t("demo.title")}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mt-3">{t("demo.subtitle")}</p>

          {/* ─── Category Filter Tabs ─── */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#FF6B00] text-white shadow-md shadow-orange-500/20"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 p-6 md:p-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* ─── Left Column: Selector List for Active Category ─── */}
            <div className="lg:col-span-3 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
              {filteredDishes.length === 0 ? (
                <div className="text-xs text-slate-400 py-6 text-center w-full">
                  Bu kategoride ürün bulunmuyor.
                </div>
              ) : (
                filteredDishes.map((dish) => {
                  const selected = active.id === dish.id;
                  return (
                    <button
                      key={dish.id}
                      onClick={() => setActive(dish)}
                      className={`relative min-w-[180px] lg:min-w-0 text-left rounded-2xl px-4 py-4 transition-colors duration-200 cursor-pointer ${
                        selected
                          ? "bg-[#FFF4ED] dark:bg-[#FF6B00]/15"
                          : "hover:bg-black/5 dark:hover:bg-white/5"
                      } ${selected ? "border-l-4 border-[#FF6B00]" : "border-l-4 border-transparent"}`}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={`text-sm font-bold tabular-nums ${
                            selected ? "text-[#FF6B00]" : "text-slate-400"
                          }`}
                        >
                          {dish.number}
                        </span>
                        <span className="flex flex-col">
                          <span
                            className={`text-sm font-semibold leading-tight ${
                              selected
                                ? "text-slate-900 dark:text-slate-50"
                                : "text-slate-600 dark:text-slate-300"
                            }`}
                          >
                            {dish.name}
                          </span>
                          <span
                            className={`text-[11px] tracking-widest font-medium ${
                              selected ? "text-[#FF6B00]" : "text-slate-400"
                            }`}
                          >
                            {dish.categoryLabel}
                          </span>
                        </span>
                      </span>
                    </button>
                  );
                })
              )}
            </div>

            {/* ─── Center Column: 3D Viewport ─── */}
            <div className="lg:col-span-6">
              <div className="relative bg-[#F5F2EB] dark:bg-slate-800/70 rounded-3xl min-h-[380px] flex items-center justify-center p-6 shadow-inner overflow-hidden">

                {/* Drag / Zoom badge */}
                <span className="absolute left-4 top-4 z-20 bg-white/80 dark:bg-slate-900/70 backdrop-blur-md text-[10px] font-bold tracking-widest text-slate-500 px-3 py-1.5 rounded-full border border-slate-200/50 shadow-sm pointer-events-none">
                  {t("demo.drag")}
                </span>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full min-h-[300px]"
                  >
                    <model-viewer
                      src={active.model}
                      ios-src={active.iosModel}
                      alt={`${active.name} 3D model`}
                      camera-controls
                      auto-rotate
                      auto-rotate-delay="600"
                      rotation-per-second="20deg"
                      shadow-intensity="1.1"
                      exposure="0.95"
                      environment-image="neutral"
                      ar
                      ar-modes="webxr scene-viewer quick-look"
                      style={{ width: "100%", height: "340px" }}
                      onLoad={() => setLoaded(true)}
                    >
                      {/* Native AR Trigger Button for mobile/AR Quick Look */}
                      <button
                        slot="ar-button"
                        className="absolute left-1/2 -translate-x-1/2 bottom-4 z-20 flex items-center gap-2 bg-[#FF6B00] hover:bg-[#E05A00] text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow-md transition-transform active:scale-95 cursor-pointer"
                      >
                        <Move3d size={14} />
                        <span>View in your space</span>
                      </button>
                    </model-viewer>

                    {!loaded && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span className="animate-pulse text-[#FF6B00]">
                          <ScanLine size={30} />
                        </span>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Fallback button for Desktop (opens QR modal) */}
                <button
                  onClick={handleShowOnTable}
                  className="absolute right-4 top-4 z-20 flex items-center gap-1.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md hover:bg-white text-slate-700 dark:text-slate-200 text-[11px] font-semibold px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm transition-all cursor-pointer"
                  title="Scan QR Code for Mobile AR"
                >
                  <ScanLine size={13} className="text-[#FF6B00]" />
                  <span>QR Code</span>
                </button>
              </div>
            </div>

            {/* ─── Right Column: Detail Card ─── */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <span className="text-xs font-bold tracking-widest text-[#FF6B00]">{active.categoryLabel}</span>
                  <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-slate-50 tracking-tight mt-1 leading-tight">
                    {active.name}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mt-3">{active.desc}</p>

                  {/* Price + Calories */}
                  <div className="flex flex-wrap items-center gap-3 mt-5">
                    <span className="font-serif text-xl font-bold text-slate-900 dark:text-slate-50">
                      {active.priceTRY} <span className="text-sm font-sans font-semibold text-slate-400">· {active.priceAED}</span>
                    </span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/15 px-2.5 py-1 rounded-full">
                      <Flame size={12} />
                      {active.calories}
                    </span>
                  </div>

                  {/* Primary action: Add to Order */}
                  <button className="w-full mt-6 bg-[#FF6B00] hover:bg-[#E05A00] text-white font-semibold text-sm py-3.5 rounded-full shadow-lg shadow-orange-200 transition-all hover:scale-[1.01] cursor-pointer">
                    {t("demo.addToOrder")}
                  </button>

                  {/* Secondary action: Scan QR for Mobile AR */}
                  <button
                    onClick={handleShowOnTable}
                    className="w-full mt-3 bg-transparent text-[#FF6B00] hover:bg-[#FF6B00]/8 border border-[#FF6B00]/30 font-semibold text-sm py-3 rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ScanLine size={16} />
                    {t("demo.viewInAR")}
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ─── AR QR Code Modal (scannable on mobile) ─── */}
      <ARQRCodeModal
        open={showArModal}
        onClose={() => setShowArModal(false)}
        url={buildArUrl(active.id)}
        label={active.id.toUpperCase()}
      />
    </section>
  );
}