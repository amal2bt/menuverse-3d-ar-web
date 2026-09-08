import { motion } from "framer-motion";
import { Move3d, QrCode, TrendingUp, Palette, Boxes, Languages, BrainCircuit, ShoppingBag, ShieldCheck } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const ICONS = [Move3d, QrCode, TrendingUp, Palette, Boxes, Languages, BrainCircuit, ShoppingBag];

export default function Features() {
  const { t } = useLanguage();
  const keys = [
    ["feat.1.title", "feat.1.desc"],
    ["feat.2.title", "feat.2.desc"],
    ["feat.3.title", "feat.3.desc"],
    ["feat.4.title", "feat.4.desc"],
    ["feat.5.title", "feat.5.desc"],
    ["feat.6.title", "feat.6.desc"],
    ["feat.7.title", "feat.7.desc"],
    ["feat.8.title", "feat.8.desc"],
  ] as const;

  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#FF6B00] mb-3 inline-block">
            Features
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
            {t("features.title")}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto mt-3">{t("features.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {keys.map(([titleK, descK], i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={titleK}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
                className="group rounded-2xl glass-card p-6 hover:-translate-y-1 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF6B00] to-[#FF9A40] text-white flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform shadow-lg shadow-orange-200">
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-base font-bold text-slate-900 dark:text-slate-50 leading-snug mb-2">
                  {t(titleK)}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{t(descK)}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Compliance banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 p-5 flex items-start gap-4"
        >
          <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 flex items-center justify-center shrink-0">
            <ShieldCheck size={20} />
          </div>
          <p className="text-sm text-emerald-800 dark:text-emerald-200 leading-relaxed">
            {t("features.compliance")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
