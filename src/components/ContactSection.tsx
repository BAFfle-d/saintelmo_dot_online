import { LINKS, THEMES } from "@/data/content";
import SectionHeading from "./SectionHeading";

const SUBJECTS = [
  { label: "Production Collaboration", subject: "Production Collaboration — Geoff & Maxie" },
  { label: "Musical Feedback", subject: "Musical Feedback — Geoff & Maxie" },
  { label: "Licensing Inquiry", subject: "Licensing Inquiry — Geoff & Maxie" },
  { label: "Something Else", subject: "Geoff & Maxie" },
];

const RESOURCES = [
  {
    label: "The Script (Notion)",
    desc: "Full libretto, scene by scene, with revision history.",
    href: LINKS.notion,
    icon: "§",
    external: true,
  },
  {
    label: "YouTube Channel",
    desc: "@bfloore_online — every demo, re-cut and version bump.",
    href: LINKS.channel,
    icon: "▶",
    external: true,
  },
  {
    label: "Current Canon Playlist",
    desc: "The 52-track v2.x score, newest cuts first.",
    href: LINKS.playlistMain,
    icon: "♫",
    external: true,
  },
  {
    label: "Legacy Archive Playlist",
    desc: "Version 1 recordings, kept for the record.",
    href: LINKS.playlistLegacy,
    icon: "◫",
    external: true,
  },
  {
    label: "The Original Site",
    desc: "saintelmo.online — the brutalist first edition.",
    href: LINKS.originalSite,
    icon: "⌂",
    external: true,
  },
];

export default function ContactSection() {
  return (
    <>
      <section id="contact" className="contours py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            index="08"
            label="Contact & Resources"
            title="Talk to the man behind the curtain."
          />

          <div className="grid gap-6 lg:grid-cols-5">
            <div className="surface p-7 md:p-9 lg:col-span-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--ink-soft)]">Write to Barry</p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-[var(--ink-soft)]">
                Producer, composer, book writer, and the entire staff of the Saint Elmo workshop. Pick a topic —
                your mail app opens with the subject pre-filled.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {SUBJECTS.map((s) => (
                  <a
                    key={s.label}
                    href={`mailto:${LINKS.email}?subject=${encodeURIComponent(s.subject)}`}
                    className="btn-organic justify-center"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
              <a
                href={`mailto:${LINKS.email}`}
                className="link-underline mt-6 inline-block font-mono text-sm text-[var(--ink)]"
              >
                {LINKS.email}
              </a>
            </div>

            <a
              href={LINKS.rainn}
              target="_blank"
              rel="noreferrer"
              className="surface card-hover flex flex-col justify-between p-7 md:p-9 lg:col-span-2"
            >
              <div>
                <span className="chip">A serious note</span>
                <h3 className="mt-4 font-display text-xl font-bold leading-snug md:text-[1.35rem]">
                  This show jokes about power. It doesn't joke about survivors.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">
                  If the island's story hits close to home, support is real and it is close: the Rape, Abuse &amp;
                  Incest National Network — <strong className="text-[var(--ink)]">800-656-HOPE</strong>, free,
                  confidential, 24/7.
                </p>
              </div>
              <span className="btn-accent mt-6 self-start">Support RAINN ↗</span>
            </a>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {RESOURCES.map((r) => (
              <a
                key={r.label}
                href={r.href}
                target="_blank"
                rel="noreferrer"
                className="surface card-hover flex flex-col p-5"
              >
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-[var(--line)] bg-[var(--paper-2)] font-display text-lg text-[var(--accent)]"
                  aria-hidden="true"
                >
                  {r.icon}
                </span>
                <span className="mt-3.5 font-display text-[0.95rem] font-bold text-[var(--ink)]">
                  {r.label}
                  {r.external && <span className="ml-1 text-[var(--accent)]">↗</span>}
                </span>
                <span className="mt-1.5 text-[12.5px] leading-relaxed text-[var(--ink-soft)]">{r.desc}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t-[1.5px] border-[var(--line)] py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center sm:px-8">
          <p className="font-display text-lg font-black tracking-tight">
            GEOFF <span className="text-[var(--accent)]">&amp;</span> MAXIE
          </p>
          <p className="max-w-md font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-[var(--ink-soft)]">
            A new musical parody about an island — and the monsters that live on it.
          </p>
          <p className="font-mono text-[11px] tracking-[0.12em] text-[var(--ink-soft)]">
            © 2026 Barry Floore · Saint Elmo, FL · All islanders are fictional
          </p>
          <div className="mt-1 flex flex-wrap items-center justify-center gap-1.5">
            {THEMES.map((t) => (
              <span key={t.id} className="chip" title={t.name}>{t.icon} {t.name}</span>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
