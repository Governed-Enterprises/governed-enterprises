import { SITE_CONTENT } from "@/lib/constants";

function FooterEmblem() {
  return (
    <svg
      viewBox="0 0 120 140"
      className="w-12 h-14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M60 4L112 30V85C112 102 90 122 60 136C30 122 8 102 8 85V30L60 4Z"
        stroke="#c9a84c"
        strokeWidth="2.5"
        fill="none"
      />
      <path
        d="M60 12L106 35V84C106 98 86 116 60 129C34 116 14 98 14 84V35L60 12Z"
        fill="#c9a84c"
        fillOpacity="0.06"
      />
      <text
        x="60"
        y="80"
        textAnchor="middle"
        fontSize="38"
        fontWeight="700"
        fill="#c9a84c"
        letterSpacing="2"
      >
        GE
      </text>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ge-background px-6">
      {/* Gold divider */}
      <div className="w-[60%] mx-auto h-px bg-ge-gold/30" />

      <div className="py-12 md:py-16 flex flex-col items-center text-center">
        {/* Emblem */}
        <FooterEmblem />

        {/* Tagline */}
        <p className="mt-4 text-sm italic text-ge-secondary">
          {SITE_CONTENT.footerTagline}
        </p>

        {/* Founder */}
        <p className="mt-2 text-xs uppercase tracking-[0.15em] text-ge-dim">
          {SITE_CONTENT.footerFounder}
        </p>

        {/* Copyright */}
        <p className="mt-6 text-xs text-ge-dim">
          {SITE_CONTENT.copyright}
        </p>

        {/* Contact */}
        <a
          href="mailto:contact@governedenterprises.com"
          className="mt-2 text-xs text-ge-gold hover:text-ge-gold-bright transition-colors"
        >
          contact@governedenterprises.com
        </a>
      </div>
    </footer>
  );
}
