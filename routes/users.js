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

module.exports = router;
