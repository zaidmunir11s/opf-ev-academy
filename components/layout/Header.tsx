"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { levels } from "@/data/courses/imi-levels";

const levelLinks = levels.map((level) => ({
  slug: level.slug,
  label: `IMI ${level.name}`,
  role: level.role,
}));

type HeaderProps = {
  variant?: "overlay" | "solid";
};

export function Header({ variant = "overlay" }: HeaderProps) {
  return (
    <Suspense fallback={<HeaderShell variant={variant} />}>
      <HeaderInner variant={variant} />
    </Suspense>
  );
}

function HeaderShell({ variant = "overlay" }: HeaderProps) {
  const solid = variant === "solid";
  return (
    <>
      <header
        className={
          solid
            ? "fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[var(--opf-primary)]/95"
            : "fixed inset-x-0 top-0 z-50 bg-transparent"
        }
      >
        <div className="h-[4.5rem] sm:h-[4.75rem]" />
      </header>
      {solid ? <div aria-hidden className="h-[4.5rem] sm:h-[4.75rem]" /> : null}
    </>
  );
}

function HeaderInner({ variant = "overlay" }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hash, setHash] = useState("");
  const [mobileSection, setMobileSection] = useState<"online" | "campus" | null>(
    null,
  );
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode");
  const solid = variant === "solid";
  const elevated = solid || scrolled;
  const onHome = pathname === "/";
  const homeSection =
    onHome && (hash === "#about" || hash === "#courses" || hash === "#reviews")
      ? hash
      : "";
  const homeActive = onHome && !homeSection;
  const aboutActive = onHome && homeSection === "#about";
  const coursesActive =
    (onHome && homeSection === "#courses") ||
    (pathname.startsWith("/courses") &&
      mode !== "online" &&
      mode !== "on-campus");
  const onlineActive =
    pathname.startsWith("/online-training") || mode === "online";
  const campusActive =
    pathname.startsWith("/on-campus-training") || mode === "on-campus";
  const certificationActive = pathname.startsWith("/certification");
  const contactActive = pathname.startsWith("/contact");

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      if (pathname !== "/") return;

      const sections = ["about", "courses", "reviews"] as const;
      const offset = 120;
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= offset) current = `#${id}`;
      }
      setHash(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const closeMobile = () => {
    setOpen(false);
    setMobileSection(null);
  };

  return (
    <>
      <header
        className={
          elevated
            ? "fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[var(--opf-primary)]/95 shadow-md backdrop-blur-md transition-[background-color,box-shadow] duration-300"
            : "fixed inset-x-0 top-0 z-50 bg-transparent transition-[background-color,box-shadow] duration-300"
        }
      >
        <div className="relative z-10 flex w-full items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-10">
          <Link href="/" className="flex shrink-0 items-center gap-3 sm:gap-4">
            <Image
              src="/logo/opf-logo.png"
              alt="Overseas Pakistanis Foundation"
              width={140}
              height={140}
              unoptimized
              className={
                elevated
                  ? "h-14 w-14 object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] sm:h-16 sm:w-16"
                  : "h-24 w-24 object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] sm:h-28 sm:w-28 lg:h-32 lg:w-32"
              }
              priority
            />
            <div className="leading-tight text-white">
              <p className="text-lg font-semibold tracking-wide text-white sm:text-xl lg:text-2xl">
                OPF EV Academy
              </p>
              <p className="hidden text-sm text-white/90 sm:block">
                Overseas Pakistanis Foundation
              </p>
            </div>
          </Link>

          <nav className="ml-auto hidden shrink-0 items-center gap-1 lg:flex">
            <NavItem href="/" label="Home" active={homeActive} />
            <NavItem href="/#about" label="About" active={aboutActive} />
            <NavItem
              href="/#courses"
              label="Courses"
              active={coursesActive}
            />

            <NavDropdown
              label="Online Training"
              href="/online-training"
              active={onlineActive}
              heading="IMI Certificated Online Courses"
              links={levelLinks.map((level) => ({
                href: `/courses/level/${level.slug}?mode=online`,
                label: `${level.label} — ${level.role}`,
              }))}
            />

            <NavDropdown
              label="On-Campus"
              href="/on-campus-training"
              active={campusActive}
              heading="IMI Certificated On-Campus Courses"
              links={levelLinks.map((level) => ({
                href: `/courses/level/${level.slug}?mode=on-campus`,
                label: `${level.label} — ${level.role}`,
              }))}
            />

            <NavItem
              href="/certification"
              label="Certification"
              active={certificationActive}
            />
            <NavItem
              href="/contact"
              label="Contact"
              active={contactActive}
            />
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            className="ml-auto inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/30 text-white lg:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 bg-white" />
              <span className="block h-0.5 w-5 bg-white" />
              <span className="block h-0.5 w-5 bg-white" />
            </span>
          </button>
        </div>

        {open ? (
          <div className="relative z-10 max-h-[70vh] overflow-y-auto border-t border-white/10 bg-[var(--opf-primary)]/95 px-4 py-3 backdrop-blur lg:hidden">
            <nav className="flex flex-col gap-1">
              <MobileLink href="/" label="Home" onClick={closeMobile} />
              <MobileLink href="/#about" label="About" onClick={closeMobile} />
              <MobileLink
                href="/#courses"
                label="Courses"
                onClick={closeMobile}
              />

              <button
                type="button"
                className="rounded-md px-3 py-2 text-left text-sm font-medium uppercase tracking-wide text-white"
                onClick={() =>
                  setMobileSection((value) =>
                    value === "online" ? null : "online",
                  )
                }
              >
                Online Training {mobileSection === "online" ? "−" : "+"}
              </button>
              {mobileSection === "online"
                ? levelLinks.map((level) => (
                    <Link
                      key={`online-${level.slug}`}
                      href={`/courses/level/${level.slug}?mode=online`}
                      className="rounded-md px-5 py-2 text-sm text-white/90"
                      onClick={closeMobile}
                    >
                      {level.label}
                    </Link>
                  ))
                : null}

              <button
                type="button"
                className="rounded-md px-3 py-2 text-left text-sm font-medium uppercase tracking-wide text-white"
                onClick={() =>
                  setMobileSection((value) =>
                    value === "campus" ? null : "campus",
                  )
                }
              >
                On-Campus {mobileSection === "campus" ? "−" : "+"}
              </button>
              {mobileSection === "campus"
                ? levelLinks.map((level) => (
                    <Link
                      key={`campus-${level.slug}`}
                      href={`/courses/level/${level.slug}?mode=on-campus`}
                      className="rounded-md px-5 py-2 text-sm text-white/90"
                      onClick={closeMobile}
                    >
                      {level.label}
                    </Link>
                  ))
                : null}

              <MobileLink
                href="/certification"
                label="Certification"
                onClick={closeMobile}
              />
              <MobileLink href="/contact" label="Contact" onClick={closeMobile} />
            </nav>
          </div>
        ) : null}
      </header>

      {solid ? <div aria-hidden className="h-[4.5rem] sm:h-[4.75rem]" /> : null}
    </>
  );
}

