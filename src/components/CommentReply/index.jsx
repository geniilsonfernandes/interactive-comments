/* eslint-disable react/prop-types */
import React, { useState } from "react";
import propTypes from "prop-types";
import { useRef } from "react";
import { useEffect } from "react";
import { WrapperButton } from "../WrapperButton";
import { BsFillReplyFill as ReplyIcon } from "react-icons/bs";

import * as S from "./styles";

const userToReplie = (user) =>
  `<span contentEditable=false class="replie__user">@${user}</span>`;

const CommentReply = ({ onReply, onCancel, user }) => {
  const [textContent, setTextContent] = useState("");
  const [disableButton, setDisableButton] = useState(true);
  const replyEl = useRef();

  const handleSubmitClick = () => {
    onReply &&
      onReply({
        HTML: replyEl.current.innerHTML,
        text: replyEl.current.innerText,
        value: replyEl.current.textContent
      });
  };

  const handleChange = (e) => {
    setTextContent(e.target.textContent);
  };

  useEffect(() => {
    function moveCursorAtTheEnd() {
      const selection = document.getSelection();
      const range = document.createRange();
      const contenteditable = replyEl.current;

      if (contenteditable.lastChild.nodeType == 3) {
        range.setStart(
          contenteditable.lastChild,
          contenteditable.lastChild.length
        );
      } else {
        range.setStart(contenteditable, contenteditable.childNodes.length);
      }
      selection.removeAllRanges();
      selection.addRange(range);
    }
    replyEl.current.innerHTML = `${userToReplie(user)},&nbsp;`;
    moveCursorAtTheEnd();
  }, [user]);

  useEffect(() => {
    if (textContent !== "") {
      setDisableButton(false);
    }
  }, [textContent]);

  return (
    <S.BoxWrapper>
      <S.ReplyTag>
        <ReplyIcon /> Repply {user}
      </S.ReplyTag>
      <S.Comment
        contentEditable={true}
        ref={replyEl}
        tabIndex={-1}
        suppressContentEditableWarning={true}
        onInput={(e) => handleChange(e)}
      ></S.Comment>
      <S.Buttons>
        <WrapperButton
          onClick={() => handleSubmitClick()}
          isDisabled={disableButton}
        >
          Send
        </WrapperButton>
        <S.CancelButton onClick={() => onCancel()}>Cancel</S.CancelButton>
      </S.Buttons>
    </S.BoxWrapper>
  );
};

CommentReply.propTypes = {
  onReply: propTypes.func,
  onCancel: propTypes.func,
  user: propTypes.string
};

export default CommentReply;
