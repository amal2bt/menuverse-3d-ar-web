import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [values, setValues] = useState({
    name: "",
    restaurant: "",
    email: "",
    phone: "",
    message: "",
  });

  function update(field: keyof typeof values) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
      setError("");
    };
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!values.name.trim() || !values.restaurant.trim() || !values.email.trim()) {
      setError(t("contact.error.required"));
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      setError(t("contact.error.email"));
      return;
    }

    setStatus("loading");
    try {
      // Simulated network call — replace with a real endpoint (e.g. fetch to your API).
      await new Promise((r) => setTimeout(r, 1100));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/50 transition";

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#FF6B00] mb-3 inline-block">
            Contact
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
            {t("contact.title")}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto mt-3">{t("contact.subtitle")}</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="rounded-3xl glass-card p-7 space-y-4"
        >
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-3 py-8 text-center"
            >
              <CheckCircle2 size={44} className="text-emerald-500" />
              <p className="font-display font-semibold text-slate-900 dark:text-slate-50">{t("contact.success")}</p>
            </motion.div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                    {t("contact.name")} *
                  </label>
                  <input value={values.name} onChange={update("name")} className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                    {t("contact.restaurant")} *
                  </label>
                  <input value={values.restaurant} onChange={update("restaurant")} className={inputClass} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                    {t("contact.email")} *
                  </label>
                  <input type="email" value={values.email} onChange={update("email")} className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                    {t("contact.phone")}
                  </label>
                  <input value={values.phone} onChange={update("phone")} className={inputClass} />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                  {t("contact.message")}
                </label>
                <textarea rows={4} value={values.message} onChange={update("message")} className={inputClass} />
              </div>

              {(status === "error" || error) && (
                <div className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400">
                  <AlertCircle size={16} />
                  <span>{error || t("contact.error.required")}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-[#E05A00] text-white font-bold text-sm py-4 rounded-2xl shadow-lg shadow-orange-200 transition-all disabled:opacity-60"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    {t("contact.submitting")}
                  </>
                ) : (
                  t("contact.submit")
                )}
              </button>
            </>
          )}
        </motion.form>
      </div>
    </section>
  );
}
