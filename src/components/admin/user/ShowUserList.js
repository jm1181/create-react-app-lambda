import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UserCard from './UserCard';

function ShowUserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/users')
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowUserList');
      });
  }, []);

  const userList =
    users.length === 0
      ? 'there is no user record!'
      : users.map((user, k) => <UserCard user={user} key={k} />);

  return (
    <div className='ShowUserList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Users List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-user'
              className='btn btn-outline-warning float-right'
            >
              + Add New User
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{userList}</div>
      </div>
    </div>
  );
}

export default ShowUserList;
