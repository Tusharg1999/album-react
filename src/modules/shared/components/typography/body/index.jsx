import styled, { css } from "styled-components";

const Body = styled.p`
  ${({ theme, small }) => css`
    font-size: ${small ? "0.85rem" : ""};
    color: ${theme.primary.main};
  `}
`;

export default Body;
