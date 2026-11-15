import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const AVATAR_GRADIENTS = [
  "from-[#FF6B00] to-[#FF9A40]",
  "from-violet-500 to-fuchsia-500",
  "from-emerald-500 to-teal-400",
];

export default function Testimonials() {
  const { t } = useLanguage();
  const items = [
    ["testi.1.quote", "testi.1.name", "testi.1.role"],
    ["testi.2.quote", "testi.2.name", "testi.2.role"],
    ["testi.3.quote", "testi.3.name", "testi.3.role"],
  ] as const;

  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#FF6B00] mb-3 inline-block">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
            {t("testi.title")}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto mt-3">{t("testi.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map(([quoteK, nameK, roleK], i) => {
            const initial = t(nameK).charAt(0);
            return (
              <motion.figure
                key={quoteK}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-3xl glass-card p-7 flex flex-col"
              >
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={16} fill="currentColor" />
                  ))}
                </div>
                <Quote className="text-[#FF6B00]/25 mb-3" size={32} />
                <blockquote className="text-slate-700 dark:text-slate-200 text-sm leading-relaxed flex-1">
                  “{t(quoteK)}”
                </blockquote>
                <figcaption className="flex items-center gap-3 mt-6">
                  <div
                    className={`w-11 h-11 rounded-full bg-gradient-to-br ${AVATAR_GRADIENTS[i]} flex items-center justify-center text-white font-bold`}
                  >
                    {initial}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm text-slate-900 dark:text-slate-50">
                      {t(nameK)}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{t(roleK)}</p>
                  </div>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
