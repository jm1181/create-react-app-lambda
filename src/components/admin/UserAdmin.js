import React, { useState, useEffect } from "react";
import UserCard from "./user/UserCard";
import UserService from "../../services/user.service";

const UserAdmin = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    UserService.getUserContent().then(
      (response) => {
        setUsers(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        console.log(_content)
        setUsers([]);
      }
    );
  }, []);

  const userList =
  users.length === 0
    ? 'You are not authorised to view this page.'
    : users.map((user, k) => <UserCard user={user} key={k} />);

  return (
    <div className='ShowUserList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h2 className='display-4 text-center'>Users List</h2>
          </div>
            <hr />
        </div>

        <div className='list'>{userList}</div>
      </div>
    </div>
  );
};

export default UserAdmin;