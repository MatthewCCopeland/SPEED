const express = require("express");
const path = require("path");
const cors = require("cors");

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(require("./routes/article"));
app.use(require("./routes/accepted"));
app.use(require("./routes/rejected"));
app.use(require("./routes/submit"));
app.use(require("./routes/moderation"));
app.use(require("./routes/analysis"));

// get driver connection
const dbo = require("./config/db");


// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});
