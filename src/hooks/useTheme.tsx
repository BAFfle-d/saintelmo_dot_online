import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { THEMES } from "@/data/content";

interface ThemeCtx {
  index: number;
  theme: (typeof THEMES)[number];
  nextTheme: (typeof THEMES)[number];
  cycle: () => void;
}

const Ctx = createContext<ThemeCtx | null>(null);

const STORAGE_KEY = "gm-theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [index, setIndex] = useState(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved !== null) {
        const i = Number(saved);
        if (Number.isInteger(i) && i >= 0 && i < THEMES.length) return i;
      }
    } catch {
      /* ignore */
    }
    return 0;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", THEMES[index].id);
    try {
      window.localStorage.setItem(STORAGE_KEY, String(index));
    } catch {
      /* ignore */
    }
  }, [index]);

  const cycle = useCallback(() => {
    setIndex((i) => (i + 1) % THEMES.length);
  }, []);

  const value = useMemo<ThemeCtx>(
    () => ({
      index,
      theme: THEMES[index],
      nextTheme: THEMES[(index + 1) % THEMES.length],
      cycle,
    }),
    [index, cycle],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useTheme() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}
