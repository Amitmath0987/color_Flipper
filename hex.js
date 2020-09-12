const bgbody = document.querySelector('body');
const hex = document.querySelector('.hex');
const hexBtn = document.querySelector('.hexbtn');
document.addEventListener('DOMContentLoaded',displayhex);
hexBtn.addEventListener('click',hexGenerator);
const hexNumber = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

function hexGenerator(){
    let hexColor = '#';
    
    for (let i = 0; i < 6; i++){
        let random = Math.floor(Math.random() * hexNumber.length);
        hexColor += hexNumber[random];
        saveLocal(hexColor);
    }
bgbody.style.background = hexColor;
hex.innerHTML = hexColor;
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


