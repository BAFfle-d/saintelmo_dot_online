import { LINKS } from "@/data/content";
import SectionHeading from "./SectionHeading";

export default function ListenSection() {
  return (
    <section id="listen" className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      <SectionHeading
        index="01"
        label="The musical playlist"
        title="Press play on the island"
        blurb="Every number lives on YouTube, rebuilt as the show evolves — the playlists always carry the freshest cuts. Two acts, twenty-four numbers, zero apologies."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-5">
        {/* current canon */}
        <article className="surface glow card-hover p-5 sm:p-6 lg:col-span-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="chip" style={{ background: "var(--accent)", color: "var(--paper)" }}>
              Current canon
            </span>
            <span className="chip">52 videos</span>
            <span className="chip" style={{ background: "var(--paper-2)" }}>
              v2.x revisions
            </span>
          </div>
          <h3 className="mt-4 font-display text-2xl font-black leading-tight">
            “Geoff ❤ Maxie: a new musical parody about an island (and the monsters that live
            there)”
          </h3>
          <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
            The full show as it stands today — scene numbers, reprises, v2.0 re-cuts, clips and
            plot explainers. A dark, funny, unsettling parody about power, privilege, loyalty,
            scandal, and the performance of innocence.
          </p>
          <div className="iframe-shell mt-5 aspect-video w-full">
            <iframe
              className="h-full w-full"
              src={LINKS.embedMain}
              title="Geoff & Maxie — current canon playlist"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={LINKS.playlistMain}
              target="_blank"
              rel="noreferrer"
              className="btn-organic btn-accent"
            >
              ▶ Play all on YouTube
            </a>
            <a href={LINKS.channel} target="_blank" rel="noreferrer" className="btn-organic">
              Subscribe @bfloore_online
            </a>
          </div>
        </article>

        {/* legacy canon */}
        <article className="surface card-hover p-5 sm:p-6 lg:col-span-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="chip" style={{ background: "var(--accent-2)", color: "var(--paper)" }}>
              Legacy canon
            </span>
            <span className="chip">21 videos</span>
            <span className="chip" style={{ background: "var(--paper-2)" }}>
              v1.0–1.5
            </span>
          </div>
          <h3 className="mt-4 font-display text-xl font-black leading-tight">
            “Geoff & Maxie: Legacy Canon v1.0–1.5”
          </h3>
          <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
            The archive — the earliest generated versions of the score, kept for the record.
            Compare a legacy cut with its v2 revision to hear how the show grew teeth.
          </p>
          <div className="iframe-shell mt-5 aspect-video w-full">
            <iframe
              className="h-full w-full"
              src={LINKS.embedLegacy}
              title="Geoff & Maxie — legacy canon playlist"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <div className="mt-5">
            <a
              href={LINKS.playlistLegacy}
              target="_blank"
              rel="noreferrer"
              className="btn-organic"
            >
              Open the archive ↗
            </a>
          </div>
        </article>
      </div>

      <p className="section-label mt-8 text-center">
        Tip — every song has a latest version; the scene guide below links straight to the
        newest cut of each number.
      </p>
    </section>
  );
}
