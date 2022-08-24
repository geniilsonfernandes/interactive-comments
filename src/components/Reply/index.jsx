import React from "react";
import p from "prop-types";
import * as S from "./styles";
import { useRef } from "react";

const Reply = ({ onReply }) => {
  const replyEl = useRef();

  const handleSubmitClick = () => {
    onReply &&
      onReply({
        HTML: replyEl.current.innerHTML,
        text: replyEl.current.innerText,
        value: replyEl.current.textContent
      });
    console.log({
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

Reply.propTypes = {
  onReply: p.func
};

export default Reply;
