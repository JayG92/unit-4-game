// variables for Page.
var wins = 0;
var losses = 0;
var targetScore;
var counter = 0 ;

// this code allows page to show up wins,losses and target
// $("#Wins").html("Wins:", "");
// $("#Losses").html("Losses:", "");
// $("#targetScore").html("Target Score: " + target_score);

// creates random target score.
// target_score = Math.floor(Math.random() * 99) + 21;

// this code allows page to show up wins,losses and target
// $("#Wins").html("Wins:", "");
// $("#Losses").html("Losses:", "");

// resets
var resetGame = function () {
    // this code empties data and resets with new data
    $(".crystals").empty();
    target_score = Math.floor(Math.random() * 99) + 21;
    console.log(target_score)

    $("#targetScore").html("Target Score: " + target_score);
    $("#Wins").html("Wins: " + wins);
    $("#Losses").html("Losses: " + losses);
    // $("#counter").html("Your Number " + counter);




    // 4 crystals on the page.
    for (var i = 0; i < 4; i++) {
    
        var randomNumber = Math.floor(Math.random() * 11) + 1;
        console.log(randomNumber);
        var crystal = $("<div>");
        crystal.attr({
            // below creats an attribute for "crystal"
            "id": 'crystal' + i,
            "class": 'crystal',
            "data-crystalvalue": randomNumber

        });
        $(".crystals").append(crystal);
        console.log("Crystal test");
        
        
    }
    $("#counter").html("Score: " + counter);
}


resetGame();
// This code allows the 4 crystals to be clicked with a random number result
$(document).on("click", ".crystal", function () {
    var crystalValue = parseInt($(this).attr("data-crystalvalue"));
    counter += crystalValue;

    $("#counter").html(counter);
    $("#counter").html("Your Number " + counter);

    if (counter > target_score) {
        losses++;
        console.log("try again");
        $("#Losses").html(losses);
        counter = 0;
        // resetting ifs
        resetGame();
    }
    else if (counter === target_score) {
        wins++;
        console.log("You win!")
        $("#Wins").html(wins);
        counter = 0;
        // resetting ifs
        resetGame();


    }
    console.log(counter)


});
// <!-- Pseudocode -->
// 1.There will be four crystals displayed as buttons on the page.
// 2.The player will be shown a random number at the start of the game.
// 3.When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
// 4.Your game will hide this amount until the player clicks a crystal.
// When they do click one, update the player's score counter.
// 5.The player wins if their total score matches the random number from the beginning of the game.
// 6.The player loses if their score goes above the random number.
// 7.he game restarts whenever the player wins or loses.
// 8.When the game begins again, the player should see a new random number.            -Also, all the crystals will have four new hidden values. Of course,         the user's score (and score counter) will reset to zero.


// 9.The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
// 10.The random number shown at the start of the game should be between 19 - 1     120.
// 11.Each crystal should have a random hidden value between 1 - 12. -->