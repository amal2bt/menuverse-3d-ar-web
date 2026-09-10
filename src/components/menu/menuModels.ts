export type ArModelConfig = {
  id: string;
  name: string;
  category: 'main-dishes' | 'desserts' | 'drinks';
  /** GLB model URL served by Vite from `public/`. Also drives Android Scene Viewer / WebXR. */
  glb: string;
  /** USDZ model URL used by Apple AR Quick Look on iOS. */
  usdz?: string;
  price?: string;
};

export const CATEGORIES = [
  { id: 'main-dishes', name: 'Main Dishes' },
  { id: 'desserts', name: 'Desserts' },
  { id: 'drinks', name: 'Drinks' },
];

export const AR_MODELS: ArModelConfig[] = [
  // --- MAIN DISHES ---
  {
    id: "pizza",
    name: "Truffle Pizza",
    category: "main-dishes",
    glb: "/dist/models/pizza_modern_plate1.glb",
    usdz: "/models/finalpizza.usdz",
    price: "$18.00"
  },
  {
    id: "sushi",
    name: "Omakase Sushi",
    category: "main-dishes",
    glb: "/dist/models/REALISTIC_SUSHI_AR3.glb",
    usdz: "/dist/models/REALISTIC_SUSHI_AR3.usdz",
    price: "$24.00"
  },

  // --- DESSERTS ---
  {
    id: "ice-cream",
    name: "Cocktail Ice Cream",
    category: "desserts",
    glb: "/dist/models/icecream_fixed.glb",
    usdz: "/dist/models/ice_cream_sundae_AR.usdz",
    price: "$9.00"
  },
  {
    id: "cake",
    name: "Lava Cake",
    category: "desserts",
    glb: "https://polyfork.dev/cdn/cake-stand-ee7396.glb",
    price: "$8.50"
  },

  // --- DRINKS ---

{
  id: "coffee",
  name: "Coffee",
  category: "drinks",
  glb: "/dist/models/Coffee_Cup_AR.glb",
  usdz: "/dist/models/Coffee_Cup_AR.usdz",
  price: "$4.00"
}
];

export function getArModel(modelId: string): ArModelConfig {
  const id = modelId.toLowerCase();
  return AR_MODELS.find((m) => m.id.toLowerCase() === id) ?? AR_MODELS[0];
}

export type ArQrTarget = "page" | "usdz";

/**
 * Resolves the public origin used for the AR link:
 * 1. Hardcoded ngrok fallback (prevents localhost errors during active testing).
 * 2. Environment variables (`VITE_PUBLIC_BASE_URL` / `NEXT_PUBLIC_BASE_URL`).
 * 3. `window.location.origin` fallback.
 */
export function getBaseUrl(baseUrl?: string): string {
  // Hardcoded direct override for your active ngrok session
  const ngrokOverride = "https://unremoved-agripina-pensionable.ngrok-free.dev";

  const fromEnv: string | undefined =
    import.meta.env.VITE_PUBLIC_BASE_URL ?? import.meta.env.NEXT_PUBLIC_BASE_URL;
  
  return (baseUrl ?? fromEnv ?? ngrokOverride).replace(/\/+$/, "");
}

/**
 * Builds the shareable URL that a real QR code encodes.
 * If target is "usdz" and the model has a USDZ file, it points directly to the file for iOS AR Quick Look.
 */
export function buildArUrl(modelId: string, baseUrl?: string, target: ArQrTarget = "page"): string {
  const model = getArModel(modelId);
  const base = getBaseUrl(baseUrl);
  
  const envTargetEnv: string | undefined =
    import.meta.env.VITE_AR_QR_TARGET ?? import.meta.env.NEXT_PUBLIC_AR_QR_TARGET;
  const envTarget: ArQrTarget = envTargetEnv === "usdz" ? "usdz" : "page";
  
  const useUsdz = target === "usdz" || envTarget === "usdz";
  
  // If requesting usdz and model has one, serve the raw .usdz file URL directly for iOS
  const url = useUsdz && model.usdz 
    ? `${base}${model.usdz}` 
    : `${base}/ar-view?model=${encodeURIComponent(modelId)}`;

  if (import.meta.env.DEV) {
    console.info(
      `[AR QR] target=${useUsdz && model.usdz ? "USDZ direct (iOS Quick Look)" : "AR viewer page"} → ${url}\n` +
        `Using active tunnel override: ${base}`
    );
  }

  return url;
}