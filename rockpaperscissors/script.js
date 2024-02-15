let playerRoll;
let aiRoll;
let won;

function rollDice(playerRoll) {
    // hide the win/loose/draw message from previous match
    document.querySelector("#lose").classList.add("hidden");
    document.querySelector("#win").classList.add("hidden");
    document.querySelector("#draw").classList.add("hidden");

    // play shaking animation for both hands
    document.querySelector("#player1").classList.add("shake");
    document.querySelector("#player2").classList.add("shake");

    aiRoll = Math.floor(Math.random() * 3);

    console.log("player rolled: " + playerRoll);
    console.log("ai roll: " + aiRoll);

    setTimeout(function() {

        // set the image for player rolls
        if(playerRoll == 0) { 
            document.querySelector("#player1").className = "player";
            document.querySelector("#player1").classList.add("rock");
        }
        if(playerRoll == 1) {
            document.querySelector("#player1").className = "player";
            document.querySelector("#player1").classList.add("paper");
        }
        if(playerRoll == 2) {
            document.querySelector("#player1").className = "player";
            document.querySelector("#player1").classList.add("scissors");
        }

        // set the image for ai rolls
        if(aiRoll == 0) {
            document.querySelector("#player2").className = "player";
            document.querySelector("#player2").classList.add("rock");
        }
        if(aiRoll == 1) {
            document.querySelector("#player2").className = "player";
            document.querySelector("#player2").classList.add("paper");
        }
        if(aiRoll == 2) {
            document.querySelector("#player2").className = "player";
            document.querySelector("#player2").classList.add("scissors");
        }
        
        if(aiRoll > playerRoll) {
            // player lost
            won = 0;
        }
        else if(aiRoll < playerRoll) {
            // player won
            won = 1;
        }
        else if(aiRoll == playerRoll) {
            // draw
            won = 2;
        }

        // adjust the recurring, as stone beat scissors, even thou 2 > 0
        if(aiRoll == 2 && playerRoll == 0) {
            // player won
            won = 1;
        }
        if(aiRoll == 0 && playerRoll == 2) {
            // player lost
            won = 0;
        }

        if(won == 0) {
            // show the lost screen
            console.log("player lost");
            document.querySelector("#lose").classList.remove("hidden");
        }
        if(won == 1) {
            // show the win screen
            console.log("player won");
            document.querySelector("#win").classList.remove("hidden");
        }
        if(won == 2) {
            // show the draw screen
            console.log("draw");
            document.querySelector("#draw").classList.remove("hidden");
        }

        // clear the animated class, so it can be re-added to replay animation
        document.querySelector("#player1").classList.remove("shake");
        document.querySelector("#player2").classList.remove("shake");
    }, 1800);
}