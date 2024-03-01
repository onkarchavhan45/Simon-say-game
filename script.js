let gameseq=[];
let userseq=[];
let level=0;

let btns=['yellow','red','green','purple'];
let started=false;

document.addEventListener('keypress',function(){
    if(started==false){
        console.log('game start');
        started=true;

        levelUp();
    }
})

function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove('gameflash');
    },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
    btn.classList.remove("userflash");
 },250)
 }

 let h3=document.querySelector('h3');

function levelUp(){
    userseq=[];
    level++;
    h3.innerText=`level ${level}`;

    let randomidx=Math.floor(Math.random()*3);
    let randcolor=btns[randomidx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log("gameseq = ",gameseq);
    gameflash(randbtn);
}

function btnpress(){
    let btn=this;
    userflash(btn);

    let usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    console.log("userseq = ",userseq);
    checkans(userseq.length-1);
}

let Allbtns=document.querySelectorAll('.btn');
for(btn of Allbtns){
    btn.addEventListener("click",btnpress)
}

function checkans(idx){
    if(gameseq[idx] === userseq[idx]){
        if(gameseq.length == userseq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h3.innerHTML=` Game over ! your score was <b>${level}<b><br>press any key to start`;
        document.querySelector('body').style.backgroundColor='red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor='bisque';
        },150);
        reset();
    }
}

function reset(){
    started=false;
    userseq=[];
    gameseq=[];
    level=0;   
}