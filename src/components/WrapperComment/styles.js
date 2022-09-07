import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const WrapperReply = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: auto;
    gap: 16px;
    padding-left: 48px;
    position: relative;

    ::after {
      content: "";
      position: absolute;
      width: 2px;
      height: 100%;
      left: 24px;
      background: ${theme.colors.secundary[100]};
      opacity: 0.2;
    }
  `}
`;
