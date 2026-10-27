import Layout from "@/components/Layout";
import JobberWorkRequest from "@/components/JobberWorkRequest";
import { Instagram } from "lucide-react";

export default function Contact() {
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
              <div className="text-4xl md:text-5xl lg:text-6xl">Contact</div>
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-xl">
              Tell us about the slab. We’ll outline the system and the next step.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12">
            <aside className="lg:sticky lg:top-24 self-start">
              <div className="space-y-8">
                <div>
                  <img
                    src="/upscale-coatings/upscale-logo.png"
                    alt="Upscale Coatings"
                    className="h-20 w-auto"
                  />
                </div>

                <div>
                  <p className="text-lg font-semibold text-text-strong">Serving all of Utah</p>
                </div>

                <div>
                  <p className="text-lg font-semibold text-text-strong mb-2">Telephone:</p>
                  <a href="tel:8015927705" className="text-text-strong hover:text-accent-primary">(801) 592-7705</a>
                </div>

                <div>
                  <p className="text-lg font-semibold text-text-strong mb-2">Email:</p>
                  <a href="mailto:upscalecoatingsutah@gmail.com" className="text-text-strong hover:text-accent-primary">upscalecoatingsutah@gmail.com</a>
                </div>

                <div>
                  <p className="text-lg font-semibold text-text-strong mb-2">Hours:</p>
                  <p className="text-text-strong">Monday–Friday, 8:00 AM – 7:00 PM</p>
                </div>

                <div>
                  <p className="text-lg font-semibold text-text-strong mb-3">Socials:</p>
                  <div className="flex gap-4 items-center">
                    <a href="https://www.instagram.com/upscale.coatings/" target="_blank" rel="noopener noreferrer" className="text-text-strong hover:text-accent-primary transition-colors" aria-label="Instagram">
                      <Instagram size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            <div className="lg:pl-4">
              <h2 className="text-4xl font-bold text-text-strong mb-6">Tell Us About the Floor</h2>
              <JobberWorkRequest />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
