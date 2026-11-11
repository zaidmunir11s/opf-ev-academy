import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TrainingExperience } from "@/components/courses/TrainingExperience";
import {
  getCourseBySlug,
  getCourseSlugs,
  type CourseCategory,
} from "@/data/courses/imi-levels";
import {
  parseTrainingMode,
  trainingModeLabel,
} from "@/lib/training-mode";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ mode?: string }>;
};

export function generateStaticParams() {
  return getCourseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const match = getCourseBySlug(slug);
  if (!match) return { title: "Course | OPF EV Academy" };

  return {
    title: `${match.course.title} | OPF EV Academy`,
    description: match.course.summary,
  };
}

const trainingBenefits = [
  {
    title: "Online learning.",
    text: "Complete theory modules online at your own pace — study when and where it suits you, with extended access to revisit material even after assessment.",
  },
  {
    title: "On-campus practical.",
    text: "Attend OPF EV Academy for hands-on workshop sessions and face-to-face assessment, so skills are proven on real EV systems — not only on screen.",
  },
  {
    title: "Best of both.",
    text: "Less time away from work for theory, plus proper campus practical and IMI-aligned assessment. Flexible delivery without compromising quality.",
  },
];

function bannerTitle(levelName: string, category: CourseCategory) {
  if (category === "heavy") {
    return `IMI ${levelName} Heavy Electric Hybrid Vehicle`;
  }
  if (category === "emergency") {
    return `IMI ${levelName} Emergency & Recovery`;
  }
  return `IMI ${levelName} Electric Hybrid Vehicle`;
}

function categoryLabel(category: CourseCategory) {
  if (category === "heavy") return "Heavy EV";
  if (category === "emergency") return "Emergency / Recovery";
  return "Light EV";
}

