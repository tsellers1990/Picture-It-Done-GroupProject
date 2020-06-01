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
      <ul class="right hide-on-med-and-down" id="menuList">
<<<<<<< HEAD
        <li><Link to={"/home"} id="linkTags">Home</Link></li>
        <li><Link to={"/ViewJobs"} id="linkTags">View Jobs</Link></li>
        <li><Link to={"/AddJob"} id="linkTags">Add a Job</Link></li>
        <button class="btn waves-effect waves-light" type="submit" id="loginBtn" name="action">Login<i class="material-icons">send</i>
=======
        <li><Link to={"/home"}>Home</Link></li>
        <li><Link to={"/ViewJobs"}>View Jobs</Link></li>
        <li><Link to={"/AddJob"}>Add a Job</Link></li>
        {!isAuthenticated && (
        <button class="btn waves-effect waves-light" type="submit" id="loginBtn" name="action"onClick={() => loginWithRedirect({})}>Log in<i class="material-icons">send</i>
>>>>>>> master
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

