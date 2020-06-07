import styled, { css } from "styled-components";

const Button = styled.button`
  outline: none;
  border: none;
  padding: 0.8rem 1.8rem;
  color: white;
  width: 100%;
  font-size: medium;
  font-weight: 500;
  font-family: inherit;
  border-radius: 0.6rem;
  transition-property: transform;
  transition-duration: 0.2s;
  ${({ theme }) => css`
    background: ${theme.primary.main};
    @media only screen and (min-width: 600px) {
      cursor: pointer;
      &:hover {
        background: ${theme.primary.dark};
      }
    }
  `}
  &:active:hover {
    transform: scale(0.9);
  }
`;

export default Button;
