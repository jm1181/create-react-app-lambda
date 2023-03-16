import React, { useState, useEffect } from "react";
import UserService from "../../services/user.service";
import ShowDisaster from "./disaster/ShowDisaster";
import { Link } from "react-router-dom";

const DisasterAdmin = () => {
  const [disasters, setDisasters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const disasterList =
    disasters.length === 0
      ? 'You are not authorised to view this page.'
      : disasters.map((disaster, k) => <ShowDisaster disaster={disaster} key={k} />);

  useEffect(() => {
    UserService.getDisasterContent().then(
      (response) => {
        setDisasters(response.data);
        setIsLoading(false)
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
          setIsLoading(false)
          console.log(_content)
        setDisasters([]);
      }
    );
  }, []);

  if (isLoading) {
    return <div className="App">Please wait ... a lot of data is trying to load</div>;
  }

  return (
    <div className='Statistics'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Disaster List</h2>
          </div>
        </div>
        <Link
              to={`/create-disaster`}
              className='btn btn-outline-info btn-lg btn-block'
            >
              Create Disaster
            </Link>
        <div className='list'>{disasterList}</div>
        {/* <div className='list'>{<ShowDisaster disaster={disasters} />}</div> */}
      </div>
    </div>
  );
};

export default DisasterAdmin;