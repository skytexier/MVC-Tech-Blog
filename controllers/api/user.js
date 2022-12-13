const { User, Post } = require("../../models");
const router = require("express").Router();

router.get("/:username", async (req, res) => {
  let name = req.params;
  try {
    //Get all posts
    const dbPostData = await Post.findAll({
      include: [
        {
          model: User,
          where: (User.username = name),
        },
      ],
      order: [
        ['createdAt', 'DESC']
      ],
    });
    const userHome = dbPostData.map((info) => info.get({ plain: true }));
    console.log(userHome);
    res.render("allposts", {
      userHome,
      loggedIn: req.session.loggedIn,
      user: req.session.body,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
