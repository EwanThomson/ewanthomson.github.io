"use strict";
var width = 4;
var height = 3;
var grid =document.querySelector("#grid");
for (let row = 0; row < height*width; row++) {

    var div=document.createElement("div");
    div.classList.add("cell")
    div.classList.add("blue")
    grid.append(div)
    
}



var rainbow=79;
grid.children[rainbow].classList.add("rainbow")
window.addEventListener("keydown",(e)=>{
    var newRainbow = null; 
    if(e.key=="ArrowLeft"){
        newRainbow=rainbow-1
    }else if(e.key=="ArrowRight"){
        newRainbow=rainbow+1
    }else if(e.key=="ArrowUp"){
        newRainbow=rainbow-width
    }else if(e.key=="ArrowDown"){
        newRainbow=rainbow+width
    }

    if (newRainbow!=null){
        grid.children[rainbow].classList.remove("rainbow")
        rainbow=newRainbow
        grid.children[rainbow].classList.add("rainbow")
    }
})
