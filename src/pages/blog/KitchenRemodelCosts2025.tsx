import Layout from "@/components/Layout";
import { useEffect } from "react";

export const meta = {
  slug: "/blog/epoxy-garage-floor-cost-utah",
  title: "What an Epoxy Garage Floor Costs in Utah",
  description:
    "What drives the price of a flake epoxy garage floor in Utah: square footage, prep, flake coverage, and the topcoat that has to survive salt and hot tires.",
  author: "Upscale Coatings",
  date: "2026-02-05",
  readTimeMinutes: 7,
  heroImage: "/upscale-coatings/blog-images/epoxy-garage-floor-cost.png",
};

export default function KitchenRemodelCosts2025() {
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
            Online prices for “epoxy garage floors” swing wildly because the phrase covers a weekend kit and a ground, repaired, full-flake system with a real topcoat. In Utah those are not the same floor. Salt, freeze-thaw, and hot tires expose the difference within a year or two.
          </p>
          <h2>What a real quote includes</h2>
          <p>
            A useful number is price per square foot for a defined system, not a vague “starting at.” For a typical two- or three-car garage, the quote should name the grind, crack repair, primer, base coat, flake coverage, and topcoat. Partial flake looks speckled and uses less material. Full broadcast hides the slab and costs more because the floor is buried in flake and then scraped and sealed.
          </p>
          <h2>What actually moves the price</h2>
          <ul>
            <li>
              <strong>Square footage and access.</strong> A clear two-car garage is straightforward. A garage full of storage, a steep driveway, or a slab that needs heavy crack repair takes longer.
            </li>
            <li>
              <strong>The condition of the concrete.</strong> Oil, sealer, previous failed coatings, and moisture all add prep. Skipping that work is how floors peel.
            </li>
            <li>
              <strong>Flake and color.</strong> Standard blends are the usual path. Custom or heavy metallic work is a different system and a different price.
            </li>
            <li>
              <strong>The topcoat.</strong> This is the layer that sees tires and salt. A UV-stable polyaspartic or polyurethane topcoat costs more than a thin clear and lasts longer in this climate.
            </li>
          </ul>
          <h2>Where people waste money</h2>
          <p>
            A cheap kit looks fine on day one and fails at the bond line. Paying twice — once for the kit, once for a crew to grind it off — is the expensive version of a garage floor. The other waste is overbuilding a space that only parks two cars. A full flake system with a proper topcoat is usually the right middle: it hides the slab, cleans easily, and does not need a showroom metallic pour unless you want that look.
          </p>
          <h2>Timeline</h2>
          <p>
            Most residential garages are a one- to two-day install once the date is set. Foot traffic comes back quickly. Vehicles wait for the cure window, often around 72 hours, depending on temperature and the products used. We spell that out before we start so the cars have somewhere else to sit.
          </p>
          <h2>Key takeaways</h2>
          <ul>
            <li>Ask what the price includes: grind, repairs, flake coverage, and topcoat.</li>
            <li>Prep is the line item that decides whether the floor stays down.</li>
            <li>Full flake hides more of the old concrete than a light sprinkle.</li>
            <li>Utah salt and sun are a topcoat problem, not a color problem.</li>
          </ul>
          <p>
            If you have the square footage and a photo of the slab, we can price a system for your garage instead of a range copied from another state.
          </p>
        </div>
      </section>
    </Layout>
  );
}
