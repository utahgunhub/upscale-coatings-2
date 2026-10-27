import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Atlanta() {
  useEffect(() => {
    document.title = "Epoxy Flooring in Salt Lake City | Upscale Coatings";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Garage flake epoxy, metallic floors, and commercial coatings in Salt Lake City, Sugar House, Murray, Draper, Sandy, and the rest of Salt Lake County."
      );
    }
  }, []);

  return (
    <Layout>
      <section className="relative h-[60vh] flex items-end justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(/upscale-coatings/gallery-images/Garage.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="absolute bottom-16 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-white leading-tight mb-4" style={{ fontFamily: "'PP Editorial Old', serif", fontWeight: 400 }}>
              <div className="text-4xl md:text-5xl lg:text-6xl">Salt Lake City</div>
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-xl">
              Flake garages, metallic floors, and commercial slabs for Salt Lake County.
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
                  src="/upscale-coatings/custom-garage-floor-epoxy.png"
                  alt="Flake epoxy garage floor in Salt Lake City"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-4xl font-bold text-text-strong mb-6">Coatings for Salt Lake County</h2>
              <p className="text-text text-lg leading-relaxed mb-5">
                Valley garages take road salt all winter and hot tires all summer. Upscale Coatings installs flake epoxy, metallic floors, basement coatings, and commercial systems from downtown Salt Lake out through the south valley.
              </p>
              <p className="text-text leading-relaxed mb-5">
                A typical garage is ground, repaired, coated, and topcoated in a day or two. Shops and commercial kitchens are scheduled around the hours you can give the floor up. Every system starts with the same prep: open the concrete, fix the cracks, then build the layers that have to last.
              </p>
              <p className="text-text leading-relaxed mb-0">
                <span className="font-semibold text-text-strong">Areas we cover: </span>
                Salt Lake City, Sugar House, Murray, Millcreek, Holladay, Cottonwood Heights, Sandy, Draper, South Jordan, West Jordan, West Valley, Taylorsville, and Riverton.
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
              { title: "Flake Epoxy", image: "/upscale-coatings/gallery-images/Garage(1).jpg" },
              { title: "Metallic Epoxy", image: "/upscale-coatings/gallery-images/Metallic.jpg" },
              { title: "Commercial Floor", image: "/upscale-coatings/commercial-kitchen-flooring.png" },
              { title: "Garage Floor", image: "/upscale-coatings/gallery-images/Garage(3).jpg" },
            ].map((card, i) => (
              <div key={i} className="group bg-[#333333] border border-[#33333380] shadow-sm overflow-hidden">
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
          <h2 className="text-3xl md:text-4xl font-bold text-text-strong mb-6">Salt Lake Service Area</h2>
          <div className="w-full h-[300px] md:h-[450px] overflow-hidden border">
            <iframe
              src="https://maps.google.com/maps?q=Salt%20Lake%20City%2C%20UT&z=11&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              title="Salt Lake City service area"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#333333" }}>
        <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-12 items-end gap-8">
          <div className="lg:col-span-8">
            <h2
              className="text-white leading-tight"
              style={{ fontFamily: "'PP Editorial Old', serif", fontWeight: 400 }}
            >
              <span className="block text-4xl md:text-5xl lg:text-6xl">Coat a Floor in</span>
              <span className="block text-4xl md:text-5xl lg:text-6xl italic">Salt Lake County</span>
            </h2>
          </div>
          <div className="lg:col-span-4 text-white/80 text-lg">
            Send the square footage and a photo of the slab. We'll recommend a system.
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
