/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Public origin used to build the AR QR code target (ngrok / deployment URL). */
  readonly VITE_PUBLIC_BASE_URL?: string;
  readonly NEXT_PUBLIC_BASE_URL?: string;
  /** When set to "usdz", the QR code points directly at the USDZ file for iOS Quick Look. */
  readonly NEXT_PUBLIC_AR_QR_TARGET?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
