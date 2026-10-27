import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Atlanta from "./pages/Atlanta";
import Charleston from "./pages/Charleston";
import Highlands from "./pages/Highlands";
import ScrollToTop from "@/components/ScrollToTop";
import Blog from "./pages/Blog";
import CustomHomePlans from "./pages/CustomHomePlans";
import KitchenRemodelCosts2025 from "./pages/blog/KitchenRemodelCosts2025";
import BathroomTimelineChecklist from "./pages/blog/BathroomTimelineChecklist";
import CustomHomeVsRemodel from "./pages/blog/CustomHomeVsRemodel";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service" element={<Navigate to="/services" replace />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/new-construction" element={<Navigate to="/services" replace />} />
          <Route path="/remodel" element={<Navigate to="/services" replace />} />
          <Route path="/projects/*" element={<Navigate to="/gallery" replace />} />
          <Route path="/customhomeplans" element={<CustomHomePlans />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/epoxy-garage-floor-cost-utah" element={<KitchenRemodelCosts2025 />} />
          <Route path="/blog/what-to-expect-epoxy-install-utah" element={<BathroomTimelineChecklist />} />
          <Route path="/blog/diy-epoxy-vs-professional-utah" element={<CustomHomeVsRemodel />} />
          <Route path="/salt-lake-city" element={<Atlanta />} />
          <Route path="/utah-county" element={<Charleston />} />
          <Route path="/ogden" element={<Highlands />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
