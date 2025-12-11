import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [fontSize, setFontSize] = useState(16);
  const [language, setLanguage] = useState("en");
  const [isDark, setIsDark] = useState(false);
  const { toast } = useToast();

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: language === "gu" ? "સંદેશ મોકલ્યો" : language === "hi" ? "संदेश भेजा गया" : "Message Sent",
      description: language === "gu" 
        ? "તમારો સંદેશ સફળતાપૂર્વક મોકલવામાં આવ્યો છે."
        : language === "hi"
        ? "आपका संदेश सफलतापूर्वक भेज दिया गया है।"
        : "Your message has been sent successfully.",
    });
  };

  const content = {
    en: {
      title: "Contact Us",
      subtitle: "Get in touch with us",
      address: "Address",
      phone: "Phone",
      email: "Email",
      hours: "Office Hours",
      feedback: "Send us Feedback",
      name: "Your Name",
      yourEmail: "Your Email",
      subject: "Subject",
      message: "Message",
      send: "Send Message",
    },
    hi: {
      title: "संपर्क करें",
      subtitle: "हमसे संपर्क करें",
      address: "पता",
      phone: "फोन",
      email: "ईमेल",
      hours: "कार्यालय समय",
      feedback: "हमें प्रतिक्रिया भेजें",
      name: "आपका नाम",
      yourEmail: "आपका ईमेल",
      subject: "विषय",
      message: "संदेश",
      send: "संदेश भेजें",
    },
    gu: {
      title: "અમારો સંપર્ક કરો",
      subtitle: "અમારો સંપર્ક કરો",
      address: "સરનામું",
      phone: "ફોન",
      email: "ઈમેઈલ",
      hours: "ઓફિસ સમય",
      feedback: "અમને પ્રતિસાદ મોકલો",
      name: "તમારું નામ",
      yourEmail: "તમારું ઈમેઈલ",
      subject: "વિષય",
      message: "સંદેશ",
      send: "સંદેશ મોકલો",
    },
  };

  const c = content[language as keyof typeof content] || content.en;

  const offices = [
    {
      name: { en: "Head Office - Gandhinagar", hi: "मुख्य कार्यालय - गांधीनगर", gu: "મુખ્ય કાર્યાલય - ગાંધીનગર" },
      address: "Block 14, New Sachivalaya, Gandhinagar - 382010",
      phone: "+91-79-23252001",
      email: "pccf@gujarat.gov.in",
    },
    {
      name: { en: "Regional Office - Ahmedabad", hi: "क्षेत्रीय कार्यालय - अहमदाबाद", gu: "પ્રાદેશિક કાર્યાલય - અમદાવાદ" },
      address: "Forest Bhavan, Sector 10-A, Gandhinagar",
      phone: "+91-79-23254321",
      email: "rccf.ahmedabad@gujarat.gov.in",
    },
    {
      name: { en: "Wildlife Division - Junagadh", hi: "वन्यजीव प्रभाग - जूनागढ़", gu: "વન્યજીવ વિભાગ - જૂનાગઢ" },
      address: "Gir National Park, Sasan Gir, Junagadh - 362135",
      phone: "+91-2877-285540",
      email: "wildlife.gir@gujarat.gov.in",
    },
  ];

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
            <p className="text-primary-foreground/80 mt-2">{c.subtitle}</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Office Cards */}
            <div className="lg:col-span-2 space-y-6">
              {offices.map((office, index) => (
                <Card key={index}>
                  <CardHeader className="pb-4">
                    <CardTitle className="font-heading text-lg">
                      {office.name[language as keyof typeof office.name] || office.name.en}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <span className="text-muted-foreground">{office.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">{office.email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Mon - Sat: 10:00 AM - 6:00 PM</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Feedback Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading flex items-center gap-2">
                    <Send className="h-5 w-5 text-primary" />
                    {c.feedback}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">{c.name}</Label>
                      <Input id="name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{c.yourEmail}</Label>
                      <Input id="email" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">{c.subject}</Label>
                      <Input id="subject" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">{c.message}</Label>
                      <Textarea id="message" rows={4} required />
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      {c.send}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-12">
            <Card className="overflow-hidden">
              <div className="h-80 bg-muted flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium">Interactive Map</p>
                  <p className="text-sm">Map integration placeholder</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer language={language} visitorCount={125847} />
    </div>
  );
};

export default Contact;
