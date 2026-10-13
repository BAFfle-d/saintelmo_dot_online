import { ABOUT_PARAS, AI_NOTE } from "@/data/content";
import SectionHeading from "./SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="contours border-y-[1.5px] py-20 sm:py-24" style={{ borderColor: "var(--line)" }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="04"
          label="About the musical"
          title="What the show is"
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="surface glow p-6 sm:p-8 lg:col-span-2">
            <p className="font-display text-xl font-medium leading-relaxed sm:text-2xl">
              {ABOUT_PARAS[0]}
            </p>
            {ABOUT_PARAS.slice(1).map((p, i) => (
              <p
                key={i}
                className="mt-5 leading-relaxed"
                style={{ color: i === ABOUT_PARAS.length - 2 ? "var(--ink)" : "var(--ink-soft)" }}
              >
                {p}
              </p>
            ))}
          </div>

          <aside className="flex flex-col gap-5">
            <div className="surface-2 p-6">
              <p className="section-label">A note on AI collaboration</p>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                {AI_NOTE}
              </p>
            </div>
            <div
              className="surface p-6"
              style={{ background: "var(--accent)", color: "var(--paper)" }}
            >
              <p className="font-display text-lg font-bold italic leading-snug">
                “Because some stories are too important to tell quietly.”
              </p>
              <p className="font-mono mt-3 text-[0.7rem] uppercase tracking-[0.2em] opacity-80">
                — B. Floore
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
