const { User, Post } = require("../../models");
const router = require("express").Router();

router.post("/", async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      where: {
        id: req.body.post_id,
      },
    });
// logging up vote 
    const data = dbPostData.map((info) => info.get({ plain: true }));
    console.log(data);
    const updatedPost = data;
    console.log(updatedPost[0].votes)
    const updoot = await Post.update(
        {votes: updatedPost[0].votes + 1},
        {where: {id: updatedPost[0].id}}
    );
    console.log(updoot)
    res.redirect('/')
    res.status(200)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
