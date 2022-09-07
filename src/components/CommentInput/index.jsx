import React, { useState } from "react";
import propTypes from "prop-types";
import * as S from "./styles";
import { useRef } from "react";
import { WrapperButton } from "../WrapperButton";

const CommentInput = ({ onSubmitComment }) => {
  const [disableButton, setDisableButton] = useState(true);
  const commentEl = useRef();

  const handleSubmitClick = () => {
    onSubmitComment &&
      onSubmitComment({
        HTML: commentEl.current.innerHTML,
        text: commentEl.current.innerText,
        value: commentEl.current.textContent
      });
    commentEl.current.textContent = "";
  };

  const handleChange = (e) => {
    e.target.textContent !== ""
      ? setDisableButton(false)
      : setDisableButton(true);
  };

  return (
    <S.BoxWrapper>
      <S.Comment
        contentEditable={true}
        ref={commentEl}
        suppressContentEditableWarning={true}
        onInput={(e) => handleChange(e)}
      ></S.Comment>
      <WrapperButton
        isDisabled={disableButton}
        onClick={() => handleSubmitClick()}
      >
        Send
      </WrapperButton>
    </S.BoxWrapper>
  );
};

CommentInput.propTypes = {
  onSubmitComment: propTypes.func,
  user: propTypes.string,
  userUid: propTypes.number
};

export default CommentInput;
