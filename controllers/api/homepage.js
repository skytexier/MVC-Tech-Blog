const { User, Post, Comment} = require("../../models");
const router = require("express").Router();
// Route to get all posts from homepage
router.get("/", async (req, res) => {
  try {
    //Get all posts
    const dbPostData = await Post.findAll({
      include: [
        {
          model: User,
          model: Comment,
        },
      ],
      order: [
        ['createdAt', 'DESC']
      ]
    });
    // getting user info and logging in session 
    const userHome = dbPostData.map((info) => info.get({ plain: true }));
    console.log(userHome)
    console.log({ userHome, loggedIn: req.session.loggedIn });
    res.render("allposts", {
      userHome,
      loggedIn: req.session.loggedIn,
      user: req.session.body,
    });
    console.log(req.session.data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
