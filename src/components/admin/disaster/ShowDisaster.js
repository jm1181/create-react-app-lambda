import React from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const ShowDisaster = (props) => {
  const disaster = props.disaster;
  // const navigate = useNavigate();
  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:8080/api/disasters/${id}`)
      .then((res) => {
        // navigate(0);
      })
      .catch((err) => {
        console.log('Error from ShowUserDetails_deleteClick');
      });
  };
  return (
    <div className='card-container'>
      
      <div className='desc'>
        <h3>{disaster["Dis No"]}</h3>
        <p>{disaster["Disaster Type"]}</p>
        <p>{disaster.Country}</p>
      <button
      type='button'
      className='btn btn-outline-danger btn-lg btn-block'
      onClick={() => {
        onDeleteClick(disaster._id);
      }}
      >
        Delete Disaster
      </button>
      </div>
    </div>
  );
};

export default ShowDisaster;