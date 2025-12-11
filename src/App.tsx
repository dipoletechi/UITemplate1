import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutVisionMission from "./pages/AboutVisionMission";
import Grievance from "./pages/Grievance";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about/vision-mission" element={<AboutVisionMission />} />
          <Route path="/about/organization" element={<AboutVisionMission />} />
          <Route path="/about/functions" element={<AboutVisionMission />} />
          <Route path="/about/officers" element={<Contact />} />
          <Route path="/policies/acts-rules" element={<FAQ />} />
          <Route path="/policies/notifications" element={<FAQ />} />
          <Route path="/policies/circulars" element={<FAQ />} />
          <Route path="/policies/recruitment" element={<FAQ />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<Index />} />
          <Route path="/grievance" element={<Grievance />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/downloads" element={<FAQ />} />
          <Route path="/rti" element={<FAQ />} />
          <Route path="/publications" element={<Gallery />} />
          <Route path="/sitemap" element={<FAQ />} />
          <Route path="/privacy" element={<FAQ />} />
          <Route path="/terms" element={<FAQ />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
