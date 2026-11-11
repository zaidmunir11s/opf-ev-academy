"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getLevelBySlug } from "@/data/courses/imi-levels";
import Link from "next/link";
import { useEffect, useState } from "react";

type EnrollmentPayload = {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  level: string;
  mode: string;
  education: string;
  message: string;
};

export default function ApplicationSubmittedPage() {
  const [data, setData] = useState<EnrollmentPayload | null>(null);

  useEffect(() => {
    const raw = window.sessionStorage.getItem("opf-enrollment");
    if (!raw) return;
    try {
      setData(JSON.parse(raw) as EnrollmentPayload);
    } catch {
      setData(null);
    }
  }, []);

  const level = data?.level ? getLevelBySlug(data.level) : null;

  return (
    <div className="flex min-h-dvh flex-col bg-[var(--opf-white)]">
      <Header variant="solid" />
      <main className="flex-1">
        <section className="bg-[var(--opf-primary)] px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--opf-secondary)]">
              Admissions
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Application Submitted
            </h1>
            <p className="mt-3 max-w-2xl text-base text-white/90">
              Thank you. Your enrollment request has been received.
            </p>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl border border-[var(--opf-border)] bg-[var(--opf-surface)] p-6 sm:p-8">
            <p className="mb-6 text-base leading-relaxed text-[var(--opf-text)]">
              Our admissions team will contact you shortly with batch timing,
              fee payment guidance, and next steps.
            </p>

            {data ? (
              <dl className="space-y-3 text-sm">
                <Row label="Name" value={data.fullName} />
                <Row label="Email" value={data.email} />
                <Row label="Phone" value={data.phone} />
                <Row label="City" value={data.city} />
                <Row
                  label="Level"
                  value={
                    level
                      ? `${level.name} — ${level.role}`
                      : data.level || "—"
                  }
                />
                <Row
                  label="Training Mode"
                  value={
                    data.mode === "online"
                      ? "Online"
                      : data.mode === "on-campus"
                        ? "On-Campus"
                        : data.mode || "—"
                  }
                />
              </dl>
            ) : (
              <p className="text-sm text-[var(--opf-muted)]">
                Application details are unavailable in this browser session.
              </p>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/#courses"
                className="rounded-md bg-[var(--opf-primary)] px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[var(--opf-primary-light)]"
              >
                Back to Courses
              </Link>
              <Link
                href="/"
                className="rounded-md border border-[var(--opf-primary)] px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-[var(--opf-primary)] transition hover:bg-[var(--opf-primary)] hover:text-white"
              >
                Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5 border-b border-[var(--opf-border)] pb-3 sm:flex-row sm:justify-between sm:gap-4">
      <dt className="text-[var(--opf-muted)]">{label}</dt>
      <dd className="font-medium text-[var(--opf-text-strong)]">{value}</dd>
    </div>
  );
}
