let boardLength = 6;
let snakeLength = 3;
let sankeControl = 'manual';
const snake = { 
    cords: [],
    parts: []
};
let movement 

window.addEventListener('load',()=>{
    //Time and date
const clock = document.getElementById('js-clock');

setInterval(() =>{
    let d = new Date();
    clock.innerText = d.toLocaleTimeString();
},1000)

//full screen//
function getFullscreenElement(){
    return document.fullscreenElement
        || document.webkitFullscreenElement
        || document.mozFullscreenElement
        || document.msFullscreenElement;
}
function toggleFullscreen(){
    if (getFullscreenElement()) {
        document.exitFullscreen();
    }else {
        document.documentElement.requestFullscreen().catch(console.log)
    }
}
document.addEventListener("dblclick", () => {
    toggleFullscreen();
});
    tools.render.toolBox.renderSelectList(6,100,'#board-size-control');
    tools.render.toolBox.renderSelectList(2,10,'#snake-size-control');
    
    tools.render.newGame();
    // addRestListner();
})