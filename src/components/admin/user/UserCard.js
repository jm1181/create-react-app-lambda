import React from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const UserCard = (props) => {
  const user = props.user;
  const navigate = useNavigate();
  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:8080/api/users/${id}`)
      .then((res) => {
        navigate(0);
      })
      .catch((err) => {
        console.log('Error from ShowUserDetails_deleteClick');
      });
  };



  return (
    <div className="card-container">
    <header className="jumbotron">
      <h3>
        <strong>{user.username}</strong> Profile
      </h3>
    </header>
    <p>
    </p>
    <p>
      <strong>Id:</strong> {user._id}
    </p>
    <p>
      <strong>Email:</strong> {user.email}
    </p>
    <p>
      <strong>Password:</strong> {user.password}
    </p>
    <div className='col-md-6 m-auto'>
      <button
        type='button'
        className='btn btn-outline-danger btn-lg btn-block'
        onClick={() => {
          onDeleteClick(user._id);
        }}
      >
        Delete User
      </button>
    </div>
    <div className='col-md-6 m-auto'>
      <Link
        to={`/edit-user/${user._id}`}
        className='btn btn-outline-info btn-lg btn-block'
      >
        Edit User
      </Link>
    </div>
  </div>
  );
};

export default UserCard;