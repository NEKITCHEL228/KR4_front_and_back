import FooterIcon1 from '../assets/icons/FooterSection-icon1.svg?react';
import FooterIcon2 from '../assets/icons/FooterSection-icon2.svg?react';
import FooterIcon3 from '../assets/icons/FooterSection-icon3.svg?react';

function Footer(){

    return (
        <footer className="Footer">
            <div className="Footer__Container">
                <div className="Footer-MainInfo">
                    <div className="Footer-MainInfo-Social">
                        <p href="#">Robin.W</p>
                        <div className="Footer-MainInfo-Social-Logo">
                            <a href="#"><FooterIcon1 /></a>
                            <a href="#"><FooterIcon2 /></a>
                            <a href="#"><FooterIcon3 /></a>
                        </div>
                    </div>

                    <div className="Footer-MainInfo-Referals">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Work</a>
                        <a href="#">Process</a>
                        <a href="#">Store</a>
                        <a href="#">Blog</a>
                        <a href="#">Reading List</a>
                    </div>
                </div>
                <div className="Footer-AdditionalInfo">
                    <p className="Body2 Light-Grey">Not Copyright 2020 • Robin Williams. Webflow cloneable</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;