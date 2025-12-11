import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, Globe, Sun, Moon, Minus, Plus, Eye, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const menuItems = [
  { label: "Home", path: "/" },
  {
    label: "About",
    children: [
      { label: "Vision & Mission", path: "/about/vision-mission" },
      { label: "Organization Structure", path: "/about/organization" },
      { label: "Functions", path: "/about/functions" },
      { label: "Officers", path: "/about/officers" },
    ],
  },
  {
    label: "Policies",
    children: [
      { label: "Acts & Rules", path: "/policies/acts-rules" },
      { label: "Notifications", path: "/policies/notifications" },
      { label: "Circulars", path: "/policies/circulars" },
      { label: "Recruitment Rules", path: "/policies/recruitment" },
    ],
  },
  { label: "Media Gallery", path: "/gallery" },
  { label: "News & Events", path: "/news" },
  { label: "Grievance", path: "/grievance" },
  { label: "Contact", path: "/contact" },
];

interface HeaderProps {
  fontSize: number;
  setFontSize: (size: number) => void;
  language: string;
  setLanguage: (lang: string) => void;
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
}

export function Header({ fontSize, setFontSize, language, setLanguage, isDark, setIsDark }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const languageOptions = [
    { code: "en", label: "English" },
    { code: "hi", label: "हिंदी" },
    { code: "gu", label: "ગુજરાતી" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-card">
      {/* Top Bar - Accessibility & Language */}
      <div className="bg-forest-dark text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm">
            <span className="hidden sm:inline">Skip to main content</span>
            <a href="#main" className="underline hover:text-accent">
              {language === "gu" ? "મુખ્ય સામગ્રી પર જાઓ" : language === "hi" ? "मुख्य सामग्री पर जाएं" : "Skip to Content"}
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Font Size Controls */}
            <div className="flex items-center gap-1 border-r border-primary-foreground/30 pr-3">
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0 text-primary-foreground hover:bg-primary-foreground/20"
                onClick={() => setFontSize(Math.max(12, fontSize - 2))}
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="text-xs px-1">A</span>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0 text-primary-foreground hover:bg-primary-foreground/20"
                onClick={() => setFontSize(Math.min(24, fontSize + 2))}
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>

            {/* Screen Reader */}
            <Button
              variant="ghost"
              size="sm"
              className="h-7 px-2 text-primary-foreground hover:bg-primary-foreground/20"
            >
              <Eye className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline text-xs">Screen Reader</span>
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="h-7 w-7 p-0 text-primary-foreground hover:bg-primary-foreground/20"
              onClick={() => setIsDark(!isDark)}
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 px-2 text-primary-foreground hover:bg-primary-foreground/20"
                >
                  <Globe className="h-4 w-4 mr-1" />
                  <span className="text-xs">{languageOptions.find(l => l.code === language)?.label}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {languageOptions.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={cn(language === lang.code && "bg-accent")}
                  >
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Logo & Branding */}
      <div className="bg-card py-4 border-b border-border">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4">
            <div className="w-16 h-16 bg-forest-dark rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-xl">GFRF</span>
            </div>
            <div>
              <h1 className="font-heading text-lg sm:text-xl font-bold text-foreground">
                {language === "gu" ? "ગુજરાત વન સંશોધન ફાઉન્ડેશન" : language === "hi" ? "गुजरात वन अनुसंधान फाउंडेशन" : "Gujarat Forestry Research Foundation"}
              </h1>
              <p className="text-muted-foreground text-sm">
                {language === "gu" ? "ગુજરાત સરકાર" : language === "hi" ? "गुजरात सरकार" : "Government of Gujarat"}
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder={language === "gu" ? "શોધો..." : language === "hi" ? "खोजें..." : "Search..."}
                className="w-64 h-10 pl-10 pr-4 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>

            {/* Government Emblem */}
            <div className="hidden lg:flex items-center gap-2 text-right">
              <div>
                <p className="text-xs text-muted-foreground">सत्यमेव जयते</p>
                <p className="text-xs text-primary font-semibold">Government of India</p>
              </div>
              <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                <span className="text-gold text-2xl">🦁</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Desktop Menu */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    {item.children ? (
                      <>
                        <NavigationMenuTrigger className="bg-transparent text-primary-foreground hover:bg-primary-foreground/10 data-[state=open]:bg-primary-foreground/10">
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-48 gap-1 p-2">
                            {item.children.map((child) => (
                              <li key={child.path}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    to={child.path}
                                    className="block px-4 py-2 text-sm rounded-md hover:bg-accent text-foreground"
                                  >
                                    {child.label}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <Link
                          to={item.path}
                          className="px-4 py-3 text-sm font-medium hover:bg-primary-foreground/10 inline-block"
                        >
                          {item.label}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-primary-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>

            {/* Grievance CTA */}
            <Link
              to="/grievance"
              className="hidden sm:block bg-secondary text-secondary-foreground px-4 py-2 rounded-md font-medium text-sm hover:bg-secondary/90 transition-colors"
            >
              {language === "gu" ? "ફરિયાદ નોંધાવો" : language === "hi" ? "शिकायत दर्ज करें" : "File Grievance"}
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-card text-foreground border-t border-border">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {menuItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <details className="group">
                      <summary className="flex items-center justify-between py-2 cursor-pointer">
                        {item.label}
                        <ChevronDown className="h-4 w-4 group-open:rotate-180 transition-transform" />
                      </summary>
                      <div className="pl-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="block py-2 text-sm text-muted-foreground hover:text-foreground"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <Link
                      to={item.path}
                      className="block py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
