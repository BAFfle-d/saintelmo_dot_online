import { useEffect, useRef } from "react";

export default function SectionHeading({
  index,
  label,
  title,
  blurb,
}: {
  index: string;
  label: string;
  title: string;
  blurb?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-in");
            io.disconnect();
          }
        });
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal flex flex-col gap-3">
      <p className="section-label flex items-center gap-3">
        <span
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border-[1.5px] font-mono text-[0.7rem]"
          style={{ borderColor: "var(--line)" }}
        >
          {index}
        </span>
        {label}
      </p>
      <h2 className="font-display text-[clamp(2rem,5.5vw,3.4rem)] font-black leading-none">
        {title}
      </h2>
      {blurb && (
        <p className="max-w-2xl leading-relaxed" style={{ color: "var(--ink-soft)" }}>
          {blurb}
        </p>
      )}
    </div>
  );
}
