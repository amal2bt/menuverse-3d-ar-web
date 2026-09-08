import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw, Smartphone } from "lucide-react";

const menuData = [
  { id: "pizza", number: "01", name: "Truffle Pizza", desc: "Hand-stretched dough, black winter truffle, mozzarella di bufala, San Marzano tomato.", price: "$40", emoji: "🍕", color: "#FFF0E6", accent: "#FF6B00" },
  { id: "burger", number: "02", name: "Wagyu Burger", desc: "Premium wagyu beef, caramelized onions, truffle mayo, brioche bun.", price: "$52", emoji: "🍔", color: "#FFF8EC", accent: "#D97706" },
  { id: "sashimi", number: "03", name: "Salmon Sashimi", desc: "Freshly sliced premium salmon, daikon radish, pickled ginger, soy sauce.", price: "$32", emoji: "🐟", color: "#EFF6FF", accent: "#3B82F6" },
  { id: "risotto", number: "04", name: "Black Risotto", desc: "Squid ink, arborio rice, fresh seafood mix, parmesan crisp.", price: "$42", emoji: "🦑", color: "#F3F4F6", accent: "#374151" },
  { id: "cake", number: "05", name: "Lava Cake", desc: "Warm chocolate cake with a molten center, vanilla bean ice cream.", price: "$18", emoji: "🍫", color: "#FEF3F2", accent: "#DC2626" },
];

export default function MenuDemo() {
  const [active, setActive] = useState(menuData[0]);

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-[#FF6B00] mb-4">
            INTERACTIVE 3D MENU DEMO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Experience the 3D Menu<br />Your Guests Will See
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Tap a dish, rotate it 360°, or view it life-size on your table with AR. This demo is the exact same QR menu experience we set up for your restaurant within 24 hours.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6 items-stretch"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {/* Dish list */}
          <aside className="bg-gray-50 rounded-3xl p-3 flex flex-col gap-1" role="tablist" aria-label="Tasting menu">
            {menuData.map((dish) => (
              <button
                key={dish.id}
                onClick={() => setActive(dish)}
                role="tab"
                aria-selected={active.id === dish.id}
                className="relative text-left rounded-2xl px-4 py-4 transition-colors focus:outline-none group"
              >
                {active.id === dish.id && (
                  <motion.div
                    layoutId="active-dish-bg"
                    className="absolute inset-0 rounded-2xl bg-white shadow-sm"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {active.id === dish.id && (
                  <motion.div
                    layoutId="active-dish-bar"
                    className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-[#FF6B00]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <div className="relative flex items-center gap-3">
                  <span className="text-xs font-semibold text-gray-400 tabular-nums w-5">{dish.number}</span>
                  <div>
                    <p className={`font-semibold text-sm leading-tight ${active.id === dish.id ? "text-gray-900" : "text-gray-600"}`} style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {dish.name}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">{dish.price}</p>
                  </div>
                </div>
              </button>
            ))}
          </aside>

          {/* Right stage */}
          <div className="rounded-3xl overflow-hidden relative min-h-[420px] flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0 flex flex-col"
                style={{ backgroundColor: active.color }}
              >
                <div className="flex-1 flex items-center justify-center">
                  <motion.div
                    key={active.id + "-emoji"}
                    initial={{ scale: 0.7, opacity: 0, rotate: -10 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                    className="text-[140px] select-none drop-shadow-lg"
                  >
                    {active.emoji}
                  </motion.div>
                </div>

                <div className="p-6 bg-white/80 backdrop-blur-sm border-t border-white/60">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-1">Signature Dish</p>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>{active.name}</h3>
                      <p className="text-sm text-gray-500 max-w-md leading-relaxed">{active.desc}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-2xl font-bold" style={{ color: active.accent, fontFamily: "'DM Sans', sans-serif" }}>{active.price}</p>
                      <p className="text-sm text-gray-400">per serving</p>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-5">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-[#FF6B00] hover:bg-[#E05A00] transition-colors">
                      <RotateCcw size={14} />
                      Rotate 360°
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors">
                      <Smartphone size={14} />
                      View in AR
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
