import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  MapPin,
  Layers,
  Sparkles,
  ShieldCheck,
  LifeBuoy
} from "lucide-react";
import { useEffect, useState, useRef } from "react";

const coatingSteps = [
  {
    icon: <MapPin size={32} />,
    title: "Walk the Slab",
    subtitle: "Scope, color, and moisture",
    description: "We measure the space, look at cracks and moisture, and talk through flake, metallic, or a commercial system. You leave with a clear scope before anyone grinds."
  },
  {
    icon: <Layers size={32} />,
    title: "Grind and Repair",
    subtitle: "The step cheap kits skip",
    description: "Diamond grinding opens the concrete. Cracks get filled. A moisture-minded primer goes down so the coating has something real to hold onto."
  },
  {
    icon: <Sparkles size={32} />,
    title: "Base Coat and Broadcast",
    subtitle: "Color goes in while it's wet",
    description: "Industrial epoxy is rolled or poured, then flake is broadcast full or partial — or metallic pigment is worked across the floor until the movement looks right."
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Clear Topcoat",
    subtitle: "The layer that takes the abuse",
    description: "A UV-stable polyaspartic or polyurethane topcoat locks in the color and stands up to hot tires, salt, oil, and the sun that hits Utah patios."
  },
  {
    icon: <LifeBuoy size={32} />,
    title: "Cure and Care",
    subtitle: "When you can park again",
    description: "We walk the floor with you, point out the cure window, and leave care notes. Foot traffic comes back fast. Vehicles wait until the coating says so."
  }
];

const flakeColors = [
  { name: "Domino", title: "Flake blend", image: "/upscale-coatings/new-flake-colors/Color%20Name_%20Domino.png" },
  { name: "Nightfall", title: "Flake blend", image: "/upscale-coatings/new-flake-colors/Color%20Name_%20Nightfall.png" },
  { name: "Shoreline", title: "Flake blend", image: "/upscale-coatings/new-flake-colors/Color%20Name_%20Shoreline.png" },
  { name: "Tidal Wave", title: "Flake blend", image: "/upscale-coatings/new-flake-colors/Color%20Name_%20Tidal%20Wave.png" },
  { name: "Gravel", title: "Flake blend", image: "/upscale-coatings/new-flake-colors/Color%20Name_%20Gravel.png" },
  { name: "Slate", title: "Flake blend", image: "/upscale-coatings/new-flake-colors/Color%20Name_%20Slate.png" },
  { name: "Quartzite", title: "Flake blend", image: "/upscale-coatings/new-flake-colors/Color%20Name_%20Quartzite.png" },
  { name: "Orbit", title: "Flake blend", image: "/upscale-coatings/new-flake-colors/Color%20Name_%20Orbit.png" },
  { name: "Outback", title: "Flake blend", image: "/upscale-coatings/new-flake-colors/Color%20Name_%20Outback.png" },
  { name: "Cabin Fever", title: "Flake blend", image: "/upscale-coatings/new-flake-colors/Color%20Name_%20Cabin%20Fever.png" },
];

