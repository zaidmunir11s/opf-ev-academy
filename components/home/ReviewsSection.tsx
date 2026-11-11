import Image from "next/image";

const reviews = [
  {
    name: "Ahmed Raza",
    location: "Dubai, UAE",
    text: "OPF EV Academy gave me a clear path from electric vehicle basics to practical workshop skills. The instructors are supportive and the training is industry-focused.",
  },
  {
    name: "Sara Khan",
    location: "Islamabad, Pakistan",
    text: "The IMI level pathway and hands-on sessions greatly improved my confidence. High-voltage safety and maintenance concepts are explained clearly.",
  },
  {
    name: "Bilal Hussain",
    location: "Riyadh, KSA",
    text: "Even after enrolling from overseas, the process felt smooth. The course structure is professional and applying was simple.",
  },
];

function Stars() {
  return (
    <div className="mt-1.5 flex gap-0.5" aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className="h-3.5 w-3.5 fill-[var(--opf-secondary)]"
          aria-hidden
        >
          <path d="M10 1.5l2.35 5.2 5.65.6-4.25 3.8 1.25 5.55L10 13.9l-4.99 2.75 1.25-5.55L2 7.3l5.65-.6L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function PersonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-10 w-10 text-[var(--opf-text-strong)]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <circle cx="12" cy="8" r="3.25" />
      <path d="M5.5 19.5c1.6-3.2 4-4.75 6.5-4.75s4.9 1.55 6.5 4.75" />
    </svg>
  );
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="scroll-mt-24 bg-[var(--opf-white)] pb-16">
      <div className="relative flex min-h-[240px] items-end overflow-hidden px-4 pb-28 pt-10 sm:min-h-[280px] sm:px-6 sm:pb-32 lg:min-h-[300px] lg:px-8">
        <Image
          src="/images/hero/hero-campus-hd.jpg"
          alt="OPF EV Academy campus"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#1a1f26]/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[#1a1f26]/50" />

        <div className="relative z-10 mx-auto w-full max-w-7xl text-center">
          <h2 className="text-3xl font-bold tracking-tight !text-white drop-shadow-sm sm:text-4xl">
            What our learners say
          </h2>
        </div>
      </div>

      <div className="relative z-20 mx-auto -mt-16 grid max-w-7xl gap-5 px-4 sm:-mt-20 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {reviews.map((review) => (
          <article
            key={review.name}
            className="flex flex-col bg-white px-6 pb-0 pt-6 shadow-[0_12px_40px_rgba(0,0,0,0.12)] ring-1 ring-black/5"
          >
            <p
              className="mb-3 font-[family-name:var(--font-poppins)] text-4xl leading-none text-[var(--opf-secondary)]"
              aria-hidden
            >
              “
            </p>
            <p className="mb-6 flex-1 text-sm leading-relaxed text-[var(--opf-text)]">
              {review.text}
            </p>

            <div className="flex items-center gap-3 border-t border-[var(--opf-border)] bg-[var(--opf-surface-soft)] px-1 py-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white ring-1 ring-[var(--opf-border)]">
                <PersonIcon />
              </div>
              <div>
                <p className="text-sm font-bold text-[var(--opf-text-strong)]">
                  {review.name}
                </p>
                <p className="text-xs text-[var(--opf-muted)]">
                  {review.location}
                </p>
                <Stars />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
