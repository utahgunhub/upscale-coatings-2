import Layout from "@/components/Layout";
import { useEffect } from "react";

export const meta = {
  slug: "/blog/what-to-expect-epoxy-install-utah",
  title: "What to Expect on Epoxy Install Day",
  description:
    "A plain timeline for an epoxy floor install in Utah: what we do to the slab, how long the space is out of use, and when you can walk and park on it.",
  author: "Upscale Coatings",
  date: "2026-01-29",
  readTimeMinutes: 6,
  heroImage: "/upscale-coatings/blog-images/what-to-expect-epoxy-deck-coating-utah-1.png",
};

export default function BathroomTimelineChecklist() {
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
            An epoxy install is loud for a few hours and then it is waiting. The work that matters happens before the color goes down. Here is the sequence we use on garages, basements, and most indoor slabs along the Wasatch Front.
          </p>
          <h2>Before we arrive</h2>
          <p>
            The space needs to be empty. Cars out, shelves pulled off the floor, and a path for grinders and materials. If the garage shares a wall with living space, plan on dust control and a bit of noise while we grind. We confirm color, flake coverage, and the cure window before the day starts.
          </p>
          <h2>Grind, repair, prime</h2>
          <p>
            Diamond grinding removes laitance, sealer, and the failed coating someone rolled on years ago. Cracks are chased and filled. A primer matched to the slab goes down so the base coat has open concrete to grab. This is the longest, least photogenic part of the job, and it is the reason the floor stays put.
          </p>
          <h2>Base coat and broadcast</h2>
          <p>
            Epoxy base goes on, then flake is thrown to refusal for a full broadcast, or more lightly for a speckled look. Metallic floors are worked while the resin is open so the pigment moves instead of sitting in puddles. Edges, door tracks, and the apron get the same attention as the middle of the bay.
          </p>
          <h2>Topcoat and the wait</h2>
          <p>
            After excess flake is scraped and vacuumed, a clear topcoat seals the floor. Then it cures. Foot traffic is usually fine within a day. Vehicles wait longer — often about 72 hours — because a hot tire can imprint a coating that is hard to the touch but not fully cured. We will tell you the exact window for your system and the weather that day.
          </p>
          <h2>Checklist</h2>
          <ul>
            <li>Empty the floor and move vehicles before we arrive.</li>
            <li>Pick the flake or metallic color before install day.</li>
            <li>Keep people and pets off the wet coating.</li>
            <li>Wait for the vehicle cure time even if the floor looks done.</li>
            <li>Skip the pressure washer for the first stretch. Sweeping and a damp mop are enough.</li>
          </ul>
          <p>
            Outdoor decks follow a similar idea — clean, repair, coat, cure — with products that can live in sun and snow. If you want a date, send the square footage and a couple of photos of the slab.
          </p>
        </div>
      </section>
    </Layout>
  );
}
