import { Snake } from "./snake.js";
import { Position } from "./position.js";
export class Fruit{
    position: Position | null 
    readonly color:string
    constructor(snake:Snake){
        this.position = null
        this.setNewPosition(snake)
        this.color = "red"
    }
    public setNewPosition(snake:Snake):void{
        const canvasRepresentation:Position[] = []
        for (let i = 0; i < 20; i++) {
            for (let j = 0; j < 20; j++) {
                const currentPosition = new Position(i,j)
                if(!snake.hasPosition(currentPosition)) {
                    canvasRepresentation.push(currentPosition)
                    
                } 
                
            }
            
        }
        const randomValue = this.getRandomNumber(0,canvasRepresentation.length)
        this.position = canvasRepresentation.at(randomValue)!
    }
    public comparePositions(snakePosition:Position):boolean{
        return snakePosition.x === this.position!.x && snakePosition.y === this.position!.y
    }
    private getRandomNumber(min:number, max:number):number{
        return Math.floor((Math.random()*(max-min)) + min) 
        
    }

    
}