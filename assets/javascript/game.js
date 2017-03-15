var targetNumber = Math.floor((Math.random() * 120) + 19); // generate number between 19 and 120
var playerScore = 0;
var wins = 0;
var losses = 0;
var redCrystal;
var yellowCrystal;
var blueCrystal;
var greenCrystal;
var inCurrentRound = false;
var newValsArray;


//set 4 unique values between 1 and 12 inclusive 
function gemValue() {
    var blankarray = [];
    for (i = 1; i<1000; i++) {
    	if (blankarray.length >= 4) {
    		return blankarray;

    	}
        var myVal = Math.floor((Math.random() * 12) + 1);
        if (blankarray.indexOf(myVal) === -1) {

        	blankarray.push(myVal);


        }

    }
    //return myVal;
    return blankarray;
}

//give each gem variable a value between 1 and 12 if a round is not already going, and then signify that a round is going after the crystal values for the new round are set
// function setAllValues() {
//     if (inCurrentRound === false) {
//         redCrystal = gemValue();
//         console.log(redCrystal);
//         yellowCrystal = gemValue();
//         console.log(yellowCrystal);
//         blueCrystal = gemValue();
//         console.log(blueCrystal);
//         greenCrystal = gemValue();
//         console.log(greenCrystal);
//         inCurrentRound = true;
//     }

// }


//assign values to each of the 4 crystals
function setAllValues(myArray) {
	redCrystal = myArray[0];
	console.log(redCrystal);
	yellowCrystal = myArray[1];
	console.log(yellowCrystal);
	blueCrystal = myArray[2];
	console.log(blueCrystal);
	greenCrystal = myArray[3];
	console.log(greenCrystal);
}




function gameEnd() {
    console.log("game over");
    playerScore = 0;
    $("#playerScore").html("Your Total Score: " + playerScore);
    inCurrentRound = false;
    targetNumber = Math.floor((Math.random() * 120) + 19);
    $("#targetNumber").html("Try to match this number: " + targetNumber);
    $("#wins").html("Wins: " + wins);
    $("#losses").html("Losses: " + losses);
    newValsArray = gemValue();

    setAllValues(newValsArray);
}


function playGame() {

	newValsArray = gemValue();

    setAllValues(newValsArray);
    $("#playerScore").html("Your Total Score: " + playerScore);
    $("#targetNumber").html("Try to match this number: " + targetNumber);

    // if (inCurrentRound === true) {

    //     if (playerScore > targetNumber) {

    //         losses++;
    //         gameEnd();

    //     } else if (playerScore === targetNumber) {

    //         wins++;
    //         gameEnd();
    //     }

    // }


    //when each crystal button is clicked, add the corresponding crystal value to the player's score, and check for a win or loss
    $("#redcrystal").on("click", function() {
        playerScore = playerScore + redCrystal;
        $("#playerScore").html("Your Total Score: " + playerScore);
        if (playerScore > targetNumber) {

            losses++;
            gameEnd();

        } else if (playerScore === targetNumber) {

            wins++;
            gameEnd();
        }
    });

    $("#yellowcrystal").on("click", function() {
        playerScore = playerScore + yellowCrystal;
        $("#playerScore").html("Your Total Score: " + playerScore);
        if (playerScore > targetNumber) {

            losses++;
            gameEnd();

        } else if (playerScore === targetNumber) {

            wins++;
            gameEnd();
        }
    });


    $("#bluecrystal").on("click", function() {
        playerScore = playerScore + blueCrystal;

        $("#playerScore").html("Your Total Score: " + playerScore);
        if (playerScore > targetNumber) {

            losses++;
            gameEnd();

        } else if (playerScore === targetNumber) {

            wins++;
            gameEnd();
        }
    });

    $("#greencrystal").on("click", function() {

        playerScore = playerScore + greenCrystal;

        $("#playerScore").html("Your Total Score: " + playerScore);
        if (playerScore > targetNumber) {

            losses++;
            gameEnd();

        } else if (playerScore === targetNumber) {

            wins++;
            gameEnd();
        }
    });




}

playGame();
