import Image from "next/image";
import Link from "next/link";
import type { CourseLevelGroup } from "@/data/courses/imi-levels";

type LevelCardProps = {
  level: CourseLevelGroup;
};

export function LevelCard({ level }: LevelCardProps) {
  const count = level.courses.length;

  return (
    <article className="group overflow-hidden rounded-xl bg-white ring-1 ring-[var(--opf-border)] transition hover:ring-[var(--opf-secondary)]">
      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--opf-surface)]">
        <Image
          src={level.image}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
          className="object-cover transition duration-400 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      <div className="p-4">
        <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--opf-secondary)]">
          {level.role}
        </p>
        <h3 className="mb-1 text-lg font-bold text-[var(--opf-text-strong)]">
          {level.name}
        </h3>
        <p className="mb-4 text-sm text-[var(--opf-muted)]">
          {count} {count === 1 ? "Course" : "Courses"}
        </p>

        <Link
          href={`/courses/level/${level.slug}`}
          className="inline-flex rounded-md bg-[var(--opf-primary)] px-3.5 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-[var(--opf-primary-light)]"
        >
          View Courses
        </Link>
      </div>
    </article>
  );
}
