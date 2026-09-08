import { motion } from "framer-motion";
import { FileUp, ToggleRight, Rocket } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const ICONS = [FileUp, ToggleRight, Rocket];

export default function HowItWorks() {
  const { t } = useLanguage();
  const keys = [
    ["how.1.title", "how.1.desc"],
    ["how.2.title", "how.2.desc"],
    ["how.3.title", "how.3.desc"],
  ] as const;

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#FF6B00] mb-3 inline-block">
            Workflow
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
            {t("how.title")}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto mt-3">{t("how.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {keys.map(([titleK, descK], i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={titleK}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative rounded-3xl glass-card p-7"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#FF6B00] text-white flex items-center justify-center shadow-lg shadow-orange-200">
                    <Icon size={22} />
                  </div>
                  <span className="font-display font-black text-4xl text-slate-200 dark:text-slate-700">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-slate-50 mb-2">
                  {t(titleK)}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{t(descK)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
