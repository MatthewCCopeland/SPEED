const express = require("express");

// articleRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /articles.
const articleRoutes = express.Router();

// // This will help us connect to the database
const dbo = require("../db/conn");

// // This help convert the id from string to ObjectId for the _id.
// const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the articles.
articleRoutes.route("/articles").get(function (req, res) {
    let db_connect = dbo.getDb("speed");
    db_connect
        .collection("articles")
        .find({})
        .toArray(function (err, result) {
            if (err) {
                res.status(400).send("Error fetching listings!");
            } else {
                res.json(result);
            }
        });
});

// This section will help you get a single article by id
articleRoutes.route("/articles/:id").get(function (req, res) {
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

// This section will help you create a new article.
articleRoutes.route("/articles").post(function (req, response) {
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

// This section will help you update a article by id.
articleRoutes.route("/articles/:id").patch(function (req, response) {
    let db_connect = dbo.getDb();
    let myquery = { id: req.params.id };
    let newvalues = {
        $set: {
            id: req.params.id,
            title: req.body.title,
            authors: req.body.title,
            journalName: req.body.title,
            publicationYear: req.body.title,
            volume: req.body.title,
            pages: req.body.title,
            doi: req.body.title,
            status: req.body.status,
            practice: req.body.title,
        }

    };
    console.log("Updating2");

    db_connect
        .collection("articles")
        .updateOne(myquery, newvalues, function (err, res) {
            if (err) throw err;
            response.json(res);
        });
});

// This section will help you delete a article
articleRoutes.route("/articles/delete/:id").delete((req, response) => {
    let db_connect = dbo.getDb("speed");
    let myquery = { id: req.params.id };
    db_connect.collection("articles").deleteOne(myquery, function (err, obj) {
        if (err) throw err;
        console.log("document deleted:" + req.params.id);
        response.json(obj);
    });
});

module.exports = articleRoutes;