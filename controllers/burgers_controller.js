var express = require("express");
var router = express.Router();

// edit burger model to match sequelize
var db = require("../models/");
// Routes =============================================================

    router.get("/", function (req, res) {

        db.Burger.findAll({}).then(function (dbBurger) {
            console.log(dbBurger);
            var hbsObject = {
                burger: dbBurger
            };
            console.log("=================================================\n");
            console.log(JSON.stringify(hbsObject, null, 2));
            console.log("=================================================\n");
            res.render("index", hbsObject);
        })
    });

    router.post("/", function (req, res) {

        db.Burger.create({
            person_name: req.body.person_name,
            burger_name: req.body.burger_name,
            devoured: req.body.devoured
        }).then(function (dbBurger) {
            res.redirect("/");
        });
    });

    router.put("/:id", function (req, res) {
        var condition = "id = " + req.body.id;
        console.log("=================================================\n");
        console.log("condition", condition);
        console.log("=================================================\n");

        db.Burger.update({
            devoured: req.body.devoured
        }, {
            where: {
                id: req.params.id
            }
        }).then(function (dbBurger) {
            res.redirect("/");
        });
    });

    router.delete("/:id", function (req, res) {
        var condition = "id = " + req.params.id;

        db.Burger.destroy({
            where: {
            id: condition
            }
        }).then(function(dbBurger){
            res.redirect("/");
        }); 
    });

module.exports = router;
