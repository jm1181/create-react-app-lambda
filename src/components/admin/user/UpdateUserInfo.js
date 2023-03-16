import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateUserInfo(props) {
  const [user, setUser] = useState({
    username: '',
    password: '',
    email: '',
    roles: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/users/${id}`)
      .then((res) => {
        setUser({
          username: res.data.username,
          password: res.data.password,
          email: res.data.email,
          // roles: res.data.roles.name,
        });
      })
      .catch((err) => {
        console.log('Error from UpdateUserInfo');
      });
  }, [id]);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
        username: user.username,
        password: user.password,
        email: user.email,
        // roles: user.roles.name,
    };

    axios
      .put(`http://localhost:8080/api/users/${id}`, data)
      .then((res) => {
        navigate(`/show-user/${id}`);
      })
      .catch((err) => {
        console.log('Error in UpdateUserInfo!');
      });
  };

  return (
    <div className='UpdateUserInfo'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/user-admin' className='btn btn-outline-warning float-left'>
              Back
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit User</h1>
            <p className='lead text-center'>Update User's Info</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='username'>Username</label>
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
              <label htmlFor='password'>Password</label>
              <input
                type='text'
                placeholder='Password'
                name='password'
                className='form-control'
                value={user.password}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='author'>Email</label>
              <input
                type='text'
                placeholder='Email'
                name='email'
                className='form-control'
                value={user.email}
                onChange={onChange}
              />
            </div>
            <br />
            {/* between admin and user - make it a dropdown */}
            {/* <div className='form-group'>
              <label htmlFor='roles'>Role</label>
              <input
                type='text'
                placeholder='Role'
                name='roles'
                className='form-control'
                value={user.roles}
                onChange={onChange}
              />
            </div> */}
            <br />

            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Update User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateUserInfo;