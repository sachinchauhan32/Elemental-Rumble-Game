let userscore = 0;
let compscore = 0;
let winmsg = document.querySelector(".turnmsg");
const choices = document.querySelectorAll(".choice");

const gencompchoice = () => {
    const options = ["stone", "paper", "scissors"];
    const randomidx = Math.floor(Math.random() * 3);
    return options[randomidx];
}
const userscorepara = document.querySelector(".myscore");
const compscorepara = document.querySelector(".compscore");

const showwinner = (userwin, compchoice, userchoice) => {
    if(userwin === true){
        userscore++;
        userscorepara.innerText = userscore;
        winmsg.innerText = `Congratulations, You Won! Your ${userchoice} beats ${compchoice}`;
        winmsg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        compscorepara.innerText = compscore;
        winmsg.innerText = `You Lose!, ${compchoice} beats your ${userchoice}`;
        winmsg.style.backgroundColor = "red";
    }
}

const compgame = (userchoice) => {
    const compchoice = gencompchoice();
    if( userchoice === compchoice){
        gamedraw();
      }
      else {
        userwin = true;
        if (userchoice === "stone"){
            userwin = compchoice === "paper" ? false : true;
        }
        else if( userchoice === "paper"){
            userwin = compchoice === "scissors" ? false : true;
        }
        else {
            userwin = compchoice === "stone" ? false : true;
        }
        showwinner(userwin, compchoice, userchoice);
};
};

const gamedraw = () => {
   winmsg.innerText = "Game was Draw!";
   winmsg.style.backgroundColor = "#081b31";
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
       const userchoice = choice.getAttribute("id");
      compgame(userchoice);
     
      
    });
});