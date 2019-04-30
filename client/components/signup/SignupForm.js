import React, { Component } from "react";
import classNames from "classnames";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: {},
      isLoading: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    const { userSignupRequest } = this.props;

    e.preventDefault();
    this.setState({
      errors: {},
      isLoading: true
    });
    userSignupRequest(this.state).then(
      () => {},
      err => this.setState({ errors: err.response.data, isLoading: false })
    );
    console.log(this.state);
  }

  render() {
    const { errors } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <h1>h1</h1>

        <div className="form-group">
          <label className="control-label">Username</label>
          <input
            type="text"
            name="username"
            className={classNames("form-control", {
              "is-invalid": errors.username
            })}
            value={this.state.username}
            onChange={this.onChange}
          />
          <div class="invalid-feedback">{errors.username}</div>
        </div>

        <div className="from-group">
          <label className="control-label">Email</label>
          <input
            type="text"
            name="email"
            className={classNames("form-control", {
              "is-invalid": errors.email
            })}
            value={this.state.email}
            onChange={this.onChange}
          />
          <div class="invalid-feedback">{errors.email}</div>
        </div>

        <div className="from-group">
          <label className="control-label">Password</label>
          <input
            type="password"
            name="password"
            className={classNames("form-control", {
              "is-invalid": errors.password
            })}
            value={this.state.password}
            onChange={this.onChange}
          />
          <div class="invalid-feedback">{errors.password}</div>
        </div>

        <div className="from-group">
          <label className="control-label">Confirm password</label>
          <input
            type="password"
            name="passwordConfirmation"
            className={classNames("form-control", {
              "is-invalid": errors.passwordConfirmation
            })}
            value={this.state.passwordConfirmation}
            onChange={this.onChange}
          />
          <div class="invalid-feedback">{errors.passwordConfirmation}</div>
        </div>

        <div className="form-group">
          <button
            disabled={this.state.isLoading}
            className="btn btn-primary btn-lg"
          >
            Sign Up
          </button>
        </div>
      </form>
    );
  }
}

export default SignupForm;
