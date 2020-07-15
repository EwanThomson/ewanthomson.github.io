var size = 8;
"use strict";
var grid =document.querySelector("#grid");
for (let row = 0; row < size; row++) {
    var blue=row%2==0;
    for (let col = 0; col < size; col++) {
        var div=document.createElement("div");
        div.classList.add("cell")
        if (blue){
            div.classList.add("blue") 
            blue=false;
        }else{
           div.classList.add("orange")
           blue=true; 
        }
        grid.append(div)
    }
}



var rainbow=63;
grid.children[rainbow].classList.add("rainbow")
window.addEventListener("keydown",(e)=>{
    var newRainbow = null; 
    if(e.key=="ArrowLeft"){
        newRainbow=rainbow-1
    }

    if (newRainbow!=null){
        grid.children[rainbow].classList.remove("rainbow")
        rainbow=newRainbow
        grid.children[rainbow].classList.add("rainbow")
    }
    if(e.key=="ArrowRight"){
        newRainbow=rainbow+1
    }

    if (newRainbow!=null){
        grid.children[rainbow].classList.remove("rainbow")
        rainbow=newRainbow
        grid.children[rainbow].classList.add("rainbow")
    }
    if(e.key=="ArrowUp"){
        newRainbow=rainbow-size
    }

    if (newRainbow!=null){
        grid.children[rainbow].classList.remove("rainbow")
        rainbow=newRainbow
        grid.children[rainbow].classList.add("rainbow")
    }
    if(e.key=="ArrowDown"){
        newRainbow=rainbow+size
    }

    if (newRainbow!=null){
        grid.children[rainbow].classList.remove("rainbow")
        rainbow=newRainbow
        grid.children[rainbow].classList.add("rainbow")
    }
})
