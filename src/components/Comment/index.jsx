import React, { useState } from "react";
import propTypes from "prop-types";
import { BsFillReplyFill as ReplyIcon, BsTrash as Trash } from "react-icons/bs";
import { BiEditAlt as Edit } from "react-icons/bi";
import { useRef } from "react";
import Counter from "../Counter";
import Reply from "../CommentReply";

import * as S from "./styles";

// const regex = /\B@\w+/g;
// const addUserTag =
//   content &&
//   content.split("").map((word) => word.replace(regex, userToReplie(word)));

const Comment = ({ content, userName, onSubmitReply, isAuthor }) => {
  const commnetEl = useRef();
  const [editable, setEditable] = useState(false);
  const [showReplyInput, setShowReplyInput] = useState(false);

  const handleClickToUpdate = (type) => {
    if (type === "edit") {
      setEditable(true);
      commnetEl.current.focus();
    } else {
      setEditable(false);
    }
  };

  const handleShowReplyButton = () => {
    setShowReplyInput((prevState) => !prevState);
  };

  const handleSubmitReply = (reply) => {
    onSubmitReply && onSubmitReply(reply);
    setShowReplyInput(false);
  };
  const handleCancelReply = () => setShowReplyInput(false);

  return (
    <S.WrapperMain>
      <S.Wrapper>
        <S.Counter>
          <Counter />
        </S.Counter>
        <S.Content>
          <S.Head>
            <S.User>
              <S.UserIcon>{userName.substring(0, 1)}</S.UserIcon>
              <span>{userName}</span>
              {isAuthor && <S.UserTag>You</S.UserTag>}
            </S.User>
            <S.Date>1 month ago</S.Date>
            <S.ButtonsGroup>
              {isAuthor ? (
                <>
                  <S.EditButton onClick={() => handleClickToUpdate("edit")}>
                    <Edit color="#555ABA" /> Edit
                  </S.EditButton>
                  <S.DeleteButton>
                    <Trash color="#EE6764" /> Delete
                  </S.DeleteButton>
                </>
              ) : (
                <S.ReplyButton onClick={() => handleShowReplyButton()}>
                  <ReplyIcon color="#555ABA" /> Reply
                </S.ReplyButton>
              )}
            </S.ButtonsGroup>
          </S.Head>
          <S.Comment
            contentEditable={editable}
            isEditable={editable}
            ref={commnetEl}
            tabIndex={-1}
            suppressContentEditableWarning={true}
            dangerouslySetInnerHTML={{ __html: content }}
          />
          {editable && (
            <S.UpdateButton onClick={() => handleClickToUpdate("update")}>
              Update
            </S.UpdateButton>
          )}
        </S.Content>
      </S.Wrapper>
      {showReplyInput && (
        <Reply
          onReply={handleSubmitReply}
          onCancel={handleCancelReply}
          user={userName}
        />
      )}
    </S.WrapperMain>
  );
};

Comment.propTypes = {
  id: propTypes.number,
  userUid: propTypes.number,
  content: propTypes.string,
  userName: propTypes.string,
  onSubmitReply: propTypes.func,
  isAuthor: propTypes.bool
};

export default Comment;
