import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, Smartphone, Scan } from "lucide-react";
import { getArModel } from "./menuModels";
import { useLanguage } from "../../context/LanguageContext";

export default function ARViewerPage() {
  const { t, lang } = useLanguage();
  const viewerRef = useRef<any>(null);
  
  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const model = useMemo(() => {
    if (typeof window === "undefined") return getArModel("pizza");
    const params = new URLSearchParams(window.location.search);
    return getArModel(params.get("model") ?? "pizza");
  }, []);

  useEffect(() => {
    document.title = `${t(model.nameKey)} · AR`;
  }, [t, model.nameKey, lang]);

  // Track real-time model loading progress from model-viewer events
  useEffect(() => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    const handleProgress = (event: CustomEvent<{ totalProgress: number }>) => {
      setLoadProgress(Math.round(event.detail.totalProgress * 100));
    };

    const handleLoad = () => {
      setIsLoaded(true);
    };

    viewer.addEventListener("progress", handleProgress as EventListener);
    viewer.addEventListener("load", handleLoad);

    return () => {
      viewer.removeEventListener("progress", handleProgress as EventListener);
      viewer.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-slate-950 text-white overflow-hidden flex flex-col">
      {/* Header */}
      <header className="relative z-30 flex shrink-0 items-center justify-between gap-3 border-b border-white/10 px-4 py-3 bg-slate-950/80 backdrop-blur-md">
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-1.5 rounded-full border border-white/15 px-3.5 py-2 text-xs font-semibold text-slate-200 transition-colors hover:bg-white/10"
        >
          <ArrowLeft size={14} />
          Back
        </button>

        <div className="text-center">
          <span className="block text-[10px] font-bold uppercase tracking-[0.24em] text-[#FF6B00]">AR Viewer</span>
          <span className="font-serif text-lg font-bold leading-tight">{t(model.nameKey)}</span>
        </div>

        <span className="flex items-center gap-1.5 rounded-full border border-white/15 px-3.5 py-2 text-xs font-semibold text-slate-300">
          <Scan size={13} className="text-[#FF6B00]" />
          360°
        </span>
      </header>

      {/* Main Viewport */}
      <main className="relative flex-1 w-full overflow-hidden">
        {/* Fixed Restaurant Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center pointer-events-none z-0"
          style={{ backgroundImage: `url('/images/imagesr.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
        </div>

        {/* Loading Overlay Spinner & Progress */}
        {!isLoaded && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-slate-950/70 backdrop-blur-md transition-opacity duration-300">
            <div className="flex flex-col items-center gap-3.5 rounded-2xl border border-white/10 bg-slate-900/90 px-7 py-6 text-center shadow-2xl backdrop-blur-xl">
              <div className="relative flex h-14 w-14 items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-white/10"></div>
                <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-[#FF6B00]"></div>
                <span className="text-xs font-bold text-white">{loadProgress}%</span>
              </div>
              <div>
                <p className="font-serif text-sm font-bold text-white">Loading 3D Asset</p>
                <p className="mt-0.5 text-[11px] text-slate-400">Preparing interactive preview...</p>
              </div>
            </div>
          </div>
        )}

        {/* 3D Model Viewer */}
        <model-viewer
          ref={viewerRef}
          src={model.glb}
          ios-src={model.usdz}
          alt={`${t(model.nameKey)} AR model`}
          camera-controls
          auto-rotate
          auto-rotate-delay="100"
          rotation-per-second="18deg"
          shadow-intensity="1"
          exposure="1.2"
          environment-image="neutral"
          loading="eager"
          reveal="auto"
          bounds="tight"
          camera-target="auto"
          ar
          ar-modes="webxr scene-viewer quick-look"
          ar-scale="auto"
          ar-placement="floor"
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", touchAction: "none", zIndex: 1 }}
        ></model-viewer>

        {/* Bottom Helper Bar */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center p-4 z-30">
          <div className="rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-center backdrop-blur-md">
            <p className="flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-200">
              <Smartphone size={13} className="text-[#FF6B00]" />
              {model.usdz ? "iOS: AR Quick Look" : ""} · Android: Scene Viewer · Drag to inspect
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}