function NavItem({
  href,
  label,
  active = false,
}: {
  href: string;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={
        active
          ? "rounded-md bg-white/20 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white ring-1 ring-white/40"
          : "rounded-md px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white/90 transition hover:bg-white/10 hover:text-white"
      }
    >
      {label}
    </Link>
  );
}

function NavDropdown({
  label,
  href,
  heading,
  links,
  active = false,
}: {
  label: string;
  href: string;
  heading: string;
  links: { href: string; label: string }[];
  active?: boolean;
}) {
  return (
    <div className="group relative">
      <Link
        href={href}
        className={
          active
            ? "inline-flex items-center rounded-md bg-white/20 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white ring-1 ring-white/40"
            : "inline-flex items-center rounded-md px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white/90 transition group-hover:bg-white/10 group-hover:text-white"
        }
      >
        {label}
      </Link>
      <div className="invisible absolute left-0 top-full z-50 min-w-[22rem] pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="rounded-md border border-white/10 bg-[var(--opf-primary)] p-4 shadow-xl">
          <p className="mb-2 border-b border-white/15 pb-2 text-sm font-semibold text-white">
            {heading}
          </p>
          <ul className="space-y-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-md px-2 py-2 text-sm text-white/90 transition hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function MobileLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      className="rounded-md px-3 py-2 text-sm font-medium uppercase tracking-wide text-white"
      onClick={onClick}
    >
      {label}
    </Link>
  );
}
