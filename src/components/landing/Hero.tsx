import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { Sparkles, Move3d, ShieldCheck } from "lucide-react";

export default function Hero() {
  const { t } = useLanguage();

  const variants = {
    hidden: { opacity: 0, y: 24 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.12 },
    }),
  };

  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Ambient glow background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-[#FF6B00]/25 blur-[120px]" />
        <div className="absolute top-1/3 -right-24 w-[380px] h-[380px] rounded-full bg-violet-400/20 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 w-[360px] h-[360px] rounded-full bg-sky-400/15 blur-[120px]" />
      </div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 text-center"
        initial="hidden"
        animate="show"
      >
        {/* Status pill */}
        <motion.div variants={variants} custom={0} className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 shadow-sm mb-8">
          <Sparkles size={14} className="text-[#FF6B00]" />
          <span className="tracking-wide">{t("hero.pill")}</span>
        </motion.div>

        <motion.h1
          variants={variants}
          custom={1}
          className="font-serif text-5xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 dark:text-slate-50 leading-[1.05] tracking-tight"
        >
          {t("hero.title.line1")}{" "}
          <span className="relative text-[#FF6B00]">
            {t("hero.title.highlight")}
            <motion.svg
              viewBox="0 0 200 9"
              className="absolute left-0 -bottom-2 w-full h-2 text-[#FF6B00]"
              preserveAspectRatio="none"
              aria-hidden
            >
              <motion.path
                d="M0,5 Q50,1 100,5 T200,5"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </motion.svg>
          </span>{" "}
          {t("hero.title.line2")}
        </motion.h1>

        <motion.p
          variants={variants}
          custom={2}
          className="mt-7 text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          variants={variants}
          custom={3}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#contact">
            <button className="px-8 py-4 rounded-2xl bg-[#FF6B00] text-white font-bold text-base hover:bg-[#E05A00] hover:scale-[1.03] transition-all shadow-xl shadow-orange-200 dark:shadow-orange-900/40 w-full sm:w-auto">
              {t("hero.cta.primary")}
            </button>
          </a>
          <a href="#demo">
            <button className="px-8 py-4 rounded-2xl glass text-slate-800 dark:text-slate-100 font-bold text-base border border-slate-200/70 dark:border-slate-700 hover:scale-[1.03] transition-all shadow-sm w-full sm:w-auto">
              {t("hero.cta.secondary")}
            </button>
          </a>
        </motion.div>

        {/* Stat strip */}
        <motion.div
          variants={variants}
          custom={4}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          <div className="rounded-2xl glass p-5 flex items-center gap-4 text-start">
            <div className="w-11 h-11 rounded-xl bg-[#FF6B00]/15 text-[#FF6B00] flex items-center justify-center shrink-0">
              <Move3d size={20} />
            </div>
            <div>
              <p className="font-display font-bold text-2xl text-slate-900 dark:text-slate-50">{t("hero.stat.commission.value")}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{t("hero.stat.commission.label")}</p>
            </div>
          </div>
          <div className="rounded-2xl glass p-5 flex items-center gap-4 text-start">
            <div className="w-11 h-11 rounded-xl bg-violet-500/15 text-violet-600 dark:text-violet-300 flex items-center justify-center shrink-0">
              <Sparkles size={20} />
            </div>
            <div>
              <p className="font-display font-bold text-2xl text-slate-900 dark:text-slate-50">{t("hero.stat.interactive.value")}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{t("hero.stat.interactive.label")}</p>
            </div>
          </div>
          <div className="rounded-2xl glass p-5 flex items-center gap-4 text-start">
            <div className="w-11 h-11 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 flex items-center justify-center shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div>
              <p className="font-display font-bold text-2xl text-slate-900 dark:text-slate-50">{t("hero.stat.compliance.value")}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{t("hero.stat.compliance.label")}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
