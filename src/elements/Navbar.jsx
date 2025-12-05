import { useState, useEffect } from 'react'
import '../App.css'

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (

        <div className={`Navbar ${scrolled ? 'Navbar--Scrolled' : ''}`} id="Navbar">
            <div className="Navbar-Main">
                <a href="#Navbar" className="Navbar-Main-Link">Robin. W</a>
            </div>

            <div className="Navbar-Second">
                <ul className="Navbar-Second-List">
                    <li className="Navbar-Second-List-Item"><a href="#" className={`Navbar-Second-List-Link ${scrolled ? 'Navbar-Second-List-Link--Scrolled' : ''}`}>Experience</a></li>
                    <li className="Navbar-Second-List-Item"><a href="#" className={`Navbar-Second-List-Link ${scrolled ? 'Navbar-Second-List-Link--Scrolled' : ''}`}>Work</a></li>
                    <li className="Navbar-Second-List-Item"><a href="#" className={`Navbar-Second-List-Link ${scrolled ? 'Navbar-Second-List-Link--Scrolled' : ''}`}>Photography</a></li>
                    <li className="Navbar-Second-List-Item"><a href="#" className={`Navbar-Second-List-Link ${scrolled ? 'Navbar-Second-List-Link--Scrolled' : ''}`}>Contact</a></li>
                </ul>
            </div>
        </div>


    );
}

export default Navbar;