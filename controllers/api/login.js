const { User, Post } = require("../../models");
const router = require("express").Router();
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
  res.render("login", {
    loggedIn: req.session.loggedIn,
    user: req.session.body,
  });
});

router.post("/", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      res.status(404).json({ message: "Email cannot be found!" });
      return;
    }
    const validatePass = await bcrypt.compare(
      req.body.password,
      userData.password
    );
    if (!validatePass) {
      res.status(404).json({ message: "Password incorrect!" });
      return;
    }
    // onced logged in keep it true 
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.body = userData;
      console.log(req.session.body);
      res.status(200).json({ message: "Logged in!" });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
