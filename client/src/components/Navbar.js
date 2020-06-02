import React, { useEffect } from "react";
import { useAuth0 } from "../react-auth0-spa";
import "./Navbar.css";
import {Link} from "react-router-dom";
import M from  'materialize-css/dist/js/materialize.min.js';


const Navbar = (props) => {
  useEffect(() => {
    let sidenav = document.querySelector('#slide-out');
    M.Sidenav.init(sidenav, {});
}, []);

  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  
  return (
  <>
  <nav>

    <div className="nav-wrapper">
      <a href="#" data-target="slide-out" class="sidenav-trigger show-on-large"><i class="material-icons" id="testId">menu</i></a>
      <div className="testContainer">

      <a href="#" className="brand-logo">Picture It Done</a>
      </div>
      <ul className="right hide-on-med-and-down" id="menuList">
        <li><Link to={"/home"} id="linkTags">Home</Link></li>
        <li><Link to={"/ViewJobs"} id="linkTags">View Jobs</Link></li>
        <li><Link to={"/AddJob"} id="linkTags">Add a Job</Link></li>
        <li><Link to={"/FunPage"} id="linkTags">FunPage</Link></li>

        {!isAuthenticated && (
        <button className="btn waves-effect waves-light" type="submit" id="loginBtn" name="action"onClick={() => loginWithRedirect({})}>Log in<i className="material-icons">send</i>
        </button>
        )}
        {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
      </ul>
    </div>
  </nav>
  <div className="sideContainer">
    <ul id="slide-out" className="sidenav">
      <li><Link to={"/home"} id="sideLinks">Home</Link></li>
      <li><Link to={"/ViewJobs"} id="sideLinks">View Jobs</Link></li>
      <li><Link to={"/AddJob"} id="sideLinks">Add Job</Link></li>
      <li><Link to={"/FunPage"} id="sideLinks">Fun Page</Link></li>
      {!isAuthenticated && (
        <button className="btn waves-effect waves-light" type="submit" id="loginBtn1" name="action"onClick={() => loginWithRedirect({})}>Log in<i className="material-icons">send</i>
        </button>
        )}
        {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
    </ul>
  </div>
</>
    )
}

export default Navbar;
