import React from "react";
import propTypes from "prop-types";
import * as S from "./styles";
import { useRef } from "react";

const CommentInput = ({ onSubmitComment, user, userUid }) => {
  const replyEl = useRef();

  const handleSubmitClick = () => {
    onSubmitComment &&
      onSubmitComment({
        user_uid: userUid,
        user_name: user,
        comment_id: Math.floor(Math.random() * 64),
        comment: replyEl.current.innerHTML,
        replys_ids: [],
        reply_parent: null,
        is_reply: false
      });

    replyEl.current.textContent = "";
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
  userUid: propTypes.number
};

export default CommentInput;
