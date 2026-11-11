"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type HeroSlide = {
  id: string;
  kind: "image" | "video";
  src: string;
  alt: string;
  badge: string;
  eyebrow: string;
  title: string;
  description: string;
};

const slides: HeroSlide[] = [
  {
    id: "campus",
    kind: "image",
    src: "/images/campus/opf-headquarters.jpg",
    alt: "Overseas Pakistanis Foundation head office building, Islamabad",
    badge: "Islamabad",
    eyebrow: "Overseas Pakistanis Foundation",
    title: "OPF EV Academy",
    description:
      "Electric vehicle technical training, skill assessment, and IMI certification pathways for the next generation of technicians.",
  },
  {
    id: "video",
    kind: "video",
    src: "/images/hero/hero-workshop.mp4",
    alt: "OPF EV Academy campus video",
    badge: "Campus Life",
    eyebrow: "See the Academy",
    title: "Learn Where Futures Start",
    description:
      "Explore flexible online options and immersive campus training designed for beginners and experienced technicians.",
  },
  {
    id: "workshop",
    kind: "image",
    src: "/images/hero/hero-workshop.webp",
    alt: "EV workshop training",
    badge: "Hands-on Learning",
    eyebrow: "Practical EV Workshops",
    title: "Train on Real Systems",
    description:
      "Learn diagnostics, high-voltage safety, and workshop skills through guided on-campus sessions built for modern EV careers.",
  },
];

const AUTO_MS = 4000;

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-5 w-5"
    >
      {direction === "left" ? (
        <path
          d="M15 6L9 12L15 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M9 6L15 12L9 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

export function Hero() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [typing, setTyping] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const titleRef = useRef<HTMLSpanElement | null>(null);
  const slide = slides[index];
  const isVideo = slide.kind === "video";

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;

    const full = slides[index].title;
    el.textContent = "";
    setTyping(true);

    let i = 0;
    const timer = window.setInterval(() => {
      i += 1;
      if (titleRef.current) {
        titleRef.current.textContent = full.slice(0, i);
      }
      if (i >= full.length) {
        window.clearInterval(timer);
        setTyping(false);
      }
    }, 70);

    return () => window.clearInterval(timer);
  }, [index]);

  const moveTo = (target: number, withMotion = true) => {
    const next = (target + slides.length) % slides.length;
    if (next === index) return;

    const wrappingForward = index === slides.length - 1 && next === 0;
    const wrappingBackward = index === 0 && next === slides.length - 1;

    if (wrappingForward || wrappingBackward) {
      setAnimate(false);
      setIndex(next);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => setAnimate(true));
      });
      return;
    }

    setAnimate(withMotion);
    setIndex(next);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      moveTo(index + 1, true);
    }, AUTO_MS);

    return () => window.clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVideo) {
      void video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isVideo, index]);

  return (
    <section className="relative aspect-[2/1] min-h-[420px] w-full max-h-[80vh] overflow-hidden bg-[#0f1720]">
      <div
        className="hero-track"
        style={{
          transform: `translate3d(-${index * 100}%, 0, 0)`,
          transition: animate
            ? "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)"
            : "none",
        }}
      >
        {slides.map((item, i) => (
          <div key={item.id} className="hero-slide">
            {item.kind === "image" ? (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                priority={i === 0}
                quality={90}
                sizes="100vw"
                className={
                  item.id === "campus"
                    ? "object-contain object-center"
                    : "object-cover object-center"
                }
              />
            ) : (
              <video
                ref={videoRef}
                className="absolute inset-0 h-full w-full object-cover object-center"
                src={item.src}
                muted
                loop
                playsInline
                preload="auto"
                aria-label={item.alt}
              />
            )}
          </div>
        ))}
      </div>

      <div
        className={`absolute inset-0 z-[2] transition-colors duration-700 ${
          isVideo ? "bg-black/10" : "bg-black/20"
        }`}
      />
      <div
        className={`absolute inset-0 z-[2] bg-gradient-to-r ${
          isVideo
            ? "from-black/50 via-black/20 to-transparent"
            : "from-black/70 via-black/35 to-transparent"
        }`}
      />
      <div
        className={`absolute inset-x-0 top-0 z-[2] h-28 bg-gradient-to-b to-transparent ${
          isVideo ? "from-black/30" : "from-black/45"
        }`}
      />
      <div
        className={`absolute inset-x-0 bottom-0 z-[2] h-40 bg-gradient-to-t to-transparent ${
          isVideo ? "from-black/25" : "from-black/45"
        }`}
      />

      <div className="pointer-events-none absolute inset-0 z-10 flex items-end">
        <div className="pointer-events-auto mx-auto w-full max-w-7xl px-4 pb-10 pt-28 sm:px-6 sm:pb-12 lg:px-8 lg:pb-14">
          <div className="max-w-2xl text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.55)]">
            <span className="mb-1.5 inline-block rounded bg-[var(--opf-secondary)] px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
              {slide.badge}
            </span>

            <p className="mb-1 text-xs font-medium uppercase tracking-[0.16em] text-white sm:text-sm">
              {slide.eyebrow}
            </p>

            <h1 className="mb-2 min-h-[1.2em] text-3xl font-bold leading-tight tracking-tight !text-white sm:text-4xl lg:text-[2.75rem]">
              <span ref={titleRef} />
              {typing ? (
                <span className="ml-0.5 inline-block animate-pulse" aria-hidden>
                  |
                </span>
              ) : null}
            </h1>

            <p className="mb-5 max-w-xl text-sm leading-relaxed text-white sm:text-base">
              {slide.description}
            </p>

            <div className="mt-1 flex flex-wrap gap-2.5">
              <Link
                href="/courses"
                className="inline-flex items-center rounded-md border border-white/90 bg-transparent px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-white hover:text-black sm:text-sm"
              >
                Explore Courses
              </Link>
              <Link
                href="/admissions/apply"
                className="inline-flex items-center rounded-md bg-[var(--opf-secondary)] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-[#8f7a48] sm:text-sm"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-y-0 left-0 z-20 flex items-center pl-2 sm:pl-4">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => moveTo(index - 1)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-black/35 text-white backdrop-blur transition hover:bg-black/55"
        >
          <ArrowIcon direction="left" />
        </button>
      </div>

      <div className="absolute inset-y-0 right-0 z-20 flex items-center pr-2 sm:pr-4">
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => moveTo(index + 1)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-black/35 text-white backdrop-blur transition hover:bg-black/55"
        >
          <ArrowIcon direction="right" />
        </button>
      </div>

      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {slides.map((item, i) => (
          <button
            key={item.id}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => moveTo(i)}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              i === index
                ? "w-7 bg-[var(--opf-secondary)]"
                : "w-2.5 bg-white/55 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
