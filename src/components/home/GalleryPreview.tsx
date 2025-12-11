import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface GalleryPreviewProps {
  language: string;
}

export function GalleryPreview({ language }: GalleryPreviewProps) {
  const galleryItems = [
    {
      type: "image",
      title: { en: "Gir Forest", hi: "गिर वन", gu: "ગીર વન" },
      url: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=400&h=300&fit=crop",
    },
    {
      type: "image",
      title: { en: "Wildlife", hi: "वन्यजीव", gu: "વન્યજીવ" },
      url: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=300&fit=crop",
    },
    {
      type: "image",
      title: { en: "Conservation", hi: "संरक्षण", gu: "સંરક્ષણ" },
      url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop",
    },
    {
      type: "video",
      title: { en: "Documentary", hi: "वृत्तचित्र", gu: "ડોક્યુમેન્ટરી" },
      url: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=300&fit=crop",
    },
  ];

  return (
    <section className="py-16 bg-forest-dark text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2">
              {language === "gu" ? "મીડિયા ગેલેરી" : language === "hi" ? "मीडिया गैलरी" : "Media Gallery"}
            </h2>
            <p className="text-primary-foreground/70">
              {language === "gu" 
                ? "અમારી વન સંરક્ષણ પ્રવૃત્તિઓની ઝલક" 
                : language === "hi" 
                ? "हमारी वन संरक्षण गतिविधियों की झलक" 
                : "A glimpse of our forest conservation activities"}
            </p>
          </div>
          <Button variant="outline" asChild className="hidden md:flex border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
            <Link to="/gallery">
              {language === "gu" ? "બધા જુઓ" : language === "hi" ? "सभी देखें" : "View All"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
            >
              <img
                src={item.url}
                alt={item.title.en}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-gold/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="h-5 w-5 text-foreground fill-foreground ml-1" />
                  </div>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform">
                <p className="text-sm font-medium text-primary-foreground">
                  {item.title[language as keyof typeof item.title] || item.title.en}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden mt-6 text-center">
          <Button variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
            <Link to="/gallery">
              {language === "gu" ? "બધા જુઓ" : language === "hi" ? "सभी देखें" : "View All"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
