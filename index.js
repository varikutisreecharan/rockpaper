const choices=["rock","paper","scissors"];
const playerD=document.getElementById("playerD");
const computerD=document.getElementById("computerD");
const resultD=document.getElementById("result");
const playerscore=document.getElementById("playerscore");
const computerscore=document.getElementById("computerscore");
let player=0;
let computer=0;

function playgame(playerchoice){
const computerchoice=choices[Math.floor(Math.random()*3)];

let result= "";
if(playerchoice===computerchoice){
    result="IT'S A TIE";
}
else{
    switch(playerchoice){
        case "rock":
         result= (computerchoice==="scissors")?"YOU WIN!":"YOU LOSE!";
         break;
          case "paper":
         result=   (computerchoice==="rock")?"YOU WIN!":"YOU LOSE!";
         break;
          case "scissors":
         result=   (computerchoice==="paper")?"YOU WIN!":"YOU LOSE!";
         break;
    }
}

playerD.textContent=`PLAYER:${playerchoice}`;
computerD.textContent=`COMPUTER:${computerchoice}`;
resultD.textContent=result;
resultD.classList.remove("green","red");
switch(result){
    case "YOU WIN!":
        resultD.classList.add("green");
        player++;
        playerscore.textContent=player;
        break;
     case "YOU LOSE!":
        resultD.classList.add("red");
        computer++;
        computerscore.textContent=computer;
        break;
}
}