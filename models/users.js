var mongoose=require('mongoose')

var userSchema=mongoose.Schema({
   userName:{
    type:String,
    unique:true,
    minLength:4,
    maxLength:15,
    trim:true,
    required:true
   },
   password:{
    type:String,
    required:true,
    trim:true,
   },
   dob:Date,
   favoriteTodos:Array

})

var userModel= mongoose.model("User",userSchema)

module.exports = userModel