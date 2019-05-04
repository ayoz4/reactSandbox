import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { logout } from "../actions/authActions";

class NavBar extends Component {
  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const userLinks = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#" onClick={logout}>
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/signup" className="nav-link">
            Sign Up
          </Link>
        </li>
        <li>
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">
              React Sandbox
            </Link>
          </div>
          <div className="collapse navbar-collapse">
            {isAuthenticated ? userLinks : guestLinks}
          </div>
        </div>
      </nav>
    );
  }
}

NavBar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  { logout }
)(NavBar);
