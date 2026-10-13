import { ThemeProvider } from "@/hooks/useTheme";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ListenSection from "@/components/ListenSection";
import ScenesSection from "@/components/ScenesSection";
import CharactersSection from "@/components/CharactersSection";
import AboutSection from "@/components/AboutSection";
import NotesSection from "@/components/NotesSection";
import WorkshopSection from "@/components/WorkshopSection";
import ContactSection from "@/components/ContactSection";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen overflow-x-clip bg-[var(--paper)] text-[var(--ink)] transition-colors duration-500">
        <Nav />
        <main>
          <Hero />
          <ListenSection />
          <ScenesSection />
          <CharactersSection />
          <AboutSection />
          <NotesSection />
          <WorkshopSection />
          <ContactSection />
        </main>
      </div>
    </ThemeProvider>
  );
}
