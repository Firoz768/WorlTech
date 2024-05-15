const { error } = require("jquery");
const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    Name:{
        type:String,
        required:true,
        minLength:3
    },
    Email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    Mobile:{
        type:Number,
        required:true,
        min:10
    },
    Message:{
        type:String,
        required:true,
        min:10
    },

})

const User =  mongoose.model("User",userSchema);

module.exports = User;