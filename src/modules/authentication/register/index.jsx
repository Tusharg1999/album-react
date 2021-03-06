import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

import userRegistrationStartAsync from "./redux/actions";
import {
  RegisterContainer,
  Form,
  FormContainer,
  RegisterInput,
  RegisterLink,
  RegisterBody,
} from "./styles";
import { Heading } from "../../shared/components/typography";
import Button from "../../shared/components/button/index";
import isLoggedIn from "../../../helper/isLoggedIn";
class Register extends Component {
  constructor(props) {
    super(props);
    this.emailAddressRef = createRef();
    this.nameRef = createRef();
    this.usernameRef = createRef();
    this.passwordRef = createRef();
  }
  createUserHandler = (e) => {
    e.preventDefault();
    const email = this.emailAddressRef.current.value;
    const name = this.nameRef.current.value;
    const username = this.usernameRef.current.value;
    const password = this.passwordRef.current.value;
    this.props.createUser({ email, name, username, password });
  };
  render() {
    if (isLoggedIn()) {
      return <Redirect to='/' />;
    }
    return (
      <RegisterContainer>
        <FormContainer>
          <Heading>Create Account!</Heading>
          <RegisterBody small>
            Please Create an Account with Your Email
          </RegisterBody>
          <Form onSubmit={this.createUserHandler}>
            <RegisterInput
              ref={this.emailAddressRef}
              placeholder='Email Address'
            />
            <RegisterInput ref={this.nameRef} placeholder='Name' />
            <RegisterInput ref={this.usernameRef} placeholder='Username' />
            <RegisterInput
              ref={this.passwordRef}
              type='password'
              placeholder='Password'
            />
            <RegisterLink to='/login'>Already Have Account?</RegisterLink>
            <Button>Sign Up</Button>
          </Form>
        </FormContainer>
      </RegisterContainer>
    );
  }
}
function mapActionsToProps(dispatch) {
  return {
    createUser: (credentials) =>
      dispatch(userRegistrationStartAsync(credentials)),
  };
}
export default connect(null, mapActionsToProps)(Register);
