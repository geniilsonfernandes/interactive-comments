import React, { useState } from "react";
import p from "prop-types";
import { BsFillReplyFill as Reply, BsTrash as Trash } from "react-icons/bs";
import { BiEditAlt as Edit } from "react-icons/bi";

import * as S from "./styles";
import Counter from "../Counter";
import { useRef } from "react";

const Comment = ({ hasAthor }) => {
  const commnetEl = useRef();
  const [editable, setEditable] = useState(false);

  const handleClickToUpdate = (type) => {
    if (type === "edit") {
      setEditable(true);
      commnetEl.current.focus();
    } else {
      setEditable(false);
    }
  };
  return (
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
              <S.ReplyButton>
                <Reply color="#555ABA" /> Reply
              </S.ReplyButton>
            )}
          </S.ButtonsGroup>
        </S.Head>
        <S.Comment
          contentEditable={editable}
          isEditable={editable}
          ref={commnetEl}
          tabIndex={-1}
        >
          Impressive! Though it seems the drag feature could be improved. But
          overall it looks incredible. You ve nailed the design and the
          responsiveness at various breakpoints works really well.
        </S.Comment>
        {editable && (
          <S.UpdateButton onClick={() => handleClickToUpdate("update")}>
            Update
          </S.UpdateButton>
        )}
      </S.Content>
    </S.Wrapper>
  );
};

Comment.propTypes = {
  hasAthor: p.bool
};

export default Comment;
