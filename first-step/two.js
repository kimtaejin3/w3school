const image=document.querySelector("#image");
const turnOn=document.querySelector("#turnOn");
const turnOff=document.querySelector("#turnoff");


function turnItOn()
{
    image.src='js2.png';
}

function turnItoff()
{
    image.src='js1.png';
}

function init()
{
    turnOn.addEventListener('click',turnItOn);
    turnOff.addEventListener("click",turnItoff);
}

init();