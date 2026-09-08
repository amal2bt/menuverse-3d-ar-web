import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";

const categories = ["All", "General", "Pricing", "Tech", "Integration"];

const faqs = [
  { cat: "General", q: "How does the 3D menu system work?", a: "You upload your product's 3D models or photos to the system. Your customers scan the QR code to access the menu and can view items in 360° or see them life-size on their table using augmented reality." },
  { cat: "General", q: "How long does the setup process take?", a: "Standard setup is completed within 24 hours. Full onboarding including 3D model upload and content creation typically takes 3–5 business days." },
  { cat: "Pricing", q: "Are there any long-term contracts?", a: "Monthly plans have no binding contract. Annual plans come with a 20% discount. You can cancel at any time." },
  { cat: "Pricing", q: "How does the free trial work?", a: "Your 14-day free trial gives you full access to all Premium features. No credit card required, and you won't be automatically charged after the trial ends." },
  { cat: "Tech", q: "Which file formats are supported?", a: "We support GLB and USDZ formats for 3D models. For photos, JPG, PNG, and WebP are accepted. Minimum recommended resolution is 2048×2048 pixels." },
  { cat: "Tech", q: "Which devices support the AR feature?", a: "AR works on iOS 12+ (iPhone 6s and later) and Android 8.0+ ARCore-enabled devices, covering approximately 85% of the market." },
  { cat: "Integration", q: "Can it integrate with our POS system?", a: "Yes. We support integrations via REST API and can connect with major POS platforms. Custom integrations are included in the Enterprise plan at no extra cost." },
];

export default function FAQSection() {
  const [activeCat, setActiveCat] = useState("All");
  const [search, setSearch] = useState("");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const filtered = faqs.filter((f) => {
    const matchCat = activeCat === "All" || f.cat === activeCat;
    const matchSearch = f.q.toLowerCase().includes(search.toLowerCase()) || f.a.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-[#FF6B00] mb-4">
            HELP CENTER
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-lg mb-8">Find answers to the most common questions about Menuverse.</p>

          <div className="relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search questions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-5 py-4 rounded-2xl border border-gray-200 bg-white shadow-sm text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/30 focus:border-[#FF6B00] transition"
            />
          </div>
        </motion.div>

        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${activeCat === cat
                  ? "bg-[#FF6B00] text-white shadow"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          {filtered.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="rounded-2xl border border-gray-100 bg-gray-50 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left group"
                >
                  <span className="font-semibold text-gray-800 text-sm pr-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.q}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 text-gray-400 group-hover:text-[#FF6B00] transition-colors"
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-6 pb-5">
                        <div className="h-px bg-gray-200 mb-4" />
                        <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
          {filtered.length === 0 && (
            <div className="text-center py-12 text-gray-400 text-sm">
              No results found for your search.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
