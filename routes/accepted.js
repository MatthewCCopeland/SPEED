const express = require("express");

// acceptedRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /articles.
const acceptedRoutes = express.Router();

// // This will help us connect to the database
const dbo = require("../config/db");

// // This help convert the id from string to ObjectId for the _id.
// const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all the accpeted accepteds.
acceptedRoutes.route("/api/accepted").get(function (req, res) {
    let db_connect = dbo.getDb("speed");
    if (req.query.title_like !== undefined) {
        db_connect
            .collection("articles")
            .find({ "status": "Accepted", title: new RegExp(req.query.title_like, 'i') })
            .toArray(function (err, result) {
                if (err) {
                    res.status(400).send("Error fetching listings!");
                } else {
                    res.json(result);
                }
            });
    } else if (req.query.practice !== undefined) {
        db_connect
            .collection("articles")
            .find({ "status": "Accepted", practice: new RegExp(req.query.practice, 'i') })
            .toArray(function (err, result) {
                if (err) {
                    res.status(400).send("Error fetching listings!");
                } else {
                    res.json(result);
                }
            });
    } else {
        db_connect
            .collection("articles")
            .find({ "status": "Accepted", })
            .toArray(function (err, result) {
                if (err) {
                    res.status(400).send("Error fetching listings!");
                } else {
                    res.json(result);
                }
            });
    }
});

// This section will help you get a single accepted article by id
acceptedRoutes.route("/api/accepted/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { id: req.params.id };
    db_connect
        .collection("articles")
        .findOne(myquery, function (err, result) {
            if (err) {
                res.status(400).send("Error fetching listings!");
            } else {
                res.json(result);
            }
        });
});

// This section will help you update a accepted article by id.
acceptedRoutes.route("/api/accepted/:id").patch(function (req, response) {
    let db_connect = dbo.getDb();
    let myquery = { id: req.params.id };
    let newvalues = {
        $set: {
            id: req.params.id,
            status: req.body.status,
        }

    };

    db_connect
        .collection("articles")
        .updateOne(myquery, newvalues, function (err, res) {
            if (err) throw err;
            response.json(res);
        });
});

module.exports = acceptedRoutes;
