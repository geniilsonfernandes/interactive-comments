import React from "react";
import { BsFillReplyFill as Reply, BsTrash as Trash } from "react-icons/bs";
import { BiEditAlt as Edit } from "react-icons/bi";

import * as S from "./styles";

const Comment = () => {
  return (
    <S.Wrapper>
      <S.Head>
        <S.User>
          <span>juliusomo</span>
        </S.User>
        <S.Date>1 month ago</S.Date>
        <S.ButtonsGroup>
          <S.EditButton>
            <Edit color="#555ABA" /> Edit
          </S.EditButton>
          <S.DeleteButton>
            <Trash color="#EE6764" /> Reply
          </S.DeleteButton>
          <S.ReplyButton>
            <Reply color="#555ABA" /> Reply
          </S.ReplyButton>
        </S.ButtonsGroup>
      </S.Head>
      <S.Comment>
        Impressive! Though it seems the drag feature could be improved. But
        overall it looks incredible. You ve nailed the design and the
        responsiveness at various breakpoints works really well.
      </S.Comment>
    </S.Wrapper>
  );
};

export default Comment;
