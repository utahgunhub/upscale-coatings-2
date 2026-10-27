import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useRef, useState, useCallback } from "react";

const whyChooseItems = [
  {
    title: "Prep That Actually Sticks",
    text:
      "A coating is only as good as the concrete under it. We diamond-grind, repair cracks, and prime for moisture so the system bonds instead of peeling after the first Utah winter.",
  },
  {
    title: "Systems Built for This Climate",
    text:
      "Road salt, freeze-thaw, and high-altitude sun wreck cheap kits. We use industrial epoxy and UV-stable topcoats chosen for garages, shops, and outdoor slabs along the Wasatch Front.",
  },
  {
    title: "A Price You Can See Before We Start",
    text:
      "You get a clear scope — square footage, flake or metallic system, crack repair, and topcoat — before we book the install. No surprise line items after the grind.",
  },
  {
    title: "Most Garages, One to Two Days",
    text:
      "A typical residential garage is prepped, coated, and topcoated in a day or two. You are back on the floor for foot traffic quickly, and we tell you exactly when vehicles can return.",
  },
];

const team = [
  {
    name: "Collin Lewis",
    role: "Co-Owner / Customer Care / Accountant",
    image: "/upscale-coatings/collin-lewis.png",
    description:
      "Collin is a Co-Owner at Upscale Coatings, managing customer relations and company finances to keep operations running smoothly. He focuses on delivering a great client experience while ensuring every project is handled with transparency, organization, and care.",
  },
  {
    name: "Andrew Pavia",
    role: "Sales / Estimates",
    image: "/upscale-coatings/andrew-pavia.png",
    description:
      "Andrew is responsible for sales and on-site estimates at Upscale Coatings, working directly with customers to understand their needs and provide accurate, detailed project proposals. He focuses on clear communication and helping clients choose the right flooring solutions for their space and budget.",
  },
  {
    name: "Dillon Geddes",
    role: "Co-Owner / Project Manager",
    image: "/upscale-coatings/dillon-geddes.png",
    description:
      "Dillon is a Co-Owner and Project Manager at Upscale Coatings, overseeing every project from start to finish to ensure top-tier quality and a seamless customer experience. He is committed to delivering durable, high-end epoxy solutions while maintaining clear communication and attention to detail throughout the process.",
  },
];

const cornerDots: [number, number, number][] = [
  [196, 16, 26],
  [168, 10, 14],
  [204, 48, 18],
  [174, 40, 9],
  [146, 22, 20],
  [124, 8, 8],
  [150, 52, 12],
  [182, 68, 22],
  [208, 88, 11],
  [132, 44, 7],
  [112, 28, 16],
  [98, 10, 6],
  [158, 86, 8],
  [138, 74, 15],
  [120, 60, 6],
  [190, 108, 10],
  [166, 114, 16],
  [148, 100, 5],
  [108, 50, 10],
  [88, 24, 12],
  [72, 8, 5],
  [126, 92, 11],
  [106, 78, 7],
  [84, 58, 14],
  [66, 36, 6],
  [54, 16, 8],
  [176, 132, 7],
  [154, 126, 12],
  [136, 112, 5],
  [114, 96, 9],
  [96, 80, 4],
  [74, 64, 8],
  [52, 46, 5],
  [40, 26, 4],
  [198, 64, 7],
  [214, 30, 13],
  [160, 18, 5],
  [186, 46, 6],
];

const dotFloats = [
  "0 0; 5 -4; -3 3; 0 0",
  "0 0; -4 5; 3 -2; 0 0",
  "0 0; 3 6; -5 -3; 0 0",
  "0 0; -6 -3; 4 4; 0 0",
];

