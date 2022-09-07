/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import propTypes from "prop-types";
import { BsFillReplyFill as ReplyIcon, BsTrash as Trash } from "react-icons/bs";
import { BiEditAlt as Edit } from "react-icons/bi";
import { useRef } from "react";
import Counter from "../Counter";
import Reply from "../CommentReply";
import AlertModal from "../../components/AlertModal";
import * as S from "./styles";

const Comment = ({
  content,
  userName,
  onSubmitReply,
  isAuthor,
  onEdit,
  commentId,
  onDelete
}) => {
  const commetEl = useRef();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [editableContent, seteditableContent] = useState("");
  const [prevComment, setPrevComment] = useState("");
  const [editable, setEditable] = useState(false);
  const [showReplyInput, setShowReplyInput] = useState(false);

  const handleChange = (e) => {
    const commentEL = {
      HTML: e.target.innerHTML,
      text: e.target.innerText,
      value: e.target.textContent
    };
    seteditableContent(commentEL.HTML);
  };

  const commentOptios = {
    edit() {
      setEditable(true);
      setPrevComment(commetEl.current.innerHTML);
      commetEl.current.focus();
    },
    cancel() {
      commetEl.current.innerHTML = prevComment;
      setEditable(false);
    },
    submit() {
      const raw = {
        HTML: commetEl.current.innerHTML,
        text: commetEl.current.innerText,
        value: commetEl.current.textContent
      };
      onEdit({ raw, commentId, editableContent });
      setEditable(false);
    },
    openModalDelete(state) {
      setShowDeleteModal(state);
    },
    onDeleteComment() {
      onDelete(commentId);
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
    <S.WrapperMain aria-label="replie">
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
                  <S.EditButton
                    onClick={() =>
                      commentOptios[editable ? "cancel" : "edit"]()
                    }
                  >
                    {editable ? (
                      <>Cancel</>
                    ) : (
                      <>
                        <Edit color="#555ABA" /> Edit
                      </>
                    )}
                  </S.EditButton>
                  <S.DeleteButton
                    onClick={() => commentOptios.openModalDelete(true)}
                  >
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
            ref={commetEl}
            tabIndex={-1}
            suppressContentEditableWarning={true}
            dangerouslySetInnerHTML={{ __html: content }}
            onInput={(e) => handleChange(e)}
          />
          {editable && (
            <S.UpdateButton onClick={() => commentOptios.submit()}>
              Update
            </S.UpdateButton>
          )}
          <S.Footer>
            <S.CounterMobile>
              <Counter />
            </S.CounterMobile>
            <S.ButtonsGroupMobile>
              {isAuthor ? (
                <>
                  <S.EditButton
                    onClick={() =>
                      commentOptios[editable ? "cancel" : "edit"]()
                    }
                  >
                    {editable ? (
                      <>Cancel</>
                    ) : (
                      <>
                        <Edit color="#555ABA" /> Edit
                      </>
                    )}
                  </S.EditButton>
                  <S.DeleteButton
                    onClick={() => commentOptios.openModalDelete(true)}
                  >
                    <Trash color="#EE6764" /> Delete
                  </S.DeleteButton>
                </>
              ) : (
                <S.ReplyButton onClick={() => handleShowReplyButton()}>
                  <ReplyIcon color="#555ABA" /> Reply
                </S.ReplyButton>
              )}
            </S.ButtonsGroupMobile>
          </S.Footer>
        </S.Content>
      </S.Wrapper>

      {showDeleteModal && (
        <AlertModal onClickOutSide={() => commentOptios.openModalDelete(false)}>
          <S.DeleteModalWrapper>
            <S.ModalHead>Delete comment</S.ModalHead>
            <S.ModalText>
              Are you sure you want to delete this comment? This will remove the
              comment and can&apos;t be undone.
            </S.ModalText>
            <S.ButtonsWrapper>
              <S.ModalButton
                secundary
                onClick={() => commentOptios.openModalDelete(false)}
              >
                Cancel
              </S.ModalButton>
              <S.ModalButton
                alert
                onClick={() => commentOptios.onDeleteComment()}
              >
                Delete
              </S.ModalButton>
            </S.ButtonsWrapper>
          </S.DeleteModalWrapper>
        </AlertModal>
      )}

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
  commentId: propTypes.number,
  userUid: propTypes.number,
  content: propTypes.string,
  userName: propTypes.string,
  onEdit: propTypes.func,
  onDelete: propTypes.func,
  onSubmitReply: propTypes.func,
  isAuthor: propTypes.bool
};

export default Comment;
