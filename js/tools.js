const tools = {
    render:{
        board:{
            body: (length = 6,nest = 'body')=>{
                const parent = document.querySelector(nest)
                const board = document.createElement('div');
                board.classList.add('board');
                parent.appendChild(board);
                board.style.gridTemplate = `repeat(${length},1fr)/repeat(${length},1fr)`;
                board.style.backgroundSize= `${100/length}% ${100/length}%`;
            }
        },
        snake:{
            custom:{
                part: (cord,type = 'part',nest = '.board',id)=>{
                    const parent = document.querySelector(nest)
                    const part = document.createElement('div');
                    if(id){
                        part.dataset.id = id;
                    }
                    part.classList.add('snake-block',type);
                    parent.appendChild(part);
                    part.style.gridArea = `${cord.row}/${cord.column}`
                }
            }
            // ,SnakeSegment: class {
            //     constructor(cord, type, index) {
            //         this.cord = cord; 
            //         this.type = type; 
            //         this.index = index; 
            //     }
            //     up(){
            //         tools.movement.up(this.cord)
            //     }
            // }

        }
    },
    random:{
        number:(max = 6,min = 0)=>{
            return Math.round((Math.random()*(max-min))+min)
        },
        cord:(length)=>{
            return {row : tools.random.number(length), column : tools.random.number(length)}
        }
    },
    style: {
        transform: {
            reset: (block)=>{
                block.style.transform = 'none';
                block.style.transition = 'none';
            }
        },
        cord:{
            get: (block)=>{
                const styles = window.getComputedStyle(block);
                const cordString = styles.gridArea;
                const cord = cordString.split('/');
                return {row: Number(cord[0]),column: Number(cord[1])};
            }
        }
    },
    movement : {
        down: (block,cord)=>{
            if(cord.row < boardLength){
                control.off();
                block.style.transform = 'translateY(100%)';
                block.style.transition = 'transform 0.1s ease';
                setTimeout(() => {
                    control.on();
                    block.style.gridArea = `${cord.row+1}/${cord.column}`;
                    tools.style.transform.reset(block);
                }, 100);
                
            }
        },
        up: (block,cord)=>{
            if(cord.row > 1){  
                control.off();
                block.style.transform = 'translateY(-100%)';
                block.style.transition = 'transform 0.1s ease';
                setTimeout(() => {
                    control.on();
                    block.style.gridArea = `${cord.row-1}/${cord.column}`;
                    tools.style.transform.reset(block);
                }, 100);
            }
        },
        left: (block,cord)=>{
            if(cord.column > 1){
                control.off();
                block.style.transform = 'translateX(-100%)';
                block.style.transition = 'transform 0.1s ease';
                setTimeout(() => {
                    control.on();
                    block.style.gridArea = `${cord.row}/${cord.column-1}`;
                    tools.style.transform.reset(block);
                }, 100);
            }
        },
        right: (block,cord)=>{
            if(cord.column < boardLength){
                control.off();
                block.style.transform = 'translateX(100%)';
                block.style.transition = 'transform 0.1s ease';
                setTimeout(() => {
                    control.on();
                    block.style.gridArea = `${cord.row}/${cord.column+1}`;
                    tools.style.transform.reset(block);
                }, 100);
            }
        }
    }
}