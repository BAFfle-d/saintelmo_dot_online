import { useCallback, useEffect, useState } from "react";
import { QUOTES, CHARACTERS, type Quote } from "@/data/content";
import Figure from "./Figure";

function randomQuote(exclude?: Quote): Quote {
  let q = QUOTES[Math.floor(Math.random() * QUOTES.length)];
  let guard = 0;
  while (q === exclude && guard++ < 10) {
    q = QUOTES[Math.floor(Math.random() * QUOTES.length)];
  }
  return q;
}

const LINEUP_IDS = ["geoff", "maxie", "gus", "ronnie", "tammy", "ginnie", "ashcammie"];

export default function Hero() {
  const [quote, setQuote] = useState<Quote>(() => randomQuote());

  const next = useCallback(() => setQuote((q) => randomQuote(q)), []);

  // a fresh line every time the page is opened, and on a slow loop
  useEffect(() => {
    const id = window.setInterval(next, 14000);
    return () => window.clearInterval(id);
  }, [next]);

  const lineup = LINEUP_IDS.map((id) => CHARACTERS.find((c) => c.id === id)!);

  return (
    <section id="top" className="contours relative overflow-hidden pt-32 lg:pt-36">
      {/* soft organic blobs */}
      <div
        aria-hidden
        className="float-slow absolute -left-24 top-24 h-72 w-72 rounded-full opacity-25"
        style={{ background: "var(--accent-2)", filter: "blur(70px)" }}
      />
      <div
        aria-hidden
        className="float-slower absolute -right-20 top-64 h-80 w-80 rounded-full opacity-25"
        style={{ background: "var(--accent)", filter: "blur(80px)" }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* eyebrow */}
        <p className="section-label mb-4 flex items-center gap-3">
          <span className="inline-block h-px w-10" style={{ background: "var(--accent)" }} />
          Saint Elmo · Original Musical Parody · Version 2
        </p>

        {/* title */}
        <h1 className="font-display leading-[0.95]">
          <span className="block text-[clamp(3.2rem,11vw,8.5rem)] font-black uppercase">
            Geoff
          </span>
          <span className="block text-[clamp(2.6rem,9vw,7rem)] font-black uppercase">
            <em
              className="not-italic"
              style={{ color: "var(--accent)", fontFamily: "inherit" }}
            >
              &
            </em>
            Maxie
          </span>
        </h1>

        <p className="mt-5 max-w-2xl text-[clamp(1.05rem,2.4vw,1.45rem)] leading-snug">
          A new musical parody about an island{" "}
          <span style={{ color: "var(--ink-soft)" }}>
            (and the monsters that live on it)
          </span>{" "}
          — power, privilege, loyalty, scandal, and the performance of innocence.
        </p>

        {/* front-and-center facts */}
        <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            ["Format", "Two acts · 24 numbers"],
            ["Score", "Original, AI-assisted"],
            ["Listen", "Free on YouTube"],
            ["Script", "Notion workshop"],
          ].map(([k, v]) => (
            <div key={k} className="surface-2 px-4 py-3">
              <dt className="section-label">{k}</dt>
              <dd className="mt-1 font-display text-sm font-bold sm:text-base">{v}</dd>
            </div>
          ))}
        </dl>

        {/* quote machine */}
        <div className="surface glow relative mt-10 max-w-3xl p-6 sm:p-8" aria-live="polite">
          <span
            aria-hidden
            className="font-display absolute -top-7 left-6 text-7xl leading-none"
            style={{ color: "var(--accent)" }}
          >
            “
          </span>
          <blockquote key={quote.text} className="quote-swap">
            <p className="font-display text-[clamp(1.15rem,2.6vw,1.6rem)] font-medium italic leading-snug">
              {quote.text}
            </p>
            <footer className="section-label mt-4">— {quote.source}</footer>
          </blockquote>
          <button
            type="button"
            onClick={next}
            className="btn-organic absolute -bottom-5 right-6"
          >
            ↻ Another line
          </button>
        </div>

        {/* CTAs */}
        <div className="mt-12 flex flex-wrap items-center gap-3">
          <a href="#listen" className="btn-organic btn-accent text-base">
            ▶ Listen to the show
          </a>
          <a href="#scenes" className="btn-organic text-base">
            Browse the scenes
          </a>
          <a
            href="https://purrfect-ocelot-0fa.notion.site/geoff-and-maxie"
            target="_blank"
            rel="noreferrer"
            className="btn-organic text-base"
          >
            Read the script ↗
          </a>
        </div>

        {/* the lineup — faceless, organic, structural */}
        <div className="relative mt-16 sm:mt-20">
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-16"
            style={{
              background:
                "radial-gradient(120% 100% at 50% 100%, var(--paper-2) 0%, transparent 70%)",
            }}
          />
          <div className="relative flex items-end justify-between gap-1 overflow-x-auto px-2 pb-6 sm:justify-center sm:gap-6">
            {lineup.map((c, i) => (
              <figure key={c.id} className="group flex shrink-0 flex-col items-center gap-2">
                <div
                  className="transition-transform duration-300 group-hover:-translate-y-2"
                  style={{ transform: `rotate(${(i % 2 === 0 ? -1 : 1) * 1.2}deg)` }}
                >
                  <Figure c={c} width={c.duo ? 96 : 76} pose={i} />
                </div>
                <figcaption className="chip" style={{ background: "var(--card)" }}>
                  {c.id === "ashcammie" ? "Ash & Cammie" : c.name.split("“")[1]?.replace("”", "") ?? c.name.split(" ")[0]}
                </figcaption>
              </figure>
            ))}
          </div>
          <p
            className="section-label absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap"
            aria-hidden
          >
            ～ the company, faceless as charged ～
          </p>
        </div>
      </div>

      {/* marquee divider */}
      <div
        className="marquee mt-10 border-y-[1.5px] py-3 font-mono text-[0.72rem] uppercase tracking-[0.25em]"
        style={{ borderColor: "var(--line)", color: "var(--ink-soft)" }}
        aria-hidden
      >
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, half) => (
            <span key={half} className="flex gap-12">
              {[
                "Allegedly",
                "Sweetheart Deal",
                "Only Boys",
                "Reasonable Man",
                "Little Secrets",
                "Welcome to Lil' Elmo",
                "What Happened",
                "The Waltz of Inevitability",
                "Standard Procedure",
                "What Did You Do",
                "Good for Us",
                "We the People",
                "If You Only Knew",
              ].map((s) => (
                <span key={s}>✦ {s}</span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
