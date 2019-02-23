//Dependencies 
var express = require("express");

//Tells node we are creating an express server
var app = express();

//Sets the initial port for Heroku or local machine
var PORT = process.env.PORT || 8080;

//Sets up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Router
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Listener - effectively "starts" the server
app.listen(PORT, function() {
    console.log("App Listening on Port: " + PORT);
});


