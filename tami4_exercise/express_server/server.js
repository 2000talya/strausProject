const express = require("express");
const app = express();
const userRout = require("./src/rout/user")
const candidatesRout = require("./src/rout/candidates")
const bodyParser = require("body-parser");
var cors = require('cors')

// set port, listen for requests
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use("/api/auth", userRout);
app.use("/api", candidatesRout);
app.use(cors());


module.exports = app;


