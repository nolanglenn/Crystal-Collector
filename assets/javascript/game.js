var ruby = 0;
var diamond = 0;
var topaz = 0;
var emerald = 0;
var score = 0;
var randomNumber = 0;
var wins = 0;
var losses = 0;

var randomGoal = function() {
    return Math.floor(Math.random() * (121 - 19) + 19);
}

var randomCrystal = function() {
    return Math.floor(Math.random() * (13 - 1) + 1);
}

function gameStart() {
    ruby = randomCrystal();
    diamond = randomCrystal();
    topaz = randomCrystal();
    emerald = randomCrystal();
    randomNumber = randomGoal();

    $(".randomNumber").text(randomNumber);
}

function didYouWin() {
    if(score === randomNumber) {
        $(".wins").text(wins += 1);
        score = 0;
        $(".score").text(score);
        gameStart();
    } else if(score > randomNumber) {
        $(".losses").text(losses += 1);
        score = 0;
        $(".score").text(score);
        gameStart();
    }
}

$(".ruby").on("click", function() {
    $(".score").text(score + ruby);
    score = score + ruby;
    didYouWin();
})

$(".diamond").on("click", function() {
    $(".score").text(score + diamond);
    score = score + diamond;
    didYouWin();
})

$(".topaz").on("click", function() {
    $(".score").text(score + topaz);
    score = score + topaz;
    didYouWin();
})

$(".emerald").on("click", function() {
    $(".score").text(score + emerald);
    score = score + emerald;
    didYouWin();
})

gameStart();