"use client";

import { useState } from "react";
import Header from "@/components/portfolio/header";
import HeroSection from "@/components/portfolio/hero";
import ProjectsSection from "@/components/portfolio/projects";
import SystemSection from "@/components/portfolio/system-section";
import Footer from "@/components/portfolio/footer";
import BottomHUD from "@/components/portfolio/bottom-hud";

export default function Home() {
  const [activeSection, setActiveSection] = useState("projects");

  return (
    <div className="blueprint-grid min-h-screen flex flex-col font-sans overflow-x-hidden">
      <Header
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      <main className="pt-32 pb-24 px-6 max-w-[1280px] mx-auto flex-1 w-full">
        {activeSection === "projects" && (
          <>
            <HeroSection />
            <ProjectsSection />
          </>
        )}
        {activeSection === "system" && <SystemSection />}
        {activeSection === "nucleus" && (
          <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
            <h1 className="text-4xl md:text-[72px] font-extrabold text-primary uppercase tracking-tight">
              NUCLEUS
            </h1>
            <p className="text-lg text-on-surface-variant text-center max-w-xl">
              Core identity module. Coming online soon.
            </p>
          </div>
        )}
        {activeSection === "skills" && (
          <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
            <h1 className="text-4xl md:text-[72px] font-extrabold text-secondary uppercase tracking-tight">
              SKILLS
            </h1>
            <p className="text-lg text-on-surface-variant text-center max-w-xl">
              Technical proficiency matrix. Initializing scan...
            </p>
          </div>
        )}
      </main>

      <Footer />
      <BottomHUD
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
    </div>
  );
}
