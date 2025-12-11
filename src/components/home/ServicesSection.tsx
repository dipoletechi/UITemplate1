import { TreePine, FileSearch, Users, Shield, Award, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ServicesSectionProps {
  language: string;
}

export function ServicesSection({ language }: ServicesSectionProps) {
  const services = [
    {
      icon: TreePine,
      title: { en: "Forest Conservation", hi: "वन संरक्षण", gu: "વન સંરક્ષણ" },
      description: {
        en: "Protection and preservation of forest resources across Gujarat",
        hi: "गुजरात भर में वन संसाधनों की सुरक्षा और संरक्षण",
        gu: "ગુજરાતભરમાં વન સંસાધનોનું રક્ષણ અને જાળવણી",
      },
      link: "/about/functions",
    },
    {
      icon: FileSearch,
      title: { en: "Research & Development", hi: "अनुसंधान एवं विकास", gu: "સંશોધન અને વિકાસ" },
      description: {
        en: "Scientific research for sustainable forest management",
        hi: "सतत वन प्रबंधन के लिए वैज्ञानिक अनुसंधान",
        gu: "ટકાઉ વન વ્યવસ્થાપન માટે વૈજ્ઞાનિક સંશોધન",
      },
      link: "/about/functions",
    },
    {
      icon: Users,
      title: { en: "Community Programs", hi: "सामुदायिक कार्यक्रम", gu: "સમુદાય કાર્યક્રમો" },
      description: {
        en: "Engaging local communities in forest conservation",
        hi: "वन संरक्षण में स्थानीय समुदायों को शामिल करना",
        gu: "વન સંરક્ષણમાં સ્થાનિક સમુદાયોને જોડવા",
      },
      link: "/about/functions",
    },
    {
      icon: Shield,
      title: { en: "Wildlife Protection", hi: "वन्यजीव संरक्षण", gu: "વન્યજીવ સંરક્ષણ" },
      description: {
        en: "Safeguarding wildlife habitats and biodiversity",
        hi: "वन्यजीव आवासों और जैव विविधता की सुरक्षा",
        gu: "વન્યજીવ વસવાટો અને જૈવવિવિધતાનું રક્ષણ",
      },
      link: "/about/functions",
    },
    {
      icon: Award,
      title: { en: "Training & Capacity", hi: "प्रशिक्षण एवं क्षमता", gu: "તાલીમ અને ક્ષમતા" },
      description: {
        en: "Building expertise in forest management",
        hi: "वन प्रबंधन में विशेषज्ञता का निर्माण",
        gu: "વન વ્યવસ્થાપનમાં કુશળતા નિર્માણ",
      },
      link: "/about/functions",
    },
    {
      icon: Phone,
      title: { en: "Grievance Redressal", hi: "शिकायत निवारण", gu: "ફરિયાદ નિવારણ" },
      description: {
        en: "Quick resolution of citizen grievances",
        hi: "नागरिक शिकायतों का त्वरित निवारण",
        gu: "નાગરિક ફરિયાદોનું ઝડપી નિવારણ",
      },
      link: "/grievance",
    },
  ];

  const sectionTitle = {
    en: "Our Services",
    hi: "हमारी सेवाएं",
    gu: "અમારી સેવાઓ",
  };

  const sectionSubtitle = {
    en: "Comprehensive services for forest conservation and citizen welfare",
    hi: "वन संरक्षण और नागरिक कल्याण के लिए व्यापक सेवाएं",
    gu: "વન સંરક્ષણ અને નાગરિક કલ્યાણ માટે વ્યાપક સેવાઓ",
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            {sectionTitle[language as keyof typeof sectionTitle] || sectionTitle.en}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {sectionSubtitle[language as keyof typeof sectionSubtitle] || sectionSubtitle.en}
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link to={service.link} key={index}>
              <Card className="h-full hover:shadow-elevated transition-all duration-300 border-border hover:border-primary/30 group">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="font-heading text-xl text-foreground group-hover:text-primary transition-colors">
                    {service.title[language as keyof typeof service.title] || service.title.en}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {service.description[language as keyof typeof service.description] || service.description.en}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
