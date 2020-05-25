import React, { Component } from "react";
import isLoggedIn from "../../helper/isLoggedIn";
import { Redirect } from "react-router";

export class Home extends Component {
  render() {
    if (isLoggedIn() === false) {
      return <Redirect to='/login' />;
    }
    return (
      <div>
        <h1>hi</h1>
      </div>
    );
  }
}

export default Home;
