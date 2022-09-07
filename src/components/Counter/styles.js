import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.bg[100]};
    border-radius: 16px;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
      width: 100%;
    }
    @media (max-width: 624px) {
      flex-direction: row;
    }
  `}
`;
export const Counter = styled.span`
  ${({ theme }) => css`
    font-weight: 600;
    font-size: 16px;
    color: ${theme.colors.secundary[100]};
  `}
`;
export const CounterButton = styled.button`
  ${({ theme }) => css`
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    font-size: 18px;
    border: none;
    font-weight: 600;
    color: ${theme.colors.secundary[100]};
    opacity: 0.5;
    cursor: pointer;
    :hover {
      opacity: 0.8;
    }
  `}
`;
