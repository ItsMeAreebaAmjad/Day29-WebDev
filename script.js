document.addEventListener('DOMContentLoaded', function() {

const myBtn=document.getElementById("myBtn");
const mylabel=document.getElementById("mylabel");

const min=1;
const max=6;
let randomNumber;

myBtn.onclick = function(){
    randomNumber=Math.floor(Math.random()*max)+min;
    mylabel.textContent=randomNumber;
}

});

