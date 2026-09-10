import { useMemo } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import ARViewerPage from "./components/menu/ARViewerPage";
import LandingPage from "./pages/LandingPage";

export default function App() {
  const isArView = useMemo(() => {
    if (typeof window === "undefined") return false;
    return new URL(window.location.href).pathname.endsWith("/ar-view");
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        {isArView ? <ARViewerPage /> : <LandingPage />}
      </LanguageProvider>
    </ThemeProvider>
  );
}
