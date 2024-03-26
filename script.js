const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData()
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");

}

showTask();

const min=document.getElementById('minute');
const sec=document.getElementById('second');

const start=document.getElementById('start');
const reset=document.getElementById('reset');

const disp=document.getElementById('disp');

var interval=null;
var total=0;

totalVal=()=>{
    total=Number(min.value)*60 + Number(sec.value);
}

Timer=()=>{
    totalVal();
    total--;

    if(total>=0){
        var m=Math.floor(total/60);
        var s=total-(m*60);

        min.value=m;
        sec.value=s;
    }
    else{
        disp.innerText="Time Over!";
    }
    
}

start.addEventListener('click',()=>{
    clearInterval(interval);
    interval=setInterval(Timer, 1000);

    disp.innerText="Timer Started!";
});

reset.addEventListener('click',()=>{
    clearInterval(interval);
    min.value=0;
    sec.value=0;

    disp.innerText = "Let's Go!";
});