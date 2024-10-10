
const control = {
    handler :  (event) => {

            if (event.key === 'ArrowRight') {
                tools.movement.control.right();
            } else if (event.key === 'ArrowLeft') {
                tools.movement.control.left();
            }
              
    },
    on:()=>{
        window.addEventListener('keydown', control.handler)        
    },
    off:()=>{
        window.removeEventListener('keydown', control.handler)
    }
}
