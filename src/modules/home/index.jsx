import React, { Component } from "react";
import isLoggedIn from "../../helper/isLoggedIn";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import setUserAction from "../shared/redux/actions";
import loadUser from "../../helper/localStorage/loadUser";
import { debugLog } from "../../utils/logger";

export class Home extends Component {
  componentDidMount() {
    const token = loadUser();
    debugLog(token);
    this.props.updateUser(token);
  }
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
function mapActionsToProps(dispatch) {
  return {
    updateUser: (token) => dispatch(setUserAction(token)),
  };
}
export default connect(null, mapActionsToProps)(Home);
