import React from "react";
import WrapperComment from "../../components/WrapperComment";

import * as S from "./styles";

const data = [
  {
    user: "genilson",
    comments_id: 121,
    comment:
      "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible.",
    replys_ids: [115, 226, 312],
    reply: false
  },
  {
    user: "genilson",
    comments_id: 122,
    comment:
      "parent! Though it seems the drag feature could be improved. But overall it looks incredible.",
    replys_ids: [111, 223, 310],
    reply: false
  },
  {
    user: "genilson",
    comments_id: 310,
    comment:
      "reply 4 Though it seems the drag feature could be improved. But overall it looks incredible.",
    replys_ids: [],
    reply_parent: 122,
    reply: true
  },
  {
    user: "genilson",
    comments_id: 111,
    comment:
      "reply 1 Though it seems the drag feature could be improved. But overall it looks incredible.",
    replys_ids: [],
    reply_parent: 122,
    reply: true
  },
  {
    user: "genilson",
    comments_id: 223,
    comment:
      "reply 2 Though it seems the drag feature could be improved. But overall it looks incredible.",
    replys_ids: [],
    reply_parent: 122,
    reply: true
  }
];

const Home = () => {
  return (
    <S.Wrapper>
      {data.map(
        (comment) =>
          !comment.reply && (
            <WrapperComment
              key={comment.comments_id}
              content={comment.comment}
              replys={comment.reply}
            />
          )
      )}
    </S.Wrapper>
  );
};

export default Home;
