import Layout from "@/components/Layout";
import { useEffect } from "react";

export const meta = {
  slug: "/blog/diy-epoxy-vs-professional-utah",
  title: "DIY Epoxy vs a Professional Install in Utah",
  description:
    "When a store-bought epoxy kit is enough, and when Utah salt, moisture, and hot tires call for a ground and topcoated system.",
  author: "Upscale Coatings",
  date: "2026-02-19",
  readTimeMinutes: 7,
  heroImage: "/upscale-coatings/blog-images/diy-epoxy-vs-professional-utah.png",
};

export default function CustomHomeVsRemodel() {
  useEffect(() => {
    document.title = meta.title;
    const m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", meta.description);
  }, []);

  return (
    <Layout>
      <section className="relative h-[60vh] flex items-end justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${meta.heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/45" />
        </div>
      </section>

      <section className="bg-bg">
        <div className="w-[80%] max-w-3xl mx-auto py-6">
          <div className="flex flex-wrap items-center gap-4 text-sm text-text-strong/70">
            <span>{new Date(meta.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
            <span>•</span>
            <span>{meta.readTimeMinutes} min read</span>
            <span>•</span>
            <span>By {meta.author}</span>
          </div>
        </div>
      </section>

      <section className="py-6 md:pt-10 md:pb-20 bg-bg">
        <div className="w-[80%] max-w-3xl mx-auto prose prose-invert md:prose-lg prose-headings:tracking-tight prose-headings:leading-tight prose-h2:mt-10 prose-h2:mb-4 prose-p:leading-relaxed prose-ul:leading-relaxed">
          <h1 className="mb-2">{meta.title}</h1>
          <p className="lead text-text/80">{meta.description}</p>
          <p>
            A box kit and a professional epoxy floor can look similar in the first photo. They do not behave the same after a Utah winter. The difference is almost never the color chips. It is the bond to the concrete and the topcoat that has to live with salt and tires.
          </p>
          <h2>What a kit actually does</h2>
          <p>
            Most store kits are an acid etch, a thin colored coat, and a light sprinkle of flake. Acid does not open sealed or polished concrete the way a diamond grinder does. The film is thin, so hot tires, snowmelt, and a shovel blade find the weak spots. When it fails, it usually peels in sheets, and the next installer has to grind all of it off before a real system can go down.
          </p>
          <h2>What a professional system does</h2>
          <ul>
            <li>Grinds the slab so the coating bonds to open concrete, not dust or sealer.</li>
            <li>Fills cracks so they do not telegraph as fast, and so water has fewer paths.</li>
            <li>Uses a primer suited to moisture, which matters in basements and some garages.</li>
            <li>Broadcasts flake into a real base coat, then seals it with a tougher clear topcoat.</li>
          </ul>
          <h2>When a kit can be fine</h2>
          <p>
            A small interior utility room that never sees cars, salt, or standing water is a different problem than a garage that parks two vehicles through January. If the slab is clean, unsealed, and lightly used, a careful DIY coat can look decent for a while. If you are covering a garage you use every day, the kit is usually the expensive route once you count the redo.
          </p>
          <h2>How to decide</h2>
          <p>
            Look at how the floor is used. Daily parking, road salt, a workshop, a commercial kitchen, or an outdoor deck all argue for a ground system and a topcoat made for that exposure. A closet slab does not. If you are unsure, send photos. We would rather tell you the concrete is not ready, or that a simpler coating fits, than sell a metallic pour onto a slab that needs repair first.
          </p>
          <p>
            Upscale Coatings works across the Wasatch Front. A quote includes the prep, the system, and when you can park on it again.
          </p>
        </div>
      </section>
    </Layout>
  );
}
