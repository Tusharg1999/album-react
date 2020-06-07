import styled, { css } from "styled-components";

const title = styled.h1`
  ${({ theme }) => css`
    margin: 0;
    color: ${theme.primary.main};
  `};
`;

export default title;
