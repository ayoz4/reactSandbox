import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import SignupForm from "./SignupForm";
import { userSignupRequest } from "../../actions/signupActions";

class SignupPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignupForm userSignupRequest={userSignupRequest} />
        </div>
      </div>
    );
  }
}

export default SignupPage;
