//Load Data
//Links to our data source - where our friendArray is located
var friends = require("../data/friends.js");

//Routing
module.exports = function (app) {
    app.get("/api/survey", function(req, res) {
        res.json(friends)
    });

    //add app.post
};




