import styled, { css } from "styled-components";
import { WrapperButton } from "../styles";

export const BoxWrapper = styled.div`
  ${({ theme }) => css`
    padding: 16px;
    background: ${theme.colors.bg[900]};
    border-radius: 16px;
    gap: 16px;
    display: grid;
    grid-template-columns: 1fr 100px;
  `}
`;

export const Comment = styled.div`
  ${({ theme }) => css`
    padding: 8px;
    min-height: 100px;
    line-height: 24px;
    font-weight: 400;
    font-size: 16px;
    color: ${theme.colors.text[500]};
    border-radius: 4px;
    border: 1px solid ${theme.colors.background[300]};
    outline: 1px solid ${theme.colors.background[300]};
    :focus {
      border: 1px solid ${theme.colors.secundary[200]};
      outline: 1px solid ${theme.colors.secundary[200]};
    }
  `}
`;

export const SubmitButton = styled.div`
  ${WrapperButton}
  height: 38px;
`;
