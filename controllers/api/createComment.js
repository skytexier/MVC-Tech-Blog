// require db, model, express, bycrpt
const { User, Post, Comment} = require("../../models");
const router = require("express").Router();
const bcrypt = require("bcrypt");
// request and response for comment
router.post("/", async (req, res) => {
  try {
    const dbCommentData = await Comment.create({
      comment_body: req.body.text,
      include: [
        {
          model: User,
          where: (User.username = req.session.body.username),
        },
        {
          model: Post,
          where: (Post.id = req.body.post_id)
        }
      ],
      user_id: req.session.body.id,
    });
// comment confirmation
    console.log(dbCommentData);
    res.status(200).json(dbCommentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;