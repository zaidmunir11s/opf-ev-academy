import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TrainingExperience } from "@/components/courses/TrainingExperience";
import {
  getLevelBySlug,
  getLevelSlugs,
  type CourseCategory,
} from "@/data/courses/imi-levels";
import {
  parseTrainingMode,
  trainingModeLabel,
} from "@/lib/training-mode";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ mode?: string }>;
};

export function generateStaticParams() {
  return getLevelSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const level = getLevelBySlug(slug);
  if (!level) return { title: "Courses | OPF EV Academy" };

  return {
    title: `${level.name} — ${level.role} | OPF EV Academy`,
    description: level.description,
  };
}

function categoryLabel(category: CourseCategory) {
  if (category === "heavy") return "Heavy EV";
  if (category === "emergency") return "Emergency / Recovery";
  return "Light EV";
}

export default async function LevelCoursesPage({
  params,
  searchParams,
}: PageProps) {
  const { slug } = await params;
  const { mode: modeParam } = await searchParams;
  const mode = parseTrainingMode(modeParam);
  const level = getLevelBySlug(slug);
  if (!level) notFound();

  const featuredCourse =
    level.courses.find((course) => course.category === "light") ??
    level.courses[0];
  const workshopImage = featuredCourse?.workshopImage ?? level.image;
  const applyHref = `/admissions/apply?level=${level.slug}${mode ? `&mode=${mode}` : ""}`;

  return (
    <div className="flex min-h-dvh flex-col bg-[var(--opf-white)]">
      <Header variant="solid" />
      <main className="flex-1">
        <section className="border-b border-[var(--opf-border)] bg-[var(--opf-surface)]">
          <div className="mx-auto max-w-5xl px-4 py-10 text-center sm:px-6 sm:py-12 lg:px-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--opf-secondary)]">
              {level.role}
              {mode ? ` · ${trainingModeLabel(mode)}` : ""}
            </p>
            <h1 className="text-3xl font-bold tracking-tight !text-[var(--opf-text-strong)] sm:text-4xl">
              {level.name} Courses
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-base text-[var(--opf-text)]">
              {level.description}
            </p>
            <p className="mt-3 text-sm text-[var(--opf-muted)]">
              {level.courses.length}{" "}
              {level.courses.length === 1 ? "Course" : "Courses"}
            </p>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl space-y-4">
            {level.courses.map((course) => (
              <article
                key={course.slug}
                className="rounded-xl bg-white px-5 py-5 ring-1 ring-[var(--opf-border)] sm:px-6"
              >
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--opf-secondary)]">
                  {categoryLabel(course.category)}
                </p>
                <h2 className="mb-2 text-lg font-bold leading-snug !text-[var(--opf-text-strong)] sm:text-xl">
                  {course.title}
                </h2>
                <p className="max-w-3xl text-sm leading-relaxed text-[var(--opf-text)]">
                  {course.overview || course.summary}
                </p>
              </article>
            ))}

            <div className="pt-8">
              <TrainingExperience
                image={workshopImage}
                imageAlt={`${level.name} workshop at OPF EV Academy`}
                paragraphs={featuredCourse?.trainingExperience}
                applyHref={applyHref}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
