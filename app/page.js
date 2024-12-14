import HeroSection from "@/components/home-components/HeroSection";
import Services from "@/components/home-components/Services";
import SupportedGames from "@/components/home-components/SupportedGames";

export default function Home() {
  return (
    <div className="bg-color-1000">
      <HeroSection />
      <Services />
      <SupportedGames />
    </div>
  );
}
