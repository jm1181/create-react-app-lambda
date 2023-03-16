import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test/";

const getFeedbackContent = () => {
    return axios.get(API_URL + "feedbacks", { headers: authHeader() });
};

const getUserContent = () => {
    return axios.get(API_URL + "users", { headers: authHeader() });
};

const getDisasterContent = () => {
    return axios.get(API_URL + "disasters", { headers: authHeader() });
};

const UserService = {
  getFeedbackContent,
  getUserContent,
  getDisasterContent
};

export default UserService;