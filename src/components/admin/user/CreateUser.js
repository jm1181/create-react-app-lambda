import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const CreateUser = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    password: '',
    email: ''
  });

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8082/api/users', user)
      .then((res) => {
        setUser({
            username: '',
            password: '',
            email: ''
        });

        // Push to /
        navigate('/');
      })
      .catch((err) => {
        console.log('Error in CreateUser!');
      });
  };

  return (
    <div className='CreateUser'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show User List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add User</h1>
            <p className='lead text-center'>Create new user</p>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Username'
                  name='username'
                  className='form-control'
                  value={user.username}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Password'
                  name='password'
                  className='form-control'
                  value={user.password}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Email'
                  name='email'
                  className='form-control'
                  value={user.email}
                  onChange={onChange}
                />
              </div>
              

              <div class='DivButton'>
                <input
                  type='submit'
                  className='DisasterButton'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;