function CornerDots({ className }: { className: string }) {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <svg viewBox="0 0 220 150" className={className} aria-hidden="true">
      {cornerDots.map(([cx, cy, r], index) => (
        <circle key={index} cx={cx} cy={cy} r={r} fill="white">
          {!reduceMotion && (
            <animateTransform
              attributeName="transform"
              type="translate"
              values={dotFloats[index % dotFloats.length]}
              dur={`${9 + (index % 6)}s`}
              begin={`${(index % 8) * 0.35}s`}
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0;0.33;0.66;1"
              keySplines="0.45 0 0.55 1; 0.45 0 0.55 1; 0.45 0 0.55 1"
            />
          )}
        </circle>
      ))}
    </svg>
  );
}

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeWhyIndex, setActiveWhyIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const whyImageRefs = useRef<Array<HTMLDivElement | null>>([]);
  const visibilityRatiosRef = useRef<number[]>(new Array(whyChooseItems.length).fill(0));
  const testimonialRef = useRef<HTMLDivElement>(null);
  
  const fullText = "More than a coating. A floor worth showing off.";

  // Custom hook for fade-in animation
  const useFadeIn = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }, []);

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

  // Typewriter animation effect
  const typeText = useCallback(() => {
    if (isTyping) return;
    
    setIsTyping(true);
    setDisplayedText("");
    
    let currentIndex = 0;
    const typeInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
      }
    }, 50); // Adjust speed here (lower = faster)
    
    return () => clearInterval(typeInterval);
  }, [fullText, isTyping]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number((entry.target as HTMLElement).dataset.index);
          if (!Number.isNaN(idx)) {
            visibilityRatiosRef.current[idx] = entry.intersectionRatio;
          }
        });

        const ratios = visibilityRatiosRef.current;
        let bestIdx = 0;
        let bestRatio = -1;
        for (let i = 0; i < ratios.length; i++) {
          if (ratios[i] > bestRatio) {
            bestRatio = ratios[i];
            bestIdx = i;
          }
        }

        if (bestIdx !== activeWhyIndex) {
          setIsTransitioning(true);
          setTimeout(() => {
            setActiveWhyIndex(bestIdx);
            setTimeout(() => {
              setIsTransitioning(false);
            }, 50);
          }, 250);
        }
      },
      { threshold: Array.from({ length: 11 }, (_, i) => i / 10) }
    );

    whyImageRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeWhyIndex]);

  // Testimonial intersection observer for typewriter effect
  useEffect(() => {
    const testimonialObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isTyping && displayedText === "") {
            typeText();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (testimonialRef.current) {
      testimonialObserver.observe(testimonialRef.current);
    }

    return () => testimonialObserver.disconnect();
  }, [typeText, isTyping, displayedText]);

  // Create fade-in animations for each section
  const designedSection = useFadeIn();
  const gallerySection = useFadeIn();
  const whyChooseHeader = useFadeIn();
  const servicesSection = useFadeIn();
  const ourGallerySection = useFadeIn();
  const galleryCarousel = useFadeIn();

  return (
    <Layout>
      {/* Hero Section */}
      <Hero 
        title="Built for Utah, Made to Last"
        subtitle="Epoxy garage floors, metallic coatings, and concrete systems that stand up to salt, sun, and daily traffic."
        backgroundVideoSrc="/upscale-coatings/hero-video.mp4"
        darkerOverlay={true}
      />

      {/* Our Services */}
      <section className="py-20 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={designedSection.ref}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start transition-all duration-1000 ${
              designedSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div>
              <h2 className="text-5xl md:text-4xl lg:text-5xl font-bold text-text-strong mb-8 leading-tight" style={{ fontFamily: "'PP Editorial Old', serif", fontWeight: 400 }}>
                Epoxy<br />
                <span className="italic">Floors</span>
              </h2>
            </div>
            <div>
                    <p className="text-base text-text mb-8 leading-relaxed">
                      Upscale Coatings installs flake garage floors, metallic epoxy, waterproof decks, and commercial concrete systems across Utah. The work starts with honest prep and ends with a floor that is easy to clean, hard to stain, and finished like it belongs in the house.
                    </p>
              <div className="flex flex-col sm:flex-row gap-8">
                <span className="flex items-center gap-3 text-text-strong cursor-default">
                  <div className="w-4 h-4 bg-accent-primary"></div>
                  <span className="text-sm font-medium uppercase tracking-wide">Get In Touch</span>
                </span>
                <span className="flex items-center gap-3 text-text-strong cursor-default">
                  <div className="w-4 h-4 border-2 border-accent-primary bg-transparent"></div>
                  <span className="text-sm font-medium uppercase tracking-wide">Discover Portfolio</span>
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Gallery Images with Parallax - Full Width */}
      <div 
        className="overflow-hidden w-full pb-20" 
        style={{backgroundColor: '#1a1a1a'}}
      >
        {/* First Row - moves left */}
        <div 
          className="flex gap-2 mb-2 px-6"
          style={{
            transform: `translateX(${scrollY * -0.1}px)`,
            willChange: 'transform'
          }}
        >
          {[
            '/upscale-coatings/gallery-images/Garage.jpg',
            '/upscale-coatings/gallery-images/Metallic.jpg',
            '/upscale-coatings/custom-garage-floor-epoxy.png',
            '/upscale-coatings/gallery-images/Garage(1).jpg',
            '/upscale-coatings/metallic-2.png',
            '/upscale-coatings/gallery-images/Waterproof%20Deck.jpg'
          ].map((src, idx) => (
            <div key={idx} className="flex-shrink-0 w-96 h-72 overflow-hidden">
              <img 
                src={src}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Second Row - moves right */}
        <div 
          className="flex gap-2 justify-end px-6"
          style={{
            transform: `translateX(${scrollY * 0.1}px)`,
            willChange: 'transform'
          }}
        >
          {[
            '/upscale-coatings/gallery-images/Garage(2).jpg',
            '/upscale-coatings/gallery-images/Outdoor%20Epoxy%20Pad.jpg',
            '/upscale-coatings/metallic-3.png',
            '/upscale-coatings/gallery-images/Industrial%20Space.png',
            '/upscale-coatings/basement-floor-coatings.png'
          ].map((src, idx) => (
            <div key={`row2-${idx}`} className="flex-shrink-0 w-96 h-72 overflow-hidden">
              <img 
                src={src}
                alt={`Gallery ${idx + 8}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Bradford - Header */}
      <section className="pt-20 pb-40" style={{backgroundColor: '#1a1a1a'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={whyChooseHeader.ref}
            className={`text-center transition-all duration-1000 ${
              whyChooseHeader.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text-strong mb-4" style={{ fontFamily: "'PP Editorial Old', serif", fontWeight: 400 }}>
              Our Promise to You
            </h2>
            <p className="text-xl text-text max-w-2xl mx-auto">
              Four things homeowners and facility managers notice once the floor is down: prep, climate, price, and how little time the space is out of use.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Bradford - Scrollytelling with full-width images */}
      <section className="relative" style={{backgroundColor: '#33333380'}}>
        {/* Full-width background images */}
        <div className="absolute inset-0">
          {[
            '/upscale-coatings/gallery-examples/Finished%20Charcoal%20Flake%20Epoxy%20Floor-3.png',
            '/upscale-coatings/gallery-examples/Finished%20sandstone%20flake%20epoxy%20garage%20floor-2.png',
            '/upscale-coatings/gallery-examples/Freshly%20finished%20blue-gray%20epoxy%20floor-4.png',
            '/upscale-coatings/gallery-examples/Silver-graphite%20metallic%20epoxy%20garage%20floor-6.png'
          ].map((src, idx) => (
            <div
              key={idx}
              ref={(el) => (whyImageRefs.current[idx] = el)}
              data-index={idx}
              className="h-[56vh] md:h-[64vh] lg:h-[56vh] w-full overflow-hidden relative"
            >
              <img
                src={src}
                alt={`Upscale Coatings floor ${idx + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          ))}
        </div>

        {/* Content overlay */}
        <div className="relative z-10 pt-12 pb-0 md:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left: Sticky text that updates with scroll */}
              <div className="sticky top-1/2 -translate-y-1/2 self-start mt-24 md:mt-40 lg:mt-56">
                <div 
                  className={`transition-all duration-300 ease-in-out transform ${
                    isTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'
                  }`}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                    {whyChooseItems[activeWhyIndex].title}
                  </h3>
                  <p className="text-lg text-white/90 leading-relaxed">
                    {whyChooseItems[activeWhyIndex].text}
                  </p>
                </div>
              </div>

              {/* Right: Spacer to maintain layout */}
              <div className="h-[192vh] md:h-[224vh]">
                {/* This div maintains the scroll height for the sticky positioning */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="pt-16 md:pt-0 pb-16" style={{backgroundColor: '#33333380'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={servicesSection.ref}
            className={`transition-all duration-1000 ${
              servicesSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
          {/* Content row */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Text content - 1/4 of row */}
            <div className="space-y-6 lg:col-span-2">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-strong" style={{ fontFamily: "'PP Editorial Old', serif", fontWeight: 400 }}>
                What We <span className="italic">Coat</span>
              </h2>
              <div>
                <p className="text-base text-text leading-relaxed">
                  Flake garage floors are the workhorse. Metallic epoxy, waterproof decks, basement slabs, and commercial kitchens get the same prep and a system matched to traffic, moisture, and chemicals.
                </p>
              </div>
              
              <div className="flex items-center gap-3 mt-6">
                <span className="flex items-center gap-3 text-text-strong cursor-default">
                  <div className="w-4 h-4 bg-accent-primary"></div>
                  <span className="text-sm font-medium uppercase tracking-wide">VIEW SERVICES</span>
                </span>
              </div>
            </div>

            {/* Featured New Builds - two horizontal cards stacked */}
            <div className="lg:col-span-3 space-y-10">
              <div>
                <div className="w-full h-56 md:h-64 overflow-hidden bg-bg-muted">
                  <img 
                    src="/upscale-coatings/gallery-examples/Pristine%20gray%20flake%20garage%20epoxy%20floor-1.png"
                    alt="Flake epoxy garage floor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4">
                  <span className="flex items-center gap-3 text-text-strong cursor-default">
                    <div className="w-4 h-4 border-2 border-accent-primary bg-transparent"></div>
                    <span className="text-sm font-medium uppercase tracking-wide">Garage Floors</span>
                  </span>
                </div>
              </div>

              <div>
                <div className="w-full h-56 md:h-64 overflow-hidden bg-bg-muted">
                  <img 
                    src="/upscale-coatings/gallery-examples/Freshly%20Coated%20Concrete%20Driveway-5.png"
                    alt="Outdoor concrete coating"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4">
                  <span className="flex items-center gap-3 text-text-strong cursor-default">
                    <div className="w-4 h-4 border-2 border-accent-primary bg-transparent"></div>
                    <span className="text-sm font-medium uppercase tracking-wide">Outdoor Concrete</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20" style={{ backgroundColor: "#dcc37c" }}>
        <CornerDots className="pointer-events-none absolute -right-4 -top-6 w-40 md:w-52" />
        <CornerDots className="pointer-events-none absolute -left-4 -top-6 w-40 md:w-52 -scale-x-100" />
        <CornerDots className="pointer-events-none absolute -right-4 -bottom-6 w-40 md:w-52 -scale-y-100" />
        <CornerDots className="pointer-events-none absolute -left-4 -bottom-6 w-40 md:w-52 rotate-180" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] mb-14" style={{ fontFamily: "'PP Editorial Old', serif", fontWeight: 400 }}>
            The Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member) => (
              <article key={member.name} className="flex flex-col">
                <div className="relative w-full" style={{ aspectRatio: "748 / 847" }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute bottom-0 left-1/2 max-h-full max-w-full -translate-x-1/2 object-contain"
                  />
                </div>
                <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-[#1a1a1a]">
                  {member.role}
                </p>
                <p className="mt-3 text-base leading-relaxed text-[#1a1a1a]/85">
                  {member.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section ref={testimonialRef} className="relative flex items-center justify-center overflow-hidden" style={{ height: '130vh' }}>
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/upscale-coatings/testimonials-banner.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: 'white' }}>
            {displayedText.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < displayedText.split('\n').length - 1 && <br />}
              </span>
            ))}
            {isTyping && <span className="animate-pulse">|</span>}
          </h2>
          <span className="inline-flex items-center gap-3 mt-8 text-white cursor-default">
            <span className="w-4 h-4 bg-accent-primary"></span>
            <span className="text-sm font-medium uppercase tracking-wide">Read Testimonials</span>
          </span>
        </div>
      </section>

      {/* Our Gallery */}
      <section className="py-24 relative overflow-hidden" style={{backgroundColor: '#1a1a1a'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading and copy */}
          <div 
            ref={ourGallerySection.ref}
            className={`max-w-xl transition-all duration-1000 ${
              ourGallerySection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-strong mb-6" style={{ fontFamily: "'PP Editorial Old', serif", fontWeight: 400 }}>
              Our Gallery
            </h2>
            <p className="text-sm text-text mb-6">
              Garages, metallic pours, waterproof decks, and shop floors from across the Wasatch Front. Same prep standard, different finish for how the space is used.
            </p>
            <span className="flex items-center gap-3 text-text-strong cursor-default">
              <div className="w-4 h-4 bg-accent-primary"></div>
              <span className="text-sm font-medium uppercase tracking-wide">VIEW ALL IMAGES</span>
            </span>
          </div>
        </div>

        {/* Edge-to-edge carousel */}
        <div 
          ref={galleryCarousel.ref}
          className={`-mx-4 sm:-mx-6 lg:-mx-8 mt-8 lg:mt-12 transition-all duration-1000 ${
            galleryCarousel.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Carousel opts={{ loop: true, align: 'start' }} className="w-full">
            <CarouselContent>
              {[
                '/upscale-coatings/gallery-examples/Finished%20ivory%20patio%20under%20timber%20pergola-6.png',
                '/upscale-coatings/gallery-examples/Fresh%20Granite-Flake%20Epoxy%20Garage%20Floor-5.png',
                '/upscale-coatings/gallery-examples/Freshly%20Coated%20Walkway%20and%20Steps-3.png',
                '/upscale-coatings/gallery-examples/Freshly%20Finished%20Greige%20Concrete%20Patio-1.png',
                '/upscale-coatings/gallery-examples/Graphite%20Gray%20Coated%20Front%20Porch-4.png',
                '/upscale-coatings/gallery-examples/Natural%20Sand-Tone%20Pool%20Deck-2.png'
              ].map((src, idx) => (
                <CarouselItem key={idx} className="basis-[85%] md:basis-[75%] lg:basis-[70%]">
                  <div className="w-full h-[26rem] md:h-[32rem] lg:h-[36rem] overflow-hidden">
                    <img
                      src={src}
                      alt={`Gallery ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="right-40 bottom-6 top-auto left-auto -translate-y-0 bg-accent-primary hover:bg-accent-primary-hover text-[#1a1a1a] shadow-sm border-0" />
            <CarouselNext className="right-28 bottom-6 top-auto -translate-y-0 bg-accent-primary hover:bg-accent-primary-hover text-[#1a1a1a] shadow-sm border-0" />
          </Carousel>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
