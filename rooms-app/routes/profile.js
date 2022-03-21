const router = require("express").Router();

// ℹ️ Handles password encryption
const mongoose = require("mongoose");


// Require the User model in order to interact with the database
const User = require("../models/User.model");

// Require necessary (isLoggedOut and isLiggedIn) middleware in order to control access to specific routes
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");




router.get("/profile", isLoggedIn, (req,res)=>{
    res.render("users/profile", req.session.user)
})


module.exports = router;