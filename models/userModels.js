const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxLength: 50,
    },
    email: {
        type:String,
        required: true,
        unique:true,
        minLength:3,
        maxLength:30,
    },
    password:{
        type:String,
        required:true,
        minLength:3,
    },
    mobile:{
        type:String,
        required:true,
    },
    profilePic:{
        type:String,
        default:"https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
    },
  },
  { timestamps:true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;