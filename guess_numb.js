/* var number = window.prompt("Napiš maximální číslo na uhodnutí: ");
alert("Myslím si číslo od 1 do " + number + ". Hádej, které to je.");*/
function startGame() {
    var numberToGuess = generateNewNumberToGuess();
    guessCycleValue(numberToGuess);
}

function generateNewNumberToGuess() {
    var maxNumber = window.prompt("Napiš maximální číslo na uhodnutí: ");
    writeMessage(`Myslím si číslo od 1 do ${maxNumber}. Hádej, které to je.`);
    var numberToGuess = Math.floor(Math.random() * maxNumber) + 1;
    console.log(numberToGuess);
    return numberToGuess;

}

function guessCycleValue(numberToGuess) {

    do {
        var tryOut = window.prompt("Hádej: ");
        var comparationOutcome = evaluateMove(tryOut, numberToGuess);
        writeMessage(comparationOutcome);

    } while (tryOut != numberToGuess);
}

function evaluateMove(tryOut, numberToGuess) {
    if (tryOut < numberToGuess) {
        return "Víc.";
    } else if (tryOut > numberToGuess) {
        return "Méně.";
    } else if (tryOut == numberToGuess) {
        return "To je ono!";
        //break;
    } else {
        return "Něco je fakt špatně!";
    }
}

function writeMessage(message) {
    console.log(message);
	alert(message);
}

var writeMessage = (message) => {
    console.log(message);
	alert(message);
}
