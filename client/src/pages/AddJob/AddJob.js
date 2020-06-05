import React, { useState, useEffect } from 'react';
import { Input, FormBtn, UploadBtn } from '../../components/Form/index'
import API from "../../utils/API"
import "./AddJob.css";
// find a way of getting the user ID for the API.saveJob functionality //if we have time, get it from the profile page


const AddJobs = () => {

  const [formObject, setFormObject] = useState({})

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.description) {
      API.saveJob({
        title: formObject.title,
        user: formObject.user,
        description: formObject.description,
        date: Date.now,
        image: formObject.image,
        phone: formObject.phone,
        email: formObject.email
      })
      // .then(``) redirect this bitch
      .catch(err => console.log(err));
    }
  };

  // function handleRedirect () {
  //   return(<Redirect to ={{pathname: "/home"}} />)
  // }

  return (
    <div className="new-job-form">
      <form>
        {/* maybe add something to the navbar to hold the username */}
        <Input 
          onChange={handleInputChange}
          name="title"
          placeholder="Your Post Title (required)"
          style={{ marginTop: 10}}
        />
        <Input 
          onChange={handleInputChange}
          name="description"
          placeholder="Please Describe Your Problem"
          style={{ marginTop: 10}}
        />
        <Input
          onChange={handleInputChange}
          name="phone"
          placeholder="Phone Number (optional)"
          style={{ marginTop: 10}}
        />
        <Input 
          onChange={handleInputChange}
          name="email"
          placeholder="Email (optional)"
          style={{ marginTop: 10}}
        />
<<<<<<< HEAD
          <form id="uploadForm" enctype="multipart/form-data">
=======
          <form id="uploadForm" enctype="multipart/form-data"> 
>>>>>>> master
              <label for="description"></label>
              <label for="upload">Choose a file for photo upload! </label>
              <input type="file" name="upload" id="upload" />
          </form>
        <FormBtn //this is the submit button
          disable={!(formObject.title || formObject.description)}
          onClick={handleFormSubmit}
        >
        </FormBtn>
      </form>
    </div>
  );
    
}

export default AddJobs;