const boardLength = 10;
const snakeLength = 6;
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

    tools.render.newGame()
})