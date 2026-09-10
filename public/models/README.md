# 3D Menu Models

This folder tracks the local 3D model assets (`.glb` / `.usdz`) used by the
Menuverse landing page and the 3D menu demo.

## Expected Files

The AR system (QR → `/ar-view`) looks up each dish in
`src/components/menu/menuModels.ts`. Pizza is wired to the local `realistic_pizza.glb`;
the iOS USDZ is expected at `finalpizza.usdz` (drop the file here, or update the
`usdz` field in `menuModels.ts`).

| Dish             | GLB (Android/Web)             | USDZ (iOS AR)      |
| ---------------- | ----------------------------- | ------------------ |
| Truffle Pizza    | `realistic_pizza.glb` ✅      | `finalpizza.usdz`  |

## Current State

The interactive demo loads verified-working, hotlinkable, CORS-open placeholder
GLBs from the Polyfork CDN for dishes that do not yet have local assets:

- `https://polyfork.dev/cdn/pizza-slice-ddfb9d.glb`
- `https://polyfork.dev/cdn/hamburger-060fd6.glb`
- `https://polyfork.dev/cdn/fried-egg-bdcd3f.glb` (sushi placeholder)
- `https://polyfork.dev/cdn/bread-loaf-0e0ab5.glb` (risotto placeholder)
- `https://polyfork.dev/cdn/cake-stand-ee7396.glb` (dessert placeholder)

Replace these with your own branded models by placing files in this folder and
updating the `model` / `iosModel` fields.

## Formats

- **GLB** — universal WebGL/Android format, used everywhere by `<model-viewer>`.
- **USDZ** — Apple's AR format, used for iOS "View in AR" (quick-look).

## Recommended Resolution / Sizing

- Models should be centered at the origin and oriented with +Y up.
- Keep files under ~5 MB each for fast first load (use Draco/meshopt compression).
- Serve `.glb` files with `gzip`/`br`.