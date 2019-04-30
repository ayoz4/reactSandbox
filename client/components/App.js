import React, { Component } from "react";
import { hot } from "react-hot-loader/root";
import NavBar from "./NavBar";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}

export default hot(App);
