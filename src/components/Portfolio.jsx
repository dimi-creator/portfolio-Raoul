import React, { useState, useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import { mockData } from "../data/mock";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header 
        activeSection={activeSection} 
        onNavigate={scrollToSection}
        personalData={mockData.personal}
      />
      
      <main>
        <Hero 
          isVisible={isVisible.home} 
          personalData={mockData.personal}
        />
        
        <About 
          isVisible={isVisible.about} 
          personalData={mockData.personal}
        />
        
        <Projects 
          isVisible={isVisible.projects} 
          projects={mockData.projects}
        />
        
        <Skills 
          isVisible={isVisible.skills} 
          skills={mockData.skills}
        />
        
        <Contact 
          isVisible={isVisible.contact} 
          socialData={mockData.social}
        />
      </main>
      
      <Footer socialData={mockData.social} />
    </div>
  );
};

export default Portfolio;