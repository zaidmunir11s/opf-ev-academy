import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteContact } from "@/data/site-contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | OPF EV Academy",
  description:
    "Contact OPF EV Academy for admissions, training, and support enquiries.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-[var(--opf-white)]">
      <Header variant="solid" />
      <main className="flex-1">
        <section className="border-b border-[var(--opf-border)] bg-[var(--opf-surface)] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--opf-secondary)]">
              Contact
            </p>
            <h1 className="text-3xl font-bold tracking-tight !text-[var(--opf-text-strong)] sm:text-4xl">
              Get in Touch
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-base text-[var(--opf-text)]">
              Our support is available to help you during office hours.
            </p>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-white px-5 py-6 ring-1 ring-[var(--opf-border)]">
              <h2 className="mb-3 text-lg font-bold !text-[var(--opf-text-strong)]">
                Address
              </h2>
              <p className="text-sm leading-relaxed text-[var(--opf-text)]">
                {siteContact.address}
              </p>
            </div>

            <div className="rounded-xl bg-white px-5 py-6 ring-1 ring-[var(--opf-border)]">
              <h2 className="mb-3 text-lg font-bold !text-[var(--opf-text-strong)]">
                Phone
              </h2>
              <ul className="space-y-2 text-sm text-[var(--opf-text)]">
                {siteContact.phones.map((phone) => (
                  <li key={phone}>
                    <a
                      href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                      className="transition hover:text-[var(--opf-primary)]"
                    >
                      {phone}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-white px-5 py-6 ring-1 ring-[var(--opf-border)]">
              <h2 className="mb-3 text-lg font-bold !text-[var(--opf-text-strong)]">
                Email
              </h2>
              <ul className="space-y-2 text-sm text-[var(--opf-text)]">
                {siteContact.emails.map((email) => (
                  <li key={email}>
                    <a
                      href={`mailto:${email}`}
                      className="transition hover:text-[var(--opf-primary)]"
                    >
                      {email}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
