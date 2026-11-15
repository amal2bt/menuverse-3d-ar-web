import type { TranslationKey } from '../../data/translations';

export type ArModelConfig = {
  id: string;
  number: string;
  name: string;
  nameKey: TranslationKey;
  descKey: TranslationKey;
  categoryNameKey: TranslationKey;
  category: 'main-dishes' | 'desserts' | 'drinks';
  categoryLabel: string;
  desc: string;
  priceTRY: string;
  priceAED: string;
  calories: string;
  /** GLB model URL served by Vite from `public/`. Also drives Android Scene Viewer / WebXR. */
  glb: string;
  /** USDZ model URL used by Apple AR Quick Look on iOS. */
  usdz?: string;
  /** Optional custom background image for the 3D viewer */
  background?: string;
};

export const CATEGORIES = [
  { id: 'main-dishes', nameKey: 'category.mainDishes' as TranslationKey },
  { id: 'desserts', nameKey: 'category.desserts' as TranslationKey },
  { id: 'drinks', nameKey: 'category.drinks' as TranslationKey },
];

const DEFAULT_BACKGROUND = "/images/imagesr.jpg";

export const AR_MODELS: ArModelConfig[] = [
  // --- MAIN DISHES ---
  {
    id: "pizza",
    number: "01",
    category: "main-dishes",
    categoryLabel: "MAIN DISHES",
    name: "Trüf Pizzası",
    nameKey: "dish.pizza.name",
    descKey: "dish.pizza.desc",
    categoryNameKey: "category.mainDishes",
    desc: "El açma hamur, kara kış trüfü, mozzarella di bufala, San Marzano domates.",
    priceTRY: "₺680",
    priceAED: "AED 90",
    calories: "820 kcal",
    glb: "/models/pizza_modern_plate1.glb",
    usdz: "/models/finalpizza.usdz",
    background: DEFAULT_BACKGROUND,
  },
  {
    id: "sushi",
    number: "02",
    category: "main-dishes",
    categoryLabel: "MAIN DISHES",
    name: "Omakase Sushi",
    nameKey: "dish.sushi.name",
    descKey: "dish.sushi.desc",
    categoryNameKey: "category.mainDishes",
    desc: "Şefin seçtiği 8 parça nigiri, mavi yüzgeçli ton, uni, hokkaido tarağı.",
    priceTRY: "₺1.890",
    priceAED: "AED 245",
    calories: "610 kcal",
    glb: "/models/REALISTIC_SUSHI_AR4.glb",
    usdz: "/models/REALISTIC_SUSHI_AR6.usdz",
    background: DEFAULT_BACKGROUND,
  },
  {
    id: "burger",
    number: "03",
    category: "main-dishes",
    categoryLabel: "MAIN DISHES",
    name: "Classic Cheeseburger",
    nameKey: "dish.burger.name",
    descKey: "dish.burger.desc",
    categoryNameKey: "category.mainDishes",
    desc: "Juicy grilled beef patty, melted cheddar, fresh lettuce, tomato, and sesame brioche bun, served with golden fries.",
    priceTRY: "₺590",
    priceAED: "AED 78",
    calories: "940 kcal",
    glb: "/models/burger.glb",
    usdz: "/models/burger.usdz",
    background: DEFAULT_BACKGROUND,
  },
  {
    id: "hotdog",
    number: "04",
    category: "main-dishes",
    categoryLabel: "MAIN DISHES",
    name: "Grilled Hot Dog",
    nameKey: "dish.hotdog.name",
    descKey: "dish.hotdog.desc",
    categoryNameKey: "category.mainDishes",
    desc: "Grilled sausage served in a toasted soft bun with mustard, relish, fresh onions, and ketchup.",
    priceTRY: "₺490",
    priceAED: "AED 65",
    calories: "720 kcal",
    glb: "/models/Realistic_Hotdogs_AR.glb",
    usdz: "/models/Realistic_Hotdogs_AR.usdz",
    background: DEFAULT_BACKGROUND,
  },
  
  // --- DESSERTS ---
  {
    id: "ice-cream",
    number: "01",
    category: "desserts",
    categoryLabel: "DESSERTS",
    name: "Fruits Icecream",
    nameKey: "dish.iceCream.name",
    descKey: "dish.iceCream.desc",
    categoryNameKey: "category.desserts",
    desc: "A5 Japon wagyu, kavurma kömüründe pişirilmiş, brioche ekmek, eski kaşar.",
    priceTRY: "₺1.250",
    priceAED: "AED 165",
    calories: "940 kcal",
    glb: "/models/icecreamfinal.glb",
    usdz: "/models/ice_cream_sundae_AR.usdz",
    background: DEFAULT_BACKGROUND,
  },
  {
    id: "donut",
    number: "02",
    category: "desserts",
    categoryLabel: "DESSERTS",
    name: "Pink Sprinkle Donut",
    nameKey: "dish.donut.name",
    descKey: "dish.donut.desc",
    categoryNameKey: "category.desserts",
    desc: "Taze pişmiş donut, pembe krema ve renkli çıtır şekerlemeler, modern seramik tabakta servis edilir.",
    priceTRY: "₺280",
    priceAED: "AED 37",
    calories: "420 kcal",
    glb: "/models/RealisticDonut_With_Plate.glb",
    usdz: "/models/Realistic_Donut_With_Plate.usdz",
    background: DEFAULT_BACKGROUND,
  },
  {
    id: "cupcake",
    number: "03",
    category: "desserts",
    categoryLabel: "DESSERTS",
    name: "Lavender Vanilla Cupcake",
    nameKey: "dish.cupcake.name",
    descKey: "dish.cupcake.desc",
    categoryNameKey: "category.desserts",
    desc: "Vanilla cupcake with soft lavender buttercream, delicate sugar pearls, and a modern ceramic plate.",
    priceTRY: "₺250",
    priceAED: "AED 33",
    calories: "380 kcal",
    glb: "/models/cupcake2.glb",
    usdz: "/models/vanilla_purple_cupcake_AR.usdz",
    background: DEFAULT_BACKGROUND,
  },
  {
    id: "strawberry-cake",
    number: "04",
    category: "desserts",
    categoryLabel: "DESSERTS",
    name: "Strawberry Cake",
    nameKey: "dish.strawberryCake.name",
    descKey: "dish.strawberryCake.desc",
    categoryNameKey: "category.desserts",
    desc: "Soft pink strawberry cake decorated with fresh red strawberries and served on a white ceramic cake stand.",
    priceTRY: "₺450",
    priceAED: "AED 60",
    calories: "520 kcal",
    glb: "/models/stcake.glb",
    usdz: "/models/stacke.usdz",
    background: DEFAULT_BACKGROUND,
  },

  // --- DRINKS ---
  {
    id: "coffee",
    number: "01",
    category: "drinks",
    categoryLabel: "DRINKS",
    name: "Signature Coffee",
    nameKey: "dish.coffee.name",
    descKey: "dish.coffee.desc",
    categoryNameKey: "category.drinks",
    desc: "Freshly brewed specialty coffee, served in a handcrafted ceramic cup.",
    priceTRY: "₺180",
    priceAED: "AED 24",
    calories: "5 kcal",
    glb: "/models/Coffee_Cup_AR.glb",
    usdz: "/models/Coffee_Cup_AR.usdz",
    background: DEFAULT_BACKGROUND,
  },
  {
    id: "orange-juice",
    number: "02",
    category: "drinks",
    categoryLabel: "DRINKS",
    name: "Fresh Orange Juice",
    nameKey: "dish.orangeJuice.name",
    descKey: "dish.orangeJuice.desc",
    categoryNameKey: "category.drinks",
    desc: "Freshly squeezed orange juice served in a tall glass with an orange slice and a white straw.",
    priceTRY: "₺160",
    priceAED: "AED 21",
    calories: "112 kcal",
    glb: "/models/orangejuice.glb",
    usdz: "/models/orangejuice.usdz",
    background: DEFAULT_BACKGROUND,
  },
  {
    id: "mint-tea",
    number: "03",
    category: "drinks",
    categoryLabel: "DRINKS",
    name: "Fresh Mint Tea",
    nameKey: "dish.mintTea.name",
    descKey: "dish.mintTea.desc",
    categoryNameKey: "category.drinks",
    desc: "Warm amber tea served in an opaque ceramic cup with a modern saucer and fresh mint leaves.",
    priceTRY: "₺150",
    priceAED: "AED 20",
    calories: "2 kcal",
    glb: "/models/tea1.glb",
    usdz: "/models/tea.usdz",
    background: DEFAULT_BACKGROUND,
  },
  {
    id: "strawberry-juice",
    number: "04",
    category: "drinks",
    categoryLabel: "DRINKS",
    name: "Fresh Strawberry Juice",
    nameKey: "dish.strawberryJuice.name",
    descKey: "dish.strawberryJuice.desc",
    categoryNameKey: "category.drinks",
    desc: "Refreshing strawberry juice served in a rounded glass with a pink-striped straw and fresh strawberry garnish.",
    priceTRY: "₺180",
    priceAED: "AED 24",
    calories: "140 kcal",
    glb: "/models/strawberryjuice.glb",
    usdz: "/models/strawberryjuice.usdz",
    background: DEFAULT_BACKGROUND,
  },
];

export function getArModel(modelId: string): ArModelConfig {
  const id = modelId.toLowerCase();
  const found = AR_MODELS.find((m) => m.id.toLowerCase() === id) ?? AR_MODELS[0];
  
  return {
    ...found,
    background: found.background || DEFAULT_BACKGROUND,
  };
}

export type ArQrTarget = "page" | "usdz";

export function getBaseUrl(baseUrl?: string): string {
  const ngrokOverride = "https://unremoved-agripina-pensionable.ngrok-free.dev";
  return (baseUrl ?? ngrokOverride).replace(/\/+$/, "");
}

export function buildArUrl(modelId: string, baseUrl?: string, target: ArQrTarget = "page"): string {
  const model = getArModel(modelId);
  const base = getBaseUrl(baseUrl);
  
  const envTargetEnv: string | undefined =
    import.meta.env.VITE_AR_QR_TARGET ?? import.meta.env.NEXT_PUBLIC_AR_QR_TARGET;
  const envTarget: ArQrTarget = envTargetEnv === "usdz" ? "usdz" : "page";
  
  const useUsdz = target === "usdz" || envTarget === "usdz";
  
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