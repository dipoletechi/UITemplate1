import { Link } from "react-router-dom";
import { Facebook, Twitter, Youtube, Instagram, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

interface FooterProps {
  language: string;
  visitorCount: number;
}

export function Footer({ language, visitorCount }: FooterProps) {
  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about/vision-mission" },
    { label: "Policies", path: "/policies/acts-rules" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
    { label: "FAQs", path: "/faq" },
    { label: "Sitemap", path: "/sitemap" },
  ];

  const govLinks = [
    { label: "India.gov.in", url: "https://india.gov.in" },
    { label: "Gujarat.gov.in", url: "https://gujarat.gov.in" },
    { label: "Forest Survey of India", url: "https://fsi.nic.in" },
    { label: "MoEFCC", url: "https://moef.gov.in" },
  ];

  return (
    <footer className="bg-forest-dark text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <span className="font-heading font-bold text-lg">GFRF</span>
              </div>
              <div>
                <h3 className="font-heading font-bold">
                  {language === "gu" ? "GFRF" : language === "hi" ? "GFRF" : "GFRF"}
                </h3>
                <p className="text-xs text-primary-foreground/70">Gujarat</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              {language === "gu" 
                ? "ગુજરાત વન સંશોધન ફાઉન્ડેશન વન સંરક્ષણ અને સંશોધનમાં અગ્રણી સંસ્થા છે."
                : language === "hi"
                ? "गुजरात वन अनुसंधान फाउंडेशन वन संरक्षण और अनुसंधान में अग्रणी संस्था है।"
                : "Gujarat Forestry Research Foundation is a leading institution in forest conservation and research."
              }
            </p>
            
            {/* Social Media */}
            <div className="flex gap-3 mt-4">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Youtube, label: "YouTube" },
                { icon: Instagram, label: "Instagram" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-9 h-9 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold mb-4 text-lg border-b border-primary-foreground/20 pb-2">
              {language === "gu" ? "ઝડપી લિંક્સ" : language === "hi" ? "त्वरित लिंक" : "Quick Links"}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/80 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Government Links */}
          <div>
            <h3 className="font-heading font-bold mb-4 text-lg border-b border-primary-foreground/20 pb-2">
              {language === "gu" ? "સરકારી લિંક્સ" : language === "hi" ? "सरकारी लिंक" : "Government Links"}
            </h3>
            <ul className="space-y-2">
              {govLinks.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary-foreground/80 hover:text-gold transition-colors flex items-center gap-1"
                  >
                    {link.label}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold mb-4 text-lg border-b border-primary-foreground/20 pb-2">
              {language === "gu" ? "સંપર્ક" : language === "hi" ? "संपर्क" : "Contact Us"}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 text-gold" />
                <span className="text-sm text-primary-foreground/80">
                  Gujarat Forestry Research Foundation,<br />
                  Gandhinagar, Gujarat - 382010
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold" />
                <span className="text-sm text-primary-foreground/80">+91-79-XXXXXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gold" />
                <span className="text-sm text-primary-foreground/80">contact@gfrf.gujarat.gov.in</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-forest-dark/90 border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/70">
            <div className="flex items-center gap-4">
              <span>© 2024 GFRF. All Rights Reserved.</span>
              <span className="hidden md:inline">|</span>
              <Link to="/privacy" className="hover:text-gold">Privacy Policy</Link>
              <span>|</span>
              <Link to="/terms" className="hover:text-gold">Terms of Use</Link>
            </div>
            <div className="flex items-center gap-4">
              <span>
                {language === "gu" ? "મુલાકાતીઓ:" : language === "hi" ? "आगंतुक:" : "Visitors:"} {visitorCount.toLocaleString()}
              </span>
              <span>|</span>
              <span>
                {language === "gu" ? "છેલ્લે અપડેટ:" : language === "hi" ? "अंतिम अपडेट:" : "Last Updated:"} {new Date().toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
