import React, { useState } from "react";
import propTypes from "prop-types";
import { useRef } from "react";
import { useEffect } from "react";

import * as S from "./styles";
import { WrapperButton } from "../WrapperButton";

const CommentReply = ({ onReply, onCancel }) => {
  const [textContent, setTextContent] = useState("");
  const [disableButton, setDisableButton] = useState(true);
  const replyEl = useRef();

  const handleSubmitClick = () => {
    onReply &&
      onReply({
        HTML: replyEl.current.innerHTML,
        text: replyEl.current.innerText,
        value: replyEl.current.textContent
      });
  };

  const handleChange = (e) => {
    setTextContent(e.target.textContent);
  };

  useEffect(() => {
    replyEl.current.focus();
  }, []);

  useEffect(() => {
    if (textContent !== "") {
      setDisableButton(false);
    }
  }, [textContent]);

  return (
    <S.BoxWrapper>
      <S.Comment
        contentEditable={true}
        ref={replyEl}
        tabIndex={-1}
        suppressContentEditableWarning={true}
        onInput={(e) => handleChange(e)}
      ></S.Comment>
      <S.Buttons>
        <WrapperButton
          onClick={() => handleSubmitClick()}
          isDisabled={disableButton}
        >
          Send
        </WrapperButton>
        <S.CancelButton onClick={() => onCancel()}>Cancel</S.CancelButton>
      </S.Buttons>
    </S.BoxWrapper>
  );
};

CommentReply.propTypes = {
  onReply: propTypes.func,
  onCancel: propTypes.func
};

export default CommentReply;
