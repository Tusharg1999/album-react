import React, { Component } from "react";

import Button from "../../shared/components/button/index";
import { Heading } from "../../shared/components/typography";
import {
  LoginContainer,
  FormContainer,
  Form,
  LoginBody,
  LoginInput,
} from "./styles";
class Login extends Component {
  render() {
    return (
      <LoginContainer>
        <FormContainer>
          <Heading>Welcome Back !</Heading>
          <LoginBody small>Login your account with your credentials.</LoginBody>
          <Form>
            <LoginInput placeholder='Email Address' />
            <LoginInput placeholder='Password' />
            <Button>Go On</Button>
          </Form>
        </FormContainer>
      </LoginContainer>
    );
  }
}
export default Login;
