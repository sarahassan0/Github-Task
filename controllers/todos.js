
var fs=require("fs");
var todoModel=require("../models/todos")
function getById(_id){
  return todoModel.findById(_id)
    
  }

  function create(newTodo){
  return todoModel.create(newTodo)

 }
  module.exports ={getById,create}