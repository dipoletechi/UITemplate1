import { Download, FileText, Users, HelpCircle, MapPin, Book } from "lucide-react";
import { Link } from "react-router-dom";

interface QuickLinksSectionProps {
  language: string;
}

export function QuickLinksSection({ language }: QuickLinksSectionProps) {
  const quickLinks = [
    {
      icon: Download,
      title: { en: "Downloads", hi: "डाउनलोड", gu: "ડાઉનલોડ્સ" },
      description: { en: "Forms, Reports & Documents", hi: "फॉर्म, रिपोर्ट और दस्तावेज", gu: "ફોર્મ્સ, રિપોર્ટ્સ અને દસ્તાવેજો" },
      link: "/downloads",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: FileText,
      title: { en: "RTI", hi: "आरटीआई", gu: "RTI" },
      description: { en: "Right to Information", hi: "सूचना का अधिकार", gu: "માહિતી અધિકાર" },
      link: "/rti",
      color: "bg-secondary/20 text-secondary",
    },
    {
      icon: Users,
      title: { en: "Directory", hi: "निर्देशिका", gu: "ડિરેક્ટરી" },
      description: { en: "Officer Contacts", hi: "अधिकारी संपर्क", gu: "અધિકારી સંપર્કો" },
      link: "/about/officers",
      color: "bg-gold/20 text-gold-dark",
    },
    {
      icon: HelpCircle,
      title: { en: "FAQs", hi: "सामान्य प्रश्न", gu: "વારંવાર પૂછાતા પ્રશ્નો" },
      description: { en: "Common Questions", hi: "सामान्य प्रश्न", gu: "સામાન્ય પ્રશ્નો" },
      link: "/faq",
      color: "bg-earth/20 text-earth",
    },
    {
      icon: MapPin,
      title: { en: "Locate Office", hi: "कार्यालय खोजें", gu: "કાર્યાલય શોધો" },
      description: { en: "Find Nearest Office", hi: "नजदीकी कार्यालय खोजें", gu: "નજીકની ઓફિસ શોધો" },
      link: "/contact",
      color: "bg-destructive/10 text-destructive",
    },
    {
      icon: Book,
      title: { en: "Publications", hi: "प्रकाशन", gu: "પ્રકાશનો" },
      description: { en: "Research & Reports", hi: "अनुसंधान और रिपोर्ट", gu: "સંશોધન અને અહેવાલો" },
      link: "/publications",
      color: "bg-forest-light/20 text-forest-dark",
    },
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-2xl font-bold text-center text-foreground mb-8">
          {language === "gu" ? "ઝડપી ઍક્સેસ" : language === "hi" ? "त्वरित पहुंच" : "Quick Access"}
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickLinks.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="group p-4 bg-card rounded-lg border border-border hover:shadow-elevated hover:border-primary/30 transition-all duration-300 text-center"
            >
              <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1">
                {item.title[language as keyof typeof item.title] || item.title.en}
              </h3>
              <p className="text-xs text-muted-foreground">
                {item.description[language as keyof typeof item.description] || item.description.en}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
