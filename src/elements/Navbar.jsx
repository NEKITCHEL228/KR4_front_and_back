import { useState, useEffect, useRef } from 'react'
import '../App.css'

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [VisibleSection, setVisibleSection] = useState('HeroSection');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const sectionsRef = useRef({});

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const options = {
            root: null, // относительно viewport
            rootMargin: '-50% 0px -50% 0px', // центр viewport
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisibleSection(entry.target.id);
                }
            });
        }, options);

        const sections = document.querySelectorAll('[data-section]');

        sections.forEach(section => {
            observer.observe(section);
            sectionsRef.current[section.id] = section;
        });

        return () => {
            sections.forEach(section => observer.unobserve(section));
            observer.disconnect();
        };
    }, []);

    const scrollToSmthng = (smthng) => {
        const section = document.getElementById(smthng);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const isActive = (section) => {
        if (VisibleSection == section){
            return 'Navbar-Second-List-Link--Active';
        }
        else{
            return '';
        }
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (

        <header className={`Navbar ${scrolled ? 'Navbar--Scrolled' : ''}`} id="Navbar">
            <div className='Navbar__Container'>
                <div className="Navbar-Main">
                    <a href="#HeroSection" onClick={(e) => { e.preventDefault(); scrollToSmthng('HeroSection'); }} className="Navbar-Main-Link">Robin. W</a>
                </div>

                <div className="Navbar-Second">
                    <ul className={`Navbar-Second-List ${isMenuOpen ? 'Navbar-Second-List--Visible' : ''}`}>
                        <li className="Navbar-Second-List-Item"><a href="#Experience" onClick={(e) => { e.preventDefault(); scrollToSmthng('Experience'); }} className={`Navbar-Second-List-Link ${scrolled ? 'Navbar-Second-List-Link--Scrolled' : ''} ${isActive('Experience')} ${isActive('ValueSection')} ${isActive('SkillSet')} ${isActive('ComapniesLineSection')}`}>Experience</a></li>
                        <li className="Navbar-Second-List-Item"><a href="#MyProjects" onClick={(e) => { e.preventDefault(); scrollToSmthng('MyProjects'); }} className={`Navbar-Second-List-Link ${scrolled ? 'Navbar-Second-List-Link--Scrolled' : ''} ${isActive('MyProjects')} ${isActive('InstagramSection')} ${isActive('DribleSection')} ${isActive('ThoughtsSection')}`}>Work</a></li>
                        <li className="Navbar-Second-List-Item"><a href="#Photography" onClick={(e) => {e.preventDefault(); scrollToSmthng('PhotographySection'); }} className={`Navbar-Second-List-Link ${scrolled ? 'Navbar-Second-List-Link--Scrolled' : ''} ${isActive('PhotographySection')}`}>Photography</a></li>
                        <li className="Navbar-Second-List-Item"><a href="#Contact" onClick={(e) => {e.preventDefault(); scrollToSmthng('ContactSection')}} className={`Navbar-Second-List-Link ${scrolled ? 'Navbar-Second-List-Link--Scrolled' : ''} ${isActive('ContactSection')}`}>Contact</a></li>
                    </ul>
                    <button className='Navbar-Second-List-Button' onClick={toggleMenu}></button>
                </div>
            </div>

        </header>
    );
}

export default Navbar;