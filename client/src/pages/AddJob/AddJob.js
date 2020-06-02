import React from 'react';
import { Input, TextArea, FormBtn, UploadBtn } from '../../components/Form/index'

class AddJobs extends React.Component {

  // function handleInputChange(event) {
  //   const { name, value } = event.target;
  //   setFormObject({...formObject, [name]: value})
  // };

  render(){
    return (
      <div className="new-job-form">
        <form>
          <Input 
            // onChange={handleInputChange}
            name="title"
            placeholder="Your Post Title (required)"
            style={{ marginTop: 10}}
          />
          <Input 
            // onChange={handleInputChange}
            name="title"
            placeholder="Please describe your problem"
            style={{ marginTop: 10}}
          />
          <UploadBtn/>
          <FormBtn />
        </form>
      </div>
    );
  }
}

export default AddJobs;