export default async function CourseDetailPage({
  params,
  searchParams,
}: PageProps) {
  const { slug } = await params;
  const { mode: modeParam } = await searchParams;
  const mode = parseTrainingMode(modeParam);
  const match = getCourseBySlug(slug);
  if (!match) notFound();

  const { course, level } = match;
  const pageHeading = bannerTitle(level.name, course.category);
  const formalTitle =
    course.formalTitle ?? `IMI ${level.name} Award in ${course.title}`;
  const detailImage = course.detailImage ?? course.image;
  const workshopImage = course.workshopImage ?? level.image;
  const overviewExtra =
    course.overviewExtra ??
    `An IMI ${level.name} Award is a formally recognised VRQ qualification (Vocationally Recognised Qualification). This VRQ provides recognition of the skills and competencies associated to the awarding body’s standards, and will stay with the successful candidate for life.`;
  const levelHref = `/courses/level/${level.slug}${mode ? `?mode=${mode}` : ""}`;
  const applyHref = `/admissions/apply?level=${level.slug}${mode ? `&mode=${mode}` : ""}`;

  return (
    <div className="flex min-h-dvh flex-col bg-white">
      <Header variant="solid" />
      <main className="flex-1">
        <section className="border-b border-[var(--opf-border)] bg-[var(--opf-surface)]">
          <div className="mx-auto max-w-5xl px-4 py-10 text-center sm:px-6 sm:py-12 lg:px-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--opf-secondary)]">
              {level.role} · {level.name} · {categoryLabel(course.category)}
              {mode ? ` · ${trainingModeLabel(mode)}` : ""}
            </p>
            <h1 className="text-3xl font-bold uppercase tracking-wide !text-[var(--opf-text-strong)] sm:text-4xl">
              {pageHeading}
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-[var(--opf-text)]">
              <Link
                href={levelHref}
                className="font-medium text-[var(--opf-primary)] hover:underline"
              >
                ← Back to {level.name} courses
              </Link>
            </p>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <article>
              <div className="mb-12 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                <div className="min-w-0 text-center">
                  <h2 className="mb-5 text-xl font-bold uppercase leading-snug !text-[var(--opf-accent-red)] sm:text-2xl">
                    {formalTitle}
                    {course.ofqualId ? (
                      <>
                        {" "}
                        <span className="whitespace-nowrap">
                          OFQUAL I.D {course.ofqualId}
                        </span>
                      </>
                    ) : null}
                  </h2>

                  <p className="mx-auto mb-4 max-w-xl text-[15px] leading-7 text-[#444]">
                    {course.overview}
                  </p>
                  <p className="mx-auto mb-6 max-w-xl text-[15px] leading-7 text-[#444]">
                    {overviewExtra}
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-3">
                    {course.duration ? (
                      <p className="rounded-md bg-[var(--opf-surface)] px-3.5 py-2 text-sm text-[var(--opf-text)]">
                        Duration:{" "}
                        <span className="font-semibold text-[var(--opf-text-strong)]">
                          {course.duration}
                        </span>
                      </p>
                    ) : null}
                    {course.fee ? (
                      <p className="rounded-md bg-[var(--opf-surface)] px-3.5 py-2 text-sm text-[var(--opf-text)]">
                        Fee:{" "}
                        <span className="font-semibold text-[var(--opf-text-strong)]">
                          {course.fee}
                        </span>
                      </p>
                    ) : null}
                    <p className="rounded-md bg-[var(--opf-surface)] px-3.5 py-2 text-sm text-[var(--opf-text)]">
                      Mode:{" "}
                      <span className="font-semibold text-[var(--opf-text-strong)]">
                        Online + On-Campus
                      </span>
                    </p>
                  </div>
                  {course.feeNote ? (
                    <p className="mt-3 text-xs text-[var(--opf-muted)]">
                      {course.feeNote}
                    </p>
                  ) : null}
                  {course.curriculum.length > 0 ? (
                    <p className="mt-4">
                      <a
                        href="#subjects"
                        className="text-sm font-semibold text-[var(--opf-accent-red)] hover:underline"
                      >
                        View subjects ↓
                      </a>
                    </p>
                  ) : null}
                </div>

                <div className="relative mx-auto aspect-[16/10] w-full overflow-hidden rounded-lg bg-[#f3f3f3]">
                  <Image
                    src={detailImage}
                    alt={`${course.title} training`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {course.curriculum.length > 0 ? (
                <div
                  id="subjects"
                  className="mb-12 scroll-mt-24 border-t border-[var(--opf-border)] pt-10 text-center"
                >
                  <h2 className="mb-3 text-2xl font-bold !text-[#222]">
                    Subjects
                  </h2>
                  <p className="mx-auto mb-8 max-w-2xl text-sm text-[var(--opf-text)]">
                    What we teach in this course.
                  </p>
                  <ul className="mx-auto grid max-w-4xl gap-3 text-left sm:grid-cols-2">
                    {course.curriculum.flatMap((block) => block.topics).map((topic) => (
                      <li
                        key={topic}
                        className="rounded-lg bg-[var(--opf-surface)] px-4 py-3 text-sm leading-6 text-[#444]"
                      >
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {course.objectives.length > 0 ? (
                <div className="mb-12 border-t border-[var(--opf-border)] pt-10 text-center">
                  <h2 className="mb-3 text-2xl font-bold !text-[#222]">
                    What You&apos;ll Learn
                  </h2>
                  <p className="mx-auto mb-8 max-w-2xl text-sm text-[var(--opf-text)]">
                    Key outcomes for this {level.name} qualification.
                  </p>
                  <ul className="mx-auto grid max-w-4xl gap-3 text-left sm:grid-cols-2">
                    {course.objectives.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg bg-[var(--opf-surface)] px-4 py-3 text-sm leading-6 text-[#444]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="mb-12 border-t border-[var(--opf-border)] pt-10 text-center">
                <h2 className="mb-3 text-2xl font-bold !text-[#222]">
                  Online &amp; On-Campus Training
                </h2>
                <p className="mx-auto mb-8 max-w-2xl text-[15px] font-semibold text-[#222]">
                  Training is delivered both ways — theory online, practical on
                  campus:
                </p>
                <ol className="grid gap-4 sm:grid-cols-3 sm:items-stretch">
                  {trainingBenefits.map((item, index) => (
                    <li
                      key={item.title}
                      className="flex h-full flex-col rounded-lg bg-[var(--opf-surface)] p-5 text-center"
                    >
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--opf-secondary)]">
                        Benefit {index + 1}
                      </p>
                      <p className="mb-2 text-[15px] font-bold text-[#222]">
                        {item.title}
                      </p>
                      <p className="text-sm leading-6 text-[#444]">{item.text}</p>
                    </li>
                  ))}
                </ol>
                <p className="mx-auto mt-6 max-w-3xl text-sm leading-6 text-[var(--opf-text)]">
                  {course.trainingMode}
                </p>
              </div>

              <div className="mb-12 grid gap-8 border-t border-[var(--opf-border)] pt-10 md:grid-cols-2">
                <div className="text-center md:text-left">
                  <h2 className="mb-4 text-2xl font-bold !text-[#222]">
                    Entry Requirements
                  </h2>
                  <ul className="space-y-2 text-[15px] leading-7 text-[#444]">
                    {course.entryRequirements.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="text-center md:text-left">
                  <h2 className="mb-4 text-2xl font-bold !text-[#222]">
                    Assessment
                  </h2>
                  <ul className="space-y-2 text-[15px] leading-7 text-[#444]">
                    {course.assessment.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mb-12 rounded-lg bg-[var(--opf-surface)] px-6 py-8 text-center">
                <h2 className="mb-3 text-2xl font-bold !text-[#222]">
                  Certification
                </h2>
                <p className="mx-auto max-w-3xl text-[15px] leading-7 text-[#444]">
                  {course.certification}
                </p>
              </div>

              <TrainingExperience
                image={workshopImage}
                imageAlt={`${course.title} workshop at OPF EV Academy`}
                paragraphs={course.trainingExperience}
                applyHref={applyHref}
              />
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
