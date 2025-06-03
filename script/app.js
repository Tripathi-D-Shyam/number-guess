const startText = document.querySelector("#start-text");
const endText = document.querySelector("#end-text");

const scoreValue = document.querySelector("#score__value");
const highestScoreValue = document.querySelector("#highest-score__value");

const myGuess = document.querySelector("#my-guess");
const checkMyGuessButton = document.querySelector("#check-my-guess__button");


const numberToBeGuessed = document.querySelector("#number__to-be-guessed");


const isTheGuessCorrect = document.querySelector("#is-the-guess-correct");

const resetPageButton = document.querySelector("#reset-page__button");

const startEdit = document.querySelector(".start-text.icon--edit");

const endEdit = document.querySelector(".end-text.icon--edit");

const body = document.querySelector("body");

startEdit.onclick = () => {
    startText.innerText = prompt("Start:");
}

endEdit.onclick = () => {
    endText.innerText = prompt("End:");
}

let start, end, actual, guess, score, highestScore;

resetPageButton.onclick = () => {
    if(startText.innerText == "") {
        startEdit.dispatchEvent(new Event("click"));
    }
    start = Number(startText.innerText);


    if(endText.innerText == "") {
        endEdit.dispatchEvent(new Event("click"));
    }
    end = Number(endText.innerText);


    actual = Math.round((end - start) * Math.random()) + start;
    console.log(`actual is ${actual}`);

    // numberToBeGuessed.innerText = `${actual}`;
    highestScore = Number(highestScoreValue.innerText);
    score = end-start + 1;

    body.classList.remove("red-bg");
    body.classList.remove("green-bg");
};

checkMyGuessButton.onclick = () => {
    if(score > 0) {
        guess = Number(myGuess.value);
        if(actual === guess) {
            body.classList.remove('red-bg');
            body.classList.add("green-bg");
            isTheGuessCorrect.innerText = "Congratulations!";
            if(score > highestScore) {
                highestScoreValue.innerText = score;
            }
            numberToBeGuessed.innerText = `${actual}`;
            score = end - start + 1;
        } else if (guess > actual) {
            isTheGuessCorrect.innerText = "Too high!";
            score--;
            body.classList.remove("green-bg");
            body.classList.add("red-bg");
        } else {
            isTheGuessCorrect.innerText = "Too low";
            score--;
            body.classList.remove("green-bg");
            body.classList.add("red-bg");
        }
    } else {
        isTheGuessCorrect.innerText = "Please click on 'Again!'";
        numberToBeGuessed.innerText = `${actual}`;
    }
    scoreValue.innerText = score;

};