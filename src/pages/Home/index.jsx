import React, { useState } from "react";
import CommentInput from "../../components/CommentInput";
import WrapperComment from "../../components/WrapperComment";
import { useStorageContext } from "../../context/dataContext";
import data from "./mock";

import * as S from "./styles";

const Home = () => {
  const { localUid, localUser } = useStorageContext();
  const [mockComments, setMockComments] = useState(data);

  const handleSetNewComment = (comment) => {
    setMockComments((prevState) => [
      ...prevState,
      {
        user_uid: localUid,
        user_name: localUser,
        comment_id: Math.floor(Math.random() * 6400),
        comment: comment.HTML,
        raw: comment,
        replys_ids: [],
        reply_parent: null,
        is_reply: false,
        data: new Date()
      }
    ]);
  };

  const handleSubmitReply = (reply, parentCommentId) => {
    setMockComments((prevState) => [
      ...prevState,
      {
        user_name: localUser,
        user_uid: localUid,
        comment_id: Math.floor(Math.random() * 1000),
        comment: reply.HTML,
        raw: reply,
        text: reply.text,
        replys_ids: [],
        reply_parent: parentCommentId,
        is_reply: true,
        data: new Date()
      }
    ]);
  };

  const handleEditComment = (editedComment) => {
    const commentUpdate = mockComments.map((comment) => {
      if (editedComment.commentId === comment.comment_id) {
        return {
          ...comment,
          comment: editedComment.raw.HTML,
          raw: editedComment.raw
        };
      } else {
        return comment;
      }
    });
    setMockComments(commentUpdate);
  };

  const handleDeleteComment = (id) => {
    const commentUpdate = mockComments.filter(
      (comment) => id !== comment.comment_id
    );
    setMockComments(commentUpdate);
  };

  return (
    <S.Wrapper>
      {mockComments.map(
        (comment) =>
          !comment.is_reply && (
            <WrapperComment
              raw={comment.raw}
              comment_id={comment.comment_id}
              key={comment.comment_id}
              content={comment.comment}
              replys={mockComments}
              onSubmitReply={handleSubmitReply}
              user={comment.user_name}
              userUid={comment.user_uid}
              replysIds={comment.replys_ids}
              localUid={localUid}
              localUser={localUser}
              onEditComment={handleEditComment}
              onDeleteComment={handleDeleteComment}
            />
          )
      )}
      <CommentInput onSubmitComment={handleSetNewComment} />
    </S.Wrapper>
  );
};

export default Home;
