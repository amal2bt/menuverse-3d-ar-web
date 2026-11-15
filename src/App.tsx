import { useMemo } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import ARViewerPage from "./components/menu/ARViewerPage";
import AdminLogin from "./components/AdminLogin"; // Ensure this matches your file path (e.g. ./components/AdminLogin or similar)
import LandingPage from "./pages/LandingPage";

export default function App() {
  const currentPath = useMemo(() => {
    if (typeof window === "undefined") return "/";
    return new URL(window.location.href).pathname;
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        {currentPath.endsWith("/ar-view") ? (
          <ARViewerPage />
        ) : currentPath.endsWith("/admin") ? (
          <AdminLogin />
        ) : (
          <LandingPage />
        )}
      </LanguageProvider>
    </ThemeProvider>
  );
}