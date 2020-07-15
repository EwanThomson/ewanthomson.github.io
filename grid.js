"use strict";
var width = 10;
var height = 8;
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
function start (){
    var meteorTypes=[
        {
            start: function(){return 20},
            end: function(pos){return pos % width == width -1},
            delta: 1,
        },
        {
            start: function(){return 2},
            end: function(pos){return pos > width*(height-1)},
            delta: width,
        },
];
    var meteor=null
    var meteorType= null
    setInterval(()=>{
        if (meteor==null){
            meteorType=meteorTypes[Math.floor(Math.random()*meteorTypes.length)]
            meteor=meteorType.start()
            grid.children[meteor].classList.add("red")
        }else{
            grid.children[meteor].classList.remove("red")
            meteor+=meteorType.delta
            if(meteorType.end(meteor)){
                meteor=null;
            }
            grid.children[meteor].classList.add("red")
        }
    },500)
}
start()