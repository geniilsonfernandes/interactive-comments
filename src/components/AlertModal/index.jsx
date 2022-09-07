import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import * as S from "./styles";

const AlertModal = ({ children, onClickOutSide }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "initial");
  }, []);

  return createPortal(
    <S.Wrapper>
      <S.Overlayer onClick={() => onClickOutSide()} />
      <S.Content>{children}</S.Content>
    </S.Wrapper>,
    document.getElementById("alert")
  );
};

export default AlertModal;
