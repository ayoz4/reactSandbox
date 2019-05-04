import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import { addFlashMessage } from "../actions/flashMessages";

export default function(ComposedComponent) {
  class Authenticate extends Component {
    constructor(props) {
      super(props);
      this.state = {
        redurect: false
      };
    }

    componentWillMount() {
      if (!this.props.isAuthenticated) {
        this.props.addFlashMessage({
          type: "error",
          text: "You need to log in to access this page"
        });
        this.setState({ redirect: true });
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        this.setState({
          redirect: true
        });
      }
    }

    render() {
      if (this.state.redirect) {
        return <Redirect to="/login" />;
      }

      return <ComposedComponent {...this.props} />;
    }
  }

  Authenticate.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    addFlashMessage: PropTypes.func.isRequired
  };

  function mapStateToProps(state) {
    return {
      isAuthenticated: state.auth.isAuthenticated
    };
  }

  return connect(
    mapStateToProps,
    { addFlashMessage }
  )(Authenticate);
}
