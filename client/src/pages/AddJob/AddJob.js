import React, { useState, useEffect } from 'react';
import { Input, FormBtn, UploadBtn } from '../../components/Form/index'
import API from "../../utils/API"

// find a way of getting the user ID for the API.saveJob functionality

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
      .catch(err => console.log(err));
    }
  };
//
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
        <Input git
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
        <UploadBtn /> {/* add logic here to handle the upload functionality */}
        <FormBtn
          disable={!(formObject.title || formObject.description)}
          onClick={handleFormSubmit}
        >
        </FormBtn>
      </form>
    </div>
  );
    
}

export default AddJobs;