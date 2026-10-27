import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "I reached out to several companies for quotes, and Upscale Coatings was the only one that responded. They were prompt, professional, and did exceptional work. I’d definitely recommend them!",
    client: "Shad Pace",
    detail: "Garage floor",
    image: "/upscale-coatings/gallery-images/Garage.jpg",
  },
  {
    quote:
      "Couldn’t be happier with how our garage floors turned out! The guys at Upscale Coatings were fast, professional, and detail-oriented — plus the finish completely upgraded the space. Beautiful work, great service, and a super professional team.",
    client: "Grill Father",
    detail: "Garage floor",
    image: "/upscale-coatings/custom-garage-floor-epoxy.png",
  },
  {
    quote:
      "These guys went above and beyond to take care of me. Their process was seamless. They are prompt and efficient, great to work with, and pretty cool if you ask me. I highly recommend them 10/10.",
    client: "Riley Nielsen",
    detail: "Epoxy floor",
    image: "/upscale-coatings/gallery-images/Garage(2).jpg",
  },
];

export default function Testimonials() {
  return (
    <Layout>
      <section className="relative h-[60vh] flex items-end justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(/upscale-coatings/testimonials-banner.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/55"></div>
        </div>
        <div className="absolute bottom-16 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-white leading-tight mb-4" style={{ fontFamily: "'PP Editorial Old', serif", fontWeight: 400 }}>
              <div className="text-4xl md:text-5xl lg:text-6xl">Testimonials</div>
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-xl">
              What homeowners say after the floor is down.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <article key={testimonial.client} className="bg-[#333333] border border-[#33333380] flex flex-col">
              <img
                src={testimonial.image}
                alt=""
                className="h-52 w-full object-cover"
              />
              <div className="p-8 flex flex-col flex-1">
                <div className="flex gap-1 text-accent-primary mb-5" aria-label="5 stars">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-text leading-relaxed flex-1">“{testimonial.quote}”</p>
                <div className="mt-8">
                  <p className="text-text-strong font-semibold">{testimonial.client}</p>
                  <p className="text-sm text-white/60">{testimonial.detail}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: "#333333" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl text-text-strong mb-4" style={{ fontFamily: "'PP Editorial Old', serif", fontWeight: 400 }}>
            Ready for a floor like theirs?
          </h2>
          <p className="text-lg md:text-xl text-text mb-8">
            Tell us the square footage and how the space is used. We'll recommend a system and a date.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-accent-primary text-[#1a1a1a] px-8 py-4 rounded-full text-base md:text-lg font-medium hover:bg-accent-primary-hover hover:no-underline transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </Layout>
  );
}
