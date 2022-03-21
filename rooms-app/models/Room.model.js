const { Schema, model } = require("mongoose");


const roomSchema = new Schema({
    name: { type: String },
    description: { type: String },
    imgUrl: { 
        type: String,
        default: "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"
    },
    owner: { type: Schema.Types.ObjectId, ref: "User" },
    reviews: []
  });


  
const Room = model("Room", roomSchema);

module.exports = Room;
