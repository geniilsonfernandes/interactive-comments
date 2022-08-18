import React from "react";
import Comment from "../../components/Comment";

import * as S from "./styles";

const Home = () => {
  return (
    <S.Wrapper>
      <Comment hasAthor={true} />
    </S.Wrapper>
  );
};

export default Home;
