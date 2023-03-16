import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FeedbackForm = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [query, setQuery] = useState("")
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    type: '',
    description: '',
  });

  const onChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleChange = (e) => {
    console.log(e.target.value)
    setQuery(e.target.value);
}; 

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8080/api/feedbacks', feedback)
      .then((res) => {
        setFeedback({
          name: '',
          email: '',
          type: '',
          description: '',
        });

        // Change this to a page saying thanks for submitting - we will get back to you shortly
        navigate('/');
      })
      .catch((err) => {
        console.log('Error in FeedbackForm!');
      });
  };

  // const options = [
  //   {value: "feedback", label: "Feedback"},
  //   {value: "error", label: "Error"},
  // ];

  return (
    <div className='FeedbackForm'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/show-forms' className='btn btn-outline-warning float-left'>
              Show Feedback List
            </Link>
          </div>
            <h1 className='display-4 text-center'>Add Feedback</h1>
            <p className='lead text-center'>Send us a feedback form</p>

            <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                placeholder='Name'
                name='name'
                className='form-control'
                value={feedback.name}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                type='text'
                placeholder='Email'
                name='email'
                className='form-control'
                value={feedback.email}
                onChange={onChange}
              />
            </div>
            <br />
            {/*// try and make a drop down list <div className='form-group'>
              <Dropdown placeHolder="Select..." options={options} />
            </div> */}
            {/* <div className='form-group'>
              <label htmlFor='Type'>Type</label>
              <select 
                className='dropdown-container'
                style={{width:200+'px', height:30+'px', fontSize:'medium'}}
                
              >
                <option value=""> Select... </option>
                <option value="Error"> Error </option>
                <option value="Feedback"> Feedback </option>
              </select>
            </div>
            <br /> */}

        <div className='form-group'>
              <label htmlFor='type'>Type</label>
              <input
                type='text'
                placeholder='Type'
                name='type'
                className='form-control'
                value={feedback.type}
                onChange={onChange}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='description'>Description</label>
              <textarea
                type='text'
                maxlength="250"
                placeholder='Description'
                name='description'
                className='form-control'
                value={feedback.description}
                onChange={onChange}
              />
            </div>
            <br />
            <br />

            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Send Feedback Form
            </button>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;