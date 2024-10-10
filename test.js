
// const boardLength = 20
// const snakeLength = 10;
// const snake = [
//     {
//         row:5,
//         column:5
//     }
// ]


// const movement = [
//     //up
//     (cord)=>{
//         return {row:cord.row-1,column:cord.column}
//     },
//     //down
//     (cord)=>{
        
//         return {row:cord.row+1,column:cord.column}
//     },
//     //left
//     (cord)=>{
//         return {row:cord.row,column:cord.column-1}
//     },
//     //right
//     (cord)=>{
//         return {row:cord.row,column:cord.column+1}
//     }
// ]

// // console.log(movement[1](snake[0]))

// function randomvposectionForPart(cord,length,body){
//         let nextCord = movement[1](cord);
//         const taken = body.some((part)=>{
//             return nextCord.row === part.row && nextCord.column === part.column
//         })
            
//         if(nextCord.row > 0&&nextCord.row <=boardLength&&nextCord.column > 0&&nextCord.column <= length&&!taken){
//             console.log(nextCord);
//             snake.push(nextCord)
//         }else (
//             randomvposectionForPart(cord,length,body)
//         )
// }

// function generateParts(body,length) {
//     for(let i = body.length; i < length;i++){
//         randomvposectionForPart(body[i-1],length,body);
//     }
// }

// generateParts(snake,snakeLength)
// const array= [1,2,3]
// array.push(4)
// console.log(array)

class SnakeSegment {
    constructor(index,nest,cord) {
        this.index = index; 
        this.nest = nest;
        this.currentCord = cord;
        if(index === 0){
            this.type = 'head'; 
        }else {
            this.type= 'part'
        }
    }

    create(cord){
        const parent = document.querySelector(this.nest);
        const part = document.createElement('div');
        part.dataset.id = this.index;
        
        part.classList.add('snake-block',this.type);
        parent.appendChild(part);
        part.style.gridArea = `${cord.row}/${cord.column}`;
        
    }
    left(cord){
        const newCord = `${cord.row}/${cord.column-1}`;
        control.off();
        block.style.transform = 'translateX(100%)';
        block.style.transition = 'transform 0.1s ease';
        setTimeout(() => {
        control.on();
        block.style.gridArea = newCord;
        tools.style.transform.reset(block);
        }, 100);
    }
    right(cord){
        const newCord = `${cord.row}/${cord.column+1}`;
        control.off();
        block.style.transform = 'translateX(100%)';
        block.style.transition = 'transform 0.1s ease';
        setTimeout(() => {
        control.on();
        block.style.gridArea = newCord;
        tools.style.transform.reset(block);
        }, 100);
    }
    up(cord){
        const newCord = `${cord.row-1}/${cord.column}`;
        control.off();
        block.style.transform = 'translateY(-100%)';
        block.style.transition = 'transform 0.1s ease';
        setTimeout(() => {
        control.on();
        block.style.gridArea = newCord;
        tools.style.transform.reset(block);
        }, 100);
    }
    down(cord){
        const newCord = `${cord.row+1}/${cord.column}`;
        control.off();
        block.style.transform = 'translateY(100%)';
        block.style.transition = 'transform 0.1s ease';
        setTimeout(() => {
        control.on();
        block.style.gridArea = newCord;
        tools.style.transform.reset(block);
        }, 100);
    }
    move(cord){;
        control.off();
        const vpos = cord.row === this.currentCord.row? 'x' : 'y';
        const dir = cord.column > this.currentCord.column? '+' : '-'||cord.row > this.currentCord.row? '+' : '-';
        block.style.transform = `translate${vpos}(${dir}100%)`;
        block.style.transition = 'transform 0.1s ease';
        setTimeout(() => {
        control.on();
        this.currentCord = cord;
        block.style.gridArea = `${cord.row}/${cord.column}`;;
        tools.style.transform.reset(block);
        }, 100);
    }
}
//deleted 
// ,
//         down: (block,cord)=>{
//             if(cord.row < boardLength){
//                 control.off();
//                 block.style.transform = 'translateY(100%)';
//                 block.style.transition = 'transform 0.1s ease';
//                 setTimeout(() => {
//                     control.on();
//                     block.style.gridArea = `${cord.row+1}/${cord.column}`;
//                     tools.style.transform.reset(block);
//                 }, 100);
                
//             }
//         },
//         up: (block,cord)=>{
//             if(cord.row > 1){  
//                 control.off();
//                 block.style.transform = 'translateY(-100%)';
//                 block.style.transition = 'transform 0.1s ease';
//                 setTimeout(() => {
//                     control.on();
//                     block.style.gridArea = `${cord.row-1}/${cord.column}`;
//                     tools.style.transform.reset(block);
//                 }, 100);
//             }
//         },
//         left: (block,cord)=>{
//             if(cord.column > 1){
//                 control.off();
//                 block.style.transform = 'translateX(-100%)';
//                 block.style.transition = 'transform 0.1s ease';
//                 setTimeout(() => {
//                     control.on();
//                     block.style.gridArea = `${cord.row}/${cord.column-1}`;
//                     tools.style.transform.reset(block);
//                 }, 100);
//             }
//         },
//         right: (block,cord)=>{
//             if(cord.column < boardLength){
//                 control.off();
//                 block.style.transform = 'translateX(100%)';
//                 block.style.transition = 'transform 0.1s ease';
//                 setTimeout(() => {
//                     control.on();
//                     block.style.gridArea = `${cord.row}/${cord.column+1}`;
//                     tools.style.transform.reset(block);
//                 }, 100);
//             }
//         }