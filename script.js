let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    let c= Math.floor(Math.random()*3);
    return options[c]; 
}

const drawGame=(userChoice)=>{
    console.log("Game is a draw!");
    msg.innerText="Game Drawn! Both choose "+userChoice;
    msg.style.backgroundColor="Yellow";
    msg.style.color="black";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText="You Win. "+userChoice+" beats "+compChoice;
        msg.style.backgroundColor="Green";
        msg.style.color="black";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText="You Lose. "+compChoice+" beats "+userChoice;
        msg.style.backgroundColor="Red";
        msg.style.color="black";
    }
}

const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    let compChoice=genCompChoice();
    console.log("comp choice=",compChoice);

    if(userChoice===compChoice)
    drawGame(userChoice);
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper")
        {
            userWin=compChoice==="scissor"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    });
});