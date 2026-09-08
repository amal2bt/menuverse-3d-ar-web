import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, QrCode } from "lucide-react";
import MenuDemo from "./components/MenuDemo";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import BlogSection from "./components/BlogSection";
import AdminLogin from "./components/AdminLogin";

const navLinks = [
  { label: "Menu Demo", href: "#menu" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "#blog" },
];

function Navbar({ onAdminClick }: { onAdminClick: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#FF6B00] flex items-center justify-center">
            <QrCode size={16} className="text-white" />
          </div>
          <span className="font-bold text-gray-900 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Menuverse
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onAdminClick}
            className="text-sm font-semibold text-gray-600 hover:text-gray-900 px-4 py-2 transition-colors"
          >
            Login
          </button>
          <a href="#contact">
            <button className="text-sm font-semibold text-white bg-[#FF6B00] hover:bg-[#E05A00] px-5 py-2.5 rounded-xl transition-all hover:scale-[1.02]">
              Get a Demo
            </button>
          </a>
        </div>

        <button className="md:hidden p-2 text-gray-600" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-100 bg-white overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((l) => (
                <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-gray-700 py-1">
                  {l.label}
                </a>
              ))}
              <button onClick={() => { onAdminClick(); setOpen(false); }} className="text-sm font-semibold text-[#FF6B00] text-left py-1">
                Login
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="bg-white pt-20 pb-10 px-4 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#FF6B00] mb-6 bg-[#FFF0E6] px-4 py-1.5 rounded-full">
            Turkey&apos;s #1 3D QR Menu Platform
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.05] mb-7 tracking-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Transform Your Menu<br />
            into a <span className="text-[#FF6B00]">3D Experience</span>
          </h1>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Scan a QR code, explore dishes in 360°, and see them life-size on your table with AR. Setup in 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact">
              <button className="px-8 py-4 rounded-2xl bg-[#FF6B00] text-white font-semibold text-base hover:bg-[#E05A00] hover:scale-[1.02] transition-all shadow-lg shadow-orange-100">
                Get a Free Demo
              </button>
            </a>
            <a href="#menu">
              <button className="px-8 py-4 rounded-2xl bg-gray-50 text-gray-800 font-semibold text-base border border-gray-200 hover:border-gray-300 hover:bg-gray-100 transition-all">
                See Live Demo
              </button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          {[
            { value: "500+", label: "Active Restaurants" },
            { value: "34%", label: "Avg. Revenue Increase" },
            { value: "24h", label: "Setup Time" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-gray-900 mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>{stat.value}</p>
              <p className="text-xs text-gray-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default function App() {
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <div className="min-h-full bg-white">
      <AnimatePresence mode="wait">
        {showAdmin ? (
          <motion.div
            key="admin"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="fixed top-4 left-4 z-50">
              <button
                onClick={() => setShowAdmin(false)}
                className="flex items-center gap-2 text-sm font-semibold text-gray-600 bg-white rounded-xl px-4 py-2 shadow-md border border-gray-100 hover:text-gray-900 transition-colors"
              >
                <X size={14} /> Back to Site
              </button>
            </div>
            <AdminLogin />
          </motion.div>
        ) : (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Navbar onAdminClick={() => setShowAdmin(true)} />
            <HeroSection />
            <div id="menu"><MenuDemo /></div>
            <div id="pricing"><PricingSection /></div>
            <div id="faq"><FAQSection /></div>
            <div id="blog"><BlogSection /></div>
            <div id="contact"><ContactSection /></div>

            <footer className="bg-gray-900 text-gray-400 py-12 px-4 text-center text-sm">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-lg bg-[#FF6B00] flex items-center justify-center">
                  <QrCode size={12} className="text-white" />
                </div>
                <span className="font-bold text-white text-base" style={{ fontFamily: "'DM Sans', sans-serif" }}>Menuverse</span>
              </div>
              <p>© 2026 Menuverse. All rights reserved.</p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
