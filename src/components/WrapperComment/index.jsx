import React from "react";
import Comment from "../Comment";
import p from "prop-types";

import * as S from "./styles";
import { useStorageContext } from "../../context/dataContext";

const WrapperComment = ({
  content,
  replys,
  comment_id,
  onSetReply,
  user,
  userUid
}) => {
  const { localUid, localUser } = useStorageContext();

  const getRepliesComment = replys.filter(
    (item) => item.reply_parent == comment_id
  );

  const handleSubmitReply = (reply) => {
    onSetReply &&
      onSetReply({
        user_name: localUser,
        user_uid: localUid,
        comment_id: Math.floor(Math.random() * 1000),
        comment: reply.HTML,
        text: reply.text,
        replys_ids: [],
        reply_parent: comment_id,
        is_reply: true
      });
  };

  return (
    <S.Wrapper>
      <Comment content={content} userName={user} userUid={userUid} />
      <S.WrapperReply aria-label="replies">
        {getRepliesComment.map((comment) => (
          <Comment
            userUid={comment.user_uid}
            userName={comment.user_name}
            isReply={true}
            key={comment.comments_id}
            content={comment.comment}
            onSubmitReply={handleSubmitReply}
          />
        ))}
      </S.WrapperReply>
    </S.Wrapper>
  );
};

WrapperComment.propTypes = {
  comment_id: p.number,
  content: p.string,
  user: p.string,
  userUid: p.number,
  replys: p.array,
  onSetReply: p.func
};

export default WrapperComment;
