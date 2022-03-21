const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    email: String,
    password: String,
    fullName: String,
    imgUrl:{
      type: String,
      default: "https://icon-library.com/images/anonymous-user-icon/anonymous-user-icon-2.jpg"
    },
    // slack login - optional
    slackID: String,
    // google login - optional
    googleID: String
  },
  {
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
