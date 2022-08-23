import React from "react";
import Comment from "../Comment";
import p from "prop-types";

import * as S from "./styles";

const WrapperComment = ({ content }) => {
  return (
    <S.Wrapper>
      <Comment hasAthor={true} content={content} />
      <S.WrapperReply>
        <Comment />
        <Comment />
      </S.WrapperReply>
    </S.Wrapper>
  );
};

WrapperComment.propTypes = {
  content: p.string
};

export default WrapperComment;
