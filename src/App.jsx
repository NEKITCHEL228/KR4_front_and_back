import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './elements/Navbar.jsx'
import HeroSection from './elements/HeroSection.jsx'
import WorkExperience from './elements/WorkExperience.jsx'
import ValueSection from './elements/ValuesSection.jsx'
import SkillSet from './elements/SkillSet.jsx'
import CompaniesLineSection from './elements/CompaniesLine.jsx'
import MyProjects from './elements/MyProjects.jsx'
import InstagramSection from './elements/Instagram.jsx'
import DribleSection from './elements/DribleSection.jsx'
import ThoughtsSection from './elements/ThoughtsSection.jsx'
import PhotographySection from './elements/PhotographySection.jsx'
import ContactSection from './elements/ContactSection.jsx'
import Footer from './elements/Footer.jsx'

function App() {

  return (
    <div className="App">
        <Navbar />
      <main>
        <HeroSection />
        <WorkExperience />
        <ValueSection />
        <SkillSet />
        <CompaniesLineSection />
        <MyProjects />
        <InstagramSection />
        <DribleSection />
        <ThoughtsSection />
        <PhotographySection />
        <ContactSection />
      </main>
        <Footer />
    </div>
  );
}

export default App
