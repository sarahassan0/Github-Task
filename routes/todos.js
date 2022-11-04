var express = require("express");
var router = express.Router();
const fs = require("fs");
var todoModel = require("../models/todos");
var {auth}=require("../middlewares/auth")
var { getById, create } = require("../controllers/todos");

//authentication middleware
router.use(auth)

// todos and pupulate 
router.get("/", function (req, res) {
  todoModel
    .find().populate("userId")
    .then((todos) => {
      res.json(todos);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// git todo by id
router.get("/:id", async function (req, res, next) {
  try {
    var todoId = req.params.id;

    var found = await getById(todoId);

    res.json(found);
  } catch (err) {
    res.status(422).json(err);
  }
});

// create todo
router.post("/", async function (req, res, next) {
  try {
    var newTodo = {title:req.body.title,userId:req.userId};
    var result = await create(newTodo);
    // console.log(result);
    res.json(result);
  } catch (err) {
    res.status(422).json("there is an error");
  }

  // create(newTodo).then((res)=>{
  //   re.json(res)
  // }).catch((err){
  //   res.status(422).json("there is an error")

  // })
});

//update todo by id

router.patch("/:id", function (req, res, next) {
  var todoId = req.params.id;
  var title = req.body.title;

  var data = JSON.parse(fs.readFileSync("./data.json", { encoding: "utf8" }));

  var found = data.find(function (todo) {
    return todo.id == todoId;
  });
  found.title = title;

  fs.writeFileSync("./data.json", JSON.stringify(data));

  res.json(found);
});

module.exports = router;
