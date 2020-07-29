"use strict";
var width = 4;
var height = 3;
var grid =document.querySelector("#grid");
var cards = []
var revealed = ["hotdog","hotdog"]
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