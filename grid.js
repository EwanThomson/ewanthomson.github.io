
"use strict";
var grid =document.querySelector("#grid");
for (let row = 0; row < 8; row++) {
    var blue=row%2==0;
    for (let col = 0; col < 8; col++) {
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
/* var img=document.createElement("img");
img.src="rainbow-square.png"
grid.append(img)*/
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
})
