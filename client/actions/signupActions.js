import axios from "axios";

const userSignupRequest = userData => {
  return dispatch => {
    return axios.post("/api/users", userData);
  };
};

export default userSignupRequest;
