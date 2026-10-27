import Layout from "@/components/Layout";
import { useMemo, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Link } from "react-router-dom";

type FilterType = "all" | "garages" | "metallic" | "outdoor" | "commercial";

const filters: { id: FilterType; label: string }[] = [
  { id: "all", label: "All" },
  { id: "garages", label: "Garages" },
  { id: "metallic", label: "Metallic" },
  { id: "outdoor", label: "Outdoor" },
  { id: "commercial", label: "Commercial" },
];

const images: { src: string; alt: string; category: Exclude<FilterType, "all"> }[] = [
  { src: "/upscale-coatings/gallery-images/Garage.jpg", alt: "Flake epoxy garage floor", category: "garages" },
  { src: "/upscale-coatings/gallery-images/Garage(1).jpg", alt: "Full flake garage coating", category: "garages" },
  { src: "/upscale-coatings/gallery-images/Garage(2).jpg", alt: "Speckled flake garage floor", category: "garages" },
  { src: "/upscale-coatings/gallery-images/Garage(3).jpg", alt: "Finished epoxy garage", category: "garages" },
  { src: "/upscale-coatings/custom-garage-floor-epoxy.png", alt: "Custom garage floor epoxy", category: "garages" },
  { src: "/upscale-coatings/overhead-storage.png", alt: "Garage floor with overhead storage", category: "garages" },
  { src: "/upscale-coatings/gallery-images/Storage%20Space.png", alt: "Coated garage storage space", category: "garages" },
  { src: "/upscale-coatings/gallery-images/Metallic.jpg", alt: "Metallic epoxy floor", category: "metallic" },
  { src: "/upscale-coatings/metallic.PNG", alt: "Metallic epoxy pour", category: "metallic" },
  { src: "/upscale-coatings/metallic-2.png", alt: "Dark metallic epoxy finish", category: "metallic" },
  { src: "/upscale-coatings/metallic-3.png", alt: "Metallic epoxy with movement", category: "metallic" },
  { src: "/upscale-coatings/gallery-images/Waterproof%20Deck.jpg", alt: "Waterproof deck coating", category: "outdoor" },
  { src: "/upscale-coatings/gallery-images/Outdoor%20Epoxy%20Pad.jpg", alt: "Outdoor epoxy pad", category: "outdoor" },
  { src: "/upscale-coatings/waterproof-deck-coatings.png", alt: "Waterproof deck coating system", category: "outdoor" },
  { src: "/upscale-coatings/pool-deck-coatings.png", alt: "Pool deck coating", category: "outdoor" },
  { src: "/upscale-coatings/commercial-kitchen-flooring.png", alt: "Commercial kitchen floor", category: "commercial" },
  { src: "/upscale-coatings/commercial-epoxy-flooring.png", alt: "Commercial epoxy floor", category: "commercial" },
  { src: "/upscale-coatings/gallery-images/Industrial%20Space.png", alt: "Industrial epoxy floor", category: "commercial" },
  { src: "/upscale-coatings/industrial-floor-coatings.png", alt: "Industrial floor coating", category: "commercial" },
  { src: "/upscale-coatings/basement-floor-coatings.png", alt: "Basement floor coating", category: "commercial" },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filtered = useMemo(
    () => (activeFilter === "all" ? images : images.filter((image) => image.category === activeFilter)),
    [activeFilter],
  );

  return (
    <Layout>
      <section className="relative h-[60vh] flex items-end justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(/upscale-coatings/gallery-hero.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="absolute bottom-16 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-white leading-tight mb-4" style={{ fontFamily: "'PP Editorial Old', serif", fontWeight: 400 }}>
              <div className="text-4xl md:text-5xl lg:text-6xl">Gallery</div>
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-xl">
              Garage floors, metallic pours, decks, and commercial slabs across Utah.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-wrap gap-6 mb-12 border-b border-[#33333380]">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`pb-4 font-medium text-lg transition-all ${
                  activeFilter === filter.id
                    ? "text-accent-primary border-b-2 border-accent-primary"
                    : "text-white/70 hover:text-accent-primary"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((image) => (
              <Dialog key={image.src}>
                <DialogTrigger asChild>
                  <button className="group block overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary">
                    <img
                      src={encodeURI(image.src)}
                      alt={image.alt}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-6xl p-0 bg-transparent border-none shadow-none sm:rounded-none">
                  <img
                    src={encodeURI(image.src)}
                    alt={image.alt}
                    className="w-full h-auto max-h-[90vh] object-contain"
                  />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: "#333333" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl text-text-strong mb-4" style={{ fontFamily: "'PP Editorial Old', serif", fontWeight: 400 }}>
            Ready to Start Your Project?
          </h2>
          <p className="text-lg md:text-xl text-text mb-8">
            Send the square footage and a photo of the slab. We'll recommend a system and a time to coat it.
          </p>
          <Link to="/contact">
            <button className="bg-accent-primary text-[#1a1a1a] px-8 py-4 rounded-full text-base md:text-lg font-medium hover:bg-accent-primary-hover transition-colors">
              Schedule Your Consultation
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
