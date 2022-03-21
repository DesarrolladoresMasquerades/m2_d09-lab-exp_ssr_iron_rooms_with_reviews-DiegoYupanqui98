const isLoggedIn = require("../middleware/isLoggedIn");
const User = require("../models/User.model");

const router = require("express").Router();

/* GET home page */
router.get("/", isLoggedIn, (req, res, next) => {
  res.render("index", {user:req.session.user});
});

module.exports = router;
