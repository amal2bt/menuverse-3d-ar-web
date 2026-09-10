import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Move3d, ScanLine, Flame } from "lucide-react";
import MenuViewer3D from "./menu/MenuViewer3D";
import ARQRCodeModal from "./menu/ARQRCodeModal";
import { CATEGORIES, buildArUrl, ArModelConfig } from "./menu/menuModels";

type Dish = ArModelConfig & {
  id: string;
  number: string;
  category: string;
  name: string;
  desc: string;
  priceTRY: string;
  priceAED: string;
  calories: string;
  fallbackImg: string;
};

const menuData: Dish[] = [
  {
    id: "pizza",
    number: "01",
    category: "main-dishes",
    name: "Trüf Pizzası",
    desc: "El açma hamur, kara kış trüfü, mozzarella di bufala, San Marzano domates.",
    priceTRY: "₺680",
    priceAED: "AED 90",
    calories: "820 kcal",
    glb: "/dist/models/pizza_modern_plate1.glb",
    usdz: "/dist/models/finalpizza.usdz",
    fallbackImg: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800",
  },
  {
    id: "burger",
    number: "02",
    category: "main-dishes",
    name: "Wagyu Burger",
    desc: "A5 Japon wagyu, kömür ateşinde pişmiş, brioche ekmek, eski kaşar.",
    priceTRY: "₺1.250",
    priceAED: "AED 165",
    calories: "940 kcal",
    glb: "/dist/models/icecreamfinal.glb",
    usdz: "/dist/models/ice_cream_sundae_AR.usdz",
    fallbackImg: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800",
  },
  {
    id: "sushi",
    number: "03",
    category: "main-dishes",
    name: "Omakase Sushi",
    desc: "Şefin seçtiği 8 parça nigiri, mavi yüzgeçli ton, uni, hokkaido tarağı.",
    priceTRY: "₺1.890",
    priceAED: "AED 245",
    calories: "610 kcal",
    glb: "/dist/models/REALISTIC_SUSHI_AR3.glb",
    usdz: "/dist/models/REALISTIC_SUSHI_AR3.usdz",
    fallbackImg: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=800",
  },
  {
    id: "cake",
    number: "04",
    category: "desserts",
    name: "Çikolatalı Lava Cake",
    desc: "Sıcak Belçika çikolatası dolgulu akışkan kek, Madagascar vanilyalı dondurma.",
    priceTRY: "₺420",
    priceAED: "AED 60",
    calories: "550 kcal",
    glb: "https://polyfork.dev/cdn/cake-stand-ee7396.glb",
    usdz: "/models/cake.usdz",
    fallbackImg: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800",
  },
];

