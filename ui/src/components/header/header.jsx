import { icons } from "../../common/icons"
import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top navy-background">
                <div className="container-fluid d-flex">
                    <a className="navbar-brand font-white" >The Booktique</a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/dash-board" className="nav-link font-white">
                                <img src={icons.speedometer} alt="Dashboard" /> &nbsp; Dashboard
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/book-shelf' className="nav-link font-white">
                                <img src={icons.bookHalf} alt="BookIcon" /> &nbsp; Shelf
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/critiques' className="nav-link font-white">
                                <img src={icons.yelpWhiteIcon} alt="BookIcon" /> &nbsp; Critique
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/new-book' className="nav-link font-white">
                                <img src={icons.add} alt="Add" /> &nbsp; Add New Book
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link font-white">
                                <img src={icons.profile} alt="Profile" /> &nbsp; My Profile
                            </a>
                        </li>
                    </ul>

                </div>
            </nav>
        </>
    );
}
