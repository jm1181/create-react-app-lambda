import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FeedbackCard = (props) => {
  const feedback = props.feedback;
  const navigate = useNavigate();

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:8080/api/feedbacks/${id}`)
      .then((res) => {
        navigate(0);
      })
      .catch((err) => {
        console.log('Error from ShowUserDetails_deleteClick');
    });
  };

  return (
    <div className='card-container'>
      <div className='desc'>
        <h1>
          {feedback.type}
        </h1>
        <h3>{feedback.name}</h3>
        <p>{feedback.description}</p>
        <p>{feedback._id}</p>
        <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(feedback._id);
              }}
            >
              Delete Feedback
            </button>
      </div>
    </div>
  );
};

export default FeedbackCard;