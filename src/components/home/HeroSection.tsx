import { ArrowRight, FileText, Phone, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroForest from "@/assets/hero-forest.jpg";

interface HeroSectionProps {
  language: string;
}

export function HeroSection({ language }: HeroSectionProps) {
  const heroContent = {
    en: {
      title: "Gujarat Forestry Research Foundation",
      subtitle: "Preserving Nature, Nurturing Future",
      description: "Dedicated to forest conservation, research, and sustainable development across Gujarat. Together, we protect our natural heritage for generations to come.",
      cta1: "Explore Our Work",
      cta2: "File Grievance",
    },
    hi: {
      title: "गुजरात वन अनुसंधान फाउंडेशन",
      subtitle: "प्रकृति का संरक्षण, भविष्य का पोषण",
      description: "गुजरात भर में वन संरक्षण, अनुसंधान और सतत विकास के लिए समर्पित। हम मिलकर आने वाली पीढ़ियों के लिए अपनी प्राकृतिक विरासत की रक्षा करते हैं।",
      cta1: "हमारा कार्य देखें",
      cta2: "शिकायत दर्ज करें",
    },
    gu: {
      title: "ગુજરાત વન સંશોધન ફાઉન્ડેશન",
      subtitle: "પ્રકૃતિનું જતન, ભવિષ્યનું પોષણ",
      description: "ગુજરાતભરમાં વન સંરક્ષણ, સંશોધન અને ટકાઉ વિકાસ માટે સમર્પિત. અમે સાથે મળીને આવનારી પેઢીઓ માટે આપણા કુદરતી વારસાનું રક્ષણ કરીએ છીએ.",
      cta1: "અમારું કાર્ય જુઓ",
      cta2: "ફરિયાદ નોંધાવો",
    },
  };

  const content = heroContent[language as keyof typeof heroContent] || heroContent.en;

  const stats = [
    { icon: Users, value: "2.5M+", label: language === "gu" ? "લાભાર્થીઓ" : language === "hi" ? "लाभार्थी" : "Beneficiaries" },
    { icon: FileText, value: "500+", label: language === "gu" ? "પ્રોજેક્ટ્સ" : language === "hi" ? "परियोजनाएं" : "Projects" },
    { icon: Phone, value: "24/7", label: language === "gu" ? "સપોર્ટ" : language === "hi" ? "सहायता" : "Support" },
  ];

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroForest})` }}
      >
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-3xl animate-slide-up">
          <div className="inline-block bg-gold/20 text-gold px-4 py-1 rounded-full text-sm font-medium mb-6">
            {language === "gu" ? "ગુજરાત સરકાર" : language === "hi" ? "गुजरात सरकार" : "Government of Gujarat"}
          </div>
          
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
            {content.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-gold font-heading mb-6">
            {content.subtitle}
          </p>
          
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl">
            {content.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gold text-foreground hover:bg-gold-dark font-semibold px-8"
            >
              <Link to="/about/vision-mission">
                {content.cta1}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 bg-transparent"
            >
              <Link to="/grievance">{content.cta2}</Link>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="absolute bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-3 gap-8">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="text-center">
                  <div className="flex justify-center mb-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-primary font-heading">{value}</p>
                  <p className="text-sm text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
