import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { meta as kitchenMeta } from "./blog/KitchenRemodelCosts2025";
import { meta as bathMeta } from "./blog/BathroomTimelineChecklist";
import { meta as chooseMeta } from "./blog/CustomHomeVsRemodel";

const posts = [kitchenMeta, bathMeta, chooseMeta];

export default function Blog() {
  useEffect(() => {
    document.title = "Upscale Coatings Blog | Epoxy Floors in Utah";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Epoxy floor costs, install timelines, and DIY versus professional coatings for garages and concrete across Utah."
      );
    }
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-end justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(/upscale-coatings/blog-images/epoxy-garage-floor.png)`,
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
              <div className="text-4xl md:text-5xl lg:text-6xl">Blog</div>
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-xl">
              Costs, install days, and when a kit is the wrong call.
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="pt-16 pb-28 bg-bg">
        <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="bg-[#333333] border border-[#33333380] shadow-sm flex flex-col">
              {/* Thumbnail */}
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <img src={post.heroImage} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="text-sm text-text-strong/70 mb-2">
                  {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                  <span className="mx-2">•</span>
                  {post.readTimeMinutes} min read
                </div>
                <h2 className="text-xl font-bold text-text-strong mb-2">{post.title}</h2>
                <p className="text-text mb-6">{post.description}</p>
                <div className="mt-auto">
                  <Link
                    to={post.slug}
                    className="inline-flex items-center gap-3 text-text-strong hover:opacity-80 transition-opacity"
                  >
                    <div className="w-4 h-4 border-2 border-accent-primary bg-transparent"></div>
                    <span className="text-sm font-medium uppercase tracking-wide">Read Article</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}


