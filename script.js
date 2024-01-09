let random = Math.floor(Math.random() * 100) + 1;
// document.getElementById("random").innerHTML = random;
let result = document.querySelector(".result");
let submitGuess = document.querySelector("#submit-guess");

submitGuess.onclick = function () {
    let y = document.getElementById("num-guess").value;
    if (y > 100) {
        document.getElementById("result").innerHTML = "Please enter a number between 1 and 10";
        y = "";
    } else if (y <= 0) {
        document.getElementById("result").innerHTML = "Please enter a number between 1 and 10";
    } else if (y > random) {
        document.getElementById("result").innerHTML = "You guessed too high, try again";
    } else if (y < random) {
        document.getElementById("result").innerHTML = "You guessed too low, try again";
    } else if (y == random) {
        document.getElementById("result").innerHTML = `You guessed it right! Your number was ${random}`;
    } else {
        document.getElementById("result").innerHTML = "Please enter a number between 1 and 10";
    }
    result.style.visibility = "visible";
}