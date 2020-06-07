import styled, { css } from "styled-components";

const subtitle = styled.p`
  ${({ theme }) => css`
    margin: 0;
    font-size: 0.85rem;
    color: ${theme.text.secondary};
  `};
`;

export default subtitle;