function CategoryTabs({
  activeCategory,
  onSelectCategory,
}: {
  activeCategory: string;
  onSelectCategory: (catId: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2 mb-8 justify-center" role="tablist">
      {CATEGORIES.map((cat) => {
        const isActive = activeCategory === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            role="tab"
            aria-selected={isActive}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
              isActive
                ? "bg-[#FF6B00] text-white shadow-md shadow-[#FF6B00]/20"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
            }`}
          >
            {cat.name}
          </button>
        );
      })}
    </div>
  );
}

function SlideList({
  dishes,
  active,
  onSelect,
}: {
  dishes: Dish[];
  active: Dish;
  onSelect: (d: Dish) => void;
}) {
  if (dishes.length === 0) {
    return (
      <div className="text-center py-12 text-slate-400 text-sm">
        Bu kategoride henüz ürün bulunmuyor.
      </div>
    );
  }

  return (
    <aside className="bg-transparent flex flex-col gap-2" role="tablist" aria-label="Tasting menu">
      {dishes.map((dish) => {
        const selected = active.id === dish.id;
        return (
          <button
            key={dish.id}
            onClick={() => onSelect(dish)}
            role="tab"
            aria-selected={selected}
            aria-label={dish.name}
            className={`relative text-left rounded-2xl px-4 py-4 transition-colors duration-200 focus:outline-none cursor-pointer ${
              selected ? "" : "hover:bg-black/[0.04] dark:hover:bg-white/[0.04]"
            }`}
          >
            {selected && (
              <motion.span
                layoutId="activeTab"
                className="absolute inset-0 rounded-2xl bg-[#FFF4ED] dark:bg-[#FF6B00]/15 border-l-4 border-[#FF6B00] shadow-sm"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            <span className="relative flex items-center gap-3">
              <span
                className={`text-sm font-bold tabular-nums tracking-wide ${
                  selected ? "text-[#FF6B00]" : "text-gray-400"
                }`}
              >
                {dish.number}
              </span>
              <span className="flex flex-col">
                <span
                  className={`text-[15px] font-semibold leading-tight ${
                    selected ? "text-slate-900 dark:text-slate-50" : "text-slate-600 dark:text-slate-300"
                  }`}
                >
                  {dish.name}
                </span>
                <span
                  className={`text-[11px] mt-0.5 tracking-[0.16em] font-medium uppercase ${
                    selected ? "text-[#FF6B00]" : "text-gray-400"
                  }`}
                >
                  {dish.category.replace("-", " ")}
                </span>
              </span>
            </span>
          </button>
        );
      })}
    </aside>
  );
}

function ThreeDStage({ dish }: { dish: Dish }) {
  const [showQr, setShowQr] = useState(false);

  return (
    <div className="relative bg-[#F5F2EB] dark:bg-slate-800/70 rounded-3xl min-h-[400px] flex items-center justify-center p-8 shadow-inner overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7),transparent_70%)] dark:bg-none pointer-events-none" />

      <span className="absolute left-4 top-4 z-20 bg-white/80 dark:bg-slate-900/70 backdrop-blur-md text-[11px] font-bold tracking-widest text-slate-500 px-3 py-1.5 rounded-full border border-slate-200/50 shadow-sm pointer-events-none">
        DRAG • ZOOM • 360°
      </span>

      {/* Desktop QR Trigger Button */}
      <button
        type="button"
        onClick={() => setShowQr(true)}
        aria-label="Scan QR Code for Mobile AR"
        className="absolute right-4 top-4 z-20 flex items-center gap-1.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md hover:bg-white text-slate-700 dark:text-slate-200 text-[11px] font-semibold px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm transition-all cursor-pointer"
        title="QR Code"
      >
        <ScanLine size={13} className="text-[#FF6B00]" />
        <span>QR Code</span>
      </button>

      <div className="relative z-10 w-full min-h-[320px] flex items-center justify-center">
        <MenuViewer3D
          key={dish.id}
          src={dish.glb}
          name={dish.name}
          autoRotate
          height={340}
          className="w-full"
        />
      </div>

      <button
        type="button"
        onClick={() => setShowQr(true)}
        aria-label="View on table in AR"
        className="absolute left-1/2 -translate-x-1/2 bottom-4 z-20 flex items-center gap-2 bg-[#FF6B00] hover:bg-[#e05e00] text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow-md transition-transform active:scale-95 cursor-pointer"
      >
        <Move3d size={15} />
        <span>View in your space</span>
      </button>

      <ARQRCodeModal
        open={showQr}
        onClose={() => setShowQr(false)}
        url={buildArUrl(dish.id)}
        label={dish.id.toUpperCase()}
      />
    </div>
  );
}

function DetailPanel({ dish }: { dish: Dish }) {
  const [showQr, setShowQr] = useState(false);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={dish.id}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25 }}
        className="flex flex-col flex-1"
      >
        <span className="text-xs font-bold tracking-widest text-[#FF6B00] mb-2 uppercase">
          {dish.category.replace("-", " ")}
        </span>
        <h3 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 tracking-tight mb-3 leading-tight">
          {dish.name}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-md mb-5">{dish.desc}</p>

        {/* Price + Calories section */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="font-serif text-xl font-bold text-slate-900 dark:text-slate-50">
            {dish.priceTRY} <span className="text-sm font-sans font-semibold text-slate-400">· {dish.priceAED}</span>
          </span>
          <span className="flex items-center gap-1 text-xs font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/15 px-2.5 py-1 rounded-full">
            <Flame size={12} />
            {dish.calories}
          </span>
        </div>

        <button className="w-full bg-[#FF6B00] hover:bg-[#E05A00] text-white font-semibold text-sm py-3.5 px-8 rounded-full shadow-lg shadow-orange-200 transition-all hover:scale-[1.01] cursor-pointer">
          Siparişe Ekle · Add to Order
        </button>

        <button
          onClick={() => setShowQr(true)}
          className="w-full mt-3 bg-transparent text-[#FF6B00] hover:bg-[#FF6B00]/8 border border-[#FF6B00]/30 font-semibold text-sm py-3 rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer"
        >
          <ScanLine size={16} />
          <span>AR ile Masada Gör</span>
        </button>

        <ARQRCodeModal
          open={showQr}
          onClose={() => setShowQr(false)}
          url={buildArUrl(dish.id)}
          label={dish.id.toUpperCase()}
        />
      </motion.div>
    </AnimatePresence>
  );
}

export default function MenuDemo() {
  const [activeCategory, setActiveCategory] = useState<string>("main-dishes");

  // Filter dishes by active category
  const filteredDishes = menuData.filter((d) => d.category === activeCategory);

  // Active selected dish state
  const [active, setActive] = useState<Dish>(filteredDishes[0] ?? menuData[0]);

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    const firstInCategory = menuData.find((d) => d.category === catId);
    if (firstInCategory) {
      setActive(firstInCategory);
    }
  };

  return (
    <section className="py-24 px-4 bg-[#FAF9F6] dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-[#FF6B00] mb-4">
            INTERACTIVE 3D MENU DEMO
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-slate-50 leading-tight mb-5 tracking-tight">
            Experience the 3D Menu
            <br />
            Your Guests Will See
          </h2>
          <p className="text-gray-500 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
            Tap a dish, rotate it 360°, or view it life-size on your table with AR inside the exact digital card your
            guests will use.
          </p>

          {/* Category Filter Tabs */}
          <CategoryTabs activeCategory={activeCategory} onSelectCategory={handleCategoryChange} />
        </motion.div>

        <motion.div
          className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl p-6 md:p-10 border border-slate-100 dark:border-slate-800"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-3">
              <SlideList dishes={filteredDishes} active={active} onSelect={setActive} />
            </div>

            <div className="lg:col-span-5">
              <ThreeDStage dish={active} />
            </div>

            <div className="lg:col-span-4">
              <DetailPanel dish={active} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}