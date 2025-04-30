const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true,
        minLength:3,
        maxLength:30,
        unique:true,
    },
    description: {
        type:String,
        required: true,
        minLength:3,
        maxLength:100,
    },
    price: {
        type:Number,
        required: true,
    },
    duration: {
        type: String,
        required:true,
    },
    image: {
        type: String,
        default:"https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
    },
    mentor: {type: mongoose.Types.ObjectId, ref: "Mentor"},
  },
  { timestamps:true }
);

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;