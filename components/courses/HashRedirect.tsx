"use client";

import { useEffect } from "react";

export function HashRedirect({ hash }: { hash: string }) {
  useEffect(() => {
    window.location.replace(`/#${hash}`);
  }, [hash]);

  return (
    <p className="p-8 text-sm text-[var(--opf-text)]">Opening course details…</p>
  );
}
