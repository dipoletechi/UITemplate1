import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Search, AlertCircle, CheckCircle, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Grievance = () => {
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
      title: language === "gu" ? "ફરિયાદ નોંધાઈ" : language === "hi" ? "शिकायत दर्ज" : "Grievance Submitted",
      description: language === "gu" 
        ? "તમારી ફરિયાદ સફળતાપૂર્વક નોંધાઈ છે. રેફરન્સ નંબર: GRV2024001234"
        : language === "hi"
        ? "आपकी शिकायत सफलतापूर्वक दर्ज हो गई है। संदर्भ संख्या: GRV2024001234"
        : "Your grievance has been successfully registered. Reference No: GRV2024001234",
    });
  };

  const content = {
    en: {
      title: "Grievance Management System",
      subtitle: "Submit and track your grievances online",
      newGrievance: "New Grievance",
      trackGrievance: "Track Grievance",
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      district: "District",
      category: "Grievance Category",
      subject: "Subject",
      description: "Description",
      attachments: "Attachments (if any)",
      submit: "Submit Grievance",
      referenceNo: "Reference Number",
      track: "Track",
      categories: ["Forest Encroachment", "Wildlife Conflict", "Illegal Logging", "Environmental Pollution", "Tree Felling Permission", "Other"],
      districts: ["Ahmedabad", "Gandhinagar", "Vadodara", "Surat", "Rajkot", "Kutch", "Junagadh", "Other"],
    },
    hi: {
      title: "शिकायत प्रबंधन प्रणाली",
      subtitle: "ऑनलाइन शिकायत दर्ज करें और ट्रैक करें",
      newGrievance: "नई शिकायत",
      trackGrievance: "शिकायत ट्रैक करें",
      name: "पूरा नाम",
      email: "ईमेल पता",
      phone: "फोन नंबर",
      district: "जिला",
      category: "शिकायत श्रेणी",
      subject: "विषय",
      description: "विवरण",
      attachments: "संलग्नक (यदि कोई हो)",
      submit: "शिकायत दर्ज करें",
      referenceNo: "संदर्भ संख्या",
      track: "ट्रैक करें",
      categories: ["वन अतिक्रमण", "वन्यजीव संघर्ष", "अवैध कटाई", "पर्यावरण प्रदूषण", "वृक्ष कटाई अनुमति", "अन्य"],
      districts: ["अहमदाबाद", "गांधीनगर", "वडोदरा", "सूरत", "राजकोट", "कच्छ", "जूनागढ़", "अन्य"],
    },
    gu: {
      title: "ફરિયાદ વ્યવસ્થાપન સિસ્ટમ",
      subtitle: "ઓનલાઈન ફરિયાદ નોંધાવો અને ટ્રેક કરો",
      newGrievance: "નવી ફરિયાદ",
      trackGrievance: "ફરિયાદ ટ્રેક કરો",
      name: "પૂરું નામ",
      email: "ઈમેઈલ સરનામું",
      phone: "ફોન નંબર",
      district: "જિલ્લો",
      category: "ફરિયાદ શ્રેણી",
      subject: "વિષય",
      description: "વર્ણન",
      attachments: "જોડાણો (જો કોઈ હોય)",
      submit: "ફરિયાદ નોંધાવો",
      referenceNo: "સંદર્ભ નંબર",
      track: "ટ્રેક કરો",
      categories: ["વન અતિક્રમણ", "વન્યજીવ સંઘર્ષ", "ગેરકાયદે વૃક્ષ કાપણી", "પર્યાવરણ પ્રદૂષણ", "વૃક્ષ કાપણી પરવાનગી", "અન્ય"],
      districts: ["અમદાવાદ", "ગાંધીનગર", "વડોદરા", "સુરત", "રાજકોટ", "કચ્છ", "જૂનાગઢ", "અન્ય"],
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
            <p className="text-primary-foreground/80 mt-2">{c.subtitle}</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Status Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border-l-4 border-l-gold">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-gold-dark" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">24-48 hrs</p>
                  <p className="text-sm text-muted-foreground">Avg. Response Time</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">95%</p>
                  <p className="text-sm text-muted-foreground">Resolution Rate</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-secondary">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                  <FileText className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">1,250+</p>
                  <p className="text-sm text-muted-foreground">Resolved This Year</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="new" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
              <TabsTrigger value="new" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                {c.newGrievance}
              </TabsTrigger>
              <TabsTrigger value="track" className="flex items-center gap-2">
                <Search className="h-4 w-4" />
                {c.trackGrievance}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="new">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-primary" />
                    {c.newGrievance}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">{c.name} *</Label>
                        <Input id="name" placeholder="Enter your full name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">{c.email} *</Label>
                        <Input id="email" type="email" placeholder="Enter your email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">{c.phone} *</Label>
                        <Input id="phone" type="tel" placeholder="Enter your phone number" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="district">{c.district} *</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select district" />
                          </SelectTrigger>
                          <SelectContent>
                            {c.districts.map((district) => (
                              <SelectItem key={district} value={district.toLowerCase()}>
                                {district}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="category">{c.category} *</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            {c.categories.map((category) => (
                              <SelectItem key={category} value={category.toLowerCase()}>
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">{c.subject} *</Label>
                        <Input id="subject" placeholder="Brief subject of grievance" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">{c.description} *</Label>
                      <Textarea 
                        id="description" 
                        placeholder="Describe your grievance in detail"
                        rows={5}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="attachments">{c.attachments}</Label>
                      <Input id="attachments" type="file" multiple />
                    </div>
                    <Button type="submit" className="bg-primary hover:bg-primary/90">
                      {c.submit}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="track">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">{c.trackGrievance}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4 max-w-md">
                    <Input placeholder={c.referenceNo} className="flex-1" />
                    <Button className="bg-primary hover:bg-primary/90">
                      <Search className="h-4 w-4 mr-2" />
                      {c.track}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer language={language} visitorCount={125847} />
    </div>
  );
};

export default Grievance;
