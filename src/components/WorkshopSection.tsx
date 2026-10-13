import { BLOG_DATE, BLOG_INTRO, BLOG_SECTIONS, STATS } from "@/data/content";
import SectionHeading from "./SectionHeading";

export default function WorkshopSection() {
  return (
    <section id="workshop" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="07"
          label="Behind the Scenes"
          title="Built in a workshop, not a writers' room."
          blurb="No table reads. No rehearsal room. Just a very patient man, a very fast internet connection, and a hurricane of artificial intelligence."
        />

        <dl className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {STATS.map((s) => (
            <div key={s.label} className="surface card-hover p-5 text-center md:p-6">
              <dd className="font-display text-[clamp(1.6rem,3vw,2.3rem)] font-black leading-none text-[var(--accent)]">
                {s.value}
              </dd>
              <dt className="mt-2.5 font-mono text-[10.5px] uppercase leading-snug tracking-[0.12em] text-[var(--ink-soft)]">
                {s.label}
              </dt>
            </div>
          ))}
        </dl>

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          <article className="surface p-7 md:p-10 lg:col-span-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b-[1.5px] border-[var(--line)] pb-4">
              <h3 className="font-display text-xl font-bold md:text-2xl">The Anatomy of a Machine-Made Musical</h3>
              <time className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--ink-soft)]">{BLOG_DATE}</time>
            </div>
            <p className="mt-6 max-w-3xl text-[1.05rem] leading-relaxed text-[var(--ink-soft)]">{BLOG_INTRO}</p>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {BLOG_SECTIONS.map((sec) => (
                <div key={sec.heading}>
                  <h4 className="font-display text-[1.05rem] font-bold text-[var(--ink)]">
                    <span className="mr-2 text-[var(--accent)]" aria-hidden="true">✦</span>
                    {sec.heading}
                  </h4>
                  <p className="mt-2.5 text-sm leading-relaxed text-[var(--ink-soft)]">{sec.body}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
