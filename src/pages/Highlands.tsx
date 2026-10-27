import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Highlands() {
  useEffect(() => {
    document.title = "Epoxy Flooring in Ogden & Davis County | Upscale Coatings";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Epoxy garage floors, waterproof decks, and concrete coatings in Ogden, Layton, Bountiful, Farmington, Kaysville, and Davis County."
      );
    }
  }, []);

  return (
    <Layout>
      <section className="relative h-[60vh] flex items-end justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(/upscale-coatings/waterproof-deck-coatings.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="absolute bottom-16 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-white leading-tight mb-4" style={{ fontFamily: "'PP Editorial Old', serif", fontWeight: 400 }}>
              <div className="text-4xl md:text-5xl lg:text-6xl">Ogden & Davis County</div>
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-xl">
              Garage floors and outdoor coatings north of Salt Lake.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg">
        <div className="w-[80%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <div className="relative h-72 md:h-96 lg:h-[520px] overflow-hidden shadow-2xl">
                <img
                  src="/upscale-coatings/gallery-images/Waterproof%20Deck.jpg"
                  alt="Waterproof deck coating"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-4xl font-bold text-text-strong mb-6">North of the Valley</h2>
              <p className="text-text text-lg leading-relaxed mb-5">
                Ogden and Davis County see the same salt, the same canyon wind, and the same freeze-thaw that beats up bare concrete everywhere else on the Front. Upscale Coatings covers garages, basements, shop floors, and outdoor decks from Bountiful north through Ogden.
              </p>
              <p className="text-text leading-relaxed mb-5">
                Indoor floors get flake or metallic epoxy. Decks and patios get a waterproof, UV-stable system so meltwater stays out of the structure. Pool decks are coated for grip and sun, not a glossy garage look that fails outdoors.
              </p>
              <p className="text-text leading-relaxed mb-0">
                <span className="font-semibold text-text-strong">Cities we cover: </span>
                Bountiful, Centerville, Farmington, Kaysville, Layton, Syracuse, Clearfield, Roy, Ogden, South Ogden, and North Ogden. Park City projects are scheduled by request.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg">
        <div className="w-[80%] mx-auto">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-3xl md:text-4xl font-bold text-text-strong">Finishes</h2>
            <Link to="/gallery" className="hidden md:inline-flex items-center gap-3 text-text-strong hover:opacity-80 transition-opacity">
              <div className="w-4 h-4 border-2 border-accent-primary bg-transparent"></div>
              <span className="text-sm font-medium uppercase tracking-wide">Explore Gallery</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Waterproof Coating", image: "/upscale-coatings/pool-deck-coatings.png" },
              { title: "Flake Epoxy", image: "/upscale-coatings/gallery-images/Garage.png" },
              { title: "Basement Floor", image: "/upscale-coatings/basement-floor-coatings.png" },
              { title: "Outdoor Coating", image: "/upscale-coatings/concrete-coatings.png" },
            ].map((card) => (
              <div key={card.title} className="group bg-[#333333] border border-[#33333380] shadow-sm overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-text-strong">{card.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-bg">
        <div className="w-[80%] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text-strong mb-6">Ogden Service Area</h2>
          <div className="w-full h-[300px] md:h-[450px] overflow-hidden border">
            <iframe
              src="https://maps.google.com/maps?q=Ogden%2C%20UT&z=11&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              title="Ogden service area"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#333333" }}>
        <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-12 items-end gap-8">
          <div className="lg:col-span-8">
            <h2 className="text-white leading-tight" style={{ fontFamily: "'PP Editorial Old', serif", fontWeight: 400 }}>
              <span className="block text-4xl md:text-5xl lg:text-6xl">Coat a Floor</span>
              <span className="block text-4xl md:text-5xl lg:text-6xl italic">North of Salt Lake</span>
            </h2>
          </div>
          <div className="lg:col-span-4 text-white/80 text-lg">
            Garages, decks, and basements from Bountiful through Ogden.
          </div>
        </div>
        <div className="w-[80%] mx-auto mt-12 flex flex-wrap gap-4">
          <Link to="/contact" className="bg-accent-primary text-[#1a1a1a] px-6 py-4 rounded-full font-medium hover:bg-accent-primary-hover transition">
            Request a Quote
          </Link>
          <Link to="/gallery" className="bg-accent-primary text-[#1a1a1a] px-6 py-4 rounded-full font-medium hover:bg-accent-primary-hover transition">
            Explore Gallery
          </Link>
        </div>
      </section>
    </Layout>
  );
}
