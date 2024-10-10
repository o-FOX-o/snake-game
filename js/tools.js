
const tools = {
    materials:{
        speed: 300,
        currentMovement: ()=>{
            const currentCord = snake.cords[0];
            const nextCord = tools.random.randomDirectionForPart(currentCord,snakeLength,snake.cords)
            return nextCord.randomFun
        }
    },
    catchup:(array,lenght)=>{
        for(let i = 1;i < lenght;i++){
            array.parts[i].move(array.cords[i])
        }
    },
    render:{
        newGame:()=>{
            tools.render.board.body(boardLength,'main');
            tools.setCords(snakeLength,snake.cords,boardLength)
            tools.render.snake.generateSnake(snake.parts,snakeLength,'.board')
            snake.parts.forEach((part,i) => {
                part.render(snake.cords[i]);
            });
            tools.movement.autoMove()
            // tools.movement.forwadMovement()
            control.on();
        },
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
            SnakeSegment: class {
                constructor(index,nest) {
                    this.index = index; 
                    this.nest = nest;
                    
                    if(index === 0){
                        this.type = 'head'; 
                    }else {
                        this.type= 'part';
                    }
                }

                render(cord){
                    this.currentCord = {row:cord.row,column:cord.column};
                    const parent = document.querySelector(this.nest);
                    const part = document.createElement('div');
                    part.dataset.id = this.index;
                    part.classList.add('snake-block',this.type);
                    parent.appendChild(part);
                    part.style.gridArea = `${cord.row}/${cord.column}`;
                    
                }
                
                left(){
                    this.currentCord.column--;
                    // control.off();
                    const block = document.querySelector(`[data-id='${this.index}']`)
                    block.style.transform = 'translateX(-110%)';
                    block.style.transition = `transform ${tools.materials.speed}ms ease`;
                    const newCord = { row: this.currentCord.row, column: this.currentCord.column };
                    console.log(newCord)
                    snake.cords.unshift(newCord);
                    snake.cords.pop()
                    setTimeout(() => {
                    // control.on();
                    block.style.gridArea = `${this.currentCord.row}/${this.currentCord.column}`;
                    tools.style.transform.reset(block);
                    }, tools.materials.speed+20);
                }
                right(){
                    this.currentCord.column++;
                    // control.off();
                    const block = document.querySelector(`[data-id='${this.index}']`)
                    block.style.transform = 'translateX(110%)';
                    block.style.transition = `transform ${tools.materials.speed}ms ease`;
                    const newCord = { row: this.currentCord.row, column: this.currentCord.column };
                    console.log(newCord)
                    snake.cords.unshift(newCord);
                    snake.cords.pop()
                    setTimeout(() => {
                    // control.on();
                    block.style.gridArea = `${this.currentCord.row}/${this.currentCord.column}`;
                    tools.style.transform.reset(block);
                    }, tools.materials.speed+20);
                }
                up(){
                    
                    this.currentCord.row--;
                    // control.off();
                    const block = document.querySelector(`[data-id='${this.index}']`)
                    block.style.transform = 'translateY(-110%)';
                    block.style.transition = `transform ${tools.materials.speed}ms ease`;
                    const newCord = { row: this.currentCord.row, column: this.currentCord.column };
                    console.log(newCord)
                    snake.cords.unshift(newCord);
                    snake.cords.pop()
                    setTimeout(() => {
                    // control.on();
                    block.style.gridArea = `${this.currentCord.row}/${this.currentCord.column}`;
                    tools.style.transform.reset(block);
                    }, tools.materials.speed+20);
                }
                down(){
                    this.currentCord.row++;
                    // control.off();
                    const block = document.querySelector(`[data-id='${this.index}']`)
                    block.style.transform = 'translateY(110%)';
                    block.style.transition = `transform ${tools.materials.speed}ms ease`;
                    const newCord = { row: this.currentCord.row, column: this.currentCord.column };
                    console.log(newCord)
                    snake.cords.unshift(newCord);
                    snake.cords.pop()
                    setTimeout(() => {
                    // control.on();
                    block.style.gridArea = `${this.currentCord.row}/${this.currentCord.column}`;
                    tools.style.transform.reset(block);
                    }, tools.materials.speed+20);
                }

                move(cord) {
                    // control.off();
                    const vpos = cord.row === this.currentCord.row ? 'X' : 'Y';
                    const dir = (vpos === 'X')
                        ? (cord.column > this.currentCord.column ? '+' : '-')
                        : (cord.row > this.currentCord.row ? '+' : '-');
                
                    const block = document.querySelector(`[data-id='${this.index}']`);
                    block.style.transform = `translate${vpos}(${dir}120%)`;
                    block.style.transition = `transform ${tools.materials.speed}ms ease`;
                
                    setTimeout(() => {
                        // control.on();
                        this.currentCord = cord; 
                        block.style.gridArea = `${cord.row}/${cord.column}`; 
                        tools.style.transform.reset(block);
                    }, tools.materials.speed+20);
                }
                
            },
            generateSnake:(body,length,parent)=>{
                for(let i = 0;i<length;i++){
                    body.push(new tools.render.snake.SnakeSegment(i,parent))
                }
            }
        }
    },
    random:{
        number:(max = 6,min = 0)=>{
            const randomNum =  Math.round((Math.random()*(max-min))+min);
            
            return randomNum
        },
        cord:(length)=>{
            return {row : tools.random.number(length-2,3), column : tools.random.number(length-2,3)}
        },
        randomDirectionForPart:(cord,length,body)=>{
            const currentCord = cord;
            const randomFun = tools.random.number(3,0);
        
            let nextCord = tools.movement.partMovement[randomFun](currentCord);
        
            const taken = body.some((part)=>{
                return nextCord.row === part.row && nextCord.column === part.column
            })
            const available = {
                overZero: () => nextCord.row > 0 && nextCord.column > 0,
                lessThanBoard: () => nextCord.row <= boardLength && nextCord.column <= boardLength,
                taken: !taken
            };
                    console.log(available.lessThanBoard(),available.overZero(),available.taken)
            if(available.lessThanBoard()&&available.overZero()&&available.taken){
                
                return {nextCord,randomFun}
            }else {
        
                return tools.random.randomDirectionForPart(currentCord,length,body)
            }
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
    setCords:(length,array,parentLenght)=>{
        for(let i = 0;i <length;i++){
            if(i === 0){
                array.unshift(tools.random.cord(boardLength));
            }else{
                const cord = array[i-1]
                const newCord = tools.random.randomDirectionForPart(cord,parentLenght,array)
                array.push(newCord.nextCord);
            }
        }
    },
    movement : {
        partMovement : [
            //up
            (cord)=>{
                return {row:(cord.row-1),column:cord.column}
            },
            //right
            (cord)=>{
                return {row:cord.row,column:(cord.column+1)}
            },
            //down
            (cord)=>{
                return {row:(cord.row+1),column:cord.column}
            },
            //left
            (cord)=>{
                return {row:cord.row,column:(cord.column-1)}
            }
            
        ],
        headMovment: [
            ()=>{
                snake.parts[0].up();
                tools.catchup(snake,snakeLength);
            },
            ()=>{
                snake.parts[0].right();
                tools.catchup(snake,snakeLength)
            },
            ()=>{
                snake.parts[0].down();
                tools.catchup(snake,snakeLength)
            },
            ()=>{
                snake.parts[0].left();
                tools.catchup(snake,snakeLength)
            }

        ],
        autoMove: ()=>{
            setInterval(() => {
                movement = tools.materials.currentMovement();
                tools.movement.headMovment[movement]();
                

            }, tools.materials.speed+50);
        },
        forwadMovement:()=>{
            movement = tools.materials.currentMovement();
            setInterval(() => {
                tools.movement.headMovment[movement]();
                console.log(movement)
                

            }, tools.materials.speed+100);
        },
        control: {
            right:()=>{
                if(movement===3){
                    movement = 0;
                }else {
                    movement++
                }
                control.off()
                setTimeout(() => {
                    control.on()
                }, 200);
            },
            left:()=>{
                if(movement===0){
                    movement = 3;
                }else {
                    movement--
                }
                control.off()
                setTimeout(() => {
                    control.on()
                }, 200);
            }
        }
    }
}
// conditions not met: {
//     nextrow: 3con: >0&<=10
//     nextcolumn: 7con: >0&<=10
//     taken: false
//      }
     