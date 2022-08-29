/* eslint-disable no-unused-vars */
import React from "react";
import Comment from "../Comment";
import p from "prop-types";

import * as S from "./styles";

const WrapperComment = ({ content, replys, id, onSetReply, user, userID }) => {
  const getRepliesComment = replys.filter((item) => item.reply_parent == id);

  return (
    <S.Wrapper>
      <Comment
        content={content}
        id={id}
        onReplySubmit={onSetReply}
        user={user}
        userID={userID}
      />
      <S.WrapperReply aria-label="replies">
        {getRepliesComment.map((comment) => (
          <Comment
            userID={userID}
            user={user}
            isReply={true}
            key={comment.comments_id}
            content={comment.comment}
            id={id}
            onReplySubmit={onSetReply}
          />
        ))}
      </S.WrapperReply>
    </S.Wrapper>
  );
};

WrapperComment.propTypes = {
  content: p.string,
  user: p.string,
  id: p.number,
  userID: p.number,
  replys: p.array,
  onSetReply: p.func
};

export default WrapperComment;
