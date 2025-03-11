// prompt("Hii how are you");

 
//--------------------------------------------------------------------------->


let choices = document.querySelectorAll(".choices");
let text = document.querySelector("#text");
let userScore = 0;
let compScore = 0;
let playGame = (userChoice,compChoice) => {
    console.log(`User choice = ${userChoice}`);
    console.log(`Comp choice = ${compChoice}`);
    // draw(userChoice,compChoice);
    showResult(userChoice,compChoice);
};

let draw = (userChoice,compChoice) =>{
    if(userChoice == compChoice)
        {
         text.innerText = "Game was Draw. Play again";
         text.style.backgroundColor = "grey";
        };
    

};
let showResult = (userChoice,compChoice) =>{
    if( userChoice == "scissor" && compChoice == "stone"||
        userChoice == "stone" && compChoice == "paper"||
        userChoice == "paper" && compChoice == "scissor"
      )
        {//Result
           
            text.innerText = `You lost.${compChoice} beats ${userChoice}`;
            text.style.backgroundColor = "red"; 
         //Score
               let user = document.querySelector("#you");
               userScore++;
               user.innerText = `${userScore}`;
        }
        else if( userChoice == "stone" && compChoice == "scissor"||
                 userChoice == "paper" && compChoice == "stone"||
                 userChoice == "scissor" && compChoice == "paper"
               )
                 {//Result
                      text.innerText = `You win!Your ${userChoice} beats ${compChoice}`;
                      text.style.backgroundColor = "Green";
                  //Score 
                       let comp = document.querySelector("#comp");
                       compScore ++;
                       comp.innerText = `${compScore}`;  
                }
        else  {
                 draw(userChoice,compChoice);
              }        


};


//comp choice
let genCompChoice = () =>{
    let options = ["stone","paper","scissor"];
    let randomindx = Math.floor(Math.random() * 3) // Used to generate random number.
     return options[randomindx];
    
};


//user choice
console.log(choices);
choices.forEach( (indx) =>{
   indx.addEventListener("click",() =>{
    let userChoice = indx.getAttribute("id");

    //console.log(indx.id);
    let compChoice = genCompChoice(); 
    playGame(userChoice,compChoice);
   
    });
});

//------------------------------------------------------------->

//Day/Night(Mode)

let modePng = document.querySelector(".modePng");


//console.log(modePng);
let body = document.querySelector("body");

let mode = "Light";
footer = document.querySelector("footer");
modePng.addEventListener("click" ,() =>{
    if(mode == "Light"){
        mode = "Dark";
        body.style.backgroundColor = "black";
        footer.style.backgroundColor = "grey";
        body.style.color = "white";
        
        // console.log(modePng.innerHTML);
    }else if(mode == "Dark"){
        mode = "Light";
        body.style.backgroundColor = "white";
        footer.style.backgroundColor = "rgb(220, 212, 202)";
        body.style.color = "black";
    }
    console.log(mode);
});

