import React, { Component } from "react";

import {
  RegisterContainer,
  Form,
  FormContainer,
  RegisterInput,
  RegisterBody,
} from "./styles";
import { Heading } from "../../shared/components/typography";
import Button from "../../shared/components/button/index";
class Register extends Component {
  render() {
    return (
      <RegisterContainer>
        <FormContainer>
          <Heading>Create Account!</Heading>
          <RegisterBody small>
            Please Create an Account with Your Email
          </RegisterBody>
          <Form>
            <RegisterInput placeholder='Email Address' />
            <RegisterInput placeholder='Name' />
            <RegisterInput placeholder='Password' />
            <Button>Sign Up</Button>
          </Form>
        </FormContainer>
      </RegisterContainer>
    );
  }
}
export default Register;
