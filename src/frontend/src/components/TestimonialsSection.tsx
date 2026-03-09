import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "I worked with Pankaj during fall 2025, when he did an end-to-end user testing project to support Suunta.ai development. I was impressed by the speed which he delivered the project, and the quality of findings he documented. Also, the documentation was pedantically done straight into GitHub, so it was easy for our dev team to pick the items up for fixing & further development. I can recommend him to any QA / testing role in digital environment, I think he will add value to any team he works with.",
    name: "Jussi Luhtasela",
    title: "Head of Suunta.ai & Advisor",
    company: "Apukuski.com",
    initials: "JL",
  },
  {
    quote:
      "He is organized, focused and very passionate about his work and always willing to learn and explore new areas. He is a person whom I can trust. He has got a lot of experience in IT and can work as an individual contributor and lead. Pankaj can fit in any role and help in the growth of organizations. He is a recent MBA graduate, and I wish all the best for his upcoming goals.",
    name: "Päivi Carina Käri-Zein",
    title:
      "CEO, Trade Network Käri-Zein & Senior Lecturer, International Business and Sales",
    company: "Haaga-Helia UAS",
    initials: "PK",
  },
  {
    quote:
      "Pankaj was an integral member of my Quality team for approximately 4 years. He was a skilled team member who was a mentor to not only his team but also cross functional team members. His assigned product areas were part of a very complex healthcare solution. Pankaj always had a positive 'can do' attitude. He was kind, mindful and respectful to all. He enjoyed learning and growing his skill set. Pankaj would be an asset to any team and if I had the opportunity I would definitely enjoy working with Pankaj again.",
    name: "Lisa Williams",
    title: "Quality Team Lead",
    company: "Healthcare Technology",
    initials: "LW",
  },
];

function StarRating() {
  return (
    <ul className="flex gap-1 list-none" aria-label="5 star rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <li key={star}>
          <Star
            className="w-4 h-4 fill-yellow-400 text-yellow-400"
            aria-hidden="true"
          />
        </li>
      ))}
    </ul>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#003580" }}
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-white/70 text-sm font-semibold uppercase tracking-widest mb-3">
            Client Feedback
          </span>
          <h2
            id="testimonials-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            What Clients Speak
          </h2>
          <p className="mt-4 text-white/75 max-w-2xl mx-auto text-lg">
            Hear directly from the people who have worked with Pankaj.
          </p>
        </div>

        {/* Testimonial cards */}
        <ul
          className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none"
          data-ocid="testimonials.list"
        >
          {testimonials.map((t, index) => (
            <li
              key={t.name}
              data-ocid={`testimonials.item.${index + 1}`}
              className="bg-white rounded-2xl p-7 flex flex-col gap-4 shadow-finland-lg"
            >
              <StarRating />

              <blockquote className="text-finland-blue/80 text-base leading-relaxed flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 pt-2 border-t border-finland-blue-mid">
                {/* Avatar */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#003580" }}
                  aria-hidden="true"
                >
                  <span className="text-white font-bold text-xs font-heading">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="font-heading font-bold text-finland-blue text-sm">
                    {t.name}
                  </p>
                  <p className="text-finland-blue/60 text-xs">
                    {t.title}, {t.company}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
