import type { Character } from "@/data/content";

/**
 * Faceless organic figure — circles, arcs and rounded trapezoids only.
 * Structural geometry, no faces: hair silhouettes, hats and one accessory
 * do the identifying.
 */
export default function Figure({
  c,
  width = 120,
  pose = 0,
}: {
  c: Pick<Character, "outfit" | "hair" | "hairColor" | "skin" | "extra"> & { duo?: boolean };
  width?: number;
  pose?: number;
}) {
  const h = width * 1.9;
  const sway = pose % 2 === 0 ? 0 : 1.5;

  const Head = ({ cx, cy, r }: { cx: number; cy: number; r: number }) => (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={c.skin} />
      {/* hair silhouettes */}
      {c.hair === "side" && (
        <path d={`M ${cx - r} ${cy - r * 0.15} A ${r} ${r} 0 0 1 ${cx + r * 0.95} ${cy - r * 0.5} L ${cx + r} ${cy - r * 0.9} L ${cx - r} ${cy - r * 0.9} Z`} fill={c.hairColor} />
      )}
      {c.hair === "bob" && (
        <path d={`M ${cx - r * 1.08} ${cy + r * 0.55} L ${cx - r * 1.08} ${cy - r * 0.4} A ${r * 1.08} ${r * 1.05} 0 0 1 ${cx + r * 1.08} ${cy - r * 0.4} L ${cx + r * 1.08} ${cy + r * 0.55} A ${r * 0.9} ${r * 0.9} 0 0 1 ${cx - r * 1.08} ${cy + r * 0.55} Z`} fill={c.hairColor} />
      )}
      {c.hair === "bun" && (
        <g fill={c.hairColor}>
          <path d={`M ${cx - r * 1.02} ${cy - r * 0.2} A ${r} ${r * 1.02} 0 0 1 ${cx + r * 1.02} ${cy - r * 0.2} L ${cx + r} ${cy - r * 0.95} L ${cx - r} ${cy - r * 0.95} Z`} />
          <circle cx={cx} cy={cy - r * 1.18} r={r * 0.42} />
        </g>
      )}
      {c.hair === "long" && (
        <path d={`M ${cx - r * 1.12} ${cy + r * 1.35} L ${cx - r * 1.12} ${cy - r * 0.35} A ${r * 1.12} ${r * 1.1} 0 0 1 ${cx + r * 1.12} ${cy - r * 0.35} L ${cx + r * 1.12} ${cy + r * 1.35} A ${r * 0.85} ${r * 0.85} 0 0 1 ${cx - r * 1.12} ${cy + r * 1.35} Z`} fill={c.hairColor} />
      )}
      {c.hair === "bald" && null}
      {c.hair === "messy" && (
        <g fill={c.hairColor}>
          <circle cx={cx - r * 0.55} cy={cy - r * 0.95} r={r * 0.42} />
          <circle cx={cx + r * 0.15} cy={cy - r * 1.12} r={r * 0.5} />
          <circle cx={cx + r * 0.7} cy={cy - r * 0.82} r={r * 0.38} />
        </g>
      )}
      {c.hair === "ponytail" && (
        <g fill={c.hairColor}>
          <path d={`M ${cx - r * 0.95} ${cy - r * 0.1} A ${r * 0.95} ${r * 0.98} 0 0 1 ${cx + r * 0.95} ${cy - r * 0.1} L ${cx + r * 0.95} ${cy - r * 0.85} L ${cx - r * 0.95} ${cy - r * 0.85} Z`} />
          <path d={`M ${cx + r * 0.8} ${cy - r * 0.3} q ${r * 0.9} ${r * 0.7} ${r * 0.35} ${r * 1.9} q ${r * 0.35} -${r * 0.2} ${r * 0.25} -${r * 1.2} q -${r * 0.15} -${r * 0.6} -${r * 0.9} -${r * 1.15} Z`} />
        </g>
      )}
      {c.hair === "beanie" && (
        <g>
          <path d={`M ${cx - r * 1.02} ${cy - r * 0.1} A ${r * 1.02} ${r * 1.0} 0 0 1 ${cx + r * 1.02} ${cy - r * 0.1} Z`} fill={c.hairColor} />
          <rect x={cx - r * 1.04} y={cy - r * 0.16} width={r * 2.08} height={r * 0.34} rx={r * 0.17} fill={c.hairColor} />
          <circle cx={cx} cy={cy - r * 1.05} r={r * 0.28} fill={c.hairColor} />
        </g>
      )}
      {c.hair === "cap" && (
        <g fill={c.hairColor}>
          <path d={`M ${cx - r * 1.0} ${cy - r * 0.15} A ${r * 1.0} ${r * 0.95} 0 0 1 ${cx + r * 1.0} ${cy - r * 0.15} L ${cx + r * 0.9} ${cy - r * 0.62} L ${cx - r * 0.9} ${cy - r * 0.62} Z`} />
          <ellipse cx={cx + r * 0.75} cy={cy - r * 0.42} rx={r * 0.72} ry={r * 0.2} />
          <circle cx={cx} cy={cy - r * 0.72} r={r * 0.16} fill="#d9a441" />
        </g>
      )}
      {c.hair === "brim" && (
        <g>
          <ellipse cx={cx} cy={cy - r * 0.78} rx={r * 1.75} ry={r * 0.3} fill={c.hairColor} />
          <path d={`M ${cx - r * 0.72} ${cy - r * 0.82} A ${r * 0.72} ${r * 0.62} 0 0 1 ${cx + r * 0.72} ${cy - r * 0.82} L ${cx + r * 0.72} ${cy - r * 0.75} L ${cx - r * 0.72} ${cy - r * 0.75} Z`} fill={c.hairColor} />
        </g>
      )}
    </g>
  );

  const Body = ({ cx, top, w, color }: { cx: number; top: number; w: number; color: string }) => {
    // organic bell-shaped torso: big radii, no straight shoulders
    const r = w * 0.48;
    return (
      <g>
        <path
          d={`M ${cx - w / 2} ${top + w * 1.9}
              L ${cx - w / 2} ${top + r}
              Q ${cx - w / 2} ${top} ${cx} ${top}
              Q ${cx + w / 2} ${top} ${cx + w / 2} ${top + r}
              L ${cx + w / 2} ${top + w * 1.9}
              Q ${cx} ${top + w * 2.15} ${cx - w / 2} ${top + w * 1.9} Z`}
          fill={color}
        />
        {c.extra === "tie" && (
          <path d={`M ${cx - w * 0.07} ${top + w * 0.28} L ${cx + w * 0.07} ${top + w * 0.28} L ${cx + w * 0.1} ${top + w * 1.05} L ${cx} ${top + w * 1.18} L ${cx - w * 0.1} ${top + w * 1.05} Z`} fill="#d9a441" />
        )}
        {c.extra === "collar" && (
          <path d={`M ${cx - w * 0.26} ${top + w * 0.06} L ${cx} ${top + w * 0.3} L ${cx + w * 0.26} ${top + w * 0.06} L ${cx + w * 0.18} ${top} L ${cx - w * 0.18} ${top} Z`} fill="#f6f1e7" opacity="0.9" />
        )}
        {c.extra === "badge" && <circle cx={cx + w * 0.3} cy={top + w * 0.5} r={w * 0.07} fill="#d9a441" />}
      </g>
    );
  };

  const single = (offsetX: number, flip: boolean) => {
    const cx = offsetX + (flip ? -sway : sway);
    const headR = width * 0.155;
    const headCy = h * 0.2;
    const bodyTop = headCy + headR * 0.92;
    return (
      <g key={offsetX}>
        <Head cx={cx} cy={headCy} r={headR} />
        <Body cx={cx} top={bodyTop} w={width * 0.46} color={c.outfit} />
      </g>
    );
  };

  return (
    <svg
      viewBox={`0 0 ${width} ${h}`}
      width={width}
      height={h}
      role="img"
      aria-label="Faceless geometric figure"
      style={{ overflow: "visible" }}
    >
      {c.duo ? (
        <>
          {single(width * 0.28, false)}
          {single(width * 0.72, true)}
        </>
      ) : (
        single(width * 0.5, false)
      )}
    </svg>
  );
}
