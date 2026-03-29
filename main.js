let userScore = 0;
let compScore = 0;
let msg=document.querySelector("#msg");
const user_score=document.querySelector("#userScore");
const comp_score=document.querySelector("#compScore")
let choices=document.querySelectorAll(".choice");
//generate comouter
const genChoice= ()=> {
  const arr=["snake","water","gun"]
  let index=Math.floor(Math.random()*3);
  return arr[index];
};
//play function 
const playGame=(userChoice,compChoice)=> {
  console.log(`you=${userChoice} and comp=${compChoice}`)
}
//show winner function 
const show = (userWin,userChoice,compChoice) => {
    if (userWin) {
      userScore++
      msg.innerText=`You Win! your ${userChoice} beats ${compChoice}`;
      msg.style.background="green"
      user_score.innerText=userScore
      
    }
    else {
      compScore++
      msg.innerText=`You Lose! ${compChoice} beats your ${userChoice}`;
      msg.style.background="red"
      comp_score.innerText=compScore
    }
}
//click function 
choices.forEach((choice)  => {
    choice.addEventListener("click",() => {
      const userChoice=choice.getAttribute("id")
      const compChoice=genChoice();
      playGame(userChoice,compChoice);
      //rule 
    let userWin=true;
      if (userChoice===compChoice) {
        msg.innerText="Game draw! play again"
        msg.style.background="grey";
        return;
      }
       else if(userChoice==="snake") {
          userWin = compChoice === "water";
            }
       else if (userChoice === "water") {
         userWin = compChoice === "gun";
        }
      else {
        userWin = compChoice === "snake";
      }
      show(userWin,userChoice,compChoice);
    }
    )
}
)
