import React from "react";
import Comment from "../Comment";
import propTypes from "prop-types";

import * as S from "./styles";

const WrapperComment = ({
  content,
  replys,
  comment_id,
  onSubmitReply,
  user,
  userUid,
  localUid,
  onEditComment,
  onDeleteComment
}) => {
  const getRepliesComment = replys.filter(
    (item) => item.reply_parent == comment_id
  );

  const handleSubmitReply = (reply) => {
    onSubmitReply && onSubmitReply(reply, comment_id);
  };
  return (
    <S.Wrapper>
      <Comment
        content={content}
        userName={user}
        userUid={userUid}
        isAuthor={localUid === userUid}
        onSubmitReply={handleSubmitReply}
        onEdit={onEditComment}
        commentId={comment_id}
        onDelete={onDeleteComment}
      />
      {getRepliesComment.length !== 0 && (
        <S.WrapperReply aria-label="replies">
          {getRepliesComment.map((comment) => (
            <Comment
              commentId={comment.comment_id}
              userUid={comment.user_uid}
              userName={comment.user_name}
              isReply={true}
              key={comment.comment_id}
              content={comment.comment}
              onSubmitReply={handleSubmitReply}
              isAuthor={localUid === comment.user_uid}
              onEdit={onEditComment}
              onDelete={onDeleteComment}
            />
          ))}
        </S.WrapperReply>
      )}
    </S.Wrapper>
  );
};

WrapperComment.propTypes = {
  comment_id: propTypes.number,
  content: propTypes.string,
  user: propTypes.string,
  userUid: propTypes.number,
  replys: propTypes.array,
  onEditComment: propTypes.func,
  onSubmitReply: propTypes.func,
  onDeleteComment: propTypes.func,
  localUid: propTypes.number,
  localUser: propTypes.string
};

export default WrapperComment;
