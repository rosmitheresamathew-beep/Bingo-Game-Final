let player = localStorage.getItem("player");
let score= localStorage.getItem("score");

let scoreboard = document.getElementById("scoreboard");

scoreboard.innerText = player + " :"+ score + " Points";
