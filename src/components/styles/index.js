import { css } from "styled-components";

export const WrapperButtonWithIcon = css`
  ${({ theme }) => css`
    display: flex;
    gap: 4px;
    padding: 8px 16px;
    border: none;
    background: transparent;
    font-weight: 600;
    cursor: pointer;
    border-radius: 8px;
    transition: background ease-in-out 200ms;
    :hover {
      background: ${theme.colors.bg[100]};
    }
  `}
`;
