import { useState } from 'react';

import ItalyPicture1 from '../assets/Italy-Picture1.png';
import ItalyPicture2 from '../assets/Italy-Picture2.png';
import ItalyPicture3 from '../assets/Italy-Picture3.png';
import ItalyPicture4 from '../assets/Italy-Picture4.png';

import AustraliaPicture1 from '../assets/Australia-Picture1.jpg';
import AustraliaPicture2 from '../assets/Australia-Picture2.jpg';
import AustraliaPicture3 from '../assets/Australia-Picture3.jpg';

import IndiaPicture1 from '../assets/India-Picture1.jpg';
import IndiaPicture2 from '../assets/India-Picture2.jpg';
import IndiaPicture3 from '../assets/India-Picture3.jpg';

import BrazilPicture1 from '../assets/Brazil-Picture1.jpg';
import BrazilPicture2 from '../assets/Brazil-Picture2.jpg';


function PhotographySection() {
    const [activeCountry, setActiveCountry] = useState('italy');

    const countries = {
        italy: {
            name: 'ITALY',
            pictures: [ItalyPicture1, ItalyPicture2, ItalyPicture3, ItalyPicture4]
        },
        australia: {
            name: 'AUSTRALIA',
            pictures: [AustraliaPicture1, AustraliaPicture2, AustraliaPicture3]
        },
        india: {
            name: 'INDIA',
            pictures: [IndiaPicture1, IndiaPicture2, IndiaPicture3]
        },
        brazil: {
            name: 'BRAZIL',
            pictures: [BrazilPicture1, BrazilPicture2]
        }
    };

    return (
        <section className="PhotographySection" id="PhotographySection" data-section>
            <div className="PhotographySection__Container">
                <h2 className="Heading2 White">Photography</h2>
                <p className="Body1 Light-Grey">Here is a collection of my best travel pictures that I took while travelling places all around the world. </p>

                <div className="PhotographySection-Tab">
                    <div className="PhotographySection-Buttons">
                        {Object.keys(countries).map(country => (
                            <button
                                key={country}
                                className={`Button White PhotographySection-Button ${activeCountry === country ? 'PhotographySection-Button--Active' : ''}`}
                                onClick={() => setActiveCountry(country)}
                            >
                                {countries[country].name}
                            </button>
                        ))}
                    </div>

                    <div className="PhotographySection-Pictures PhotographySection-Pictures--Active">
                        {countries[activeCountry].pictures.map((picture, index) => (
                            <div key={index} className='PhotographySection-Pictures-Item'>
                                <picture className='PhotographySection-Pictures-Picture'>
                                    <img src={picture} alt={`${activeCountry} picture ${index + 1}`} />
                                </picture>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default PhotographySection;