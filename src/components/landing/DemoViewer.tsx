import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Move3d, ScanLine, Flame, X } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

type TastingDish = {
  id: string;
  number: string;
  category: string;
  name: string;
  desc: string;
  priceTRY: string;
  priceAED: string;
  calories: string;
  model: string;
  iosModel?: string;
};

const TASTING_DISHES: TastingDish[] = [
  {
    id: "pizza",
    number: "01",
    category: "PRIMO",
    name: "Trüf Pizzası",
    desc: "El açma hamur, kara kış trüfü, mozzarella di bufala, San Marzano domates.",
    priceTRY: "₺680",
    priceAED: "AED 90",
    calories: "820 kcal",
    model: "/dist/models/pizza_modern_plate1.glb",
    iosModel: "/dist/models/finalpizza.usdc",
  },
  {
    id: "burger",
    number: "02",
    category: "SECONDO",
    name: "Wagyu Burger",
    desc: "A5 Japon wagyu, kavurma kömüründe pişirilmiş, brioche ekmek, eski kaşar.",
    priceTRY: "₺1.250",
    priceAED: "AED 165",
    calories: "940 kcal",
    model: "https://polyfork.dev/cdn/hamburger-060fd6.glb",
  },
  {
    id: "sushi",
    number: "03",
    category: "SPECIALTY",
    name: "Omakase Sushi",
    desc: "Şefin seçtiği 8 parça nigiri, mavi yüzgeçli ton, uni, hokkaido tarağı.",
    priceTRY: "₺1.890",
    priceAED: "AED 245",
    calories: "610 kcal",
    model: "/dist/models/REALISTIC_SUSHI_AR3.glb",
  },
];

export default function DemoViewer() {
  const { t } = useLanguage();
  const [active, setActive] = useState<TastingDish>(TASTING_DISHES[0]);
  const [showArModal, setShowArModal] = useState(false);
  const [loaded, setLoaded] = useState(false);

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
          className="text-center mb-12"
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#FF6B00] mb-3 inline-block">
            Live Demo
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
            {t("demo.title")}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mt-3">{t("demo.subtitle")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 p-6 md:p-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* ─── Left Column: Selector List ─── */}
            <div className="lg:col-span-3 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
              {TASTING_DISHES.map((dish) => {
                const selected = active.id === dish.id;
                return (
                  <button
                    key={dish.id}
                    onClick={() => setActive(dish)}
                    className={`relative min-w-[180px] lg:min-w-0 text-left rounded-2xl px-4 py-4 transition-colors duration-200 ${
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
                          {dish.category}
                        </span>
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* ─── Center Column: 3D Viewport ─── */}
            <div className="lg:col-span-6">
              <div className="relative bg-[#F5F2EB] dark:bg-slate-800/70 rounded-3xl min-h-[380px] flex items-center justify-center p-6 shadow-inner overflow-hidden">

                {/* Drag / Zoom badge */}
                <span className="absolute left-4 top-4 z-20 bg-white/80 dark:bg-slate-900/70 backdrop-blur-md text-[10px] font-bold tracking-widest text-slate-500 px-3 py-1.5 rounded-full border border-slate-200/50 shadow-sm">
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
                    />
                    {!loaded && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="animate-pulse text-[#FF6B00]">
                          <ScanLine size={30} />
                        </span>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Floating bottom action */}
                <button
                  onClick={handleShowOnTable}
                  className="absolute left-1/2 -translate-x-1/2 bottom-4 z-20 flex items-center gap-2 bg-[#FF6B00] hover:bg-[#E05A00] text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow-md transition-transform active:scale-95"
                >
                  <Move3d size={14} />
                  {t("demo.showOnTable")}
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
                  <span className="text-xs font-bold tracking-widest text-[#FF6B00]">{active.category}</span>
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
                  <button className="w-full mt-6 bg-[#FF6B00] hover:bg-[#E05A00] text-white font-semibold text-sm py-3.5 rounded-full shadow-lg shadow-orange-200 transition-all hover:scale-[1.01]">
                    {t("demo.addToOrder")}
                  </button>

                  {/* Secondary action: View in AR */}
                  <button
                    onClick={handleShowOnTable}
                    className="w-full mt-3 bg-transparent text-[#FF6B00] hover:bg-[#FF6B00]/8 border border-[#FF6B00]/30 font-semibold text-sm py-3 rounded-full transition-colors"
                  >
                    {t("demo.viewInAR")}
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ─── AR Desktop QR Modal ─── */}
      <AnimatePresence>
        {showArModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowArModal(false)}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative bg-white dark:bg-slate-900 rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl"
              >
                <button
                  onClick={() => setShowArModal(false)}
                  aria-label="Close"
                  className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-black/5 rounded-xl"
                >
                  <X size={18} />
                </button>
                <div className="w-36 h-36 mx-auto rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-5">
                  <QrCodeIcon />
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-slate-50">
                  {t("demo.qrTitle")}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">{t("demo.qrDesc")}</p>
                <p className="text-xs text-slate-400 mt-4 font-mono tracking-widest">{active.id.toUpperCase()} · AR</p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

function QrCodeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-20 h-20 text-slate-700 dark:text-slate-300" aria-hidden>
      <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <path d="M14 14h3v3h-3zM18 18h3v3h-3zM18 14h2M21 21v-1M14 21h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
