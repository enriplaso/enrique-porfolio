import { Navbar } from "@/components/NavBar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Background } from "@/components/Background";
import { HeroSection } from "@/components/HeroSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <Background />
      <Navbar />

      <main>
        <HeroSection></HeroSection>
      </main>
    </div>
  );
};
