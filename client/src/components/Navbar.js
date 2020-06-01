import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import "./Navbar.css";


const Navbar = (props) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  
  return (
  <>
  <nav>
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo">Picture It Done</a>
      <a href="index.html" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down" id="menuList">
        <li><a href="sass.html">Home</a></li>
        <li><a href="badges.html">View Jobs</a></li>
        <li><a href="collapsible.html">Add Job</a></li>
        <button class="btn waves-effect waves-light" type="submit" id="loginBtn" name="action">Login<i class="material-icons">send</i>
        </button>
      </ul>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
    <li><a href="sass.html">Sass</a></li>
    <li><a href="badges.html">Components</a></li>
    <li><a href="collapsible.html">Javascript</a></li>
    <li><a href="mobile.html">Mobile</a></li>
  </ul>
  
</>
    )
}

export default Navbar;



  {/* <ul id="dropdown1" className="dropdown-content">
        <li><a href="#!">one</a></li>
        <li><a href="#!">two</a></li>
        <li className="divider"></li>
        <li><a href="#!">three</a></li>
    </ul>
    <nav>
    <div className="nav-wrapper lighten-2">
    <a href="#!" className="brand-logo">{props.name}</a>
        <ul className="right hide-on-med-and-down">
    <li><a href="sass.html">{props.portfolio}</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="badges.html">About Me</a></li>
        <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i className="material-icons right">arrow_drop_down</i></a></li>
        </ul>
    </div>
    </nav> */}