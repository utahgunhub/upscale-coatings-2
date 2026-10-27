import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type Service = {
  id: string;
  title: string;
  description: string;
  features: string[];
  benefits: string;
  image: string;
  showColors?: boolean;
};

const coatingServices: Service[] = [
  {
    id: "flake-floor-garage-epoxy",
    title: "Flake Floor Garage Epoxy",
    description: "Transform your garage with durable, beautiful epoxy coatings that resist stains and daily wear.",
    features: [
      "Decorative flake broadcast for depth and texture",
      "Chemical- and stain-resistant epoxy base",
      "Low-VOC, UV-stable topcoat",
      "Slip-resistant final layer",
      "15+ year performance warranty available",
    ],
    benefits: "Showroom-ready appearance, easy cleaning, long-lasting protection",
    image: "/upscale-coatings/custom-garage-floor-epoxy.png",
    showColors: true,
  },
  {
    id: "outdoor-concrete-coatings",
    title: "Outdoor Concrete Coatings",
    description: "Professional concrete coating solutions for driveways, patios, and outdoor surfaces that last.",
    features: [
      "Industrial-grade coatings built for UV and weather exposure",
      "Breathable primers to prevent moisture trapping",
      "Slip-resistant textures and finishes",
      "Quick-cure formulations for minimal downtime",
      "Custom color and aggregate options",
    ],
    benefits: "Durable outdoor protection, elevated curb appeal, simplified maintenance",
    image: "/upscale-coatings/gallery-images/Outdoor%20Epoxy%20Pad.jpg",
  },
  {
    id: "metallic-epoxy-floors",
    title: "Metallic Epoxy Floors",
    description: "Custom metallic pigments and expert application techniques create rich, flowing designs that capture the look of modern luxury and high-end style.",
    features: [
      "Layered metallic pigments with pearl effects",
      "Artisan flow patterns tailored to your space",
      "High-build polyaspartic or epoxy topcoats",
      "Scratch- and UV-resistant finishes",
      "Seamless, glossy surface that reflects depth",
    ],
    benefits: "Striking visual impact, easy maintenance, durable for residential and commercial spaces",
    image: "/upscale-coatings/gallery-images/Metallic.jpg",
  },
  {
    id: "concrete-resurfacing",
    title: "Concrete Resurfacing",
    description: "Restore strength and beauty to damaged or worn concrete with precision resurfacing backed by performance materials.",
    features: [
      "Crack repair, leveling, and spalling restoration",
      "Diamond grinding and surface prep",
      "Polymer-modified overlays for smoothness",
      "Optional sealing or waterproofing topcoats",
      "Seamless transition ready for coatings",
    ],
    benefits: "Repaired structural integrity, smooth finish, ready for decorative coatings or daily use",
    image: "/upscale-coatings/gallery-images/Hand%20Troweling%20For%20Resurfacing%20Service.jpg",
  },
  {
    id: "overhead-garage-storage",
    title: "Overhead Garage Storage",
    description: "Maximize your garage space with sturdy overhead storage solutions that keep floors clear and belongings accessible.",
    features: [
      "Heavy-duty steel brackets rated for high loads",
      "Adjustable shelving and safety straps",
      "Powder-coated finish to resist corrosion",
      "Low-profile design for tall items and vehicles",
      "Professional installation and load testing",
    ],
    benefits: "Organized storage, clear floor space, made-to-fit configurations",
    image: "/upscale-coatings/overhead-storage.png",
  },
  {
    id: "waterproof-deck-coating",
    title: "Waterproof Deck Coating",
    description: "Keep your deck looking great and built to last with waterproofing solutions that protect against water, weather, and wear.",
    features: [
      "100% waterproof membrane system",
      "Slip-resistant additives for safety",
      "UV-stable, breathable topcoat",
      "Flexible formula adapts to seasonal movement",
      "5-10 year lifecycle with routine maintenance",
    ],
    benefits: "Weatherproof protection, longer deck life, easy-to-clean surface",
    image: "/upscale-coatings/waterproof-deck-coatings.png",
  },
  {
    id: "commercial-epoxy-flooring",
    title: "Commercial Epoxy Flooring",
    description: "Professional epoxy systems for showrooms, offices, and retail spaces that need a clean, durable finish.",
    features: [
      "High-build epoxy base for daily traffic",
      "Custom gloss and color options",
      "Slip-resistant texture blends",
      "Chemical and scuff resistance",
      "Fast-cure scheduling for minimal downtime",
    ],
    benefits: "Polished appearance, easy maintenance, long-term durability",
    image: "/upscale-coatings/commercial-epoxy-flooring.png",
  },
  {
    id: "basement-floor-coatings",
    title: "Basement Floor Coatings",
    description: "Moisture-aware basement coating systems that keep below-grade floors clean, sealed, and comfortable.",
    features: [
      "Moisture-tested primer systems",
      "Epoxy or polyaspartic topcoats",
      "Stain and dust resistance",
      "Decorative flake options",
      "Low-maintenance cleaning",
    ],
    benefits: "Cleaner basements, reduced dust, livable finished spaces",
    image: "/upscale-coatings/basement-floor-coatings.png",
  },
  {
    id: "concrete-polishing",
    title: "Concrete Polishing",
    description: "Polished concrete floors that look modern, brighten spaces, and require minimal maintenance.",
    features: [
      "Matte, satin, or high-gloss options",
      "Densified, hardened concrete surface",
      "Stain-resistant guard application",
      "Low dusting, easy upkeep",
      "Ideal for homes and commercial spaces",
    ],
    benefits: "Modern aesthetic, high durability, low lifetime costs",
    image: "/upscale-coatings/concrete-polishing.png",
  },
  {
    id: "pool-deck-coatings",
    title: "Pool Deck Coatings",
    description: "Slip-resistant pool deck finishes that handle water exposure, UV rays, and Utah’s summer heat.",
    features: [
      "Traction-focused texture options",
      "UV-stable topcoat for color retention",
      "Comfortable underfoot finishes",
      "Water and chemical resistance",
      "Custom tint and aggregate blends",
    ],
    benefits: "Safer pool areas, cooler surfaces, longer-lasting patios",
    image: "/upscale-coatings/pool-deck-coatings.png",
  },
  {
    id: "industrial-floor-coatings",
    title: "Industrial Floor Coatings",
    description: "Heavy-duty coatings for warehouses and facilities that need abrasion and chemical resistance.",
    features: [
      "High-build epoxy systems",
      "Chemical-resistant topcoats",
      "Forklift and cart traffic ready",
      "Traffic lane and safety markings",
      "Phased installation planning",
    ],
    benefits: "Reduced downtime, safer work areas, long-term performance",
    image: "/upscale-coatings/industrial-floor-coatings.png",
  },
  {
    id: "commercial-kitchen-flooring",
    title: "Commercial Kitchen Flooring",
    description: "Slip-resistant, sanitary kitchen floors designed for restaurants and food service operations.",
    features: [
      "Textured, non-slip surface",
      "Chemical and heat resistance",
      "Cove base and drain detailing options",
      "Non-porous, easy-to-clean finish",
      "Off-hours installation scheduling",
    ],
    benefits: "Improved safety, faster cleanup, dependable service floors",
    image: "/upscale-coatings/commercial-kitchen-flooring.png",
  },
];

