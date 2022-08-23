import React from "react";
import Comment from "../Comment";
import * as S from "./styles";

const WrapperComment = () => {
  return (
    <S.Wrapper>
      <Comment hasAthor={true} />
      <S.WrapperReply>
        <Comment />
        <Comment />
      </S.WrapperReply>
    </S.Wrapper>
  );
};

export default WrapperComment;
