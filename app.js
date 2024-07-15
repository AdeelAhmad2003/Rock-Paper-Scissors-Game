let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");


const genCompChoice=() =>{
    const options=["rock","paper","scissors"];
    const randomidx=Math.floor(Math.random()*3);
    return options[randomidx];
} 

const drawgame=()=>{
    msg.innerText="Game Draw! Play Again";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`You Loose! ${compchoice} beats Your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}

const playgame=(userchoice)=>{
    const compchoice=genCompChoice();

    if(userchoice===compchoice){
       drawgame();  
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            //scissors,rock
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            //scissors,rock
            userwin=compchoice==="scissors"?false:true;
        }
        else{
            //rock,paper
            userwin=compchoice==="rock"?false:true;
        }
        showWinner(userwin,userchoice,compchoice);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});