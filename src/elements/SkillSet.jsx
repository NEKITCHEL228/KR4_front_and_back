import ProductDesignIcon from '../assets/icons/Product-Design-icon.svg?react';
import VisualDesignIcon from '../assets/icons/Visual-Design-icon.svg?react';
import MotionDesignIcon from '../assets/icons/Motion-Design-icon.svg?react';
import PhotographyIcon from '../assets/icons/Photography-icon.svg?react';

function SkillSet() {


    return (
        <section className="SkillSet">

            <div className="SkillSet-Text">
                <h2 className="Heading2 White">Skillset</h2>
                <p className="Body1 Light-Grey">With skills in over 4 different fields of design, I am the perfect person to hire when it comes to a full fledged project. Whatever your needs are, I can pretty much take on any challenge.</p>
            </div>

            <div className="SkillSet-Grid">
                <div className="SkillSet-Grid-Item">
                    <ProductDesignIcon />
                    <h3 className="Heading3 White">Product Design</h3>
                    <p className="Body2 Light-Grey">Working at Facebook has taught me a lot about how to understand users, solve problems and build great products.</p>
                </div>


                <div className="SkillSet-Grid-Item">
                    <VisualDesignIcon />
                    <h3 className='Heading3 White'>Visual Design</h3>
                    <p className="Body2 Light-Grey">My experience at dribbble has helped me learn to develop the eye for design. Colors, typography, layout and the whole package.</p>
                </div>

                <div className="SkillSet-Grid-Item">
                    <MotionDesignIcon />
                    <h3 className='Heading3 White'>Motion Design</h3>
                    <p className="Body2 Light-Grey">I started my design journey with motion design in my college days. Motion is something that really fascinates me because of the flexibility of story telling.</p>
                </div>

                <div className="SkillSet-Grid-Item">
                    <PhotographyIcon />
                    <h3 className='Heading3 White'>Photography</h3>
                    <p className="Body2 Light-Grey">Clicking pictures really brings out the creative in me. Phtography really makes you look and percieve things in a different way.</p>
                </div>
            </div>

        </section>
    );
}

export default SkillSet;