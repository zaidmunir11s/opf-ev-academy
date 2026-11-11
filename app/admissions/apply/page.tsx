import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EnrollmentForm } from "@/components/admissions/EnrollmentForm";
import {
  getCourseBySlug,
  getLevelBySlug,
} from "@/data/courses/imi-levels";
import { parseTrainingMode } from "@/lib/training-mode";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply Now | OPF EV Academy",
  description:
    "Submit your enrollment application for OPF EV Academy IMI training courses.",
};

type PageProps = {
  searchParams: Promise<{ level?: string; course?: string; mode?: string }>;
};

export default async function ApplyPage({ searchParams }: PageProps) {
  const {
    level: levelSlug = "",
    course: courseSlug = "",
    mode: modeParam,
  } = await searchParams;
  const mode = parseTrainingMode(modeParam);
  const fromCourse = courseSlug ? getCourseBySlug(courseSlug) : null;
  const selectedLevel =
    getLevelBySlug(levelSlug) ?? fromCourse?.level ?? null;

  return (
    <div className="flex min-h-dvh flex-col bg-[var(--opf-white)]">
      <Header variant="solid" />
      <main className="flex-1">
        <section className="border-b border-[var(--opf-border)] bg-[var(--opf-surface)] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--opf-secondary)]">
              Admissions
            </p>
            <h1 className="text-3xl font-bold tracking-tight !text-[var(--opf-text-strong)] sm:text-4xl">
              Enrollment Form
            </h1>
            <p className="mt-3 text-base text-[var(--opf-text)]">
              {selectedLevel
                ? `Applying for ${selectedLevel.name} — ${selectedLevel.role}`
                : "Complete the form to apply for your preferred IMI level."}
            </p>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <EnrollmentForm
              initialLevel={selectedLevel?.slug ?? ""}
              initialMode={mode}
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
