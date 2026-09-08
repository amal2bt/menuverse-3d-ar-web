import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import type { TranslationKey } from "../../data/translations";

type Tier = {
  nameKey: TranslationKey;
  descKey: TranslationKey;
  monthly: number;
  yearly: number;
  features: TranslationKey[];
  ctaKey: TranslationKey;
  highlight: boolean;
  usd: string;
};

const TIERS: Tier[] = [
  {
    nameKey: "pricing.basic.name",
    descKey: "pricing.basic.desc",
    monthly: 3490,
    yearly: 27920,
    features: [
      "pricing.basic.f1",
      "pricing.basic.f2",
      "pricing.basic.f3",
      "pricing.basic.f4",
      "pricing.basic.f5",
    ],
    ctaKey: "pricing.cta.basic",
    highlight: false,
    usd: "$105/mo",
  },
  {
    nameKey: "pricing.premium.name",
    descKey: "pricing.premium.desc",
    monthly: 7990,
    yearly: 63920,
    features: [
      "pricing.premium.f1",
      "pricing.premium.f2",
      "pricing.premium.f3",
      "pricing.premium.f4",
      "pricing.premium.f5",
    ],
    ctaKey: "pricing.cta.premium",
    highlight: true,
    usd: "$240/mo",
  },
  {
    nameKey: "pricing.enterprise.name",
    descKey: "pricing.enterprise.desc",
    monthly: 14990,
    yearly: 119920,
    features: [
      "pricing.enterprise.f1",
      "pricing.enterprise.f2",
      "pricing.enterprise.f3",
      "pricing.enterprise.f4",
      "pricing.enterprise.f5",
    ],
    ctaKey: "pricing.cta.enterprise",
    highlight: false,
    usd: "$450/mo",
  },
];

function formatTRY(n: number) {
  return n.toLocaleString("tr-TR");
}

export default function Pricing() {
  const { t } = useLanguage();
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#FF6B00] mb-3 inline-block">
            Pricing
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
            {t("pricing.title")}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto mt-3">{t("pricing.subtitle")}</p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-3 mt-8 bg-black/5 dark:bg-white/10 rounded-full p-1.5">
            <button
              onClick={() => setYearly(false)}
              className={`text-sm font-semibold px-4 py-2 rounded-full transition-colors ${
                !yearly ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 shadow" : "text-slate-500"
              }`}
            >
              {t("pricing.monthly")}
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full transition-colors ${
                yearly ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 shadow" : "text-slate-500"
              }`}
            >
              {t("pricing.yearly")}
              <span className="text-[10px] font-bold bg-[#FF6B00] text-white px-2 py-0.5 rounded-full">
                {t("pricing.save")}
              </span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {TIERS.map((tier, i) => {
            const monthlyPrice = tier.monthly;
            const effective = yearly ? tier.yearly / 12 : monthlyPrice;
            return (
              <motion.div
                key={tier.nameKey}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-3xl p-7 flex flex-col ${
                  tier.highlight
                    ? "bg-gradient-to-b from-[#FF6B00] to-[#E05A00] text-white shadow-2xl shadow-orange-200 dark:shadow-orange-900/40 scale-[1.02] lg:-translate-y-2"
                    : "glass-card"
                }`}
              >
                {tier.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 text-xs font-bold bg-white text-[#FF6B00] px-4 py-1.5 rounded-full shadow-lg">
                    <Sparkles size={12} />
                    {t("pricing.popular")}
                  </span>
                )}

                <h3
                  className={`font-display text-lg font-bold ${
                    tier.highlight ? "text-white" : "text-slate-900 dark:text-slate-50"
                  }`}
                >
                  {t(tier.nameKey)}
                </h3>
                <p
                  className={`text-sm mt-1 ${
                    tier.highlight ? "text-orange-100" : "text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {t(tier.descKey)}
                </p>

                <div className="mt-6 mb-1">
                  <span
                    className={`font-serif font-extrabold text-4xl ${
                      tier.highlight ? "text-white" : "text-slate-900 dark:text-slate-50"
                    }`}
                  >
                    ₺{formatTRY(Math.round(effective))}
                    <span className={`text-base font-sans font-semibold ${tier.highlight ? "text-orange-100" : "text-slate-400"}`}>
                      /mo
                    </span>
                  </span>
                  <p className={`text-xs mt-1 ${tier.highlight ? "text-orange-100" : "text-slate-400"}`}>{tier.usd}</p>
                </div>

                <ul className="mt-6 space-y-3 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span
                        className={`mt-0.5 flex items-center justify-center w-5 h-5 rounded-full shrink-0 ${
                          tier.highlight ? "bg-white/20" : "bg-[#FF6B00]/12"
                        }`}
                      >
                        <Check size={12} className={tier.highlight ? "text-white" : "text-[#FF6B00]"} />
                      </span>
                      <span className={tier.highlight ? "text-orange-50" : "text-slate-600 dark:text-slate-300"}>
                        {t(f)}
                      </span>
                    </li>
                  ))}
                </ul>

                <a href="#contact" className="mt-7">
                  <button
                    className={`w-full text-sm font-bold py-3.5 rounded-xl transition-all ${
                      tier.highlight
                        ? "bg-white text-[#FF6B00] hover:bg-orange-50"
                        : "bg-[#0F172A] dark:bg-slate-50 dark:text-slate-900 text-white hover:bg-black dark:hover:bg-white"
                    }`}
                  >
                    {t(tier.ctaKey)}
                  </button>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
