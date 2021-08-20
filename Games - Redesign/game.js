const score_player_1 = document.getElementById("score_player_1"); // Score Labels
const score_player_2 = document.getElementById("score_player_2");
const numbertext = document.getElementById("numbertext"); // NumberText

const number1 = document.getElementById("number1"); // Number Inputs
const number2 = document.getElementById("number2");
const answer = document.getElementById("answer"); // Guessing Input

const submit = document.getElementById("submit"); // Submit BTN
const operation = document.getElementById("operation"); // Operation

const guess_div = document.getElementById("guess_div") // Guess Div

var first = 0;
var second = 0;
var operation_str = "";
var answer_int = 0;

var score_1 = 0;
var score_2 = 0;

var turn = 0;

function update() {
    console.log()
    score_player_1.innerHTML = localStorage.getItem("player1") + "'s Score: " + score_1;
    score_player_2.innerHTML = localStorage.getItem("player2") + "'s Score:" + score_2;
}

function submitFN() {

    first = Number(number1.value);
    second = Number(number2.value);
    
    if (operation.value == "Addition") {
        operation_str = "+"
        answer_int = first + second;
        
    } if (operation.value == "Subtraction") {
        operation_str = "-"
        answer_int = first - second;
        
    } if (operation.value == "Multiplication") {
        operation_str = "*"
        answer_int = first * second;
        
    } if (operation.value == "Division") {
        operation_str = "/"
        answer_int = first / second;
    }

    guess_div.style.display = "block"
    numbertext.innerHTML = "What is " + first + " " + operation_str + " " + second + "?"
}

function guess() {
    if (turn == "Player 1") {
        if (answer.value == answer_int) {
            score_1++
            update();
            turn = "Player 2";
        } else {
            score_1--
            update();
            turn = "Player 2";
        }
    } else {
        if (answer.value == answer_int) {
            score_2++
            update();
            turn = "Player 1";
        } else {
            score_2--
            update();
            turn = "Player 1";
        }
    }
}