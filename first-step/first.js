const DateBtn=document.querySelector(".time");
const DateOut=document.querySelector("#printDate");
const DateClear=document.querySelector(".clear-time");

function printDate()
{
    DateOut.innerHTML=Date();
}

function clearDate()
{
    DateOut.innerHTML="";
}

function init()
{
    DateBtn.addEventListener("click",printDate);
    DateClear.addEventListener("click",clearDate);
}

init();
