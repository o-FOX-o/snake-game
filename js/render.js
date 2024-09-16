const boardLength = 10;
const snakeLength = 1;
const snakeBody = [];

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

    tools.render.board.body(boardLength,'main');
    tools.render.snake.custom.part(tools.random.cord(boardLength),'head');
    const head = document.querySelector('.head');
    const headCord = tools.style.cord.get(head)    
    snakeBody.push(headCord);
    control.on();
})