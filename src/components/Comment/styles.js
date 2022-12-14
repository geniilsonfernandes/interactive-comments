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

export const Counter = styled.div`
  @media (max-width: 624px) {
    display: none;
  }
`;
export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    .replie__user {
      font-weight: 600;
      color: ${theme.colors.secundary[100]};
    }
  `}
`;

export const CounterMobile = styled.div``;
export const Head = styled.div`
  display: flex;
  align-items: center;
  padding: 0 ${wrapperSpacing / 2}px;
  gap: 8px;
`;

export const Footer = styled.div`
  display: none;
  align-items: center;
  padding: 0 ${wrapperSpacing / 2}px;
  gap: 8px;

  @media (max-width: 624px) {
    display: flex;
  }
`;

export const User = styled.div`
  ${({ theme }) => css`
    font-weight: 600;
    font-size: 16px;
    color: ${theme.colors.text[100]};
    display: flex;
    align-items: center;

    gap: 8px;
  `}
`;

export const UserIcon = styled.div`
  ${({ theme }) => css`
    height: 38px;
    width: 38px;
    border-radius: 24px;
    font-weight: 600;
    font-size: 16px;
    background: ${theme.colors.background[200]};
    color: ${theme.colors.secundary[100]};
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
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

export const ButtonsGroupMobile = styled.div`
  margin-left: auto;
  display: flex;
  gap: 8px;
`;
export const ButtonsGroup = styled.div`
  margin-left: auto;
  display: flex;
  gap: 8px;
  @media (max-width: 624px) {
    display: none;
  }
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
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: ${theme.colors.textColor[200]};
    border-radius: 4px;
    ${isEditable && CommentModifiers.editable(theme)}
  `}
`;

export const DeleteModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 300px;
`;

export const ModalHead = styled.h1`
  ${({ theme }) => css`
    font-weight: 600;
    font-size: 18px;
    color: ${theme.colors.textColor[100]};
  `}
`;

export const ModalText = styled.h1`
  ${({ theme }) => css`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${theme.colors.textColor[200]};
  `}
`;
export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: ${theme.colors.textColor[200]};
    display: flex;
    gap: 16px;
  `}
`;

const ModalButtonModifier = {
  secundary: (theme) => css`
    background: ${theme.colors.buttons.secundary[100]};
    transition: all ease-in-out 300ms;
    &:hover {
      background: ${theme.colors.buttons.secundary[200]};
    }
  `,
  alert: (theme) => css`
    background: ${theme.colors.buttons.alert[100]};
    transition: all ease-in-out 300ms;
    &:hover {
      background: ${theme.colors.buttons.alert[200]};
    }
  `
};

export const ModalButton = styled.button`
  ${({ theme, secundary, alert }) => css`
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: ${theme.colors.textColor[200]};
    padding: 10px 0;
    width: 100%;
    background: #68727e;
    color: #fff;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    ${!!secundary && ModalButtonModifier.secundary(theme)}
    ${!!alert && ModalButtonModifier.alert(theme)}
  `}
`;
