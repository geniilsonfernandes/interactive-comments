import React from "react";
import propTypes from "prop-types";
import * as S from "./styles";
import { useRef } from "react";

const CommentInput = ({ onSubmitComment, user, userID }) => {
  const replyEl = useRef();

  const handleSubmitClick = () => {
    onSubmitComment &&
      onSubmitComment({
        userID,
        user: user,
        comments_id: Math.floor(Math.random() * 64),
        comment: replyEl.current.innerHTML,
        replys_ids: [],
        reply_parent: null,
        reply: false
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
  onSubmitComment: propTypes.func,
  user: propTypes.string,
  userID: propTypes.number
};

export default CommentInput;
