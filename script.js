let player= localStorage.getItem("playerName");
document.getElementById("player").innerText = "Player:" + player;
let boxes = document.querySelectorAll(".box");

let message = document.getElementById("message");

let time = 60;

let timer = document.getElementById("timer");

boxes.forEach(function(box){

    box.addEventListener("click", function(){

        box.classList.toggle("selected");
        checkWinner();
    });

});

let countdown = setInterval(function(){

    time--;

    timer.innerText = "Time Left: " + time;

    if(time <= 0){

        clearInterval(countdown);

        if(message.innerText == ""){
            message.innerText ="GAME OVER";
        }
    }
    },1000);
function checkWinner(){

    let boxes = document.querySelectorAll(".box");

    let winPatterns = [

        // Rows
        [0,1,2,3,4],
        [5,6,7,8,9],
        [10,11,12,13,14],
        [15,16,17,18,19],
        [20,21,22,23,24],

        // Columns
        [0,5,10,15,20],
        [1,6,11,16,21],
        [2,7,12,17,22],
        [3,8,13,18,23],
        [4,9,14,19,24],

        // Diagonals
        [0,6,12,18,24],
        [4,8,12,16,20]

    ];

    for(let pattern of winPatterns){

        let won = pattern.every(index =>
            boxes[index].classList.contains("selected")
        );

        if(won){

            document.getElementById("message").innerHTML =
            " BINGO! YOU WIN!";

            clearInterval(countdown);
            let player = localStorage.getItem("player") || "Unknown";

            let endTime = Date.now();
            let timeTaken = Math.floor((endTime - startTime) / 1000);
            let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
            leaderboard.push({
              name: player,
            score: timeTaken
            });

        localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
        }}}