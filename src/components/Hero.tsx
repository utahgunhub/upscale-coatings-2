import { useEffect, useState } from "react";

interface HeroProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundVideoSrc?: string; // optional video background
  hideCTA?: boolean; // optionally hide CTA
  darkerOverlay?: boolean; // optional darker overlay
}

export default function Hero({
  title = "Epoxy Floors, Built to Last",
  subtitle = "Garage flake systems, metallic coatings, and concrete finishes for Utah homes and businesses.",
  backgroundImage = "/upscale-coatings/custom-garage-floor-epoxy.png",
  backgroundVideoSrc,
  hideCTA = false,
  darkerOverlay = false,
}: HeroProps) {
  const [scrollY, setScrollY] = useState(0);

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

  return (
    <section className="relative h-[90vh] md:h-screen flex items-end justify-center overflow-hidden">
      {/* Background (image or video) */}
      {backgroundVideoSrc ? (
        <div
          className="absolute inset-0"
          style={{ transform: `translateY(${scrollY * 0.4}px)` }}
        >
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={backgroundVideoSrc}
            autoPlay
            muted
            loop
            playsInline
          />
          <div className={`absolute inset-0 ${darkerOverlay ? 'bg-black/60' : 'bg-black/50'}`}></div>
        </div>
      ) : (
        <div 
          className="absolute inset-0 parallax-bg"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transform: `translateY(${scrollY * 0.4}px)`,
          }}
        >
          <div className={`absolute inset-0 ${darkerOverlay ? 'bg-black/60' : 'bg-black/50'}`}></div>
        </div>
      )}

      {/* Text and optional CTA */}
      <div className="absolute bottom-20 md:bottom-28 lg:bottom-32 left-0 right-0 z-10">
        <div className="w-[80%] mx-auto">
          <h1 className="text-white leading-tight mb-6" style={{ fontFamily: "'PP Editorial Old', serif", fontWeight: 400 }}>
            {title === "Built for Utah, Made to Last" ? (
              <>
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Built for Utah,</span>
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl italic">Made to Last</span>
              </>
            ) : (
              <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl">{title}</span>
            )}
          </h1>
          {subtitle && (
            <p className="text-white/90 text-lg md:text-xl lg:text-2xl mb-6 max-w-xl">
              {subtitle}
            </p>
          )}
          {!hideCTA && (
            <button type="button" className="bg-accent-primary text-[#1a1a1a] px-6 py-3 rounded-full font-medium cursor-default">
              Get a Free Quote
            </button>
          )}
        </div>
      </div>
    </section>
  );
}