import { Navbar } from "@/components/NavBar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Background } from "@/components/Background";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <Background />
      <Navbar />

      <main>
        <HeroSection></HeroSection>
        <AboutSection></AboutSection>
        <SkillsSection></SkillsSection>
      </main>
    </div>
  );
};
