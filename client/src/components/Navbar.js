import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";




const Navbar = (props) => {
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
        <button class="btn waves-effect waves-light" type="submit" id="loginBtn" name="action">Login<i class="material-icons">send</i>
        </button>
      </ul>
    </div>
  </nav>
</>
    )
}

export default Navbar;

