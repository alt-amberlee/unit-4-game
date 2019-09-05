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

var randomResult;
var win;
var lost;


for (let i = 0; i < 4; i++) {

    var random = Math.floor(Math.random() * 12);
    var crystal = $("<div>");
    crystal.attr("class", "crystal");

    $(".crystals").append(crystal);

}

// The player will have to guess the answer, just like in Word Guess. This time, though, the player will guess with numbers instead of letters. 
// Here's how the app works:



// There will be four crystals displayed as buttons on the page.
// The player will be shown a random number at the start of the game.

// When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 


// Your game will hide this amount until the player clicks a crystal.
// When they do click one, update the player's score counter.


// The player wins if their total score matches the random number from the beginning of the game.
// The player loses if their score goes above the random number.

// The game restarts whenever the player wins or loses.


// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.


// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.


// The random number shown at the start of the game should be between 19 - 120.
// Each crystal should have a random hidden value between 1 - 12.