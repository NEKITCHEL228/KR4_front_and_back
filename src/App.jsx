import { useState } from 'react'
import './App.css'
import Navbar from './elements/Navbar.jsx'
import HeroSection from './elements/HeroSection.jsx'
import WorkExperience from './elements/WorkExperience.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>
      <main>
        <HeroSection />
        <WorkExperience />
      </main>

      <footer>
        
      </footer>
    </div>
  );
}

export default App
