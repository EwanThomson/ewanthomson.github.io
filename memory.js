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


var width = 4;
var height = 3;
var grid =document.querySelector("#grid");
var cards = []
for (let i = 0; i < height*width; i++) {
    var div=document.createElement("div");
    div.classList.add("cell")
    div.dataset.reveal=revealed[i]
    grid.append(div)
    cards.push(div)
    div.addEventListener("click",(e)=>{
        e.target.style.backgroundImage="url(memory/"+e.target.dataset.reveal+".png)"
    })
}



