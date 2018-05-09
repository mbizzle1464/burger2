var express = require("express");
var moment = require("moment"); 
var router = express.Router();


// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burger: data
        };
        console.log("=================================================\n");
        console.log(JSON.stringify(hbsObject, null, 2));
        console.log("=================================================\n");
        res.render("index", hbsObject);
    });
});

router.post("/", function (req, res) {
    burger.create([
        "person_name","burger_name", "devoured"
    ], [
            req.body.person_name, req.body.burger_name, req.body.devoured
        ], function (data) {
            res.redirect("/");
        });
});


router.put("/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("=================================================\n");
    console.log("condition", condition);
    console.log("=================================================\n");

    burger.update({
        "devoured": req.body.devoured
    }, condition, function () {
        res.redirect("/");
    });
});

router.delete("/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function () {
        res.redirect("/");
    });
});

// Export routes for server.js to use.
module.exports = router;