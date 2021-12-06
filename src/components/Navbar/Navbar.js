import './Navbar.css';

function Navbar() {
    return <div className="nav-bar" fluid>
        <div className="navigations">
            <div className="subject-links">
                <div className="nav-link">
                    <a href="/cs">Computer Science</a>
                </div>
                <div className="nav-link">
                    <a href="/ec">Electronics & Communication</a>
                </div>
                <div className="nav-link">
                    <a href="/eee">Electrical & Electronics</a>
                </div>
                <div className="nav-link">
                    <a href="/mech">Mechanical</a>
                </div>
                <div className="nav-link">
                    <a href="/civil">Civil</a>
                </div>
                <div className="nav-link">
                    <a href="/first">First Year</a>
                </div>
            </div>
            <div className="main-menu">
                <div className="nav-link">
                    <a href="/home">Home</a>
                </div>
                <div className="nav-link">
                    <a href="/contribute1">Contibute</a>
                </div>
            </div>
        </div>
        <div className="drawer">
            <div>||</div>
        </div>

    </div>
}
export default Navbar
