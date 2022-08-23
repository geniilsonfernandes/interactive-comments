import React from "react";
import * as S from "./styles";

const Reply = () => {
  return (
    <S.BoxWrapper>
      <S.Comment contentEditable={true}>
        Impressive! Though it seems the drag feature could be improved. But
        overall it looks incredible. You ve nailed the design and the
        responsiveness at various breakpoints works really well.
      </S.Comment>
      <S.SubmitButton>Send</S.SubmitButton>
    </S.BoxWrapper>
  );
};

export default Reply;
