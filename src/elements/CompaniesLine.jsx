import CompaniesLineIcon1 from '../assets/icons/CompaniesLine-icon1.svg?react'
import CompaniesLineIcon2 from '../assets/icons/CompaniesLine-icon2.svg?react'
import CompaniesLineIcon3 from '../assets/icons/CompaniesLine-icon3.svg?react'
import CompaniesLineIcon4 from '../assets/icons/CompaniesLine-icon4.svg?react'
import CompaniesLineIcon5 from '../assets/icons/CompaniesLine-icon5.svg?react'
import CompaniesLineIcon6 from '../assets/icons/CompaniesLine-icon6.svg?react'

function CompaniesLine() {


    return (
        <div className="Swiper">
            <div className="CompaniesLine">

                <div className="CompaniesLine-Item">
                    <CompaniesLineIcon1 />
                </div>

                <div className="CompaniesLine-Item">
                    <CompaniesLineIcon2 />
                </div>

                <div className="CompaniesLine-Item">
                    <CompaniesLineIcon3 />
                </div>

                <div className="CompaniesLine-Item">
                    <CompaniesLineIcon4 />
                </div>

                <div className="CompaniesLine-Item">
                    <CompaniesLineIcon5 />
                </div>

                <div className="CompaniesLine-Item">
                    <CompaniesLineIcon6 />
                </div>

            </div>
        </div>

    );
}

export default CompaniesLine;