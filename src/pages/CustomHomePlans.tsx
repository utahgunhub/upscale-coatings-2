import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import JobberWorkRequest from "@/components/JobberWorkRequest";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Check, Phone, Mail, Plus, Minus } from "lucide-react";

const inspirationalBuilds = [
  {
    title: "Garage Floors",
    location: "Wasatch Front",
    type: "Flake",
    year: "'26",
    image: "/upscale-coatings/custom-garage-floor-epoxy.png",
    link: "/gallery"
  },
  {
    title: "Metallic Epoxy",
    location: "Wasatch Front",
    type: "Metallic",
    year: "'26",
    image: "/upscale-coatings/gallery-images/Metallic.jpg",
    link: "/gallery"
  },
  {
    title: "Deck Coatings",
    location: "Wasatch Front",
    type: "Deck",
    year: "'26",
    image: "/upscale-coatings/waterproof-deck-coatings.png",
    link: "/gallery"
  },
  {
    title: "Commercial Floors",
    location: "Wasatch Front",
    type: "Commercial",
    year: "'26",
    image: "/upscale-coatings/commercial-kitchen-flooring.png",
    link: "/gallery"
  }
];

const testimonials = [
  {
    name: "Shad Pace",
    role: "Garage owner",
    quote: "I reached out to several companies for quotes, and Upscale Coatings was the only one that responded. They were prompt, professional, and did exceptional work."
  },
  {
    name: "Riley Nielsen",
    role: "Homeowner",
    quote: "These guys went above and beyond. Their process was seamless. They are prompt and efficient, and I highly recommend them."
  }
];

const processSteps = [
  {
    number: "1",
    title: "CONSULTATION",
    description: "We look at the slab, talk through flake, metallic, or a commercial system, and price the work before anyone grinds."
  },
  {
    number: "2",
    title: "COLOR",
    description: "You pick a flake blend or a metallic direction. Full broadcast hides more of the old concrete. Partial flake keeps a lighter look."
  },
  {
    number: "3",
    title: "COAT",
    description: "We grind, repair, prime, and coat. Most garages are a one- to two-day install. You get a cure window for feet and for vehicles."
  },
  {
    number: "4",
    title: "CURE",
    description: "We walk the floor with you, confirm the cure time, and leave care notes. The floor is done when you can use it the way we said you could."
  }
];

const heroImages = [
  "/upscale-coatings/custom-garage-floor-epoxy.png",
  "/upscale-coatings/gallery-images/Metallic.jpg"
];

