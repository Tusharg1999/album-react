import styled, { css } from "styled-components";

const Input = styled.input`
  outline: none;
  border: none;
  width: 100%;
  box-sizing: border-box;
  border-radius: 0.8rem;
  padding: 1rem 1.5rem;
  font-family: inherit;
  font-weight: 500;
  font-size: 1rem;
  ${({ theme, dark }) => css`
    color: ${theme.text.primary};
    background: ${dark ? theme.background.dark : theme.background.paper};
  `}
`;

export default Input;
