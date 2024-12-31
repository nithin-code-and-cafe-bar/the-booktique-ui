import { icons } from "../../common/icons"
import { NavLink } from "react-router-dom";

export const Header = () => {
    return(
    <>
<nav class="navbar navbar-expand-lg fixed-top navy-background">
  <div class="container-fluid d-flex">
    <a class="navbar-brand font-white" >The Booktique</a>
      <ul class="navbar-nav">
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
                        <a className="nav-link font-white">
                            <img src={icons.yelpWhiteIcon} alt="BookIcon" /> &nbsp; Critique</a>
                    </li>
                     <li className="nav-item">
                        <a className="nav-link font-white">
                            <img src={icons.add} alt="Add" /> &nbsp; Add New Book</a>
                    </li>
                     <li className="nav-item">
                        <a className="nav-link dropdown-toggle font-white" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={icons.profile} alt="Profile" /> &nbsp; My Profile
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" >Edit Profile</a></li>
                            <li><a class="dropdown-item" >My Reads</a></li>
                            <li><a class="dropdown-item" >My Reviews</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" >Log out</a></li>
                        </ul>

                    </li>
      </ul>

    </div>
</nav>
    </>
    );
}
