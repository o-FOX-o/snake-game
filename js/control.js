
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

function addRestListner(){
    const button = document.querySelector('#rest-button');
    button.addEventListener('click',(event)=>{
        event.preventDefault()
        // tools.render.toolBox.rest();
        return false
    })
}