const bgbody = document.querySelector('body');
const hex = document.querySelector('.hex');
const hexBtn = document.querySelector('.hexbtn');

document.addEventListener('DOMContentLoaded',displayhex);
hexBtn.addEventListener('click',hexGenerator);
const hexColor = ['red','yellow','green','cyan','violet','rgb(27,56,71)'];

function hexGenerator(){
    
    let random = Math.floor(Math.random() * hexColor.length);
    bgbody.style.background = hexColor[random];
hex.innerHTML = hexColor[random];
saveLocal(hexColor[random]);
}
function saveLocal(hexCode){
    let hexcodes;
    localStorage.setItem('hexcodes',JSON.stringify(hexCode));
    hexcodes = JSON.parse(localStorage.getItem('hexcodes'));   
}

function displayhex(){
    let hexcodes;
    hexcodes = JSON.parse(localStorage.getItem('hexcodes'));
    bgbody.style.background = hexcodes ;
hex.innerHTML = hexcodes;

}


