import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Move3d } from "lucide-react";
import { getModelViewer } from "../model-viewer-utils";

type Dish = {
  id: string;
  number: string;
  category: string;
  name: string;
  desc: string;
  price: string;
  model: string;
  iosModel: string;
  fallbackImg: string;
};

const menuData: Dish[] = [
  {
    id: "pizza",
    number: "01",
    category: "PRIMO",
    name: "Truffle Pizza",
    desc: "Hand-stretched dough, black winter truffle, mozzarella di bufala, San Marzano tomato sauce.",
    price: "$40 · AED 90",
    model: "/public/models/Pizza by Quaternius - XmmG0uImLL.glb"
    iosModel: "/models/pizza.usdz",
    fallbackImg: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800",
  },
  {
    id: "burger",
    number: "02",
    category: "SECONDO",
    name: "Wagyu Burger",
    desc: "A5 Japanese Wagyu beef, caramelized onions, smoked truffle mayo, artisan brioche bun.",
    price: "$52 · AED 165",
    model: "https://polyfork.dev/cdn/hamburger-060fd6.glb",
    iosModel: "/models/hamburger2.usdz",
    fallbackImg: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800",
  },
  {
    id: "Cupcake",
    number: "03",
    category: "SPECIALTY",
    name: "Donut",
    desc: "Chef&apos;s curated 8-piece premium nigiri, bluefin tuna, Hokkaido scallop, fresh wasabi.",
    price: "$75 · AED 245",
    model: "/public/models/Cupcake by Quaternius - XL70IUDIrZ.glb",
    iosModel: "/models/sushi.usdz",
    fallbackImg: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=800",
  },
  {
    id: "Donut",
    number: "04",
    category: "PRIMO",
    name: "Donut",
    desc: "Squid ink arborio rice, wild caught seafood mix, garlic butter, parmesan crisp.",
    price: "$42 · AED 140",
    model: "/public/models/Donut by Quaternius - UQRRrsP3wj.glb",
    iosModel: "/models/risotto.usdz",
    fallbackImg: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?q=80&w=800",
  },
  {
    id: "cake",
    number: "05",
    category: "DOLCE",
    name: "Lava Cake",
    desc: "Warm Belgian chocolate cake with a molten center, Madagascar vanilla bean gelato.",
    price: "$18 · AED 60",
    model: "https://polyfork.dev/cdn/cake-stand-ee7396.glb",
    iosModel: "/models/cake.usdz",
    fallbackImg: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800",
  },
];

function SlideList({ dishes, active, onSelect }: { dishes: Dish[]; active: Dish; onSelect: (d: Dish) => void }) {
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
            className={`relative text-left rounded-2xl px-4 py-4 transition-colors duration-200 focus:outline-none ${
              selected ? "" : "hover:bg-black/[0.04]"
            }`}
          >
            {selected && (
              <motion.span
                layoutId="activeTab"
                className="absolute inset-0 rounded-2xl bg-[#FFF4ED] border-l-4 border-[#FF6B00] shadow-sm"
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
                    selected ? "text-slate-900" : "text-slate-600"
                  }`}
                >
                  {dish.name}
                </span>
                <span
                  className={`text-[11px] mt-0.5 tracking-[0.16em] font-medium ${
                    selected ? "text-[#FF6B00]/80" : "text-gray-400"
                  }`}
                >
                  {dish.category}
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
  const [showPoster, setShowPoster] = useState(true);

  useEffect(() => {
    setShowPoster(true);
  }, [dish.id]);

  function handleAR() {
    const el = getModelViewer();
    if (el?.canActivateAR) el.activateAR();
  }

  return (
    <div className="relative bg-[#F5F2EB] rounded-3xl min-h-[400px] flex items-center justify-center p-8 shadow-inner overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7),transparent_70%)] pointer-events-none" />

      <span className="absolute left-4 top-4 z-20 bg-white/80 backdrop-blur-md text-[11px] font-bold tracking-widest text-slate-500 px-3 py-1.5 rounded-full border border-slate-200/50 shadow-sm">
        DRAG • ZOOM
      </span>

      <div className="relative w-full h-full min-h-[320px] z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={dish.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-full h-full flex items-center justify-center"
          >
            {/* Graceful fallback: dish photo over the warm cream canvas, used as
                poster while the local GLB loads and if the GLB is missing (404). */}
            <model-viewer
              src={dish.model}
              ios-src={dish.iosModel}
              alt={`${dish.name} 3D model`}
              camera-controls
              auto-rotate
              auto-rotate-delay="600"
              rotation-per-second="20deg"
              shadow-intensity="1.2"
              exposure="0.95"
              environment-image="neutral"
              ar
              ar-modes="webxr scene-viewer quick-look"
              loading="lazy"
              poster={dish.fallbackImg}
              reveal="auto"
              style={{ width: "100%", height: "360px" }}
              className="w-full h-full"
              onLoad={() => setShowPoster(false)}
              onError={() => setShowPoster(true)}
            >
              {showPoster && (
                <img
                  slot="poster"
                  src={dish.fallbackImg}
                  alt={dish.name}
                  className="w-full h-full object-cover rounded-3xl"
                />
              )}
            </model-viewer>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        type="button"
        onClick={handleAR}
        aria-label="View on table in AR"
        className="absolute right-4 bottom-4 z-20 flex items-center gap-2 bg-[#FF6B00] hover:bg-[#e05e00] text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-md transition-transform active:scale-95"
      >
        <Move3d size={15} />
        View in AR
      </button>
    </div>
  );
}

function DetailPanel({ dish }: { dish: Dish }) {
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
        <span className="text-xs font-bold tracking-widest text-[#FF6B00] mb-2">{dish.category}</span>
        <h3 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-3 leading-tight">
          {dish.name}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed max-w-md mb-6">{dish.desc}</p>

        <div className="font-serif text-2xl font-bold text-slate-900 mb-6 tracking-tight">{dish.price}</div>

        <button className="w-full bg-[#0F172A] hover:bg-black text-white font-medium text-sm py-3.5 px-8 rounded-full shadow-lg hover:shadow-xl transition-all">
          Siparişe ekle · Add to Order
        </button>

        <p className="text-xs text-slate-400 mt-3">
          Bu, misafirinizin göreceği gerçek karttır. White-label hazır.
        </p>
      </motion.div>
    </AnimatePresence>
  );
}

export default function MenuDemo() {
  const [active, setActive] = useState<Dish>(menuData[0]);

  return (
    <section className="py-24 px-4 bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-[#FF6B00] mb-4">
            INTERACTIVE 3D MENU DEMO
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5 tracking-tight">
            Experience the 3D Menu
            <br />
            Your Guests Will See
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Tap a dish, rotate it 360°, or view it life-size on your table with AR inside the exact digital card your
            guests will use.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-slate-100"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-3">
              <SlideList dishes={menuData} active={active} onSelect={setActive} />
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
