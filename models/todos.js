var mongoose = require("mongoose");

var todosSchema = mongoose.Schema({
  title: {
    type:String,
    minLength:5,
    maxLength:15,
    required:true,
    trim:true,
    unique:true
  },
  userId:{
    type:mongoose.Schema.ObjectId,
    ref:"User"
  }
});



var todosModel=mongoose.model("Todo",todosSchema)

// todosModel.create({title:"monaaaaaaaa",userId:"6947fddbebf4d543de093fdc"})
module.exports=todosModel




