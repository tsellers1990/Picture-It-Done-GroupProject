import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";
import "./Profile.css";
// import image5 from './images/p5.jpg';

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <img src={user.picture} alt="Profile" style={{marginTop: "60px",marginLeft:"30px"}} />

      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </Fragment>
  );
};

export default Profile;