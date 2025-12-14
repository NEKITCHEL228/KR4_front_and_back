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
    const [buttonActive, setButtonActive] = useState('Italy-Button');

    function setButton(name) {
        return name === buttonActive ? 'PhotographySection-Button--Active' : '';
    }

    function setPictures(name) {
        return name === buttonActive ? 'PhotographySection-Pictures--Active' : '';
    }

    return (
        <section className="PhotographySection" id="PhotographySection" data-section>
            <div className="PhotographySection__Container">
                <h2 className="Heading2 White">Photography</h2>
                <p className="Body1 Light-Grey">Here is a collection of my best travel pictures that I took while travelling places all around the world. </p>

                <div className="PhotographySection-Tab">
                    <div className="PhotographySection-Buttons">
                        <button id="Italy-Button" className={`Button White PhotographySection-Button ${setButton('Italy-Button')}`} onClick={(e) => { e.preventDefault(); setButtonActive('Italy-Button'); }}>ITALY</button>
                        <button id="Australia-Button" className={`Button White PhotographySection-Button ${setButton('Australia-Button')}`} onClick={(e) => { e.preventDefault(); setButtonActive('Australia-Button'); }}>AUSTRALIA</button>
                        <button id="India-Button" className={`Button White PhotographySection-Button ${setButton('India-Button')}`} onClick={(e) => { e.preventDefault(); setButtonActive('India-Button'); }}>INDIA</button>
                        <button id="Brazil-Button" className={`Button White PhotographySection-Button ${setButton('Brazil-Button')}`} onClick={(e) => { e.preventDefault(); setButtonActive('Brazil-Button'); }}>BRAZIL</button>
                    </div>

                    <div className={`PhotographySection-Pictures ${setPictures('Italy-Button')}`} id="PhotographySection-Italy-Pictures">
                        <div className='PhotographySection-Pictures-Item'>
                            <picture className='PhotographySection-Pictures-Picture'>
                                <img src={ItalyPicture1} alt="ItalyPicture1" />
                            </picture>
                        </div>

                        <div className='PhotographySection-Pictures-Item' >
                            <picture className='PhotographySection-Pictures-Picture'>
                                <img src={ItalyPicture2} alt="ItalyPicture2" />
                            </picture>
                        </div>

                        <div className='PhotographySection-Pictures-Item'>
                            <picture className='PhotographySection-Pictures-Picture'>
                                <img src={ItalyPicture3} alt="ItalyPicture3" />
                            </picture>
                        </div>

                        <div className='PhotographySection-Pictures-Item'>
                            <picture className='PhotographySection-Pictures-Picture'>
                                <img src={ItalyPicture4} alt="ItalyPicture4" />
                            </picture>
                        </div>
                    </div>

                    <div className={`PhotographySection-Pictures ${setPictures('Australia-Button')}`} id="PhotographySection-Australia-Pictures">
                        <div className='PhotographySection-Pictures-Item'>
                            <picture className='PhotographySection-Pictures-Picture'>
                                <img src={AustraliaPicture1} alt="AustraliaPicture1" />
                            </picture>
                        </div>

                        <div className='PhotographySection-Pictures-Item'>
                            <picture className='PhotographySection-Pictures-Picture'>
                                <img src={AustraliaPicture2} alt="AustraliaPicture2" />
                            </picture>
                        </div>

                        <div className='PhotographySection-Pictures-Item'>
                            <picture className='PhotographySection-Pictures-Picture'>
                                <img src={AustraliaPicture3} alt="AustraliaPicture3" />
                            </picture>
                        </div>

                    </div>

                    <div className={`PhotographySection-Pictures ${setPictures('India-Button')}`} id='PhotographySection-India-Pictures'>
                        <div className='PhotographySection-Pictures-Item'>
                            <picture className='PhotographySection-Pictures-Picture'>
                                <img src={IndiaPicture1} alt="IndiaPicture1" />
                            </picture>
                        </div>

                        <div className='PhotographySection-Pictures-Item'>
                            <picture className='PhotographySection-Pictures-Picture'>
                                <img src={IndiaPicture2} alt="IndiaPicture2" />
                            </picture>
                        </div>

                        <div className='PhotographySection-Pictures-Item'>
                            <picture className='PhotographySection-Pictures-Picture'>
                                <img src={IndiaPicture3} alt="IndiaPicture3" />
                            </picture>
                        </div>

                    </div>

                    <div className={`PhotographySection-Pictures ${setPictures('Brazil-Button')}`} id='PhotographySection-Brazil-Pictures'>
                        <div className='PhotographySection-Pictures-Item'>
                            <picture className='PhotographySection-Pictures-Picture'>
                                <img src={BrazilPicture1} alt="BrazilPicture1" />
                            </picture>
                        </div>

                        <div className='PhotographySection-Pictures-Item'>
                            <picture className='PhotographySection-Pictures-Picture'>
                                <img src={BrazilPicture2} alt="BrazilPicture2" />
                            </picture>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default PhotographySection;