import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import "./Navbar.css";
import {Link} from "react-router-dom";




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
        {!isAuthenticated && (
        <button class="btn waves-effect waves-light" type="submit" id="loginBtn" name="action"onClick={() => loginWithRedirect({})}>Log in<i class="material-icons">send</i>
        </button>
        )}
        {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
      </ul>
    </div>
  </nav>
</>
    )
}

export default Navbar;

