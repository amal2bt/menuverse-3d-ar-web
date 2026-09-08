import { motion } from "framer-motion";
import { Utensils, Coffee, Hotel, Martini, Store, Leaf } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const ICONS = [Utensils, Coffee, Hotel, Martini, Store, Leaf];

export default function Industries() {
  const { t } = useLanguage();
  const keys = [
    "ind.restaurant",
    "ind.cafe",
    "ind.hotel",
    "ind.bar",
    "ind.fastfood",
    "ind.vegan",
  ] as const;

  return (
    <section id="industries" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#FF6B00] mb-3 inline-block">
            Industry
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
            {t("industries.title")}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto mt-3">{t("industries.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {keys.map((key, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group rounded-2xl glass-card p-6 hover:-translate-y-1 transition-transform"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FF6B00]/12 text-[#FF6B00] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-slate-50 leading-snug">
                  {t(key)}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
