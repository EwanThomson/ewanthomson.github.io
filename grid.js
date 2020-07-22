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
            start: function(){return Math.floor(Math.random()*height)*width},
            end: function(pos){return pos % width == width -1},
            delta: 1,
        },
        {
            start: function(){return Math.floor(Math.random()*width)},
            end: function(pos){return pos > width*(height-1)},
            delta: width,
        },
        {
            start: function(){return Math.floor(Math.random()*width)+(height-1)*width},
            end: function(pos){return pos < width},
            delta: -width,
        },
        {
            start: function(){return Math.floor(Math.random()*height)*width+width-1},
            end: function(pos){return pos % width == 0},
            delta: -1,
        },
    ];
    var meteors =[null,null,null,null,]
    setInterval(()=>{
        for (let index = 0; index < meteors.length; index++) {
            const element = meteors[index];
            
        
            if (element==null){
                var meteorType=meteorTypes[Math.floor(Math.random()*meteorTypes.length)]
                var meteor=meteorType.start()
                meteors[index]={meteor,meteorType}
                grid.children[meteor].classList.add("red")
            }else if(element.meteorType.end(element.meteor)){
                grid.children[element.meteor].classList.remove("red")  
                meteors[index]=null;
            }else{
                grid.children[element.meteor].classList.remove("red")
                element.meteor+=element.meteorType.delta
                grid.children[element.meteor].classList.add("red")
            }
        }
    },250)
}
start()