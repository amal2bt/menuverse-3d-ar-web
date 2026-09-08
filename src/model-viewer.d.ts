import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        alt?: string;
        "ios-src"?: string;
        "camera-controls"?: boolean | "auto";
        "auto-rotate"?: boolean | "auto";
        ar?: boolean;
        "ar-modes"?: string;
        "shadow-intensity"?: string;
        exposure?: string;
        "environment-image"?: string;
        "auto-rotate-delay"?: string;
        "rotation-per-second"?: string;
        "ar-modes"?: string;
        loading?: string;
        reveal?: string;
        poster?: string;
        onError?: (event: Event) => void;
        onLoad?: (event: Event) => void;
      };
    }
  }
}
