import styled, { css } from "styled-components";
import Input from "../../shared/components/input/index";
import { SubTitle } from "../../shared/components/typography";
import { Link } from "react-router-dom";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  justify-content: space-evenly;
  align-items: center;
  padding: 1.3rem 0px;
  border-radius: 20px;
  ${({ theme }) => css`
    background-color: ${theme.background.paper};
  `};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LoginBody = styled(SubTitle)`
  margin-top: 0.6rem;
  margin-bottom: 2rem;
`;
const LoginInput = styled(Input)`
  margin-bottom: 0.9rem;
`;
const LoginLink = styled(Link)`
  text-decoration: none;
  ${({ theme }) => css`
    color: ${theme.primary.main};
    padding-bottom: 10px;
    cursor: pointer;
  `}
`;
export {
  LoginContainer,
  FormContainer,
  Form,
  LoginBody,
  LoginInput,
  LoginLink,
};
