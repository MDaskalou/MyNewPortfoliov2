'use client';


// app/page.tsx
import HeroSection from '@/components/HeroSection';
import ProjectSection from "@/components/ProjectSection";
import AboutMeSection from "@/components/AboutMeSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import GitHubSection from "@/components/GitHubSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
      <div>
        <HeroSection />
        <ProjectSection />
         <GitHubSection/>
        <AboutMeSection />
        <SkillsSection />
          <ExperienceSection />
        <ContactSection />



      </div>
  );
}