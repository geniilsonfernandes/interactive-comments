import styled, { css } from "styled-components";

const WrapperButtonModifier = {
  isDisabled: () => css`
    opacity: 0.5;
    pointer-events: none;
  `
};
export const WrapperButton = styled.button`
  ${({ theme, isDisabled }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 0px 16px;
    height: 38px;
    border: none;
    background: ${theme.colors.secundary[100]};
    font-weight: 400;
    cursor: pointer;
    border-radius: 8px;
    transition: background ease-in-out 200ms;
    color: #fff;
    font-size: 16px;
    :hover {
      background: ${theme.colors.secundary[200]};
    }
    :active {
      transform: scale(0.96);
    }
    ${!!isDisabled && WrapperButtonModifier.isDisabled()}
  `}
`;
