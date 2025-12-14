import InstagramPicture from '../assets/Instagram-Picture.png';

function InstagramSection() {


    return (
        <section className="InstagramSection" id="InstagramSection" data-section>

            <div className="InstagramSection__Container">

                <div className="InstagramSection-Text">
                    <h2 className='Heading2 Light-Grey'>Instagram</h2>
                    <p className='Body1 Gray'>If you area a person who enjoys photography, then I highly recommend that you check out my Instagram. I’m an avid traveller and I capture the best moments that I would love to cherish with the world</p>
                    <a className='Body2 Level1'></a>
                </div>

                <picture className="InstagramSection-Picture">
                    <img src={InstagramPicture} alt="Instagram Picture"></img>
                </picture>

            </div>

        </section>
    )
}

export default InstagramSection;