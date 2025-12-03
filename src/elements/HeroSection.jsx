import React from 'react';
import heroImage from '../assets/HeroSection-Picture.jpg';
import '../App.css'

function HeroSection() {


    return (
        <div className="HeroSection">
            <img
                src={heroImage}
                alt="Robin Williams Prime"
                className="HeroSection-Picture"
            />
            <div className="HeroSection-Text">
                <h1 className="Heading1">I’m Robin Williams.</h1>
                <h1 className="Heading1">A Product Designer</h1>
                <h1 className="Heading1 Gray">based in Italy.</h1>
                <h4 className="Heading4">I’m probably the most passionate designer you will ever get to work with. If you have</h4>
                <h4 className="Heading4">a great project that needs some amazing skills, I’m your guy.</h4>
            </div>
            <div className="HeroSection-Rectangle"></div>
        </div>);
}

export default HeroSection;