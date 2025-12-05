import ValuePicture from '../assets/ValueSection-Picture.jpg';

function ValueSection() {


    return (
        <section className="ValueSection">
            <div className="ValueSection-Text">
                <h2 className='Heading2 Level1'>Philosophy & values</h2>
                <p className='Body1 Gray'>I think everyone wants the same thing - relationship with humanity, peace with the metaphysical, and experience with the universe. I try to grasp these things with my values: authenticity, creativity, & hospitality.</p>
                <a className='Body2 Level1'></a>
            </div>

            <div className="ValueSection-Picture">
                <img src={ValuePicture} alt="ValueSection-Picture"></img>
            </div>
        </section>
    );
}

export default ValueSection;