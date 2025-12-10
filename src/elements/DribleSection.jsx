import DribleSectionPicture from '../assets/DribleSection-Picture.png'

function DribleSection() {


    return (
        <section className="DribleSection">
            <div className="DribleSection__Container">
                <div className="DribleSection-Text">
                    <h2 className="Heading2 White">Dribbble</h2>
                    <p className="Body1 Light-Grey">Each dribbble shot is made with love and care. Do check out my work on Dribbble. Likes and comments are appreciated.</p>
                    <a className="Body2 White"></a>
                </div>

                <div className="DribleSection-Picture">
                    <img src={DribleSectionPicture} alt="Drible Picture"></img>
                </div>
            </div>
        </section>
    )
}

export default DribleSection;