import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";
import "./Profile.css";
import image5 from './images/p5.jpg';
import JSONPretty from 'react-json-pretty';

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profInfo">
      <img src={user.picture} alt="Profile" />

      <h2>{user.name}</h2>
      <p>{user.email}</p>
    
    
    
        <div class="par">
            <a href="https://images.app.goo.gl/x6zHfUhVhvYNAZpo9"><img class="img" src={image5} alt="image5" /></a>
            <header>
            <h3>Flooring Installer</h3>
            </header>
            <p>Looking for an individual that is self-motivated to help install flooring for a reputable flooring business. Must be able to lift heavy material and have reliable transportation. Construction background is a plus but not necessary, we will train the right individual. The job can be labor-intensive at times and sometimes travel is required. Pay is TBD. This is a construction and general laborer based position with the potential to move up quickly.
            </p>
            <ul class="actions special">
                <li>Email-Chadwhither@yahoo.com</li>
                <li>Phone-303-732-1168</li>
                <li>Posted Date-6/3/2020</li>
                <a class="waves-effect waves-light btn" id="button1">Delete</a>
                <a class="waves-effect waves-light btn" id="button2">Edit</a>
            </ul>
        </div>
        </div>

    );
  
};

export default Profile;