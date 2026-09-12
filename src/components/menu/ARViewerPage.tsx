import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Smartphone, Scan } from "lucide-react";
import { getArModel } from "./menuModels";

export default function ARViewerPage() {
  const model = useMemo(() => {
    if (typeof window === "undefined") return getArModel("pizza");
    const params = new URLSearchParams(window.location.search);
    return getArModel(params.get("model") ?? "pizza");
  }, []);

  useEffect(() => {
    document.title = `${model.name} · AR`;
  }, [model.name]);

  return (
    <div className="flex h-[100dvh] flex-col overflow-hidden bg-slate-950 text-white">
      <header className="flex shrink-0 items-center justify-between gap-3 border-b border-white/10 px-4 py-3 z-10">
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-1.5 rounded-full border border-white/15 px-3.5 py-2 text-xs font-semibold text-slate-200 transition-colors hover:bg-white/10"
        >
          <ArrowLeft size={14} />
          Back
        </button>

        <div className="text-center">
          <span className="block text-[10px] font-bold uppercase tracking-[0.24em] text-[#FF6B00]">AR Viewer</span>
          <span className="font-serif text-lg font-bold leading-tight">{model.name}</span>
        </div>

        <span className="flex items-center gap-1.5 rounded-full border border-white/15 px-3.5 py-2 text-xs font-semibold text-slate-300">
          <Scan size={13} className="text-[#FF6B00]" />
          360°
        </span>
      </header>

      <motion.main
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative min-h-0 flex-1 overflow-hidden"
      >
        {/* Fixed Restaurant Background Image from public folder */}
        <div 
          className="absolute inset-0 bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: `url('/public/images/imager.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
        </div>

        {/* 3D Model Viewer with matching environment lighting */}
        <model-viewer
          src={model.glb}
          ios-src={model.usdz}
          alt={`${model.name} AR model`}
          camera-controls
          auto-rotate
          auto-rotate-delay="200"
          rotation-per-second="18deg"
          environment-image="/restaurant-bg.jpg"
          shadow-intensity="1.2"
          exposure="1"
          ar
          ar-modes="webxr scene-viewer quick-look"
          ar-scale="auto"
          ar-placement="floor"
          camera-orbit="0deg 78deg 105%"
          style={{ width: "100%", height: "100%", touchAction: "none", position: "relative", zIndex: 1 }}
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center p-4 z-10">
          <div className="rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-center backdrop-blur-md">
            <p className="flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-200">
              <Smartphone size={13} className="text-[#FF6B00]" />
              {model.usdz ? "iOS: AR Quick Look" : ""} · Android: Scene Viewer · Drag to inspect
            </p>
          </div>
        </div>
      </motion.main>
    </div>
  );
}