export default function CustomHomePlans() {
  const [scrollY, setScrollY] = useState(0);
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  const [quoteDisplayed, setQuoteDisplayed] = useState("");
  const [isQuoteTyping, setIsQuoteTyping] = useState(false);
  const hasStartedQuoteRef = useRef(false);

  const useFadeIn = (threshold = 0.1) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }, [threshold]);

    return { ref, isVisible };
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate hero images
  useEffect(() => {
    if (!autoplayEnabled) return;
    
    const interval = setInterval(() => {
      setActiveHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [autoplayEnabled]);

  const heroSection = useFadeIn();
  const visionSection = useFadeIn();
  const journeySection = useFadeIn();
  const quoteSection = useFadeIn();
  const buildsSection = useFadeIn();
  const testimonialsSection = useFadeIn();
  const processSection = useFadeIn();
  const formSection = useFadeIn();
  // Horizontal gallery (Inspirational Builds)
  const galleryRef = useRef<HTMLDivElement>(null);
  const [galleryScrollPosition, setGalleryScrollPosition] = useState(0);
  // Journey accordion + parallax strip
  const [expandedJourneyItem, setExpandedJourneyItem] = useState<number | null>(0);
  const topStripRef = useRef<HTMLDivElement | null>(null);
  const imagesGridRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const handleHeroClick = (index: number) => {
    setActiveHeroIndex(index);
    setAutoplayEnabled(false);
  };

  // Track horizontal scroll for inspirational builds (subtle parallax)
  useEffect(() => {
    const handleGalleryScroll = () => {
      if (galleryRef.current) {
        setGalleryScrollPosition(galleryRef.current.scrollLeft);
      }
    };

    const el = galleryRef.current;
    if (el) {
      el.addEventListener('scroll', handleGalleryScroll);
      return () => el.removeEventListener('scroll', handleGalleryScroll);
    }
  }, []);

  // Parallax for the three-image top strip in Journey section
  useEffect(() => {
    const applyParallax = () => {
      if (!topStripRef.current || !imagesGridRef.current) return;
      const rect = topStripRef.current.getBoundingClientRect();
      const total = rect.height + window.innerHeight;
      const passed = window.innerHeight - rect.top;
      const progress = Math.min(Math.max(passed / total, 0), 1);
      const startOffsetPx = 80;
      const travelPx = 140;
      const translateX = startOffsetPx - progress * travelPx;
      imagesGridRef.current.style.transform = `translate3d(${translateX}px, 0, 0)`;
    };

    const onScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;
        applyParallax();
      });
    };

    applyParallax();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', applyParallax as any);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', applyParallax as any);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Typewriter effect for the Nate Berkus quote in the vision section
  useEffect(() => {
    if (!visionSection.isVisible || hasStartedQuoteRef.current) return;
    hasStartedQuoteRef.current = true;
    const fullQuote = "\"A floor is only as good as the prep under the color.\"";

    setIsQuoteTyping(true);
    setQuoteDisplayed("");
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullQuote.length) {
        setQuoteDisplayed(fullQuote.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setIsQuoteTyping(false);
      }
    }, 35);

    return () => clearInterval(timer);
  }, [visionSection.isVisible]);

  // Parallax effect for process section text elements
  useEffect(() => {
    const textElements = document.querySelectorAll('[data-parallax-text]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', '-translate-x-20', 'translate-x-20');
            entry.target.classList.add('opacity-100', 'translate-x-0');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px'
      }
    );

    textElements.forEach((el) => observer.observe(el));

    return () => {
      textElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Scroll animation for service area cities
  useEffect(() => {
    const cityElements = document.querySelectorAll('[data-parallax-city]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    cityElements.forEach((el) => observer.observe(el));

    return () => {
      cityElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images with Swipe Transition */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(${(index - activeHeroIndex) * 100}%)`,
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          ))}
        </div>

        {/* Content Container */}
        <div className="w-[80%] mx-auto py-32 relative z-10 flex items-center min-h-screen">
          {/* Left side - Main Content with Decorative Border */}
          <div className="flex-1">
            <div 
              ref={heroSection.ref}
              className={`relative transition-all duration-1000 ${
                heroSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Decorative L-shaped border with draw animation (position unchanged) */}
              <div key={`l-accent-${activeHeroIndex}`} className="absolute -left-4 -top-4 w-64 h-64 pointer-events-none">
                <span className="absolute left-0 top-0 w-1 h-full bg-accent-primary draw-vert" />
                <span className="absolute left-0 top-0 h-1 w-full bg-accent-primary draw-horiz" />
              </div>
              {/* Bottom accent line with matching thickness and draw animation */}
              <div key={`bottom-line-${activeHeroIndex}`} className="absolute -left-2 -bottom-2 w-32 h-1 bg-accent-primary draw-line"></div>
              
              <div className="pl-8 pt-8 pb-12">
                {activeHeroIndex === 0 ? (
                  <>
                    <h1 
                      className="text-white leading-tight mb-6" 
                      style={{ fontFamily: "'PP Editorial Old', serif", fontWeight: 400 }}
                    >
                      <div className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl">Turn a Slab</div>
                      <div className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl italic">Into a Floor</div>
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl lg:text-2xl mb-6 max-w-xl">
                      Flake, metallic, and commercial systems for Utah concrete.
                    </p>
                    <Link to="/contact" onClick={() => {
                      setTimeout(() => {
                        const formElement = document.getElementById('contact-form');
                        if (formElement) {
                          formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }, 100);
                    }}>
                      <button className="bg-accent-primary text-[#1a1a1a] px-6 py-3 rounded-full font-medium hover:bg-accent-primary-hover transition-colors">
                        Request a Free Quote
                      </button>
                    </Link>
                  </>
                ) : (
                  <>
                    <h1 
                      className="text-white leading-tight mb-6" 
                      style={{ fontFamily: "'PP Editorial Old', serif", fontWeight: 400 }}
                    >
                      <div className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl">From Grind</div>
                      <div className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl italic">To Topcoat</div>
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl lg:text-2xl mb-6 max-w-xl">
                      Color is the last step, not the first.
                    </p>
                    <Link to="/contact" onClick={() => {
                      setTimeout(() => {
                        const formElement = document.getElementById('contact-form');
                        if (formElement) {
                          formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }, 100);
                    }}>
                      <button className="bg-accent-primary text-[#1a1a1a] px-6 py-3 rounded-full font-medium hover:bg-accent-primary-hover transition-colors">
                        Explore Our Process
                      </button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>

        </div>

        {/* Right side - Numbered Sections (Carousel Controls) - Outside container to touch edge */}
        <div className="hidden lg:block absolute bottom-20 right-0 z-20">
          <div className="bg-[#1a1a1a]/90 backdrop-blur-sm flex">
            <button
              onClick={() => handleHeroClick(0)}
              className={`px-12 py-8 flex items-center gap-6 transition-all duration-300 cursor-pointer ${
                activeHeroIndex === 0 
                  ? 'bg-[#333333]' 
                  : 'bg-transparent hover:bg-[#333333]'
              }`}
            >
              <div className={`text-7xl font-bold transition-colors ${
                activeHeroIndex === 0 ? 'text-accent-primary' : 'text-text-strong/40'
              }`}>01</div>
              <div className="text-left">
                <p className="text-sm font-semibold text-text-strong whitespace-nowrap leading-tight">Why Choose</p>
                <p className="text-sm font-semibold text-text-strong whitespace-nowrap leading-tight">Upscale</p>
              </div>
            </button>
            <button
              onClick={() => handleHeroClick(1)}
              className={`pr-12 py-8 flex items-center gap-6 transition-all duration-300 cursor-pointer ${
                activeHeroIndex === 1 
                  ? 'bg-[#333333]' 
                  : 'bg-transparent hover:bg-[#333333]'
              }`}
            >
              <div className={`text-7xl font-bold transition-colors ${
                activeHeroIndex === 1 ? 'text-accent-primary' : 'text-text-strong/40'
              }`}>02</div>
              <div className="text-left">
                <p className="text-sm font-semibold text-text-strong whitespace-nowrap leading-tight">The Coating</p>
                <p className="text-sm font-semibold text-text-strong whitespace-nowrap leading-tight">Journey</p>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Vision + Quote Section (two-column layout) */}
      <section className="py-24 bg-bg">
        <div className="w-[80%] mx-auto">
          {/* Centered Section Header */}
          <div 
            ref={visionSection.ref}
            className={`text-center mb-12 transition-all duration-1000 ${
              visionSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-sm tracking-[0.2em] text-accent-primary mb-4">COATINGS FOR UTAH CONCRETE</p>
            <h2 className="text-text-strong leading-tight max-w-5xl mx-auto" style={{ fontFamily: "'PP Editorial Old', serif", fontWeight: 400 }}>
              <span className="block text-4xl md:text-5xl lg:text-6xl">A Floor That</span>
              <span className="block text-4xl md:text-5xl lg:text-6xl">Holds Up, <span className="text-accent-primary italic">Then Looks Good.</span></span>
            </h2>
          </div>

          <div 
            className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-start transition-all duration-1000 ${
              visionSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Left (now): Image + Callout */}
            <div className="lg:col-span-6">
              <div className="relative w-full">
                {/* Accent frame */}
                <div className="absolute -left-6 -top-6 w-24 h-24 border-t-4 border-l-4 border-accent-primary"></div>
                <img
                  src="/upscale-coatings/gallery-images/Garage(2).jpg"
                  alt="Flake epoxy garage floor"
                  className="w-full h-auto object-cover shadow-lg"
                />
              </div>

              {/* Callout moved to right column */}
            </div>

            {/* Right (now): Copy */}
            <div className="lg:col-span-6">
              <div className="space-y-5 text-text leading-relaxed text-base md:text-lg">
                <p>
                  A coating is a system, not a color chip. Upscale Coatings grinds the slab, repairs what needs repair, and then builds the layers that have to live with salt, tires, moisture, or foot traffic. The look — flake, metallic, or a commercial finish — sits on top of that work.
                </p>
                <p>
                  You pick the blend. We tell you what the floor can take, what it costs, and when you can park on it. Most garages are a day or two. Bigger commercial floors are scheduled around the hours you can give the space up.
                </p>
                <div className="pt-4">
                  <blockquote className="italic text-2xl md:text-3xl lg:text-4xl text-text" style={{ fontFamily: "'PP Editorial Old', serif" }}>
                    {quoteDisplayed}
                    {isQuoteTyping && <span className="animate-pulse">|</span>}
                  </blockquote>
                  <p className="mt-3 text-text-strong/60 text-base">— Upscale Coatings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Custom Home Journey Section */}
      <section className="pt-0 pb-24 bg-bg">
        <div className="w-[80%] mx-auto">
          {/* Header copy moved near accordion per request */}
          <div 
            ref={journeySection.ref}
            className={`mb-6 transition-all duration-1000 ${
              journeySection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          />

          {/* Top 3 images strip with gentle parallax (kept as requested) */}
          <div ref={topStripRef} className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden mb-28 md:mb-32">
            <div ref={imagesGridRef} className="grid grid-cols-3 gap-5 md:gap-8 items-end will-change-transform" style={{ transform: 'translate3d(80px, 0, 0)' }}>
              <div className="relative">
                <img src="/upscale-coatings/gallery-images/Garage.jpg" alt="Garage flake floor" className="h-[200px] md:h-[280px] w-full object-cover" />
              </div>
              <div>
                <img src="/upscale-coatings/gallery-images/Metallic.jpg" alt="Metallic epoxy floor" className="h-[200px] md:h-[280px] w-full object-cover" />
              </div>
              <div className="relative">
                <img src="/upscale-coatings/waterproof-deck-coatings.png" alt="Waterproof deck coating" className="h-[200px] md:h-[280px] w-full object-cover" />
              </div>
            </div>
          </div>

          {/* Lower grid: single video left + accordion right */}
          <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-center">
            <div className="md:col-span-6">
              <div className="relative w-full overflow-hidden">
                <video src="/upscale-coatings/hero-video.mp4" className="w-full h-[360px] md:h-[460px] object-cover" autoPlay muted loop playsInline></video>
              </div>
            </div>

            <div className="md:col-span-6">
              {/* Section header above the dropdowns */}
              <h3 className="text-4xl md:text-5xl lg:text-6xl text-text-strong leading-tight mb-6" style={{ fontFamily: "'PP Editorial Old', serif" }}>
                <span className="font-light">The Coating</span> <span className="italic font-normal">Process</span>
              </h3>
              <div className="divide-y divide-text/20 border-b border-text/20">
                {[
                  {
                    title: 'Walk the slab',
                    details: 'We measure the space, check cracks and moisture, and talk through how the floor is used. A garage, a basement, a deck, and a commercial kitchen are not the same system.'
                  },
                  {
                    title: 'Pick the system',
                    details: 'Full flake hides the old concrete. Partial flake is lighter. Metallic is a poured look. Outdoor work uses a UV-stable, waterproof coating. The quote names the prep, the color, and the topcoat.'
                  },
                  {
                    title: 'Grind and repair',
                    details: 'Diamond grinding opens the concrete. Cracks are filled. Primer goes down so the coating bonds to the slab instead of to dust.'
                  },
                  {
                    title: 'Coat and cure',
                    details: 'Base coat, broadcast or pour, then a clear topcoat. Foot traffic comes back quickly. Vehicles and heavy use wait for the cure window we give you that day.'
                  }
                ].map((item, index) => (
                  <div key={index} className="py-4">
                    <div className="flex items-start justify-between cursor-pointer" onClick={() => setExpandedJourneyItem(prev => prev === index ? null : index)}>
                      <div>
                        <div className="font-semibold text-base md:text-lg text-text-strong">{item.title}</div>
                        {expandedJourneyItem === index && (
                          <div className="text-sm md:text-base text-text mt-3 leading-relaxed">
                            {item.details}
                          </div>
                        )}
                      </div>
                      <div className="flex-shrink-0 w-[18px] h-[18px] text-text flex items-center justify-center mt-1">
                        {expandedJourneyItem === index ? (
                          <span className="block h-[2px] w-[14px] bg-current rounded-sm" />
                        ) : (
                          <Plus className="h-[18px] w-[18px]" strokeWidth={2.5} />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inspirational Builds - Horizontal Scroll (matches Signature Residences) */}
      <section className="py-24 bg-bg-alt">
        <div className="w-[80%] mx-auto mb-12">
          <div 
            ref={buildsSection.ref}
            className={`transition-all duration-1000 ${
              buildsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl text-text-strong mb-3" style={{ fontFamily: "'PP Editorial Old', serif", fontWeight: 400 }}>
              Recent Floors
            </h2>
            <p className="text-text text-base md:text-lg">Garage, metallic, deck, and commercial coatings.</p>
          </div>
        </div>

        {/* Horizontal scrolling gallery - full-bleed to edges */}
        <div 
          ref={galleryRef}
          className="flex gap-6 overflow-x-auto pb-8 px-4 sm:px-6 lg:px-8 scroll-smooth hide-scrollbar w-screen relative left-1/2 -translate-x-1/2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {inspirationalBuilds.map((project, index) => (
            <div
              key={index}
              className="group relative flex-shrink-0 w-[85vw] md:w-[600px] h-[500px] overflow-hidden cursor-pointer"
              style={{ transform: `translateX(${galleryScrollPosition * -0.05}px)` }}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-white/80 text-sm font-medium mb-4 uppercase tracking-wide">
                  {project.location} • {project.type}
                </p>
                <Link 
                  to={project.link ?? '/gallery'}
                  className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity"
                >
                  <div className="w-4 h-4 border-2 border-white bg-transparent"></div>
                  <span className="text-sm font-medium uppercase tracking-wide">View Gallery</span>
                </Link>
              </div>

              {/* Hover border */}
              <div className="absolute inset-0 border-4 border-accent-sand opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-6">
          <div className="flex items-center gap-2 text-text">
            <span className="text-sm">Scroll to explore</span>
          </div>
        </div>
      </section>


      {/* Process Section */}
      <section className="py-24 bg-bg">
        <div className="w-[90%] max-w-7xl mx-auto">
          <div 
            ref={processSection.ref}
            className={`text-center mb-20 transition-all duration-1000 ${
              processSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-text-strong mb-2" style={{ fontFamily: "'PP Editorial Old', serif", fontWeight: 400 }}>
              Our <span className="relative inline-block">Process
                <span className="absolute bottom-0 left-0 w-full h-1 bg-accent-primary" style={{ bottom: '-8px' }}></span>
              </span>
            </h2>
          </div>

          <div className="space-y-0">
            {/* Step 1 - Image right, text slides from left */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div 
                className="order-2 md:order-1 transition-all duration-1000 opacity-0 -translate-x-20"
                data-parallax-text="left"
              >
                <div className="text-7xl md:text-8xl text-accent-primary mb-4" style={{ fontFamily: "'PP Editorial Old', serif", fontWeight: 400 }}>1</div>
                <h3 className="text-2xl md:text-3xl text-text-strong mb-6 uppercase tracking-wide" style={{ fontFamily: "'PP Editorial Old', serif", fontWeight: 600 }}>CONSULTATION</h3>
                <p className="text-base md:text-lg text-text leading-relaxed">
                  We look at the slab, talk through color and traffic, and price the system before anyone grinds.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="/upscale-coatings/gallery-images/Hand%20Troweling%20For%20Resurfacing%20Service.jpg"
                  alt="Consultation"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>

            {/* Step 2 - Image left, text slides from right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-1">
                <img 
                  src="/upscale-coatings/new-flake-colors/Color%20Name_%20Nightfall.png"
                  alt="Design"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div 
                className="order-2 transition-all duration-1000 opacity-0 translate-x-20"
                data-parallax-text="right"
              >
                <div className="text-7xl md:text-8xl text-accent-primary mb-4" style={{ fontFamily: "'PP Editorial Old', serif", fontWeight: 400 }}>2</div>
                <h3 className="text-2xl md:text-3xl text-text-strong mb-6 uppercase tracking-wide" style={{ fontFamily: "'PP Editorial Old', serif", fontWeight: 600 }}>COLOR</h3>
                <p className="text-base md:text-lg text-text leading-relaxed">
                  You pick a flake blend or a metallic direction. Full broadcast hides more of the slab. Partial flake stays lighter.
                </p>
              </div>
            </div>

            {/* Step 3 - Image right, text slides from left */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div 
                className="order-2 md:order-1 transition-all duration-1000 opacity-0 -translate-x-20"
                data-parallax-text="left"
              >
                <div className="text-7xl md:text-8xl text-accent-primary mb-4" style={{ fontFamily: "'PP Editorial Old', serif", fontWeight: 400 }}>3</div>
                <h3 className="text-2xl md:text-3xl text-text-strong mb-6 uppercase tracking-wide" style={{ fontFamily: "'PP Editorial Old', serif", fontWeight: 600 }}>COAT</h3>
                <p className="text-base md:text-lg text-text leading-relaxed">
                  We grind, repair, prime, and coat. Most garages are done in a day or two. You get a clear cure window before we leave.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="/upscale-coatings/gallery-images/Garage(1).jpg"
                  alt="Build"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>

            {/* Step 4 - Image left, text slides from right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-1">
                <img 
                  src="/upscale-coatings/gallery-images/Garage(3).jpg"
                  alt="Move In"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div 
                className="order-2 transition-all duration-1000 opacity-0 translate-x-20"
                data-parallax-text="right"
              >
                <div className="text-7xl md:text-8xl text-accent-primary mb-4" style={{ fontFamily: "'PP Editorial Old', serif", fontWeight: 400 }}>4</div>
                <h3 className="text-2xl md:text-3xl text-text-strong mb-6 uppercase tracking-wide" style={{ fontFamily: "'PP Editorial Old', serif", fontWeight: 600 }}>CURE</h3>
                <p className="text-base md:text-lg text-text leading-relaxed">
                  We walk the floor with you and tell you when feet can return and when vehicles can. The floor is finished when you can use it the way we said.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with Service Areas */}
      <section className="py-20 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12">
            {/* Left: Service Areas (Sticky) */}
            <aside className="lg:sticky lg:top-24 self-start">
              <div className="space-y-8">
                {/* Logo */}
                <div>
                  <img 
                    src="/upscale-coatings/upscale-logo.png" 
                    alt="Upscale Coatings" 
                    className="h-16 w-auto"
                  />
                </div>

                {/* Service Areas Header */}
                <div>
                  <p className="text-2xl font-bold text-text-strong mb-4" style={{ fontFamily: "'PP Editorial Old', serif" }}>Service Areas</p>
                  <p className="text-text mb-6">Epoxy floors across the Wasatch Front</p>
                </div>

                {/* Cities List */}
                <div className="space-y-3">
                  {[
                    'SALT LAKE CITY',
                    'SOUTH JORDAN',
                    'DRAPER',
                    'SANDY',
                    'MURRAY',
                    'WEST JORDAN',
                    'LEHI',
                    'PROVO',
                    'OREM',
                    'OGDEN',
                    'LAYTON',
                    'PARK CITY'
                  ].map((city) => (
                    <div
                      key={city}
                      className="flex items-center gap-3 text-text-strong hover:text-accent-primary transition-colors cursor-pointer group"
                    >
                      <div className="w-1 h-1 bg-accent-primary rounded-full group-hover:w-2 group-hover:h-2 transition-all"></div>
                      <span className="text-sm font-medium tracking-wide">{city}</span>
                    </div>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="pt-4 border-t border-text-strong/20">
                  <p className="text-sm text-text mb-2">Questions? Call us:</p>
                  <p className="text-lg font-semibold text-text-strong">(801) 592-7705</p>
                </div>
              </div>
            </aside>

            {/* Right: Contact Form */}
            <div 
              ref={formSection.ref}
              className={`lg:pl-4 transition-all duration-1000 ${
                formSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-text-strong mb-4" style={{ fontFamily: "'PP Editorial Old', serif", fontWeight: 400 }}>
                Request Your Consultation
              </h2>
              <p className="text-text mb-8">Fill out the form below and we'll be in touch within 24 hours.</p>

              <JobberWorkRequest />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#333333' }}>
        <div className="w-[80%] mx-auto text-center">
          <h2 className="text-white leading-tight mb-8" style={{ fontFamily: "'PP Editorial Old', serif", fontWeight: 400 }}>
            <span className="block text-4xl md:text-5xl lg:text-6xl">Ready to coat the slab.</span>
            <span className="block text-4xl md:text-5xl lg:text-6xl italic mt-2">Request a quote today</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-accent-primary text-[#1a1a1a] hover:bg-accent-primary-hover rounded-full px-8 py-6 text-lg font-medium">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Local CSS for draw animations (keeps layout unchanged) */}
      <style>{`
        @keyframes drawVert { from { transform: scaleY(0); } to { transform: scaleY(1); } }
        @keyframes drawHoriz { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes drawLine { from { transform: scaleX(0); } to { transform: scaleX(1); } }

        .draw-vert { transform-origin: top left; transform: scaleY(0); animation: drawVert 800ms ease-out 300ms forwards; }
        .draw-horiz { transform-origin: left top; transform: scaleX(0); animation: drawHoriz 800ms ease-out 900ms forwards; }
        .draw-line { transform-origin: left center; transform: scaleX(0); animation: drawLine 800ms ease-out 1500ms forwards; }

        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </Layout>
  );
}

