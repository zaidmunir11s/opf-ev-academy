import Image from "next/image";
import Link from "next/link";

const defaultParagraphs = [
  "Once you have enrolled onto this course, you will get structured access to online learning materials so you can study when and where it suits you.",
  "Upon successful completion of the online element you will attend face-to-face awareness and assessment activities at OPF EV Academy, included within the course package.",
  "We advise completing the training within the first weeks of your package, then completing assessment. You can revisit key topics for revision during your access period.",
];

type TrainingExperienceProps = {
  image: string;
  imageAlt: string;
  paragraphs?: string[];
  applyHref: string;
};

export function TrainingExperience({
  image,
  imageAlt,
  paragraphs = defaultParagraphs,
  applyHref,
}: TrainingExperienceProps) {
  return (
    <div className="border-t border-[var(--opf-border)] pt-10">
      <h2 className="mb-8 text-center text-2xl font-bold !text-[#222]">
        The Training Experience
      </h2>
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#f3f3f3]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="text-center lg:text-left">
          {paragraphs.map((para) => (
            <p
              key={para.slice(0, 48)}
              className="mx-auto mb-4 max-w-xl text-[15px] leading-7 text-[#444] lg:mx-0"
            >
              {para}
            </p>
          ))}
          <Link
            href={applyHref}
            className="mt-2 inline-flex rounded-md bg-[var(--opf-primary)] px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[var(--opf-primary-light)]"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}
