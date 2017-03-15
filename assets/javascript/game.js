var targetNumber = Math.floor((Math.random() * 120) + 19); // generate number between 19 and 120
var playerScore = 0;
var wins = 0;
var losses = 0;
var redCrystal;
var yellowCrystal;
var blueCrystal;
var greenCrystal;
var inCurrentRound = true;
var newValsArray;





//set 4 unique values between 1 and 12 inclusive 
function gemValue() {
    var blankarray = [];
    for (i = 1; i < 1000; i++) {
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
    $("#playerScore").html("Total Score: " + playerScore);
    
    targetNumber = Math.floor((Math.random() * 120) + 19);
    $("#targetNumber").html("Try to match this number: " + targetNumber);
    $("#winslosses").html("Wins: " + wins + "<br>" + "Losses: " + losses);
    // $("#sonicpic").html("<img src = 'assets/images/sonic1.png' id = 'sonicpic' alt = 'sonic'>");
    // $("#losses").html("Losses: " + losses);
    $("#sonicpic").attr("src", "assets/images/sonic1.png");
    $("#footer").empty();
    newValsArray = gemValue();

    setAllValues(newValsArray);
    inCurrentRound = true;
}


function playGame() {

    newValsArray = gemValue();

    setAllValues(newValsArray);
    $("#playerScore").html("Total Score: " + playerScore);
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

    // if (inCurrentRound === true) {  


    //when each crystal button is clicked, add the corresponding crystal value to the player's score, and check for a win or loss
    //when win or loss occurs, play special music and display special picture for as many seconds as the sound effect lasts, then automatically update wins/losses and start a new game
    //user will be locked out of clicking the crystals while the special picture and music are going
    $("#redcrystal").on("click", function() {
        if (inCurrentRound === true) {
            playerScore = playerScore + redCrystal;
            $("#playerScore").html("Total Score: " + playerScore);
        }
        if (playerScore > targetNumber && inCurrentRound === true) {

            inCurrentRound = false;

            losses++;
            
            $("#gameOutcome").attr("src", "assets/music/gameover.mp3");
            document.getElementById('gameOutcome').play();
            $("#sonicpic").attr("src", "assets/images/eggman.png");
            $("#footer").append("BETTER LUCK NEXT TIME!");
            setTimeout(gameEnd, 12500);


        } else if (playerScore === targetNumber && inCurrentRound === true) {

            inCurrentRound = false;

            wins++;
            
            $("#gameOutcome").attr("src", "assets/music/supersonic.mp3");
            document.getElementById('gameOutcome').play();
            $("#sonicpic").attr("src", "assets/images/supersonic2.png");
            $("#footer").append("YOU WIN! BECOME SUPER SONIC!");
            setTimeout(gameEnd, 5500);
        }
    });

    $("#yellowcrystal").on("click", function() {

        if (inCurrentRound === true) {
            playerScore = playerScore + yellowCrystal;
            $("#playerScore").html("Total Score: " + playerScore);
        }
        if (playerScore > targetNumber && inCurrentRound === true) {

            inCurrentRound = false;

            losses++;
            
            $("#gameOutcome").attr("src", "assets/music/gameover.mp3");
            document.getElementById('gameOutcome').play();
            $("#sonicpic").attr("src", "assets/images/eggman.png");
            $("#footer").append("BETTER LUCK NEXT TIME!");
            setTimeout(gameEnd, 12500);

        } else if (playerScore === targetNumber && inCurrentRound === true) {

            inCurrentRound = false;

            wins++;
            
            $("#gameOutcome").attr("src", "assets/music/supersonic.mp3");
            document.getElementById('gameOutcome').play();
            $("#sonicpic").attr("src", "assets/images/supersonic2.png");
            $("#footer").append("YOU WIN! BECOME SUPER SONIC!");
            setTimeout(gameEnd, 5500);
        }
    });


    $("#bluecrystal").on("click", function() {

        if (inCurrentRound === true) {
            playerScore = playerScore + blueCrystal;

            $("#playerScore").html("Total Score: " + playerScore);
        }
        if (playerScore > targetNumber && inCurrentRound === true) {

            inCurrentRound = false;

            losses++;
            
            $("#gameOutcome").attr("src", "assets/music/gameover.mp3");
            document.getElementById('gameOutcome').play();
            $("#sonicpic").attr("src", "assets/images/eggman.png");
            $("#footer").append("BETTER LUCK NEXT TIME!");
            setTimeout(gameEnd, 12500);

        } else if (playerScore === targetNumber && inCurrentRound === true) {

            inCurrentRound = false;

            wins++;
            
            $("#gameOutcome").attr("src", "assets/music/supersonic.mp3");
            document.getElementById('gameOutcome').play();
            $("#sonicpic").attr("src", "assets/images/supersonic2.png");
            $("#footer").append("YOU WIN! BECOME SUPER SONIC!");
            setTimeout(gameEnd, 5500);
        }
    });

    $("#greencrystal").on("click", function() {

        if (inCurrentRound === true) {

            playerScore = playerScore + greenCrystal;

            $("#playerScore").html("Total Score: " + playerScore);
        }
        if (playerScore > targetNumber && inCurrentRound === true) {

            inCurrentRound = false;

            losses++;
            
            $("#gameOutcome").attr("src", "assets/music/gameover.mp3");
            document.getElementById('gameOutcome').play();
            $("#sonicpic").attr("src", "assets/images/eggman.png");
            $("#footer").append("BETTER LUCK NEXT TIME!");
            setTimeout(gameEnd, 12500);

        } else if (playerScore === targetNumber && inCurrentRound === true) {
            inCurrentRound = false;

            wins++;
            
            $("#gameOutcome").attr("src", "assets/music/supersonic.mp3");
            document.getElementById('gameOutcome').play();
            $("#sonicpic").attr("src", "assets/images/supersonic2.png");
            $("#footer").append("YOU WIN! BECOME SUPER SONIC!");
            setTimeout(gameEnd, 5500);
        }
    });




}

playGame();
