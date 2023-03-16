import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FeedbackCard from './FeedbackCard';

function DisplayFeedback() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/feedbacks')
      .then((res) => {
        setFeedbacks(res.data);
      })
      .catch((err) => {
        console.log('Error from DisplayFeedback');
      });
  }, []);

  const feedbackList =
    feedbacks.length === 0
      ? 'there is no feedback record!'
      : feedbacks.map((feedback, k) => <FeedbackCard feedback={feedback} key={k} />);

  return (
    <div className='DisplayFeedback'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Feedback Form List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-form'
              className='btn btn-outline-warning float-right'
            >
              + Add a new feedback form
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{feedbackList}</div>
      </div>
    </div>
  );
}

export default DisplayFeedback;
