const express = require("express");
var todosRoutes=require('./routes/todos')
var usersRoutes=require('./routes/users')
const cors= require('cors');
const fs= require('fs');
var mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/MEARNITI")
var app = express();

app.use(cors(
//   {
//   origin:"*",
//   methods:"GET POST PUT PATCH DELETE",
//   allowedHeaders:""
// }
))
app.use(express.json())//js  //middleware 
app.use(express.static("./static"))
app.use("/todos", todosRoutes);
app.use("/users",usersRoutes)
app.use("*",function(req, res,next){
 
  res.status(404).json("Not Found")

})

// app.use(function(req, res, next) {

//     console.log(req.body);
//     next()
// })






app.listen(3000, () => {
  console.log("server listening on port 3000");
});
