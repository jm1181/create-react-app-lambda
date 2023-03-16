import React from 'react'
import {
  MDBContainer,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbar,
} from 'mdb-react-ui-kit';
import {Route, Routes} from "react-router-dom";
import Map from "./map/emdat/HeatMap";
import DisasterData from "./map/emdat/DisasterData";
import ReliefData from "./map/ReliefData";
import Relief from "./map/Relief";
import News from './home/News';
import ShowUserDetails from './admin/user/ShowUserDetails';
import UpdateUserInfo from './admin/user/UpdateUserInfo';
import FeedbackForm from './admin/feedback/FeedbackForm';
import AuthService from "../services/auth.service";
import BoardAdmin from './admin/FeedbackAdmin';
import DisasterAdmin from './admin/DisasterAdmin';
import CreateDisaster from './admin/disaster/CreateDisaster';
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import BoardUser from "./admin/UserAdmin";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Statistics from './Statistics';
import Footer from './Footer';
import { CgProfile } from 'react-icons/cg';
import { BiLogOut } from 'react-icons/bi';

function App() {

  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <div className='outside-app'>
        <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/'>
                HOME
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/news'>
                REPORTS
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink href='/statistics'>STATISTICS</MDBNavbarLink>
            </MDBNavbarItem>
          
        <div className="navbar-nav mr-auto">

          {showAdminBoard && (  
            <div>            
            <MDBNavbarItem>
              <MDBNavbarLink href='/feedback-admin'>
                FEEDBACK FORMS
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/disaster-admin'>
                DISASTER DATA
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/user-admin'>
                USER DATA
              </MDBNavbarLink>
            </MDBNavbarItem>
            <li className="item">
              <Link to={"/register"} className="nav-link">
                SIGN UP
              </Link>
            </li>
            </div>
          )}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="login-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                <BiLogOut/>
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="login-item">
              <Link to={"/login"} className="nav-link">
                <CgProfile/>
              </Link>
            </li>
          </div>
        )}
      </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>

      <div className="container mt-3">
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/user-admin" element={<BoardUser/>} />
          <Route path="/feedback-admin" element={<BoardAdmin/>} />
          <Route path="/disaster-admin" element={<DisasterAdmin/>} />
          <Route path="/news" element={ <News/> } />
          <Route path="/relief" element={ <ReliefData/> } />
          <Route path="/statistics" element={ <Statistics/> } />
          <Route path="/" element={ <Relief/> } />
          <Route path="/create-form" element={ <FeedbackForm/> } />
          <Route path="/create-disaster" element={ <CreateDisaster/> } />
          <Route path="/edit-user/:id" element={ <UpdateUserInfo/> } />
          <Route path="/show-user/:id" element={ <ShowUserDetails/> } />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
