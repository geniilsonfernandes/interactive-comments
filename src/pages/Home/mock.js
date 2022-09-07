const data = [
  {
    user_uid: 3,
    user_name: "amyrobson",
    comment_id: 121,
    comment:
      "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
    replys_ids: [115, 226, 312],
    is_reply: false,
    raw: {
      text: "@user"
    }
  },
  {
    user_uid: 1,
    user_name: "maxblagun",
    comment_id: 122,
    comment:
      "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
    replys_ids: [111, 223, 310],
    is_reply: false,
    raw: {
      text: "@user"
    }
  },
  {
    user_uid: 1,
    user_name: "ramsesmiron",
    comment_id: 310,
    comment:
      "Though it seems the drag feature could be improved. But overall it looks incredible.",
    replys_ids: [],
    reply_parent: 122,
    is_reply: true,
    raw: {
      text: "@user"
    }
  }
];
export default data;
