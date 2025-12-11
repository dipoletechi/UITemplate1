import { Bell } from "lucide-react";

interface NewsTickerProps {
  language: string;
}

export function NewsTicker({ language }: NewsTickerProps) {
  const newsItems = [
    {
      en: "New afforestation project launched in Gir Forest region",
      hi: "गिर वन क्षेत्र में नई वनीकरण परियोजना शुरू",
      gu: "ગીર વન વિસ્તારમાં નવો વનીકરણ પ્રોજેક્ટ શરૂ",
    },
    {
      en: "Applications open for Forest Guard recruitment 2024",
      hi: "वन रक्षक भर्ती 2024 के लिए आवेदन खुले",
      gu: "વન રક્ષક ભરતી 2024 માટે અરજીઓ ખુલ્લી",
    },
    {
      en: "World Environment Day celebrations scheduled for June 5",
      hi: "विश्व पर्यावरण दिवस समारोह 5 जून को निर्धारित",
      gu: "વિશ્વ પર્યાવરણ દિવસની ઉજવણી 5 જૂને નિર્ધારિત",
    },
    {
      en: "New wildlife census report released",
      hi: "नई वन्यजीव गणना रिपोर्ट जारी",
      gu: "નવો વન્યજીવ વસ્તી ગણતરી અહેવાલ પ્રકાશિત",
    },
  ];

  return (
    <div className="bg-secondary text-secondary-foreground py-2 overflow-hidden">
      <div className="container mx-auto px-4 flex items-center">
        <div className="flex items-center gap-2 shrink-0 pr-4 border-r border-secondary-foreground/30">
          <Bell className="h-4 w-4" />
          <span className="font-semibold text-sm">
            {language === "gu" ? "સમાચાર" : language === "hi" ? "समाचार" : "News"}
          </span>
        </div>
        <div className="overflow-hidden ml-4">
          <div className="animate-ticker whitespace-nowrap flex gap-16">
            {newsItems.map((item, index) => (
              <span key={index} className="text-sm">
                • {item[language as keyof typeof item] || item.en}
              </span>
            ))}
            {newsItems.map((item, index) => (
              <span key={`repeat-${index}`} className="text-sm">
                • {item[language as keyof typeof item] || item.en}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
