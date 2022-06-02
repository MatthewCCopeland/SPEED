const express = require("express");

// moderationRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /articles.
const moderationRoutes = express.Router();

// // This will help us connect to the database
const dbo = require("../config/db");

// // This help convert the id from string to ObjectId for the _id.
// const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all the accpeted moderations.
moderationRoutes.route("/moderation").get(function (req, res) {
    let db_connect = dbo.getDb("speed");
    if (req.query.title_like !== undefined) {
        db_connect
            .collection("articles")
            .find({ "status": "Awaiting Moderation", title: new RegExp(req.query.title_like, 'i') })
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
            .find({ "status": "Awaiting Moderation", })
            .toArray(function (err, result) {
                if (err) {
                    res.status(400).send("Error fetching listings!");
                } else {
                    res.json(result);
                }
            });
    }
});

// This section will help you get a single moderation article by id
moderationRoutes.route("/moderation/:id").get(function (req, res) {
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

// This section will help you update a moderation article by id.
moderationRoutes.route("/moderation/:id").patch(function (req, response) {
    let db_connect = dbo.getDb();
    let myquery = { id: req.params.id };
    let newvalues = {
        $set: {
            id: req.params.id,
            status: req.body.status,
            rating: req.body.rating
        }

    };

    db_connect
        .collection("articles")
        .updateOne(myquery, newvalues, function (err, res) {
            if (err) throw err;
            response.json(res);
        });
});

module.exports = moderationRoutes;
