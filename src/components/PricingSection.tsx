import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Basic",
    monthly: 49,
    yearly: 39,
    currency: "$",
    desc: "The perfect starting point for small restaurants.",
    features: [
      "Up to 10 menu items",
      "QR code menu",
      "Mobile-responsive design",
      "Email support",
      "Basic analytics",
    ],
    featured: false,
    cta: "Start Free Trial",
  },
  {
    name: "Premium",
    monthly: 119,
    yearly: 95,
    currency: "$",
    desc: "Powerful features for growing restaurants.",
    features: [
      "Unlimited menu items",
      "3D & AR menu experience",
      "Multi-language support",
      "Priority support",
      "Advanced analytics",
      "Custom domain",
      "API access",
    ],
    featured: true,
    badge: "MOST POPULAR",
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    monthly: 299,
    yearly: 239,
    currency: "$",
    desc: "Tailored solutions for restaurant chains.",
    features: [
      "Everything in Premium",
      "Unlimited branches",
      "White-label solution",
      "Custom integrations",
      "SLA guarantee",
      "Dedicated account manager",
      "Onboarding & training",
    ],
    featured: false,
    cta: "Get a Quote",
  },
];

export default function PricingSection() {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-[#FF6B00] mb-4">
            PRICING
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Plans That Fit Your Size
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto mb-8">
            14-day free trial on all plans. No credit card required.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-0 bg-white rounded-2xl p-1.5 shadow-sm border border-gray-100">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${!yearly ? "bg-[#FF6B00] text-white shadow" : "text-gray-500 hover:text-gray-700"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${yearly ? "bg-[#FF6B00] text-white shadow" : "text-gray-500 hover:text-gray-700"}`}
            >
              Yearly
              {!yearly && <span className="text-xs bg-green-100 text-green-700 rounded-full px-2 py-0.5 font-semibold">Save 20%</span>}
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 flex flex-col gap-6 ${plan.featured
                  ? "bg-white border-2 border-[#FF6B00] shadow-2xl shadow-orange-100 scale-105 z-10"
                  : "bg-white border border-gray-100 shadow-sm"
                }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 bg-[#FF6B00] text-white text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full shadow">
                    <Zap size={11} />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">{plan.name}</p>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-4xl font-bold text-gray-900" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {plan.currency}{yearly ? plan.yearly : plan.monthly}
                  </span>
                  <span className="text-gray-400 mb-1">/mo</span>
                </div>
                <p className="text-sm text-gray-500">{plan.desc}</p>
              </div>

              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <Check size={16} className="text-[#FF6B00] mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3.5 rounded-2xl font-semibold text-sm transition-all ${plan.featured
                    ? "bg-[#FF6B00] text-white hover:bg-[#E05A00] hover:scale-[1.02] shadow-md"
                    : "bg-gray-50 text-gray-800 border border-gray-200 hover:border-[#FF6B00] hover:text-[#FF6B00]"
                  }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
