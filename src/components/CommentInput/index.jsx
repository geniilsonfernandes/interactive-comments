import React from "react";
import p from "prop-types";
import * as S from "./styles";
import { useRef } from "react";

const CommentInput = ({ onSubmitComment }) => {
  const replyEl = useRef();

  const handleSubmitClick = () => {
    onSubmitComment &&
      onSubmitComment({
        HTML: replyEl.current.innerHTML,
        text: replyEl.current.innerText,
        value: replyEl.current.textContent
      });
  };

  return (
    <S.BoxWrapper>
      <S.Comment
        contentEditable={true}
        ref={replyEl}
        suppressContentEditableWarning={true}
      ></S.Comment>
      <S.SubmitButton onClick={() => handleSubmitClick()}>Send</S.SubmitButton>
    </S.BoxWrapper>
  );
};

CommentInput.propTypes = {
  onSubmitComment: p.func
};

export default CommentInput;
