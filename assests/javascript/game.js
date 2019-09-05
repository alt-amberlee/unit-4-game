// create html, js, css
// link files together
// create html skeleton
// sketch from hw image
// random target score
// display score to user
// generate random value to each crystal
// when user clicks on a crystal, add value to user score
// update user score on page
// check if game over
// reset all variables

// The player will have to guess the answer, just like in Word Guess. This time, though, the player will guess with numbers instead of letters. 
// Here's how the app works:
$(document).ready(function() {

        var random = Math.floor(Math.random() * 120) + 1;

        $('#randomNumber').text(random);



        var num1 = Math.floor(Math.random() * 12 + 1)
        var num2 = Math.floor(Math.random() * 12 + 1)
        var num3 = Math.floor(Math.random() * 12 + 1)
        var num4 = Math.floor(Math.random() * 12 + 1)

        // There will be four crystals displayed as buttons on the page.
        // The player will be shown a random number at the start of the game.

        // When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
        var numberToMatch = "";
        var playerTotal = 0;
        var wins = 0;
        var losses = 0;

        // Your game will hide this amount until the player clicks a crystal.

        $('#one').on('click', function() {
            playerTotal = playerTotal + num1;
            console.log("New playerTotal= " + playerTotal);
            $('#finalTotal').text(playerTotal);
            if (playerTotal === random) {
                winner();
            } else if (playerTotal > random) {
                loser();
            }
        })

        $('#two').on('click', function() {
            playerTotal = playerTotal + num2;
            console.log("New playerTotal= " + playerTotal);
            $('#finalTotal').text(playerTotal);
            if (playerTotal === random) {
                winner();
            } else if (playerTotal > random) {
                loser();
            }
        })

        $('#three').on('click', function() {
            playerTotal = playerTotal + num3;
            console.log("New playerTotal= " + playerTotal);
            $('#finalTotal').text(playerTotal);
            if (playerTotal === random) {
                winner();
            } else if (playerTotal > random) {
                loser();
            }
        })

        $('#four').on('click', function() {
                playerTotal = playerTotal + num4;
                console.log("New playerTotal= " + playerTotal);
                $('#finalTotal').text(playerTotal);
                if (playerTotal === random) {
                    winner();
                } else if (playerTotal > random) {
                    loser();
                }
            })
            // When they do click one, update the player's score counter.

        $('#numberWins').text(wins);
        $('#numberLosses').text(losses);

        // The player wins if their total score matches the random number from the beginning of the game.
        // The player loses if their score goes above the random number.

        // The game restarts whenever the player wins or loses.

        function reset() {
            random = Math.floor(Math.random() * 120) + 1;
            $('#randomNumber').text(random);
            num1 = Math.floor(Math.random() * 12 + 1);
            num2 = Math.floor(Math.random() * 12 + 1);
            num3 = Math.floor(Math.random() * 12 + 1);
            num4 = Math.floor(Math.random() * 12 + 1);
            playerTotal = 0;
            $('#finalTotal').text(playerTotal);
        }


        // When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.


        // The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

        function winner() {
            alert("You won!");
            wins++;
            $('#numberWins').text(wins);
            reset();
        }

        function loser() {
            alert("You lose!");
            losses++;
            $('#numberLosses').text(losses);
            reset()
        }

    })
    // The random number shown at the start of the game should be between 19 - 120.
    // Each crystal should have a random hidden value between 1 - 12.