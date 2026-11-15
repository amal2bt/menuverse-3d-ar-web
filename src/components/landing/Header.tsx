import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, QrCode, Sun, Moon, Globe, ChevronDown } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import type { Language } from "../../data/translations";

const LANGS: { code: Language; label: string }[] = [
  { code: "tr", label: "TR" },
  { code: "en", label: "EN" },
  { code: "ar", label: "AR" },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: t("nav.demo"), href: "#demo" },
    { label: t("nav.industries"), href: "#industries" },
    { label: t("nav.features"), href: "#features" },
    { label: t("nav.pricing"), href: "#pricing" },
    { label: t("nav.faq"), href: "#faq" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  // Smooth scroll handler for the Get Started button
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    setDrawerOpen(false); // Close mobile drawer if open
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#top" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#FF6B00] flex items-center justify-center shadow-md shadow-orange-200">
            <QrCode size={18} className="text-white" />
          </div>
          <span className="font-display font-bold text-lg text-slate-900 dark:text-slate-50">
            {t("footer.brand")}
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#FF6B00] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          {/* Language selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 dark:text-slate-200 px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              <Globe size={15} />
              <span>{lang.toUpperCase()}</span>
              <ChevronDown size={14} />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="absolute right-0 top-full mt-2 glass-card rounded-2xl shadow-xl p-1.5 min-w-[120px]"
                >
                  {LANGS.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setLangOpen(false);
                      }}
                      className={`block w-full text-left text-sm px-3 py-2 rounded-xl transition-colors ${
                        lang === l.code
                          ? "bg-[#FF6B00]/10 text-[#FF6B00] font-semibold"
                          : "text-slate-600 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/10"
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex items-center justify-center w-9 h-9 rounded-xl text-slate-600 dark:text-slate-200 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* Get Started -> Scrolls down to contact */}
          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="inline-block text-sm font-bold text-white bg-[#FF6B00] hover:bg-[#E05A00] px-5 py-2.5 rounded-xl transition-all hover:scale-[1.03] shadow-lg shadow-orange-200"
          >
            {t("nav.getStarted")}
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex items-center justify-center w-9 h-9 rounded-xl text-slate-600 dark:text-slate-200 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
            className="p-2 text-slate-700 dark:text-slate-200 hover:bg-black/5 dark:hover:bg-white/10 rounded-xl transition-colors"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed top-0 right-0 z-50 h-full w-[78%] max-w-xs glass-card shadow-2xl p-6 flex flex-col lg:hidden"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-display font-bold text-lg text-slate-900 dark:text-slate-50">
                  {t("footer.brand")}
                </span>
                <button
                  onClick={() => setDrawerOpen(false)}
                  aria-label="Close menu"
                  className="p-2 text-slate-600 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/10 rounded-xl"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setDrawerOpen(false)}
                    className="text-base font-medium text-slate-700 dark:text-slate-200 px-3 py-2.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mt-6 flex items-center gap-2">
                {LANGS.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className={`flex-1 text-center text-sm font-bold px-3 py-2 rounded-xl transition-colors ${
                      lang === l.code
                        ? "bg-[#FF6B00] text-white"
                        : "bg-black/5 dark:bg-white/10 text-slate-600 dark:text-slate-300"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>

              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="mt-6 block w-full text-center text-sm font-bold text-white bg-[#FF6B00] hover:bg-[#E05A00] py-3 rounded-xl transition-colors"
              >
                {t("nav.getStarted")}
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}