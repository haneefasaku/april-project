const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    email: {
        type:String,
        required:true,
        unique:true,
    },
    role: {
        type: String,
        enum:["mentor", "admin"],
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    },
    profilePic: {
        type: String,
        default:"https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
    },
    qualification: {
        type: String,
    },
    course:[{type:mongoose.Types.ObjectId, ref: "Course" }],
  },
  { timestamps:true }
);

const Mentor = mongoose.model('Mentor', mentorSchema);

module.exports = Mentor;