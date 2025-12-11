import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface NewsSectionProps {
  language: string;
}

export function NewsSection({ language }: NewsSectionProps) {
  const news = [
    {
      id: 1,
      date: "2024-12-10",
      title: {
        en: "New Afforestation Project Launched",
        hi: "नई वनीकरण परियोजना शुरू",
        gu: "નવો વનીકરણ પ્રોજેક્ટ શરૂ",
      },
      excerpt: {
        en: "Gujarat Forest Department launches major afforestation initiative covering 10,000 hectares in Kutch region.",
        hi: "गुजरात वन विभाग ने कच्छ क्षेत्र में 10,000 हेक्टेयर में प्रमुख वनीकरण पहल शुरू की।",
        gu: "ગુજરાત વન વિભાગે કચ્છ પ્રદેશમાં 10,000 હેક્ટરમાં મુખ્ય વનીકરણ પહેલ શરૂ કરી.",
      },
      category: "Project",
    },
    {
      id: 2,
      date: "2024-12-08",
      title: {
        en: "Wildlife Census Report 2024 Released",
        hi: "वन्यजीव गणना रिपोर्ट 2024 जारी",
        gu: "વન્યજીવ વસ્તી ગણતરી અહેવાલ 2024 પ્રકાશિત",
      },
      excerpt: {
        en: "Annual wildlife census shows 15% increase in lion population in Gir Forest National Park.",
        hi: "वार्षिक वन्यजीव गणना गिर वन राष्ट्रीय उद्यान में शेरों की आबादी में 15% वृद्धि दर्शाती है।",
        gu: "વાર્ષિક વન્યજીવ વસ્તી ગણતરી ગીર વન રાષ્ટ્રીય ઉદ્યાનમાં સિંહોની વસ્તીમાં 15% વધારો દર્શાવે છે.",
      },
      category: "Report",
    },
    {
      id: 3,
      date: "2024-12-05",
      title: {
        en: "Forest Guard Recruitment 2024",
        hi: "वन रक्षक भर्ती 2024",
        gu: "વન રક્ષક ભરતી 2024",
      },
      excerpt: {
        en: "Applications are now open for 500 Forest Guard positions across Gujarat. Last date: December 31, 2024.",
        hi: "गुजरात भर में 500 वन रक्षक पदों के लिए आवेदन अब खुले हैं। अंतिम तिथि: 31 दिसंबर, 2024।",
        gu: "ગુજરાતભરમાં 500 વન રક્ષક પદો માટે અરજીઓ હવે ખુલ્લી છે. છેલ્લી તારીખ: 31 ડિસેમ્બર, 2024.",
      },
      category: "Recruitment",
    },
  ];

  const events = [
    {
      date: "2024-12-25",
      title: { en: "Tree Plantation Drive", hi: "वृक्षारोपण अभियान", gu: "વૃક્ષારોપણ અભિયાન" },
      location: { en: "Gandhinagar", hi: "गांधीनगर", gu: "ગાંધીનગર" },
    },
    {
      date: "2025-01-05",
      title: { en: "Forest Conservation Workshop", hi: "वन संरक्षण कार्यशाला", gu: "વન સંરક્ષણ વર્કશોપ" },
      location: { en: "Ahmedabad", hi: "अहमदाबाद", gu: "અમદાવાદ" },
    },
    {
      date: "2025-01-26",
      title: { en: "Republic Day Celebration", hi: "गणतंत्र दिवस समारोह", gu: "પ્રજાસત્તાક દિવસ ઉજવણી" },
      location: { en: "All Districts", hi: "सभी जिले", gu: "તમામ જિલ્લાઓ" },
    },
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* News Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading text-2xl font-bold text-foreground">
                {language === "gu" ? "તાજા સમાચાર" : language === "hi" ? "ताजा समाचार" : "Latest News"}
              </h2>
              <Button variant="link" asChild className="text-primary">
                <Link to="/news">
                  {language === "gu" ? "બધા જુઓ" : language === "hi" ? "सभी देखें" : "View All"}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="space-y-4">
              {news.map((item) => (
                <Card key={item.id} className="hover:shadow-card transition-shadow">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="text-center bg-primary text-primary-foreground rounded-lg p-2 shrink-0">
                        <div className="text-lg font-bold">{new Date(item.date).getDate()}</div>
                        <div className="text-xs uppercase">
                          {new Date(item.date).toLocaleString("en", { month: "short" })}
                        </div>
                      </div>
                      <div className="flex-1">
                        <span className="inline-block bg-gold/20 text-gold-dark text-xs px-2 py-1 rounded-full mb-2">
                          {item.category}
                        </span>
                        <h3 className="font-heading font-semibold text-foreground mb-2 hover:text-primary cursor-pointer">
                          {item.title[language as keyof typeof item.title] || item.title.en}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {item.excerpt[language as keyof typeof item.excerpt] || item.excerpt.en}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Events Calendar */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="h-5 w-5 text-primary" />
              <h2 className="font-heading text-2xl font-bold text-foreground">
                {language === "gu" ? "આગામી ઇવેન્ટ્સ" : language === "hi" ? "आगामी कार्यक्रम" : "Upcoming Events"}
              </h2>
            </div>

            <Card>
              <CardContent className="p-0 divide-y divide-border">
                {events.map((event, index) => (
                  <div key={index} className="p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-secondary text-secondary-foreground rounded flex items-center justify-center">
                        <span className="font-bold text-sm">{new Date(event.date).getDate()}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {new Date(event.date).toLocaleDateString("en", { month: "long", year: "numeric" })}
                      </div>
                    </div>
                    <h4 className="font-medium text-foreground mb-1">
                      {event.title[language as keyof typeof event.title] || event.title.en}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      📍 {event.location[language as keyof typeof event.location] || event.location.en}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
