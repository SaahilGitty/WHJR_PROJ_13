const player_1 = document.getElementById("player_1");
const player_2 = document.getElementById("player_2");

function log_in() {
    localStorage.setItem("player1", player_1.value);
    localStorage.setItem("player2", player_2.value);

    console.log(localStorage.getItem("player1"));
    console.log(localStorage.getItem("player2"));

    window.location.assign("game.html");
}