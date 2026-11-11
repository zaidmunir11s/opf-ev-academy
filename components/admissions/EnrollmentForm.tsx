"use client";

import { getLevelBySlug, levels } from "@/data/courses/imi-levels";
import {
  parseTrainingMode,
  type TrainingMode,
} from "@/lib/training-mode";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

type EnrollmentFormProps = {
  initialLevel?: string;
  initialMode?: string;
};

export function EnrollmentForm({
  initialLevel = "",
  initialMode = "",
}: EnrollmentFormProps) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [level, setLevel] = useState(
    getLevelBySlug(initialLevel) ? initialLevel : "",
  );
  const [mode, setMode] = useState<TrainingMode | "">(
    parseTrainingMode(initialMode),
  );

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);

    const form = new FormData(event.currentTarget);
    const payload = {
      fullName: String(form.get("fullName") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      city: String(form.get("city") || ""),
      level: String(form.get("level") || ""),
      mode: String(form.get("mode") || ""),
      education: String(form.get("education") || ""),
      message: String(form.get("message") || ""),
    };

    window.sessionStorage.setItem("opf-enrollment", JSON.stringify(payload));
    router.push("/admissions/submitted");
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <Field label="Full Name" name="fullName" required />
      <Field label="Email Address" name="email" type="email" required />
      <Field label="Phone Number" name="phone" type="tel" required />
      <Field label="City" name="city" required />

      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-[var(--opf-text-strong)]">
          Select Level
        </span>
        <select
          name="level"
          required
          value={level}
          onChange={(event) => setLevel(event.target.value)}
          className="w-full rounded-md border border-[var(--opf-border)] bg-white px-3 py-2.5 text-sm text-[var(--opf-text-strong)] outline-none ring-[var(--opf-secondary)] focus:ring-2"
        >
          <option value="">Choose a level</option>
          {levels.map((item) => (
            <option key={item.slug} value={item.slug}>
              {item.name} — {item.role}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-[var(--opf-text-strong)]">
          Training Mode
        </span>
        <select
          name="mode"
          required
          value={mode}
          onChange={(event) =>
            setMode(parseTrainingMode(event.target.value))
          }
          className="w-full rounded-md border border-[var(--opf-border)] bg-white px-3 py-2.5 text-sm text-[var(--opf-text-strong)] outline-none ring-[var(--opf-secondary)] focus:ring-2"
        >
          <option value="">Choose training mode</option>
          <option value="online">Online</option>
          <option value="on-campus">On-Campus</option>
        </select>
      </label>

      <Field label="Highest Education" name="education" required />

      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-[var(--opf-text-strong)]">
          Additional Notes
        </span>
        <textarea
          name="message"
          rows={4}
          className="w-full rounded-md border border-[var(--opf-border)] bg-white px-3 py-2.5 text-sm text-[var(--opf-text-strong)] outline-none ring-[var(--opf-secondary)] focus:ring-2"
          placeholder="Tell us about your background or preferred batch timing"
        />
      </label>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex rounded-md bg-[var(--opf-primary)] px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[var(--opf-primary-light)] disabled:opacity-60"
      >
        {submitting ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-[var(--opf-text-strong)]">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md border border-[var(--opf-border)] bg-white px-3 py-2.5 text-sm text-[var(--opf-text-strong)] outline-none ring-[var(--opf-secondary)] focus:ring-2"
      />
    </label>
  );
}
