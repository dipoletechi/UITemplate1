import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
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

  const faqs = [
    {
      question: { en: "How can I apply for tree felling permission?", hi: "पेड़ काटने की अनुमति के लिए कैसे आवेदन करें?", gu: "વૃક્ષ કાપવાની પરવાનગી માટે કેવી રીતે અરજી કરવી?" },
      answer: { en: "You can apply for tree felling permission through our online portal or by visiting the nearest Forest Division office. Required documents include land ownership proof, reason for felling, and photographs of the trees.", hi: "आप हमारे ऑनलाइन पोर्टल के माध्यम से या निकटतम वन प्रभाग कार्यालय में जाकर पेड़ काटने की अनुमति के लिए आवेदन कर सकते हैं।", gu: "તમે અમારા ઓનલાઈન પોર્ટલ દ્વારા અથવા નજીકના વન વિભાગની ઓફિસમાં જઈને વૃક્ષ કાપવાની પરવાનગી માટે અરજી કરી શકો છો." },
    },
    {
      question: { en: "What should I do if I encounter wildlife in my area?", hi: "यदि मेरे क्षेत्र में वन्यजीव दिखाई दे तो क्या करें?", gu: "મારા વિસ્તારમાં વન્યજીવ જોવા મળે તો શું કરવું?" },
      answer: { en: "Contact the Forest Department helpline immediately at 1800-XXX-XXXX. Do not approach or provoke the animal. Keep a safe distance and guide others to stay away.", hi: "तुरंत वन विभाग हेल्पलाइन 1800-XXX-XXXX पर संपर्क करें। जानवर के पास न जाएं।", gu: "તુરંત વન વિભાગ હેલ્પલાઈન 1800-XXX-XXXX પર સંપર્ક કરો. પ્રાણીની નજીક ન જાઓ." },
    },
    {
      question: { en: "How can I participate in tree plantation drives?", hi: "वृक्षारोपण अभियान में कैसे भाग लें?", gu: "વૃક્ષારોપણ અભિયાનમાં કેવી રીતે ભાગ લેવો?" },
      answer: { en: "Register on our website or contact your local forest office. We organize plantation drives throughout the year, especially during monsoon season.", hi: "हमारी वेबसाइट पर पंजीकरण करें या अपने स्थानीय वन कार्यालय से संपर्क करें।", gu: "અમારી વેબસાઈટ પર નોંધણી કરો અથવા તમારી સ્થાનિક વન ઓફિસનો સંપર્ક કરો." },
    },
    {
      question: { en: "How to report illegal logging or forest encroachment?", hi: "अवैध कटाई या वन अतिक्रमण की रिपोर्ट कैसे करें?", gu: "ગેરકાયદે વૃક્ષ કાપણી અથવા વન અતિક્રમણની જાણ કેવી રીતે કરવી?" },
      answer: { en: "You can file a grievance through our online Grievance Management System or call our toll-free number. Anonymous complaints are also accepted.", hi: "आप हमारी ऑनलाइन शिकायत प्रबंधन प्रणाली के माध्यम से शिकायत दर्ज कर सकते हैं।", gu: "તમે અમારી ઓનલાઈન ફરિયાદ વ્યવસ્થાપન સિસ્ટમ દ્વારા ફરિયાદ નોંધાવી શકો છો." },
    },
    {
      question: { en: "What are the timings for visiting Gir National Park?", hi: "गिर राष्ट्रीय उद्यान जाने का समय क्या है?", gu: "ગીર રાષ્ટ્રીય ઉદ્યાનની મુલાકાત માટે સમય શું છે?" },
      answer: { en: "Gir National Park is open from mid-October to mid-June. Safari timings are 6:00 AM - 9:00 AM and 3:00 PM - 6:00 PM. Online booking is available on the official portal.", hi: "गिर राष्ट्रीय उद्यान मध्य अक्टूबर से मध्य जून तक खुला रहता है।", gu: "ગીર રાષ્ટ્રીય ઉદ્યાન મધ્ય ઓક્ટોબરથી મધ્ય જૂન સુધી ખુલ્લું રહે છે." },
    },
    {
      question: { en: "How to apply for compensation for crop damage by wildlife?", hi: "वन्यजीवों द्वारा फसल नुकसान के मुआवजे के लिए कैसे आवेदन करें?", gu: "વન્યજીવો દ્વારા પાક નુકસાન માટે વળતર માટે કેવી રીતે અરજી કરવી?" },
      answer: { en: "Submit an application to the nearest Range Forest Officer within 48 hours of the incident with photographs and land records. Our team will conduct a survey and process the compensation.", hi: "घटना के 48 घंटे के भीतर निकटतम रेंज वन अधिकारी को आवेदन जमा करें।", gu: "ઘટનાના 48 કલાકની અંદર નજીકના રેન્જ ફોરેસ્ટ ઓફિસરને અરજી સબમિટ કરો." },
    },
  ];

  const content = {
    en: { title: "Frequently Asked Questions", subtitle: "Find answers to common questions" },
    hi: { title: "अक्सर पूछे जाने वाले प्रश्न", subtitle: "सामान्य प्रश्नों के उत्तर खोजें" },
    gu: { title: "વારંવાર પૂછાતા પ્રશ્નો", subtitle: "સામાન્ય પ્રશ્નોના જવાબો શોધો" },
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
            <p className="text-primary-foreground/80 mt-2">{c.subtitle}</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <HelpCircle className="h-6 w-6 text-primary" />
              </div>
              <p className="text-muted-foreground">
                {language === "gu" ? "નીચેના પ્રશ્નો પર ક્લિક કરો વિગતવાર જવાબ જોવા માટે" : language === "hi" ? "विस्तृत उत्तर देखने के लिए नीचे दिए गए प्रश्नों पर क्लिक करें" : "Click on the questions below to see detailed answers"}
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                  <AccordionTrigger className="hover:no-underline text-left font-medium">
                    {faq.question[language as keyof typeof faq.question] || faq.question.en}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer[language as keyof typeof faq.answer] || faq.answer.en}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </main>

      <Footer language={language} visitorCount={125847} />
    </div>
  );
};

export default FAQ;
