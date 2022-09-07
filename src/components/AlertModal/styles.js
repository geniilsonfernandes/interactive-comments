import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${() => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const Overlayer = styled.div`
  ${() => css`
    background: #000;
    width: 100%;
    height: 100vh;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
  `}
`;
export const Content = styled.div`
  ${() => css`
    background: #fff;
    border-radius: 8px;
    max-width: 400px;
    padding: 24px;
    z-index: 999;
    position: relative;
  `}
`;
