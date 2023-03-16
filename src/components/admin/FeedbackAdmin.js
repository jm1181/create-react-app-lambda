import React, { useState, useEffect } from "react";
import UserService from "../../services/user.service";
import FeedbackCard from "./feedback/FeedbackCard";

const FeedbackAdmin = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const feedbackList =
    feedbacks.length === 0
      ? 'You are not authorised to view this page.'
      : feedbacks.map((feedback, k) => 
      <div>
        <FeedbackCard feedback={feedback} key={k} />
      </div>
      );


  useEffect(() => {
    UserService.getFeedbackContent().then(
      (response) => {
        setFeedbacks(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
          console.log(_content)
        setFeedbacks([]);
      }
    );
  }, []);

  return (
    <div className='DisplayFeedback'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h1>Feedback Form List</h1>
          </div>
        </div>

        <div className='list'>{feedbackList}</div>
      </div>
    </div>
  );
};

export default FeedbackAdmin;