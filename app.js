
const btn = document.getElementById('btn')
const color = document.querySelector('.color')
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const simpleBtn = document.getElementById('simple');


let isHexMode = false;

simpleBtn.addEventListener('click', function(){
    isHexMode = !isHexMode;
    simpleBtn.textContent = isHexMode ? "click to simple" : "click to hex"
})



function getRandomNumber(value){
    return Math.floor(Math.random() * value.length)
}

btn.addEventListener('click' , function(){
    const bgColor = isHexMode? getRandomHexColor() : getRandomSimpleColor()
   document.body.style.backgroundColor = bgColor;
   console.log(bgColor)
})

function getRandomHexColor(){
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[getRandomNumber(hex)];
    }
    
  
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
     color.style.color = hexColor;
     return hexColor;
} 

function getRandomSimpleColor(){
    const colors = ["green", "red", "blue", "yellow", "pink","violet","purple"];
    const randomNumber = getRandomNumber(colors);
    // console.log(randomNumber);
  
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
     color.style.color = colors[randomNumber];
    return colors[randomNumber]
}


