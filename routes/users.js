var express = require("express");
var router = express.Router();
var userModel = require("../models/users")
router.get("/", function (req, res, next) {
    res.json([1, 2, 3, 4]);
});

router.get("/:id", function (req, res, next) {
    res.json({ userName: "mona" });
});


router.post("/", async function (req, res, next) {
    try {
        var newUser = await userModel.create(req.body)
        res.json(newUser)
    } catch (err) {
        res.json(err)
    }


})



// Delete User by its ID
router.delete('/:id', async (req, res, next) => {
    const _id = req.params.id
    try {
        let user = await userModel.findByIdAndRemove(_id)
        res.json(`User with ID ${_id} has been deleted`)

    } catch (err) {
        res.status(420).json(`Cannot delete User with ID ${_id}.Error: ${err} `)
    }
})


// get User's To-dos 
router.get('/:id/todos', async (req, res, next) => {
    const _id = req.params.id
    try {
        let todos = await todoModel.find({ userID: _id })
        res.json(todos)
    } catch (err) {
        res.status(420).json(`Cannot get this User's To-dos. Error: ${err}`)
    }
})



module.exports = router;
