import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { levels } from "@/data/courses/imi-levels";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "On-Campus Training | OPF EV Academy",
  description:
    "Browse IMI certificated on-campus EV training levels at OPF EV Academy.",
};

export default function OnCampusTrainingPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-[var(--opf-white)]">
      <Header variant="solid" />
      <main className="flex-1">
        <section className="border-b border-[var(--opf-border)] bg-[var(--opf-surface)]">
          <div className="mx-auto max-w-5xl px-4 py-10 text-center sm:px-6 sm:py-12 lg:px-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--opf-secondary)]">
              On-Campus Training
            </p>
            <h1 className="text-3xl font-bold tracking-tight !text-[var(--opf-text-strong)] sm:text-4xl">
              IMI Certificated On-Campus Courses
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-base text-[var(--opf-text)]">
              Choose your level to view course details and apply for on-campus
              training.
            </p>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl space-y-4">
            {levels.map((level) => (
              <Link
                key={level.slug}
                href={`/courses/level/${level.slug}?mode=on-campus`}
                className="block rounded-xl bg-white px-5 py-5 ring-1 ring-[var(--opf-border)] transition hover:ring-[var(--opf-secondary)] sm:px-6"
              >
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--opf-secondary)]">
                  {level.role}
                </p>
                <h2 className="mb-2 text-lg font-bold !text-[var(--opf-text-strong)] sm:text-xl">
                  IMI {level.name}
                </h2>
                <p className="text-sm text-[var(--opf-text)]">
                  {level.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
