import { CHARACTERS } from "@/data/content";
import SectionHeading from "./SectionHeading";
import Figure from "./Figure";

export default function CharactersSection() {
  return (
    <section id="characters" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      <SectionHeading
        index="03"
        label="Character biographies"
        title="The company"
        blurb="Fourteen souls, zero faces — predators, survivors, operators, and the people who hold their coats. Built from structural shapes, identified by silhouette alone."
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {CHARACTERS.map((c, i) => (
          <article
            key={c.id}
            className="surface card-hover flex flex-col p-5"
            style={{ transform: `rotate(${i % 3 === 0 ? -0.5 : i % 3 === 1 ? 0.4 : -0.2}deg)` }}
          >
            <div className="flex items-start justify-between gap-2">
              <div
                className="rounded-2xl border-[1.5px] px-2 pt-3"
                style={{ borderColor: "var(--line)", background: "var(--paper-2)" }}
              >
                <Figure c={c} width={c.duo ? 84 : 56} pose={i} />
              </div>
              <span
                className="chip"
                style={{ background: "var(--accent)", color: "var(--paper)" }}
              >
                {c.epithet}
              </span>
            </div>
            <h3 className="mt-4 font-display text-lg font-bold leading-tight">{c.name}</h3>
            <p className="section-label mt-1 normal-case tracking-[0.08em]">{c.role}</p>
            <p className="mt-3 flex-1 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
              {c.bio}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
