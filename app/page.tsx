import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { CoursesSection } from "@/components/courses/CoursesSection";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-[var(--opf-white)]">
      <Header />
      <main className="flex-1">
        <Hero />

        <section
          id="about"
          className="scroll-mt-24 bg-[var(--opf-surface)] px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--opf-secondary)]">
              About the Academy
            </p>
            <h2 className="mb-4 max-w-3xl text-3xl font-bold tracking-tight text-[var(--opf-primary)] sm:text-4xl">
              Building EV skills for Pakistan&apos;s future workforce
            </h2>
            <p className="mb-8 max-w-3xl text-base leading-relaxed text-[var(--opf-text)] sm:text-lg">
              OPF EV Academy offers level-based electric vehicle training,
              practical on-campus workshops, online learning options, and clear
              IMI certification pathways for beginners and experienced
              technicians.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/#courses"
                className="rounded-md bg-[var(--opf-primary)] px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[var(--opf-primary-light)]"
              >
                View Courses
              </Link>
              <Link
                href="/assessment"
                className="rounded-md border border-[var(--opf-primary)] px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-[var(--opf-primary)] transition hover:bg-[var(--opf-primary)] hover:text-white"
              >
                Assess Your Skills
              </Link>
            </div>
          </div>
        </section>

        <CoursesSection />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
}
