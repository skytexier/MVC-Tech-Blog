const { User, Post } = require("../../models");
const router = require("express").Router();
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
  res.render("logout", {
    loggedIn: req.session.loggedIn,
    user: req.session.body,
  });
  console.log(req.session);
});

router.post("/", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
