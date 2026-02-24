"use client";

import { SITE_CONTENT } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-obsidian border-t border-gold/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-sm text-muted">{SITE_CONTENT.copyright}</p>
          <p className="text-xs text-muted mt-1">{SITE_CONTENT.footerFounder}</p>
        </div>
        <p className="text-xs tracking-[0.3em] uppercase text-gold/40">
          {SITE_CONTENT.footerTagline}
        </p>
      </div>
    </footer>
  );
}
