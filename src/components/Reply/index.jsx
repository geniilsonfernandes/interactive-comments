import React from "react";
import p from "prop-types";
import * as S from "./styles";
import { useRef } from "react";

const Reply = ({ onReply, onCancel }) => {
  const replyEl = useRef();

  const handleSubmitClick = () => {
    onReply &&
      onReply({
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
      >
        add reply
      </S.Comment>
      <S.Buttons>
        <S.SubmitButton onClick={() => handleSubmitClick()}>
          Send
        </S.SubmitButton>
        <S.CancelButton onClick={() => onCancel()}>Cancel</S.CancelButton>
      </S.Buttons>
    </S.BoxWrapper>
  );
};

Reply.propTypes = {
  onReply: p.func,
  onCancel: p.func
};

export default Reply;
