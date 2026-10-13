import { AI_CREDITS, PARODY_NOTE } from "@/data/content";
import SectionHeading from "./SectionHeading";

export default function NotesSection() {
  return (
    <section id="notes" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="06"
          label="Production Notes"
          title="Everything here is fake. That's the point."
        />

        <div className="grid gap-6 lg:grid-cols-5">
          <div className="surface p-7 md:p-9 lg:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--ink-soft)]">A note on parody</p>
            <div className="mt-4 space-y-4 text-[0.95rem] leading-relaxed text-[var(--ink-soft)]">
              {PARODY_NOTE.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <p className="mt-6 font-display text-[1.05rem] font-semibold text-[var(--ink)]">
              — B. Floore, Saint Elmo, FL
            </p>
          </div>

          <div className="surface-2 flex flex-col p-7 md:p-9 lg:col-span-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--ink-soft)]">Toolkit of this production</p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">
              The score was not orchestrated. It was <em className="text-[var(--accent)]">negotiated</em> — with a long
              list of machines. In gratitude, and for the record:
            </p>
            <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {AI_CREDITS.map((c) => (
                <li
                  key={c.tool}
                  className="rounded-xl border-[1.5px] border-[var(--line)] bg-[var(--paper-2)] px-3.5 py-2.5"
                >
                  <span className="flex items-center gap-2.5 text-[13px] font-semibold text-[var(--ink)]">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                    {c.tool}
                  </span>
                  <span className="mt-1 block pl-4 text-[12px] leading-relaxed text-[var(--ink-soft)]">{c.role}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
