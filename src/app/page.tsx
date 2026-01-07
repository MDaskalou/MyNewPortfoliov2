'use client';


// app/page.tsx
import HeroSection from '@/components/HeroSection';
import ProjectSection from "@/components/ProjectSection";
import AboutMeSection from "@/components/AboutMeSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import GitHubSection from "@/components/GitHubSection";

export default function Home() {
  return (
      <div>
        <HeroSection />
        <ProjectSection />
         <GitHubSection/>
        <AboutMeSection />
        <SkillsSection />
          <ExperienceSection />


      </div>
  );
}