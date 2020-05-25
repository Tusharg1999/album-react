import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

import isLoggedIn from "../../../helper/isLoggedIn";
import userLoginStartAsync from "./redux/actions";
import Button from "../../shared/components/button/index";
import { Heading } from "../../shared/components/typography";
import {
  LoginContainer,
  FormContainer,
  Form,
  LoginBody,
  LoginInput,
  LoginLink,
} from "./styles";
class Login extends Component {
  constructor(props) {
    super(props);
    this.usernameRef = createRef();
    this.passwordRef = createRef();
  }

  loginHandler = (e) => {
    e.preventDefault();
    const username = this.usernameRef.current.value;
    const password = this.passwordRef.current.value;
    this.props.loginUser({ username, password }, this.props.history);
  };
  render() {
    if (isLoggedIn()) {
      return <Redirect to='/' />;
    }
    return (
      <LoginContainer>
        <FormContainer>
          <Heading>Welcome Back !</Heading>
          <LoginBody small>Login your account with your credentials.</LoginBody>
          <Form onSubmit={this.loginHandler}>
            <LoginInput ref={this.usernameRef} placeholder='Username' />
            <LoginInput
              type='password'
              ref={this.passwordRef}
              placeholder='Password'
            />
            <LoginLink to='/register'>Don't Have Account?</LoginLink>
            <Button>Go On</Button>
          </Form>
        </FormContainer>
      </LoginContainer>
    );
  }
}
function mapActionsToProps(dispatch) {
  return {
    loginUser: (credentials, history) =>
      dispatch(userLoginStartAsync(credentials, history)),
  };
}
export default connect(null, mapActionsToProps)(Login);
