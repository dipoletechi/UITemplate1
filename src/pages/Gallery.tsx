import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Image, Video, X } from "lucide-react";

const Gallery = () => {
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

  const photos = [
    { url: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=600&h=400&fit=crop", title: "Gir Forest Landscape" },
    { url: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=600&h=400&fit=crop", title: "Wildlife Sanctuary" },
    { url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=400&fit=crop", title: "Dense Forest Cover" },
    { url: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=400&fit=crop", title: "Sunlight Through Trees" },
    { url: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop", title: "Wildlife Habitat" },
    { url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&h=400&fit=crop", title: "Forest Trail" },
    { url: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=600&h=400&fit=crop", title: "Tree Canopy" },
    { url: "https://images.unsplash.com/photo-1518173946687-a4c036bc3388?w=600&h=400&fit=crop", title: "Conservation Area" },
  ];

  const videos = [
    { thumbnail: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=600&h=400&fit=crop", title: "Forest Conservation Documentary" },
    { thumbnail: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=600&h=400&fit=crop", title: "Wildlife in Gujarat" },
    { thumbnail: "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=600&h=400&fit=crop", title: "Tree Plantation Drive" },
    { thumbnail: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop", title: "Annual Report 2024" },
  ];

  const content = {
    en: { title: "Media Gallery", subtitle: "Explore our conservation journey through photos and videos", photos: "Photos", videos: "Videos" },
    hi: { title: "मीडिया गैलरी", subtitle: "फोटो और वीडियो के माध्यम से हमारी संरक्षण यात्रा देखें", photos: "फोटो", videos: "वीडियो" },
    gu: { title: "મીડિયા ગેલેરી", subtitle: "ફોટા અને વીડિયો દ્વારા અમારી સંરક્ષણ યાત્રા જુઓ", photos: "ફોટા", videos: "વીડિયો" },
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
          <Tabs defaultValue="photos" className="w-full">
            <TabsList className="grid w-full max-w-xs grid-cols-2 mb-8">
              <TabsTrigger value="photos" className="flex items-center gap-2">
                <Image className="h-4 w-4" />
                {c.photos}
              </TabsTrigger>
              <TabsTrigger value="videos" className="flex items-center gap-2">
                <Video className="h-4 w-4" />
                {c.videos}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="photos">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {photos.map((photo, index) => (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      <div className="aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group">
                        <img
                          src={photo.url}
                          alt={photo.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl p-0 overflow-hidden">
                      <img src={photo.url} alt={photo.title} className="w-full h-auto" />
                      <div className="p-4 bg-card">
                        <p className="font-medium text-foreground">{photo.title}</p>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="videos">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {videos.map((video, index) => (
                  <div key={index} className="aspect-video overflow-hidden rounded-lg cursor-pointer group relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-16 h-16 bg-gold/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Video className="h-6 w-6 text-foreground" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-sm font-medium text-primary-foreground">{video.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer language={language} visitorCount={125847} />
    </div>
  );
};

export default Gallery;
