let gameseq =[];
let userseq = [];
let btn = ["yellow","red","blue","green"];

let h3 = document.querySelector("h3");
let started = false;
let level =0;
let highestScore = 0;
h3.innerText = `Level ${level} - Highest Score: ${highestScore}`;

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game is started");
        started = true;

        levelUp();
    }  
});

function gameflash(flastbtn){
    
    flastbtn.classList.add("flash");
    setTimeout(function(){
        flastbtn.classList.remove("flash");
    },250);

}
function userflash(flastbtn){
    
    flastbtn.classList.add("userflash");
    setTimeout(function(){
        flastbtn.classList.remove("userflash");
    },250);

}


function levelUp(){
    userseq=[];
    level++;
    h3.innerText = `level ${level}`;
    
    let randIdx = Math.floor(Math.random()*3);
    let randcol = btn[randIdx];
    let randbtn = document.querySelector (`.${randcol}`);
    console.log(randbtn);
    gameseq.push(randcol);
    console.log(gameseq);
    
    gameflash(randbtn);
}

function checkans(idx) {
    console.log("function executed");
    if (userseq[idx] === gameseq[idx]) {
        if (userseq.length == gameseq.length) {
            setTimeout(levelUp,1000);
            console.log("if executed");
        }
    } else {
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);

        if (level > highestScore) {
            highestScore = level;
        }

        h3.innerHTML = `Game Over! Your Score was <b>${level}</b><br>Highest Score: ${highestScore}<br>Click any key to Start Game</br>`;
        reset();
    }
} 
function btnpress(){
    let btn = this;
    console.log("btn was pressed");
    userflash(btn);
    
    let userbtn = btn.getAttribute("id")
    userseq.push(userbtn);
    console.log(userseq);
    
    checkans(userseq.length - 1);
    
}

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}

let allbtns = document.querySelectorAll(".color");
for(btns of allbtns){
    btns.addEventListener("click",btnpress);
}
