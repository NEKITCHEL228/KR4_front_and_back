import MyProjectsPicture1 from '../assets/MyProjects-Picture1.png';
import MyProjectsPicture2 from '../assets/MyProjects-Picture2.png';
import MyProjectsPicture3 from '../assets/MyProjects-Picture3.png';
import MyProjectsPicture4 from '../assets/MyProjects-Picture4.png';

function MyProjects() {


    return (
        <section className="MyProjects" data-section id="MyProjects">
            <div className="MyProjects__Container">
                <div className="MyProjects-Items">
                    <div className="MyProjects-List-Item">
                        <h4 className="Heading4 Light-Grey">MY PROJECTS</h4>
                        <h2 className="Heading2 White">Work that I’ve done for the past 8 years</h2>

                        <article className="MyProjects-List-Item-Card">
                            <div className="MyProjects-List-Item-Card-Picture">
                                <img src={MyProjectsPicture1} alt='Restourant Website Design'></img>
                            </div>
                            <div className="MyProjects-List-Item-Card-Description">
                                <h3 className="Heading3 White">Restaurant Website Design</h3>
                                <p className="Body1 Light-Grey">I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.</p>
                            </div>
                        </article>

                        <article className="MyProjects-List-Item-Card">
                            <div className="MyProjects-List-Item-Card-Picture">
                                <img src={MyProjectsPicture2} alt='Restourant Website Design'></img>
                            </div>
                            <div className="MyProjects-List-Item-Card-Description">
                                <h3 className="Heading3 White">Restaurant Website Design</h3>
                                <p className="Body1 Light-Grey">I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.</p>
                            </div>
                        </article>

                    </div>
                    <div className="MyProjects-List-Item">

                        <article className="MyProjects-List-Item-Card">
                            <div className="MyProjects-List-Item-Card-Picture">
                                <img src={MyProjectsPicture3} alt='Restourant Website Design'></img>
                            </div>
                            <div className="MyProjects-List-Item-Card-Description">
                                <h3 className="Heading3 White">Restaurant Website Design</h3>
                                <p className="Body1 Light-Grey">I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.</p>
                            </div>
                        </article>

                        <article className="MyProjects-List-Item-Card">
                            <div className="MyProjects-List-Item-Card-Picture">
                                <img src={MyProjectsPicture4} alt='Restourant Website Design'></img>
                            </div>
                            <div className="MyProjects-List-Item-Card-Description">
                                <h3 className="Heading3 White">Restaurant Website Design</h3>
                                <p className="Body1 Light-Grey">I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.</p>
                            </div>
                        </article>

                        <button className="Button White">VIEW ALL PROJECTS</button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default MyProjects;