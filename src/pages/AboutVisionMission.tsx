import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, TreePine } from "lucide-react";

const AboutVisionMission = () => {
  const [fontSize, setFontSize] = useState(16);
  const [language, setLanguage] = useState("en");
  const [isDark, setIsDark] = useState(false);

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

  const content = {
    en: {
      title: "Vision & Mission",
      vision: "Vision",
      visionText: "To be a leading organization in forest conservation, sustainable management, and research, ensuring the preservation of Gujarat's rich biodiversity for future generations.",
      mission: "Mission",
      missionText: "To protect, conserve, and sustainably manage the forest resources of Gujarat through scientific research, community participation, and innovative practices while ensuring ecological balance and socio-economic development of forest-dependent communities.",
      objectives: "Key Objectives",
      objectivesList: [
        "Protect and conserve forest biodiversity across Gujarat",
        "Promote sustainable forest management practices",
        "Conduct scientific research for forest conservation",
        "Engage local communities in conservation efforts",
        "Develop policies for wildlife protection",
        "Combat climate change through afforestation",
      ],
      values: "Core Values",
      valuesList: [
        { icon: TreePine, title: "Conservation", desc: "Protecting natural heritage" },
        { icon: Target, title: "Sustainability", desc: "Long-term ecological balance" },
        { icon: Eye, title: "Transparency", desc: "Open and accountable governance" },
        { icon: Award, title: "Excellence", desc: "Highest standards in service" },
      ],
    },
    hi: {
      title: "दृष्टि और मिशन",
      vision: "दृष्टि",
      visionText: "वन संरक्षण, सतत प्रबंधन और अनुसंधान में अग्रणी संगठन बनना, जो आने वाली पीढ़ियों के लिए गुजरात की समृद्ध जैव विविधता के संरक्षण को सुनिश्चित करे।",
      mission: "मिशन",
      missionText: "वैज्ञानिक अनुसंधान, सामुदायिक भागीदारी और नवीन प्रथाओं के माध्यम से गुजरात के वन संसाधनों की सुरक्षा, संरक्षण और सतत प्रबंधन करना, साथ ही वन-निर्भर समुदायों के पारिस्थितिक संतुलन और सामाजिक-आर्थिक विकास को सुनिश्चित करना।",
      objectives: "मुख्य उद्देश्य",
      objectivesList: [
        "गुजरात भर में वन जैव विविधता की रक्षा और संरक्षण",
        "सतत वन प्रबंधन प्रथाओं को बढ़ावा देना",
        "वन संरक्षण के लिए वैज्ञानिक अनुसंधान करना",
        "संरक्षण प्रयासों में स्थानीय समुदायों को शामिल करना",
        "वन्यजीव संरक्षण के लिए नीतियां विकसित करना",
        "वनीकरण के माध्यम से जलवायु परिवर्तन का मुकाबला",
      ],
      values: "मूल मूल्य",
      valuesList: [
        { icon: TreePine, title: "संरक्षण", desc: "प्राकृतिक विरासत की रक्षा" },
        { icon: Target, title: "स्थिरता", desc: "दीर्घकालिक पारिस्थितिक संतुलन" },
        { icon: Eye, title: "पारदर्शिता", desc: "खुला और जवाबदेह शासन" },
        { icon: Award, title: "उत्कृष्टता", desc: "सेवा में उच्चतम मानक" },
      ],
    },
    gu: {
      title: "દ્રષ્ટિ અને મિશન",
      vision: "દ્રષ્ટિ",
      visionText: "વન સંરક્ષણ, ટકાઉ વ્યવસ્થાપન અને સંશોધનમાં અગ્રણી સંસ્થા બનવું, જે ભાવિ પેઢીઓ માટે ગુજરાતની સમૃદ્ધ જૈવવિવિધતાના સંરક્ષણને સુનિશ્ચિત કરે.",
      mission: "મિશન",
      missionText: "વૈજ્ઞાનિક સંશોધન, સમુદાય ભાગીદારી અને નવીન પ્રથાઓ દ્વારા ગુજરાતના વન સંસાધનોનું રક્ષણ, સંરક્ષણ અને ટકાઉ વ્યવસ્થાપન કરવું, સાથે સાથે વન-આધારિત સમુદાયોના પર્યાવરણીય સંતુલન અને સામાજિક-આર્થિક વિકાસને સુનિશ્ચિત કરવું.",
      objectives: "મુખ્ય ઉદ્દેશ્યો",
      objectivesList: [
        "ગુજરાતભરમાં વન જૈવવિવિધતાનું રક્ષણ અને સંરક્ષણ",
        "ટકાઉ વન વ્યવસ્થાપન પ્રથાઓને પ્રોત્સાહન આપવું",
        "વન સંરક્ષણ માટે વૈજ્ઞાનિક સંશોધન કરવું",
        "સંરક્ષણ પ્રયાસોમાં સ્થાનિક સમુદાયોને જોડવા",
        "વન્યજીવ સંરક્ષણ માટે નીતિઓ વિકસાવવી",
        "વનીકરણ દ્વારા આબોહવા પરિવર્તનનો સામનો",
      ],
      values: "મુખ્ય મૂલ્યો",
      valuesList: [
        { icon: TreePine, title: "સંરક્ષણ", desc: "કુદરતી વારસાનું રક્ષણ" },
        { icon: Target, title: "ટકાઉપણું", desc: "લાંબા ગાળાનું પર્યાવરણીય સંતુલન" },
        { icon: Eye, title: "પારદર્શિતા", desc: "ખુલ્લું અને જવાબદાર શાસન" },
        { icon: Award, title: "શ્રેષ્ઠતા", desc: "સેવામાં ઉચ્ચતમ ધોરણો" },
      ],
    },
  };

  const c = content[language as keyof typeof content] || content.en;

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
        {/* Page Header */}
        <div className="bg-forest-dark text-primary-foreground py-12">
          <div className="container mx-auto px-4">
            <Breadcrumb className="mb-4">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="text-primary-foreground/70 hover:text-gold">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-primary-foreground/50" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-gold">{c.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h1 className="font-heading text-3xl md:text-4xl font-bold">{c.title}</h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Vision */}
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-foreground">{c.vision}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">{c.visionText}</p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="border-l-4 border-l-gold">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                    <Target className="h-6 w-6 text-gold-dark" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-foreground">{c.mission}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">{c.missionText}</p>
              </CardContent>
            </Card>
          </div>

          {/* Objectives */}
          <div className="mb-12">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">{c.objectives}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {c.objectivesList.map((objective, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center shrink-0 font-bold">
                    {index + 1}
                  </div>
                  <p className="text-foreground">{objective}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Values */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">{c.values}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {c.valuesList.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer language={language} visitorCount={125847} />
    </div>
  );
};

export default AboutVisionMission;
