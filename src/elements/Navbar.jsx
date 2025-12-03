import '../App.css'

function Navbar() {


    return (
        <div className="Navbar" id="Navbar">
            <div className="Navbar-Main">
                <a href="#Navbar" className="Navbar-Main-Link">Robin. W</a>
            </div>

            <div className="Navbar-Second">
                <ul className="Navbar-Second-List">
                    <li className="Navbar-Second-List-Item"><a href="#" className="Navbar-Second-List-Link">Experience</a></li>
                    <li className="Navbar-Second-List-Item"><a href="#" className="Navbar-Second-List-Link">Work</a></li>
                    <li className="Navbar-Second-List-Item"><a href="#" className="Navbar-Second-List-Link">Photography</a></li>
                    <li className="Navbar-Second-List-Item"><a href="#" className="Navbar-Second-List-Link">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;