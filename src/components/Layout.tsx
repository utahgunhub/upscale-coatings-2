import { Menu, X, Instagram } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

interface LayoutProps {
  children: React.ReactNode;
  hideFooter?: boolean;
}

export default function Layout({ children, hideFooter = false }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Footer animation
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFooterVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-bg">
      {/* Navigation - Transparent overlay on hero */}
      <nav className="absolute top-8 left-0 right-0 z-50 bg-transparent">
        <div className="w-[80%] mx-auto">
          <div className="flex justify-between items-start h-20">
            {/* Logo */}
            <Link to="/" className="hover:no-underline">
              <img 
                src="/upscale-coatings/upscale-logo.png" 
                alt="Upscale Coatings" 
                className="h-28 md:h-36 w-auto"
              />
            </Link>

            {/* Desktop Navigation - Top Right Stacked */}
            <div className="hidden md:flex flex-col items-end space-y-4">
              {navItems.map((item) => (
                <span
                  key={item.name}
                  aria-disabled="true"
                  className="text-base font-medium uppercase tracking-wide text-white/80 cursor-default"
                >
                  {item.name}
                </span>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1a1a1a]/95 backdrop-blur-sm border-t border-[#33333380]">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <span
                  key={item.name}
                  aria-disabled="true"
                  className="block text-base font-medium text-white/80 cursor-default"
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      {!hideFooter && (
        <footer 
        ref={footerRef}
        className={`py-16 border-t border-[#d7b047]/40 transition-all duration-1000 ${
          isFooterVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} 
        style={{backgroundColor: '#1a1a1a'}}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0">
            {/* Logo */}
            <div>
              <img 
                src="/upscale-coatings/upscale-logo.png" 
                alt="Upscale Coatings" 
                className="h-28 md:h-36 w-auto"
              />
            </div>

            {/* Services */}
            <div className="lg:ml-12">
              <ul className="space-y-2 text-sm">
                <li><span className="text-text-strong">SERVICES</span></li>
                <li><span className="text-text-strong">GALLERY</span></li>
                <li><span className="text-text-strong">TESTIMONIALS</span></li>
                <li><span className="text-text-strong">ABOUT</span></li>
                <li><span className="text-text-strong">CONTACT</span></li>
                <li><span className="text-text-strong">BLOG</span></li>
              </ul>
            </div>

            {/* Service Areas */}
            <div className="lg:ml-12">
              <ul className="space-y-2 text-sm">
                <li><span className="text-text-strong">SALT LAKE CITY</span></li>
                <li><span className="text-text-strong">UTAH COUNTY</span></li>
                <li><span className="text-text-strong">OGDEN &amp; DAVIS COUNTY</span></li>
                <li><a href="tel:8015927705" className="text-text-strong hover:text-accent-primary transition-colors">(801) 592-7705</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom legal links */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex justify-between items-center">
              <div className="flex space-x-6 text-sm">
                <span className="text-text-strong hover:text-accent-primary transition-colors">
                  TERMS
                </span>
                <span className="text-text-strong hover:text-accent-primary transition-colors">
                  PRIVACY POLICY
                </span>
              </div>
              
              {/* Social Media */}
              <div className="flex items-center space-x-4">
                {/* Instagram */}
                <a href="https://www.instagram.com/upscale.coatings/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-text-strong hover:text-accent-primary transition-colors">
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      )}
    </div>
  );
}