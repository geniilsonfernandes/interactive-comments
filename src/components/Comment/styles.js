import styled, { css } from "styled-components";
import { WrapperButtonWithIcon } from "../styles";

const wrapperSpacing = 16;

export const WrapperMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 16px;
    background: ${theme.colors.bg[900]};
    display: flex;
    gap: ${wrapperSpacing / 2}px;
    border-radius: 16px;
  `}
`;

export const Counter = styled.div``;
export const Content = styled.div`
  width: 100%;
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  padding: 0 ${wrapperSpacing / 2}px;
  gap: 8px;
`;

export const User = styled.div`
  ${({ theme }) => css`
    font-weight: 600;
    font-size: 16px;
    color: ${theme.colors.text[100]};
    display: flex;
    align-items: center;
    gap: 4px;
  `}
`;

export const UserTag = styled.span`
  ${({ theme }) => css`
    display: block;
    background: ${theme.colors.secundary[100]};
    padding: 2px 4px;
    font-weight: 400;
    font-size: 14px;
    border-radius: 2px;
    color: #fff;
  `}
`;

export const Date = styled.span`
  ${({ theme }) => css`
    font-weight: 400;
    font-size: 14px;
    color: ${theme.colors.text[500]};
  `}
`;

export const ButtonsGroup = styled.div`
  margin-left: auto;
  display: flex;
  gap: 8px;
`;

export const EditButton = styled.button`
  color: #555aba;
  ${WrapperButtonWithIcon}
`;
export const DeleteButton = styled.button`
  color: #ee6764;
  ${WrapperButtonWithIcon}
`;

export const ReplyButton = styled.button`
  color: #555aba;
  ${WrapperButtonWithIcon}
`;
export const UpdateButton = styled.button`
  margin-top: 8px;
  color: #555aba;
  margin-left: auto;
  ${WrapperButtonWithIcon}
`;

const CommentModifiers = {
  editable: (theme) => css`
    border: 1px solid ${theme.colors.secundary[100]};
    outline: 1px solid ${theme.colors.secundary[100]};
    :focus {
      border: 1px solid ${theme.colors.secundary[100]};
      outline: 1px solid ${theme.colors.secundary[100]};
    }
  `
};

export const Comment = styled.p`
  ${({ theme, isEditable }) => css`
    margin-top: 8px;
    padding: ${wrapperSpacing / 2}px;
    line-height: 24px;
    font-weight: 400;
    font-size: 16px;
    color: ${theme.colors.text[500]};
    border-radius: 4px;
    ${isEditable && CommentModifiers.editable(theme)}
  `}
`;
