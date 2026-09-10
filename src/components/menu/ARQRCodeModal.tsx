import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import { X } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

type ARQRCodeModalProps = {
  open: boolean;
  url: string;
  label: string;
  onClose: () => void;
};

export default function ARQRCodeModal({ open, url, label, onClose }: ARQRCodeModalProps) {
  const { t } = useLanguage();

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    try {
      const qrHost = new URL(url).host;
      const pageHost = window.location.host;
      if (qrHost !== pageHost) {
        console.info(
          `[AR QR] QR encodes the public origin "${qrHost}" (tunnel/live preview). ` +
            `Update NEXT_PUBLIC_BASE_URL in .env.local to change it (see .env.example).`
        );
      }
    } catch {
      /* ignore malformed URL */
    }
    return () => window.removeEventListener("keydown", onKey);
  }, [open, url, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm rounded-3xl bg-white p-7 text-center shadow-2xl dark:bg-slate-900"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-xl p-2 text-slate-400 transition-colors hover:bg-black/5 hover:text-slate-600 dark:hover:bg-white/10 dark:hover:text-slate-200"
            >
              <X size={18} />
            </button>

            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF6B00]">{label}</span>

            <div
              className="mx-auto mt-4 mb-5 rounded-2xl bg-white p-4 shadow-inner ring-1 ring-slate-900/10"
              style={{ width: "fit-content" }}
            >
              <QRCodeSVG
                value={url}
                size={184}
                level="M"
                marginSize={2}
                bgColor="#FFFFFF"
                fgColor="#0F172A"
                title={url}
              />
            </div>

            <h3 className="font-display text-lg font-bold text-slate-900 dark:text-slate-50">{t("demo.qrTitle")}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{t("demo.qrDesc")}</p>

            <div className="mt-5 flex items-center justify-center gap-2 text-[11px] font-semibold">
              <span className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                iPhone · AR Quick Look
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                Android · Scene Viewer
              </span>
            </div>

            <p className="mt-5 break-all font-mono text-[11px] leading-relaxed text-slate-400">{url}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}