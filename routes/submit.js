const express = require("express");

// articleRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /articles.
const SubmitRoutes = express.Router();

// // This will help us connect to the database
const dbo = require("../config/db");

// // This help convert the id from string to ObjectId for the _id.
// const ObjectId = require("mongodb").ObjectId;

// This section will help you create a new article.
SubmitRoutes.route("/submit").post(function (req, response) {
    let db_connect = dbo.getDb("speed");
    let myobj = {
        id: Date.now().toString(),
        title: req.body.title,
        authors: req.body.authors,
        journalName: req.body.journalName,
        publicationYear: req.body.publicationYear,
        volume: req.body.volume,
        pages: req.body.pages,
        doi: req.body.doi,
        status: "Awaiting Moderation",
        practice: req.body.practice,
    };

    db_connect.collection("articles").insertOne(myobj, function (err, res) {
        if (err) throw err;
        response.json(res);
    });
});


module.exports = SubmitRoutes;
