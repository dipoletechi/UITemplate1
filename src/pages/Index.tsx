import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { NewsTicker } from "@/components/home/NewsTicker";
import { ServicesSection } from "@/components/home/ServicesSection";
import { NewsSection } from "@/components/home/NewsSection";
import { QuickLinksSection } from "@/components/home/QuickLinksSection";
import { GalleryPreview } from "@/components/home/GalleryPreview";

const Index = () => {
  const [fontSize, setFontSize] = useState(16);
  const [language, setLanguage] = useState("en");
  const [isDark, setIsDark] = useState(false);
  const [visitorCount, setVisitorCount] = useState(125847);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    // Simulate visitor count increment
    const stored = localStorage.getItem("gfrf_visitor_count");
    if (stored) {
      setVisitorCount(parseInt(stored) + 1);
    }
    localStorage.setItem("gfrf_visitor_count", visitorCount.toString());
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background font-body">
      <Header
        fontSize={fontSize}
        setFontSize={setFontSize}
        language={language}
        setLanguage={setLanguage}
        isDark={isDark}
        setIsDark={setIsDark}
      />
      
      <main id="main" className="flex-1">
        <NewsTicker language={language} />
        <HeroSection language={language} />
        <QuickLinksSection language={language} />
        <ServicesSection language={language} />
        <NewsSection language={language} />
        <GalleryPreview language={language} />
      </main>

      <Footer language={language} visitorCount={visitorCount} />
    </div>
  );
};

export default Index;
