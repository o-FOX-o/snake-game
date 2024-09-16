
const control = {
    handler :  (event) => {
            event.preventDefault();
            const head = document.querySelector('.head');
            const headCord = tools.style.cord.get(head);
            
            
            if (event.key === 'ArrowUp') {
                tools.movement.up(head, headCord);
            } else if (event.key === 'ArrowRight') {
                tools.movement.right(head, headCord);
            } else if (event.key === 'ArrowDown') {
                tools.movement.down(head, headCord);
            } else if (event.key === 'ArrowLeft') {
                tools.movement.left(head, headCord);
            }
            
            console.log(headCord)
            console.log(snakeBody);
            snakeBody.forEach((cord,i)=>{
                if(i >= 0 &&i < snakeLength){
                    tools.render.snake.custom.part(cord)
                }
            })
            if(snakeBody.length > snakeLength){
                snakeBody.shift()
            }
    },
    on:()=>{
        window.addEventListener('keydown', control.handler)        
    },
    off:()=>{
        window.removeEventListener('keydown', control.handler)
    }
}
