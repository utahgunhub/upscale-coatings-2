import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useMemo } from "react";

export default function Okun() {
  const images = useMemo(() => [
    "/upscale-coatings/basement-floor-coatings.png",
    "/upscale-coatings/concrete-restoration.png",
    "/upscale-coatings/gallery-images/Hand Troweling For Resurfacing Service.jpg",
    "/upscale-coatings/concrete-coatings.png",
  ], []);

  const encodedImages = useMemo(() => images.map((p) => encodeURI(p)), [images]);
  const heroImage = encodedImages[0];

  return (
    <Layout>
      <Hero 
        title="Daybreak Basement"
        subtitle="South Jordan, Utah"
        backgroundImage={heroImage}
        hideCTA
      />

      {/* Back link */}
      <section className="bg-bg pt-6">
        <div className="w-[80%] mx-auto">
          <Link to="/remodel" className="text-text hover:opacity-80">← Back to Coatings</Link>
        </div>
      </section>

      {/* Overview + Details */}
      <section className="bg-bg py-16">
        <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          <div className="lg:col-span-7">
            <h2 className="text-3xl md:text-4xl font-normal text-text-strong mb-6" style={{ fontFamily: "'PP Editorial Old', serif" }}>
              A Basement Slab You Can Actually Use
            </h2>
            <div className="space-y-5 text-text leading-relaxed text-lg">
              <p>
                The Daybreak basement was a cold, dusty slab. We repaired the surface, primed for moisture, and coated it so the room could be finished without the concrete reading as unfinished.
              </p>
              <p>
                Basements in Utah hold more moisture than a garage bay. The system is chosen for that, not copied from a driveway product.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-text-strong mb-3">Key Features</h3>
              <ul className="space-y-2 text-text">
                <li>• Moisture-minded primer</li>
                <li>• Surface repair before coating</li>
                <li>• A finish that reads as a room, not a slab</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Image Band */}
      <section className="bg-bg-alt pt-12">
        <div className="w-[80%] mx-auto">
          <div className="relative overflow-hidden">
            <AspectRatio ratio={16/7} className="min-h-[320px] sm:min-h-[380px] md:min-h-[460px]">
              <img src={encodedImages[0]} alt="Basement floor coating" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </AspectRatio>
            {/* Overlay timeline content (match Fox Croft design) */}
            <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">Project Timeline</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { phase: 'Moisture Check', when: 'Consult' },
                  { phase: 'Repair', when: 'Install day' },
                  { phase: 'Base Coat', when: 'Same day' },
                  { phase: 'Topcoat', when: 'Cure window' },
                ].map((t, i) => (
                  <div key={i} className="text-white/90">
                    <div className="text-sm">{t.phase}</div>
                    <div className="text-lg font-semibold">{t.when}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery - Masonry columns with per-image dialog (matches provided pattern) */}
      <section className="bg-bg-alt pt-4 pb-0">
        <div className="w-[80%] mx-auto columns-1 sm:columns-2 lg:columns-4 gap-4 [column-fill:_balance]">
          {encodedImages.map((src, idx) => (
            <Dialog key={idx}>
              <DialogTrigger asChild>
                <button className="break-inside-avoid mb-4 block focus:outline-none">
                  <img src={src} alt={`Daybreak basement ${idx + 1}`} className="w-full h-auto" />
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-5xl p-0 bg-transparent border-none shadow-none sm:rounded-none [&>button]:absolute [&>button]:right-4 [&>button]:top-4 [&>button]:bg-black/50 [&>button]:text-white [&>button]:rounded-full [&>button]:p-2 [&>button]:hover:bg-black/70">
                <img src={src} alt={`Daybreak basement ${idx + 1} large`} className="w-full h-auto max-h-[85vh] object-contain" />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-bg-alt">
        <div className="w-[80%] mx-auto text-center">
          <h3 className="text-3xl md:text-4xl text-text-strong" style={{ fontFamily: "'PP Editorial Old', serif", fontWeight: 400 }}>
            Considering a floor like this?
          </h3>
          <p className="mt-3 text-text">Private consultations by appointment.</p>
          <div className="mt-8">
            <Button asChild className="bg-accent-primary text-[#1a1a1a] hover:bg-accent-primary-hover rounded-full px-6 py-5 text-base md:text-lg font-medium">
              <Link to="/contact">Schedule Your Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}


