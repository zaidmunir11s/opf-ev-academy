import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certification | OPF EV Academy",
  description: "IMI certification pathways at OPF EV Academy — coming soon.",
};

export default function CertificationPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-[var(--opf-white)]">
      <Header variant="solid" />
      <main className="flex-1">
        <section className="border-b border-[var(--opf-border)] bg-[var(--opf-surface)] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--opf-secondary)]">
              Certification
            </p>
            <h1 className="mb-4 text-3xl font-bold tracking-tight !text-[var(--opf-text-strong)] sm:text-4xl">
              Coming Soon
            </h1>
            <p className="mx-auto max-w-xl text-base leading-relaxed text-[var(--opf-text)]">
              Certification details and IMI pathway information will be
              published here soon. Meanwhile, explore our courses and apply for
              your preferred level.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
