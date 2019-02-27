//Load Data 
//Links to our data source - where our friendArray is located
var friends = require("../data/friends.js");

//Routing
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends)
    });

    //POST function - stores survey results and handles compatibility logic
    app.post("/api/friends", function (req, res) {

        //Capture the user input object
        var userInput = req.body;
        var userResponses = userInput.scores;

        var nameMatch = "";
        var photoMatch = "";
        var difference = 100;

        for (var i = 0; i < friends.length; i++) {

            // Compute differences for each question
            var diff = 0;
            for (var j = 0; j < userResponses.length; j++) {
                diff += Math.abs(friends[i].scores[j] - userResponses[j]);
            }
            console.log("diff: " + diff);

            //Record the friend match with lowest difference 
            if (diff < difference) {
                console.log("Closest match found! Difference= " + diff);
                console.log("Friend name: " + friends[i].name);
                console.log("Friend image: " + friends[i].photo);

                difference = diff;
                nameMatch = friends[i].name;
                photoMatch = friends[i].photo;
            }

        }
        //Add new user
        friends.push(userInput);

        //send response 
        res.json({
            status: 'OK',
            nameMatch: nameMatch,
            photoMatch: photoMatch
        });

    });
};