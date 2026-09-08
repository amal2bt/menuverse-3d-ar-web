import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Send } from "lucide-react";

const benefits = [
  "Setup guaranteed within 24 hours",
  "14-day free trial, no credit card needed",
  "24/7 dedicated technical support",
  "AR & 3D menu experience included",
  "Unlimited QR code generation",
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left */}
            <div className="bg-gradient-to-br from-[#FF6B00] to-[#FF8C38] p-10 md:p-12 flex flex-col justify-between">
              <div>
                <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-white/70 mb-6">
                  REQUEST A DEMO
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Ready to Take Your Restaurant to the Next Level?
                </h2>
                <p className="text-white/80 text-base leading-relaxed mb-10">
                  Fill in the form and our team will prepare a personalized demo just for you. No commitment required.
                </p>
                <ul className="flex flex-col gap-3.5">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm text-white/90">
                      <span className="shrink-0 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                        <Check size={12} className="text-white" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 text-white/50 text-xs">
                Menuverse · Turkey's #1 Restaurant QR Menu Platform
              </div>
            </div>

            {/* Right */}
            <div className="p-10 md:p-12">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-2">
                    <Check size={28} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'DM Sans', sans-serif" }}>Request Received!</h3>
                  <p className="text-gray-500 text-sm max-w-xs">Our team will reach out within 2 hours. Thank you!</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Full Name</label>
                    <input required className="w-full px-4 py-3.5 rounded-2xl bg-gray-50 border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/30 focus:border-[#FF6B00] transition" placeholder="John Smith" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Restaurant Name</label>
                    <input required className="w-full px-4 py-3.5 rounded-2xl bg-gray-50 border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/30 focus:border-[#FF6B00] transition" placeholder="The Grand Bistro" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Email</label>
                      <input required type="email" className="w-full px-4 py-3.5 rounded-2xl bg-gray-50 border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/30 focus:border-[#FF6B00] transition" placeholder="you@restaurant.com" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Phone</label>
                      <input required type="tel" className="w-full px-4 py-3.5 rounded-2xl bg-gray-50 border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/30 focus:border-[#FF6B00] transition" placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Message (Optional)</label>
                    <textarea rows={3} className="w-full px-4 py-3.5 rounded-2xl bg-gray-50 border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/30 focus:border-[#FF6B00] transition resize-none" placeholder="Tell us briefly about your restaurant and what you need..." />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-[#FF6B00] text-white font-semibold text-sm hover:bg-[#E05A00] hover:scale-[1.02] active:scale-100 transition-all shadow-md shadow-orange-100 mt-1"
                  >
                    <Send size={16} />
                    Request Demo
                  </button>
                  <p className="text-center text-xs text-gray-400">
                    By submitting you agree to our <span className="underline cursor-pointer">Privacy Policy</span>.
                  </p>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
