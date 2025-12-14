import ThoughtsSectionPicture1 from '../assets/ThoughtsSection-Picture1.png'
import ThoughtsSectionPicture2 from '../assets/ThoughtsSection-Picture2.png'
import ThoughtsSectionPicture3 from '../assets/ThoughtsSection-Picture3.png'

function ThoughtsSection() {


    return (
        <section className="ThoughtsSection" id="ThoughtsSection" data-section>
            <div className="ThoughtsSection__Container">

                <div className="ThoughtsSection-Text">
                    <h2 className="Heading2 White">This is what people say about me</h2>
                    <p className='Body1 Light-Grey'>Here are a few lines from people who I have worked with over the past 8+ years in my design career.</p>
                    <a className="Body2 White"></a>
                </div>

                <div className='ThoughtsSection-Cards'>
                    <div className="ThoughtsSection-Card">

                        <div className='ThoughtsSection-Card-Picture'>
                            <img src={ThoughtsSectionPicture1} alt="Picture 1" />
                        </div>

                        <div className='ThoughtSection-Card-Text'>
                            <h3 className='Heading3 White'>‘’Robin is one of the best designers I have worked with in my entire life. He is a designer who is very capable of taking up complex projects and delivers impeccable design.’’</h3>
                            <p className="Heading4 Gray">Richard Owens</p>
                            <p className="Body1 Gray">CEO, Company 1</p>
                        </div>

                    </div>

                    <div className="ThoughtsSection-Card">

                        <div className='ThoughtsSection-Card-Picture'>
                            <img src={ThoughtsSectionPicture2} alt="Picture 2" />
                        </div>

                        <div className='ThoughtSection-Card-Text'>
                            <h3 className='Heading3 White'>‘’I think Robin has an incredible gift. It has been an absolute pleasure to work with a designer of this caliber.’’</h3>
                            <p className="Heading4 Gray">Emily Parker</p>
                            <p className="Body1 Gray">CEO, Company 2</p>
                        </div>

                    </div>

                    <div className="ThoughtsSection-Card">

                        <div className='ThoughtsSection-Card-Picture'>
                            <img src={ThoughtsSectionPicture3} alt="Picture 3" />
                        </div>

                        <div className='ThoughtSection-Card-Text'>
                            <h3 className='Heading3 White'>‘’All I can say that, Robin is a phenomenal designer. The wavelength at which he thinks is astoundaing. I love the focus, passion and attention to detial in the design.’’</h3>
                            <p className="Heading4 Gray">Vincent  Rudd</p>
                            <p className="Body1 Gray">CEO, Company 1</p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default ThoughtsSection;