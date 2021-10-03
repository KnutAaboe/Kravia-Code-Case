import {Link} from "react-router-dom"


function Navbar () {

    return (
        <ul className="nav-container">
            <Link to="/case-statistics">
                <li>Case Statistics</li>
            </Link>
            <Link to="/cases">
                <li>Cases</li>
            </Link>
            <Link to="/creditors">
                <li>Creditors</li>
            </Link>
            <Link to="/">
                <li>Home</li>
            </Link>
        </ul>
    )
}

export default Navbar