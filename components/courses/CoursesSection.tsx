import { LevelCard } from "@/components/courses/LevelCard";
import { levels } from "@/data/courses/imi-levels";

export function CoursesSection() {
  return (
    <section
      id="courses"
      className="scroll-mt-24 bg-[var(--opf-surface)] px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 max-w-3xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--opf-secondary)] sm:text-base">
            Courses
          </p>
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-[var(--opf-text-strong)] sm:text-3xl">
            Explore Our EV Training Courses
          </h2>
          <p className="text-sm text-[var(--opf-text)]">
            Choose your training level and view official IMI qualifications.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {levels.map((level) => (
            <LevelCard key={level.slug} level={level} />
          ))}
        </div>
      </div>
    </section>
  );
}
