import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 16px;
    background: ${theme.colors.bg[900]};
  `}
`;

export const Head = styled.div`
  display: flex;
  align-items: center;

  gap: 8px;
`;

export const User = styled.div`
  ${({ theme }) => css`
    font-weight: 600;
    font-size: 16px;
    color: ${theme.colors.text[100]};
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

const WrapperButton = css`
  display: flex;
  gap: 4px;
  padding: 4px;
  border: none;
  background: transparent;
  font-weight: 600;
  cursor: pointer;
`;

export const EditButton = styled.button`
  color: #555aba;
  ${WrapperButton}
`;
export const DeleteButton = styled.button`
  color: #ee6764;
  ${WrapperButton}
`;

export const ReplyButton = styled.button`
  color: #555aba;
  ${WrapperButton}
`;

export const Comment = styled.p`
  ${({ theme }) => css`
    padding-top: 16px;
    line-height: 24px;
    font-weight: 400;
    font-size: 16px;
    color: ${theme.colors.text[500]};
  `}
`;
