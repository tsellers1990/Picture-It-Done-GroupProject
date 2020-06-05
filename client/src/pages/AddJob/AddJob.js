import React, { useState, useEffect, Component } from 'react';
import { Input, FormBtn, UploadBtn } from '../../components/Form/index'
import API from "../../utils/API"
import "./AddJob.css";
import { func } from 'prop-types';
import ReactDom from 'react-dom'
import ReactS3 from 'react-s3'
import { keys } from '../../keys'
// find a way of getting the user ID for the API.saveJob functionality //if we have time, get it from the profile page


const AddJobs = () => {

  const [formObject, setFormObject] = useState({})

//   const config = {
//     bucketName: "bucket-for-picture-it-done-image-files",
//     // albumName: '',
//     region: '',
//     accessKeyId: keys.accessKeyId,
//     secretAccessKey: keys.secretAccessKey
// } //fill this shit out

  // function callAWS (image) {

  // }

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
      // .then(``) redirect this
      .catch(err => console.log(err));
    }
  };

  // function handleRedirect () {
  //   return(<Redirect to ={{pathname: "/home"}} />)
  // // }
  // function upload(e) {
  //   console.log(e.target.files[0]);
  //   ReactS3.upload(e.target.files[0], config)
  //     .then((data)=> {
  //       console.log(data)
  //     })
  //     .catch(err=> {console.log(err)})
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
=======

>>>>>>> master
          <form id="uploadForm" enctype="multipart/form-data">
              <label for="description"></label>
              <label for="upload">Choose a file for photo upload! </label>
              <input type="file" name="upload" id="upload" onChange={console.log('placeholder')}/> 
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