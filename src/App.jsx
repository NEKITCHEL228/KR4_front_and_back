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

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

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
      </main>

      <footer>
        
      </footer>
    </div>
  );
}

export default App
