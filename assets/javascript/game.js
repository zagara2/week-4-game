var targetNumber = Math.floor((Math.random() * 120) + 19);
var playerScore = 0;
var wins = 0;
var losses = 0;
var redCrystal;
var yellowCrystal;
var blueCrystal;
var greenCrystal;
var inCurrentRound = false;


//set a value between 1 and 12 inclusive 
function gemValue() {
    var myVal = Math.floor((Math.random() * 12) + 1);
    return myVal;
}

//give each gem variable a value between 1 and 12 if a round is not already going, and then signify that a round is going after the crystal values for the new round are set
function setAllValues() {
    if (inCurrentRound === false) {
        redCrystal = gemValue();
        yellowCrystal = gemValue();
        blueCrystal = gemValue();
        greenCrystal = gemValue();
        inCurrentRound = true;
    }
    
}




function gameEnd() {
    playerScore = 0;
    $("#playerScore").html("Your Total Score: " + playerScore);
    inCurrentRound = false;
    targetNumber = Math.floor((Math.random() * 120) + 19);
    $("#targetNumber").html("Try to match this number: " + targetNumber);
    $("#wins").html("Wins: " + wins);
    $("#losses").html("Losses: " + losses);

    setAllValues();
}


function playGame() {

    setAllValues();
    $("#playerScore").html("Your Total Score: " + playerScore);
    $("#targetNumber").html("Try to match this number: " + targetNumber);

    if (playerScore > targetNumber) {
        
        losses++;
        gameEnd();

    } else if (playerScore === targetNumber) {
        
        wins++;
        gameEnd();
    }


    //when each crystal button is clicked, add the corresponding crystal value to the player's score
    $("#redcrystal").on("click", function() {
        playerScore = playerScore + redCrystal;
    });

    $("#yellowcrystal").on("click", function() {
        playerScore = playerScore + yellowCrystal;
    });


    $("#bluecrystal").on("click", function() {
        playerScore = playerScore + blueCrystal;
    });

    $("#greencrystal").on("click", function() {

        playerScore = playerScore + greenCrystal;
    });

    


}

playGame();
