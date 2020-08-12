"use strict";
var images = ["hotdog","fries","milkshake","pizza","ice-cream","cheeseburger"]
var doubled = []
for (let index = 0; index < images.length; index++) {
    doubled.push(images[index])
    doubled.push(images[index])
}
var revealed = [];
while (doubled.length>0) {
    var index = Math.floor(Math.random()*doubled.length)
    revealed.push(doubled[index])
    doubled.splice(index,1)
}

var firstCard = null;
function onclick(e){
    if (e.target.style.opacity == 1) {
       return 
    }
    e.target.style.opacity = 1;
    if (firstCard == null){
        firstCard = e.target
    }else{
        if (e.target.src !== firstCard.src) {
            hideCards(e.target, firstCard);
        }
        firstCard = null
    }
}

function hideCards(card1, card2) {
    setTimeout(() => {
        card1.style.opacity = 0;
        card2.style.opacity = 0;
    }, 500);
}

var width = 4;
var height = 3;
var grid =document.querySelector("#grid");
var cards = []
for (let i = 0; i < height*width; i++) {
    var div=document.createElement("div");
    div.classList.add("cell")
    const img = document.createElement('img')
    img.src = `memory/${revealed[i]}.png`;
    div.append(img)
    grid.append(div)
    cards.push(div)
    img.addEventListener("click", onclick)
}
