import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import "./Navbar.css";
import {Link} from "react-router-dom";


const Navbar = (props) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  
  return (
  <>
  <nav>
    <div className="nav-wrapper">
      <a href="#!" className="brand-logo">Picture It Done</a>
      <ul className="right hide-on-med-and-down" id="menuList">
        <li><Link to={"/home"} id="linkTags">Home</Link></li>
        <li><Link to={"/ViewJobs"} id="linkTags">View Jobs</Link></li>
        <li><Link to={"/AddJob"} id="linkTags">Add a Job</Link></li>
        {!isAuthenticated && (
        <button className="btn waves-effect waves-light" type="submit" id="loginBtn" name="action"onClick={() => loginWithRedirect({})}>Log in<i className="material-icons">send</i>
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

