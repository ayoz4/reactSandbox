import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import SignupForm from "./SignupForm";
import { userSignupRequest } from "../../actions/signupActions";
import { addFlashMessage } from "../../actions/flashMessages";

class SignupPage extends Component {
  render() {
    const { addFlashMessage } = this.props;

    return (
      <div className="row mx-auto">
        <div className="col-md-4 offset-md-4">
          <SignupForm
            userSignupRequest={userSignupRequest}
            addFlashMessage={addFlashMessage}
          />
        </div>
      </div>
    );
  }
}

SignupPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
};

export default connect(
  null,
  { userSignupRequest, addFlashMessage }
)(SignupPage);
