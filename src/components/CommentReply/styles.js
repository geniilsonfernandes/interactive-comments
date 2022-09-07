import styled, { css } from "styled-components";
import { WrapperButtonWithIcon } from "../styles";

export const BoxWrapper = styled.div`
  ${({ theme }) => css`
    padding: 16px;
    background: ${theme.colors.bg[900]};
    border-radius: 16px;
    gap: 16px;
    display: grid;
    grid-template-columns: 1fr 100px;
    position: relative;
    padding-top: 24px;
    #user {
      display: inline;
      background: ${theme.colors.secundary[100]};
      padding: 2px 4px;
      font-weight: 400;
      font-size: 16px;
      border-radius: 2px;
      color: #fff;
      margin-right: 8px;
    }
  `}
`;

export const Comment = styled.p`
  ${({ theme }) => css`
    padding: 8px;
    min-height: 60px;
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
    .replie__user {
      font-weight: 600;
      color: ${theme.colors.secundary[100]};
    }
  `}
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ReplyTag = styled.a`
  ${({ theme }) => css`
    display: inline;
    background: ${theme.colors.secundary[100]};
    padding: 2px 4px;
    font-weight: 400;
    font-size: 16px;
    border-radius: 2px;
    top: -8px;
    left: -8px;
    color: #fff;
    margin-right: 8px;
    position: absolute;
  `}
`;

export const CancelButton = styled.button`
  color: #ee6764;
  ${WrapperButtonWithIcon}
  justify-content: center;
`;
