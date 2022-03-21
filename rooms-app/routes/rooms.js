const router = require("express").Router();

const fileUploader = require("../config/cloudinary.config");

// ℹ️ Handles password encryption
const mongoose = require("mongoose");


// Require the User model in order to interact with the database
const Room = require("../models/Room.model");
const User = require("../models/User.model");

// Require necessary (isLoggedOut and isLiggedIn) middleware in order to control access to specific routes
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");
const { removeListener } = require("../models/User.model");
const { route } = require(".");


router.route("/rooms/create")
.get(isLoggedIn, (req,res,next)=>{

    User.find()
    .then(users=>res.render("rooms/new-room", {users}))
})  

.post(fileUploader.single("imgUrl"),(req,res,next)=>{
    const {name, description} = req.body;
    const owner = req.session.user._id
    const imgUrl = req.file.path

    Room.create({name,description,imgUrl,owner})
    .then(room=> res.redirect(`/rooms/${room._id}`))
})


router.get("room/:id/edit", isLoggedIn,(req, res, next)=>{

    Room.findById(req.params.id)
    .then(room=>res.render("rooms/room-edit",room))

})


router.get("/rooms/:id", (req, res, next)=>{

    console.log(req.params.id)

    Room.findById(req.params.id)
    .populate("owner")
    .then(room=>{
        console.log(room)

        let isOwner = false;
        console.log(req.session.user)
        if(req.session.user) isOwner = room.owner._id == req.session.user._id
        res.render("rooms/room-details", {room, isOwner})
    })
    
})


router.get("/rooms",(req,res,next)=>{

    Room.find()
    .populate({path :"owner", model: "User" })
    .then(rooms=>{
        res.render("rooms/list",{rooms})
    })
})


module.exports = router;
