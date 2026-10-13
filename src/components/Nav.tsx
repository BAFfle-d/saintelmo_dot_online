import { useEffect, useState } from "react";
import { useTheme } from "@/hooks/useTheme";

const LINKS = [
  { href: "#listen", label: "Listen" },
  { href: "#scenes", label: "Scenes" },
  { href: "#characters", label: "Characters" },
  { href: "#about", label: "About" },
  { href: "#notes", label: "Notes" },
  { href: "#workshop", label: "Workshop" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const { theme, nextTheme, cycle } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "nav-scrolled" : ""}`}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
        <a
          href="#top"
          className="font-display text-xl font-black tracking-tight"
          aria-label="Geoff and Maxie — back to top"
        >
          G<span style={{ color: "var(--accent)" }}>&</span>M
        </a>

        <nav
          aria-label="Sections"
          className="ml-2 hidden items-center gap-1 overflow-x-auto lg:flex"
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-2 font-mono text-[0.72rem] uppercase tracking-[0.12em] transition-colors hover:bg-[var(--paper-2)]"
              style={{ minHeight: 44, display: "inline-flex", alignItems: "center" }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <a href="#listen" className="btn-organic btn-accent hidden sm:inline-flex">
            ▶ Hear the score
          </a>
          <button
            type="button"
            onClick={cycle}
            className="btn-organic"
            title={`Style: ${theme.name} — press for ${nextTheme.name}`}
            aria-label={`Current style ${theme.name}. Activate to switch to ${nextTheme.name}`}
          >
            <span aria-hidden>{theme.icon}</span>
            <span className="hidden md:inline">{theme.name}</span>
            <span className="text-[0.65rem] opacity-60" aria-hidden>
              → {nextTheme.name}
            </span>
          </button>
        </div>
      </div>

      {/* mobile section chips */}
      <nav
        aria-label="Sections (mobile)"
        className="flex gap-2 overflow-x-auto px-4 pb-2 lg:hidden"
        style={{ scrollbarWidth: "none" }}
      >
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="chip"
            style={{ minHeight: 36, background: "var(--card)" }}
          >
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
