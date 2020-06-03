import React, { useEffect } from "react";
import { useAuth0 } from "../react-auth0-spa";
import "./Navbar.css";
import {Link} from "react-router-dom";
import logo from "../PID-Logo8.png";


const Navbar = (props) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  
  return (
<>
  <nav>


    <div class="nav-wrapper">
      <a href="#!" class="brand-logo">Picture It Done</a>
      <a href="index.html" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down" id="menuList">
        <li><Link to={"/home"}>Home</Link></li>
        <li><Link to={"/ViewJobs"}>View Jobs</Link></li>
        <li><Link to={"/AddJob"}>Add a Job</Link></li>
        <li><Link to={"/FunPage"}>Fun Page</Link></li>



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
  <div>
    <a href={"/home"}>
      <img className="pidLogo" src={logo} alt="Logo" />
    </a>
  </div>
</>
    )
}

export default Navbar;
