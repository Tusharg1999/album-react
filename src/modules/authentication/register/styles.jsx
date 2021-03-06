import styled, { css } from "styled-components";
import Input from "../../shared/components/input/index";
import { SubTitle } from "../../shared/components/typography";
import { Link } from "react-router-dom";

const RegisterContainer = styled.div`
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
const RegisterBody = styled(SubTitle)`
  margin-top: 0.6rem;
  margin-bottom: 2rem;
`;
const RegisterInput = styled(Input)`
  margin-bottom: 0.9rem;
`;

const RegisterLink = styled(Link)`
  text-decoration: none;
  ${({ theme }) => css`
    color: ${theme.primary.main};
    padding-bottom: 10px;
    cursor: pointer;
  `}
`;
export {
  RegisterContainer,
  FormContainer,
  Form,
  RegisterBody,
  RegisterInput,
  RegisterLink,
};
