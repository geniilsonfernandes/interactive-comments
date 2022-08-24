import React, { useState } from "react";
import p from "prop-types";
import { BsFillReplyFill as ReplyIcon, BsTrash as Trash } from "react-icons/bs";
import { BiEditAlt as Edit } from "react-icons/bi";
import { useRef } from "react";
import Counter from "../Counter";
import Reply from "../Reply";

import * as S from "./styles";

const Comment = ({ hasAthor, content, id, onReplySubmit }) => {
  const [editable, setEditable] = useState(false);
  const [showReplyInput, setShowReplyInput] = useState(false);

  const commnetEl = useRef();

  const handleClickToUpdate = (type) => {
    if (type === "edit") {
      setEditable(true);
      commnetEl.current.focus();
    } else {
      setEditable(false);
    }
  };

  const handleReplyButton = () => {
    setShowReplyInput((s) => !s);
  };

  const handleSubmitReply = (reply) => {
    onReplySubmit &&
      onReplySubmit({
        user: "genilson",
        comments_id: Math.floor(Math.random() * 1000),
        comment: reply.HTML,
        replys_ids: [],
        reply_parent: id,
        reply: true
      });
    setShowReplyInput(false);
  };

  return (
    <S.WrapperMain>
      <S.Wrapper>
        <S.Counter>
          <Counter />
        </S.Counter>
        <S.Content>
          <S.Head>
            <S.User>
              <span>juliusomo</span>
              {hasAthor && <S.UserTag>You</S.UserTag>}
            </S.User>
            <S.Date>1 month ago</S.Date>
            <S.ButtonsGroup>
              {hasAthor ? (
                <>
                  <S.EditButton onClick={() => handleClickToUpdate("edit")}>
                    <Edit color="#555ABA" /> Edit
                  </S.EditButton>
                  <S.DeleteButton>
                    <Trash color="#EE6764" /> Delete
                  </S.DeleteButton>
                </>
              ) : (
                <S.ReplyButton onClick={() => handleReplyButton()}>
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
      {showReplyInput && <Reply onReply={handleSubmitReply} />}
    </S.WrapperMain>
  );
};

Comment.propTypes = {
  hasAthor: p.bool,
  id: p.number,
  content: p.string,
  onReplySubmit: p.func
};

export default Comment;
