import { useState } from "react";
import { SCENES_A1, SCENES_A2, LINKS, watch, type Scene } from "@/data/content";
import SectionHeading from "./SectionHeading";

function SceneCard({ scene }: { scene: Scene }) {
  const [open, setOpen] = useState(false);

  return (
    <article className={`surface card-hover ${open ? "glow" : ""}`}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-start gap-4 p-5 text-left"
        style={{ minHeight: 44 }}
      >
        <span
          className="chip mt-0.5 shrink-0"
          style={{ background: "var(--paper-2)" }}
        >
          {scene.code}
        </span>
        <span className="min-w-0 flex-1">
          <span className="font-display block text-lg font-bold leading-snug">
            {scene.title}
          </span>
          <span className="mt-1 block text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
            {scene.blurb}
          </span>
        </span>
        <span
          aria-hidden
          className="mt-1 shrink-0 font-mono text-lg transition-transform duration-300"
          style={{ transform: open ? "rotate(90deg)" : "none", color: "var(--accent)" }}
        >
          ▸
        </span>
      </button>

      {open && (
        <div className="border-t-[1.5px] px-5 py-4" style={{ borderColor: "var(--line)" }}>
          {scene.track?.videoId ? (
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={watch(scene.track.videoId)}
                target="_blank"
                rel="noreferrer"
                className="btn-organic btn-accent"
              >
                ▶ {scene.track.title}
              </a>
              {scene.track.version && (
                <span className="chip" style={{ background: "var(--accent-3)", color: "var(--ink)" }}>
                  {scene.track.version}
                </span>
              )}
              {scene.track.alt && (
                <a
                  href={watch(scene.track.alt.videoId)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-organic"
                >
                  {scene.track.alt.label} ↗
                </a>
              )}
            </div>
          ) : (
            <p className="font-mono text-xs uppercase tracking-[0.15em]" style={{ color: "var(--ink-soft)" }}>
              No recording yet — this scene is script-only for now.
            </p>
          )}
          {scene.track?.note && (
            <p className="mt-3 border-l-2 pl-3 text-sm italic" style={{ borderColor: "var(--accent)" }}>
              {scene.track.note}
            </p>
          )}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {scene.cast?.map((c) => (
              <span key={c} className="chip" style={{ background: "var(--paper-2)" }}>
                {c}
              </span>
            ))}
            <a
              href={LINKS.notion}
              target="_blank"
              rel="noreferrer"
              className="chip link-underline ml-auto"
              style={{ background: "var(--card)" }}
            >
              Script ↗
            </a>
          </div>
        </div>
      )}
    </article>
  );
}

export default function ScenesSection() {
  const [act, setAct] = useState<1 | 2>(1);
  const scenes = act === 1 ? SCENES_A1 : SCENES_A2;

  return (
    <section id="scenes" className="dotgrid border-y-[1.5px] py-20 sm:py-24" style={{ borderColor: "var(--line)" }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="02"
          label="Digital scenes · openable"
          title="The scene guide"
          blurb="Fifteen scenes in Act One, eleven in Act Two. Open any scene for its featured number — always linked to the newest version — plus the cast and a door into the script."
        />

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <div className="surface-2 inline-flex p-1.5" role="tablist" aria-label="Choose an act">
            {([1, 2] as const).map((a) => (
              <button
                key={a}
                role="tab"
                aria-selected={act === a}
                onClick={() => setAct(a)}
                className="btn-organic border-0 shadow-none"
                style={
                  act === a
                    ? { background: "var(--accent)", color: "var(--paper)" }
                    : { background: "transparent" }
                }
              >
                Act {a === 1 ? "One — The Island" : "Two — The Fallout"}
              </button>
            ))}
          </div>
          <span className="section-label">
            {scenes.length} scenes · {scenes.filter((s) => s.track?.videoId).length} with
            recordings
          </span>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {scenes.map((s) => (
            <SceneCard key={s.code} scene={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
