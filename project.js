let userScore = 0;
let compScore = 0;

const choice1 = document.querySelector(".box1");
const choice2 = document.querySelector(".box2");
const choice3 = document.querySelector(".box3");

const msg = document.querySelector(".foot");

const count1 = document.getElementById("count1");
const count2 = document.getElementById("count2");

const drawGame = () =>{
    console.log("Game was draw");
    msg.innerText = "GAME WAS DRAW PLAY AGAIN";
    msg.style.backgroundColor = "gray";

}
 const winner = (userWin,userChoice,compChoice) => {
    if(userWin){
    console.log("you win");
    msg.innerText = `YOU WIN! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    userScore++;
    count1.innerText = userScore;
    }
    else{
    console.log("you loss");
    msg.innerText = `You Lose ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    compScore++;
    count2.innerText = compScore;
    }
 }
const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx =  Math.floor(Math.random()*3);
    return options[randIdx];
}

const handleClick = (userChoice) => {
    console.log(`user choice: ${userChoice}`);

    const compChoice = genCompChoice();
    console.log(`Computer chose: ${compChoice}`);

    if(compChoice === userChoice){
       drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper"?false:true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors"?false:true;
        }
        else{
            userWin = compChoice === "rock"?false:true;
        }
        winner(userWin,userChoice,compChoice);
    }
};


choice1.addEventListener("click", () => handleClick("rock"));
choice2.addEventListener("click", () => handleClick("paper"));
choice3.addEventListener("click", () => handleClick("scissors"));