export default function Services() {
  return (
    <Layout>
      <section className="relative h-[60vh] flex items-end justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(/upscale-coatings/services-hero.png)`,
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
              <div className="text-4xl md:text-5xl lg:text-6xl">Services</div>
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-xl">
              Garage floors, metallic finishes, decks, and commercial slabs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-strong mb-4">Services</h2>
            <p className="text-xl text-text max-w-3xl mx-auto">
              One crew, one prep standard, and a system picked for the room — not a one-size kit rolled over dusty concrete.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coatingServices.map((service) => (
              <article id={service.id} key={service.id} className="bg-[#333333] border border-[#33333380] rounded-2xl overflow-hidden flex flex-col">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-semibold text-text-strong mb-3">{service.title}</h3>
                  <p className="text-text leading-relaxed mb-6">{service.description}</p>

                  <p className="text-sm font-semibold uppercase tracking-wide text-accent-primary mb-3">Key Features</p>
                  <ul className="space-y-2 mb-6 text-text">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-primary"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-text mb-8">
                    <span className="font-semibold text-text-strong">Benefits: </span>
                    {service.benefits}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-3">
                    <Button variant="primary" size="sm" asChild>
                      <Link to="/contact">Learn More</Link>
                    </Button>
                    {service.showColors && (
                      <Button variant="secondary" size="sm" asChild>
                        <Link to="/about#team">View Colors</Link>
                      </Button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-text-strong mb-6 leading-tight" style={{ fontFamily: "'PP Editorial Old', serif", fontWeight: 400 }}>
            Ready for a Floor That Lasts?
          </h2>
          <p className="text-xl text-text mb-8">
            Tell us the square footage and how the space is used. We'll recommend a system and a date.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" asChild>
              <Link to="/contact">Request a Quote</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/gallery">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