export default function About() {
  const [scrollY, setScrollY] = useState(0);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [showFixedIcon, setShowFixedIcon] = useState(false);
  const [iconTopPosition, setIconTopPosition] = useState(0);
  const timelineContainerRef = useRef<HTMLDivElement>(null);
  const teamSectionRef = useRef<HTMLDivElement>(null);
  const [teamParallax, setTeamParallax] = useState(0);

  // Fade-in hook
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
      
      // Calculate team parallax
      if (teamSectionRef.current) {
        const rect = teamSectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const windowHeight = window.innerHeight;
        
        // Align when section is centered/visible in viewport
        // Progress goes from 0 to 1 as section moves from bottom to middle of screen
        const scrollProgress = (windowHeight - sectionTop) / (windowHeight * 0.5);
        const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
        
        setTeamParallax(clampedProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate icon position along the timeline as user scrolls - smooth continuous movement
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      
      ticking = true;
      requestAnimationFrame(() => {
        const container = timelineContainerRef.current;
        if (!container) {
          ticking = false;
          return;
        }

        const rect = container.getBoundingClientRect();
        const containerTop = rect.top;
        const containerBottom = rect.bottom;
        const containerHeight = rect.height;
        const viewportHeight = window.innerHeight;
        const viewportCenter = viewportHeight / 2;

        // Show icon when any part of timeline is on screen
        if (containerBottom < 0 || containerTop > viewportHeight) {
          setShowFixedIcon(false);
          ticking = false;
          return;
        }

        setShowFixedIcon(true);

        // Calculate smooth continuous position
        // Icon should be at viewportCenter and move through the timeline
        let iconTop = viewportCenter - containerTop;
        
        // Clamp to container bounds (stays at start/end when scrolling past)
        iconTop = Math.max(0, Math.min(containerHeight, iconTop));
        setIconTopPosition(iconTop);

        // Calculate which step we're on based on position
        const progress = iconTop / containerHeight;
        const stepCount = coatingSteps.length;
        const stepIndex = Math.max(0, Math.min(stepCount - 1, Math.floor(progress * stepCount)));
        setActiveStepIndex(stepIndex);

        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const differenceSection = useFadeIn();
  const methodSection = useFadeIn();
  const serviceAreasSection = useFadeIn();
  const whyBradford1 = useFadeIn(0.4);
  const whyBradford2 = useFadeIn(0.4);
  
  // Typewriter effect for closing quote
  const [typewriterText, setTypewriterText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const typewriterRef = useRef<HTMLDivElement>(null);
  const fullText = "A floor that stands up to Utah winters, road salt, and the way you actually use the space.";
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isTyping && typewriterText === '') {
          setIsTyping(true);
        }
      },
      { threshold: 0.5 }
    );

    if (typewriterRef.current) {
      observer.observe(typewriterRef.current);
    }

    return () => observer.disconnect();
  }, [isTyping, typewriterText]);

  useEffect(() => {
    if (isTyping && typewriterText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypewriterText(fullText.slice(0, typewriterText.length + 1));
      }, 30); // Speed of typing (30ms per character)
      
      return () => clearTimeout(timeout);
    } else if (typewriterText.length === fullText.length) {
      setIsTyping(false);
    }
  }, [isTyping, typewriterText, fullText]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-end justify-center overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/upscale-coatings/gallery-images/Garage(2).jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Text at bottom left - aligned with navbar */}
        <div className="absolute bottom-16 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-white leading-tight mb-4" style={{ fontFamily: "'PP Editorial Old', serif", fontWeight: 400 }}>
              <div className="text-4xl md:text-5xl lg:text-6xl">About</div>
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-xl">
              Epoxy floors finished the way we'd want them in our own garage.
            </p>
          </div>
        </div>
      </section>

      {/* Our Difference - Clean Layout */}
      <section id="difference" className="py-20" style={{backgroundColor: '#33333380'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={differenceSection.ref}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start transition-all duration-1000 ${
              differenceSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-text-strong mb-2 leading-tight">
                What Sets Us Apart
              </h2>
              <p className="text-xl md:text-2xl text-text italic">
                Every detail matters
              </p>
            </div>
            <div>
              <p className="text-base text-text leading-relaxed">
                Upscale Coatings is a Utah epoxy crew. We don't roll a hardware-store kit over a dirty slab. Every floor is ground, repaired, primed, coated, and topcoated with materials picked for freeze-thaw, road salt, and the UV that beats on outdoor concrete.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Bradford Method - Progressive Timeline */}
      <section className="py-20 relative overflow-hidden">
        {/* Background image */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(/upscale-coatings/gallery-images/Metallic.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div 
            ref={methodSection.ref}
            className={`mb-12 md:pl-32 transition-all duration-1000 ${
              methodSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Coating Process
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
              Five steps between a stained slab and a floor you can park on
            </p>
          </div>

          <div ref={timelineContainerRef} className="relative">
            {/* Timeline line - desktop only */}
            <div className="hidden md:block absolute left-16 top-0 bottom-0 w-1 bg-[#d7b047]/70" />

            {/* Icon that moves smoothly along the timeline */}
            {showFixedIcon && (
              <div 
                className="hidden md:flex absolute left-16 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center shadow-2xl z-50"
                style={{
                  top: `${iconTopPosition}px`,
                  backgroundColor: '#d7b047',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
                  willChange: 'top'
                }}
              >
                <div className="text-black text-xl font-bold transition-all duration-300">
                  {activeStepIndex + 1}
                </div>
              </div>
            )}

            {coatingSteps.map((step, index) => (
              <div
                key={index}
                className="method-step relative mb-8 last:mb-0 md:pl-32"
              >
                <div 
                  className={`bg-[#1a1a1a]/85 p-8 shadow-md transition-all duration-700 hover:shadow-xl max-w-5xl ${
                    activeStepIndex >= index ? 'opacity-90' : 'opacity-50'
                  }`}
                  style={{
                    transform: activeStepIndex >= index ? 'scale(1)' : 'scale(0.95)'
                  }}
                >
                  <div className="mb-6 text-[#d7b047]">
                    {step.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-text-strong mb-4">
                    {step.title}
                  </h3>
                  <p className="text-text leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Profiles */}
      <section id="team" className="py-20" style={{backgroundColor: '#33333380'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-text-strong mb-12 text-center">
              Flake Colors
            </h2>
            
            <div 
              ref={teamSectionRef}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8"
            >
              {flakeColors.map((member, index) => {
                const offset = index % 2 === 0 ? -12 : 12;
                const currentOffset = offset * (1 - teamParallax);
                
                return (
                  <div
                    key={index}
                    className="cursor-pointer"
                    style={{
                      transform: `translateY(${currentOffset}px)`,
                      transition: 'transform 0.1s ease-out',
                      willChange: 'transform'
                    }}
                  >
                    <div className="overflow-hidden rounded-xl mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        style={{ aspectRatio: '3/4' }}
                      />
                    </div>
                    <h3 className="text-lg font-bold text-text-strong mb-1">{member.name}</h3>
                    <p className="text-sm text-text">{member.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Bradford - Alternating Layout */}
      <section className="pt-20 pb-10" style={{backgroundColor: '#1a1a1a'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-strong mb-4" style={{ fontFamily: "'PP Editorial Old', serif", fontWeight: 400 }}>
              Why <span className="italic">Upscale?</span>
            </h2>
          </div>

          {/* First Row - Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-4 items-center">
            {/* Left - Text Content */}
            <div 
              ref={whyBradford1.ref}
              className={`order-1 transition-all duration-1000 ease-out ${
                whyBradford1.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl text-text-strong mb-6 leading-tight" style={{ fontFamily: "'PP Editorial Old', serif", fontWeight: 400 }}>
                Prep First,{' '}
                <span className="italic block mt-2">
                  Then the Pretty Part
                </span>
              </h3>
              
              <p className="text-base md:text-lg text-text leading-relaxed mb-6">
                Most failed epoxy jobs fail in the first hour, when someone coats over dust, sealer, or a damp slab. We grind until the concrete is open, then build the system on top of that.
              </p>
              
              <p className="text-base md:text-lg text-text leading-relaxed">
                Color is the fun part — full flake, partial flake, or a metallic pour — and it only lasts if the layers under it were done on purpose.
              </p>
            </div>

            {/* Right - Image */}
            <div className="order-2 mb-8 lg:mb-0">
              <div className="overflow-hidden rounded-xl shadow-lg h-[360px]">
                <img
                  src="/upscale-coatings/gallery-images/Hand%20Troweling%20For%20Resurfacing%20Service.jpg"
                  alt="Hand troweling a concrete surface before coating"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Second Row - Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Image */}
            <div className="order-2 lg:order-1">
              <div className="overflow-hidden rounded-xl shadow-lg h-[360px]">
                <img
                  src="/upscale-coatings/custom-garage-floor-epoxy.png"
                  alt="Finished flake epoxy garage floor"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right - Text Content */}
            <div 
              ref={whyBradford2.ref}
              className={`order-1 lg:order-2 transition-all duration-1000 ease-out ${
                whyBradford2.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl text-text-strong mb-6 leading-tight" style={{ fontFamily: "'PP Editorial Old', serif", fontWeight: 400 }}>
                Your Concerns<br />
                <span className="italic">are our Concerns</span>
              </h3>
              
              <p className="text-base md:text-lg text-text leading-relaxed mb-6">
                You get a straight answer on cure time, what the floor can take, and what it should not. Hot tires, snowmelt, and a pressure washer are part of the conversation before we book the day.
              </p>
              
              <p className="text-base md:text-lg text-text leading-relaxed">
                Quotes are free. Most garage installs are one to two days. Commercial work is scheduled around the hours you can give the floor up.
              </p>
            </div>
          </div>

          {/* Bottom Quote Section */}
          <div ref={typewriterRef} className="text-center max-w-4xl mx-auto mt-16">
            <p className="text-2xl md:text-3xl text-text-strong leading-relaxed italic min-h-[120px] flex items-center justify-center" style={{ fontFamily: "'PP Editorial Old', serif", fontWeight: 300 }}>
              {typewriterText}
              {isTyping && <span className="inline-block w-1 h-8 bg-text-strong ml-1 animate-pulse"></span>}
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas - Map View */}
      <section className="py-20 relative overflow-hidden" style={{backgroundColor: '#333333'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-12">
            {/* Left: Copy */}
            <div 
              ref={serviceAreasSection.ref}
              className={`transition-all duration-1000 lg:col-span-5 ${
                serviceAreasSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 italic" style={{ fontFamily: "'PP Editorial Old', serif", fontWeight: 400 }}>
                Where We Coat
              </h2>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8">
                Salt Lake City, Utah County, Ogden, and the towns between them along the Wasatch Front.
              </p>
              <div className="flex flex-col gap-3 mb-8 text-white">
                <Link to="/salt-lake-city" className="hover:text-white/80">Salt Lake County</Link>
                <Link to="/utah-county" className="hover:text-white/80">Utah County</Link>
                <Link to="/ogden" className="hover:text-white/80">Ogden & Davis County</Link>
              </div>
              <Link to="/contact" onClick={() => {
                setTimeout(() => {
                  const formElement = document.getElementById('contact-form');
                  if (formElement) {
                    formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 100);
              }}>
                <Button className="bg-accent-primary text-[#1a1a1a] hover:bg-accent-primary-hover px-8 py-6 text-base rounded-full">
                  Request a Quote
                </Button>
              </Link>
            </div>

            {/* Right: Map */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/upscale-coatings/gallery-images/Garage(3).jpg" 
                  alt="Finished epoxy garage floor in Utah"
                  className="w-full h-auto object-cover min-h-[280px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Add CSS for animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Layout>
  );
}