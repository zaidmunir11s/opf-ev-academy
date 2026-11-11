import Image from "next/image";
import Link from "next/link";
import { siteContact } from "@/data/site-contact";

const quickLinks = [
  { href: "/#about", label: "About" },
  { href: "/#courses", label: "Courses" },
  { href: "/admissions/apply", label: "Apply Now" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/contact", label: "Contact Us" },
];

function Arrow() {
  return (
    <span className="mr-2 text-[var(--opf-secondary)]" aria-hidden>
      →
    </span>
  );
}

export function Footer() {
  return (
    <footer className="bg-[var(--opf-primary)] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:px-8 lg:py-14">
        <div>
          <Link href="/" className="mb-5 inline-block">
            <Image
              src="/logo/opf-logo.png"
              alt="Overseas Pakistanis Foundation"
              width={140}
              height={48}
              className="h-12 w-auto"
            />
          </Link>
          <p className="mb-1 text-sm font-semibold text-[var(--opf-secondary)]">
            {siteContact.academyName}
          </p>
          <p className="text-sm leading-relaxed text-white/85">
            Address: {siteContact.address}
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-base font-bold tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-2.5 text-sm text-white/85">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center transition hover:text-[var(--opf-secondary)]"
                >
                  <Arrow />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-base font-bold tracking-wide">
            Contact Info
          </h3>
          <p className="mb-4 text-sm leading-relaxed text-white/85">
            Our support is available to help you during office hours.
          </p>
          <ul className="space-y-2.5 text-sm text-white/85">
            {siteContact.phones.map((phone) => (
              <li key={phone}>
                <a
                  href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                  className="transition hover:text-[var(--opf-secondary)]"
                >
                  {phone}
                </a>
              </li>
            ))}
            {siteContact.emails.map((email) => (
              <li key={email}>
                <a
                  href={`mailto:${email}`}
                  className="transition hover:text-[var(--opf-secondary)]"
                >
                  {email}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-base font-bold tracking-wide">
            Useful Links
          </h3>
          <ul className="space-y-2.5 text-sm text-white/85">
            {siteContact.usefulLinks.map((link, index) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    index === siteContact.usefulLinks.length - 1
                      ? "inline-flex items-center text-[var(--opf-secondary)] transition hover:text-white"
                      : "inline-flex items-center transition hover:text-[var(--opf-secondary)]"
                  }
                >
                  <Arrow />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-sm text-white/75 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 OPF EV Academy | All Rights Reserved.</p>
          <p>Overseas Pakistanis Foundation</p>
        </div>
      </div>
    </footer>
  );
}
