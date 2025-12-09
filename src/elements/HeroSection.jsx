import heroImage from '../assets/HeroSection-Picture.jpg';
import '../App.css'

function HeroSection() {


    return (
        <section className="HeroSection Hero" data-section id="HeroSection">
            <div className='HeroSection-Wrap'>
                <picture className="HeroSection-Picture">
                    <img
                        src={heroImage}
                        alt="Robin Williams Prime"
                        width="750px"
                        height="650px"
                    />
                </picture>

                <div className="HeroSection-Text">
                    <h1 className="Heading1">I’m Robin Williams. A Product Designer <span className="Heading1 Light-Grey">based in Italy.</span></h1>
                    <h4 className="Heading4">I’m probably the most passionate designer you will ever get to work with. If you have a great project that needs some amazing skills, I’m your guy.</h4>
                </div>
            </div>


        </section>);
}

export default HeroSection;