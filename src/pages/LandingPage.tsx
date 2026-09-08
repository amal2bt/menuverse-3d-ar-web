import { QrCode } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import {
  Seo,
  SoftwareApplicationLd,
  OrganizationLd,
  HowToLd,
} from "../utils/seo";
import Header from "../components/landing/Header";
import Hero from "../components/landing/Hero";
import Industries from "../components/landing/Industries";
import Features from "../components/landing/Features";
import DemoViewer from "../components/landing/DemoViewer";
import HowItWorks from "../components/landing/HowItWorks";
import Testimonials from "../components/landing/Testimonials";
import Pricing from "../components/landing/Pricing";
import Faq from "../components/landing/Faq";
import ContactForm from "../components/landing/ContactForm";

export default function LandingPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#FAF9F6] dark:bg-slate-950 transition-colors">
      <Seo
        title="Menuverse · 3D & AR QR Menü Platformu"
        description="Türkiye'nin 3D & AR QR menü platformu. Sipariş komisyonu %0, 24 saatte kurulum."
        path="/"
      />
      <SoftwareApplicationLd />
      <OrganizationLd />
      <HowToLd />

      <Header />
      <main>
        <Hero />
        <Industries />
        <Features />
        <DemoViewer />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <Faq />
        <ContactForm />
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 px-4 text-center text-sm mt-10">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-7 h-7 rounded-xl bg-[#FF6B00] flex items-center justify-center">
            <QrCode size={14} className="text-white" />
          </div>
          <span className="font-display font-bold text-white text-base">{t("footer.brand")}</span>
        </div>
        <p className="max-w-md mx-auto mb-3 text-xs">{t("footer.tagline")}</p>
        <p className="text-xs">{t("footer.rights")}</p>
      </footer>
    </div>
  );
}
