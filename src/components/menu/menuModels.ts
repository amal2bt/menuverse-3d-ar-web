export type ArModelConfig = {
  id: string;
  name: string;
  /** GLB model URL served by Vite from `public/models/`. Also drives Android Scene Viewer / WebXR. */
  glb: string;
  /** USDZ model URL used by Apple AR Quick Look on iOS. */
  usdz?: string;
};

export const AR_MODELS: ArModelConfig[] = [
  {
    id: "pizza",
    name: "Truffle Pizza",
    glb: "/dist/models/pizza_modern_plate1.glb",
    usdz: "/models/finalpizza.usdz",
  },
  {
    id: "burger",
    name: "Smash Burger",
    glb: "https://polyfork.dev/cdn/hamburger-060fd6.glb",
  },
  {
    id: "sushi",
    name: "Omakase Sushi",
    glb: "/dist/models/REALISTIC_SUSHI_AR3.glb",
  },
  {
    id: "cupcake",
    name: "Cupcake",
    glb: "https://polyfork.dev/cdn/bread-loaf-0e0ab5.glb",
  },
  {
    id: "donut",
    name: "Donut",
    glb: "https://polyfork.dev/cdn/fried-egg-bdcd3f.glb",
  },
  {
    id: "cake",
    name: "Lava Cake",
    glb: "https://polyfork.dev/cdn/cake-stand-ee7396.glb",
  },
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
 */
export function buildArUrl(modelId: string, baseUrl?: string, target: ArQrTarget = "page"): string {
  const model = getArModel(modelId);
  const base = getBaseUrl(baseUrl);
  
  const envTargetEnv: string | undefined =
    import.meta.env.VITE_AR_QR_TARGET ?? import.meta.env.NEXT_PUBLIC_AR_QR_TARGET;
  const envTarget: ArQrTarget = envTargetEnv === "usdz" ? "usdz" : "page";
  
  const useUsdz = target === "usdz" || envTarget === "usdz";
  const url = useUsdz && model.usdz ? `${base}${model.usdz}` : `${base}/ar-view?model=${encodeURIComponent(modelId)}`;

  if (import.meta.env.DEV) {
    console.info(
      `[AR QR] target=${useUsdz ? "USDZ direct (iOS Quick Look)" : "AR viewer page"} → ${url}\n` +
        `Using active tunnel override: ${base}`
    );
  }

  return url;
}