"use client";
import { useState, useEffect } from "react";
import HeroSection from "@/components/home-components/HeroSection";
import Services from "@/components/home-components/Services";
import SupportedGames from "@/components/home-components/SupportedGames";
import Announcement from "@/components/Announcement";

export default function Home() {
  // Initial state ensures a valid starting gradient
  const [bgColor, setBgColor] = useState(
    "from-color-1000 via-color-2000 to-color-3000"
  );

  useEffect(() => {
    const colors = [
      "from-color-1000 via-color-2000 to-color-3000",
      "from-color-2000 via-color-3000 to-color-4000",
      "from-color-5000 via-color-5000 to-color-5000",
      "from-color-4000 via-color-5000 to-color-1000",
    ];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % colors.length; // Cycle through gradient sets
      setBgColor(colors[index]);
    }, 2000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div
      className={`bg-gradient-to-r py-5 ${bgColor} transition-all duration-1000 ease-in-out min-h-screen`}
    >
      <Announcement />
      <HeroSection />
      <Services />
      <SupportedGames />
    </div>
  );
}
