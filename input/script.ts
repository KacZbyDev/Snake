import {Snake} from "./snake.js"
import {Fruit} from "./fruit.js"
import { Score } from "./Score.js"
import { Position } from "./position.js"
class Game{
    private readonly canvas:HTMLCanvasElement
    private readonly ctx:CanvasRenderingContext2D
    private readonly squareWidth: number
    private readonly snake:Snake
    private readonly fruit: Fruit
    private readonly score:Score
    private gameLoop:number | undefined
    constructor(){
        this.canvas = document.querySelector("#game-pallete")!;
        this.ctx = this.canvas.getContext("2d")!;
        this.squareWidth = 20
        this.snake = new Snake()
        this.fruit = new Fruit(this.snake)
        this.score = new Score()
        this.gameLoop = undefined
    }
    public start():void{
        this.drawSnakePosition(this.snake.segments,"green")
        this.putFruit()
        document.addEventListener("keydown",(event)=>{
            const ascii:number = event.key.charCodeAt(0)
            this.snake.setNewDirection(ascii)
            
        })
        this.gameLoop = setInterval(()=>{
            const oldSnakePosition:Position[] = this.snake.segments
            const newHead = this.snake.getNewHead()
            if(this.snake.detectCollision(newHead)) this.setGameResult(true)
            else if(this.snake.segments.length === 400) this.setGameResult(false)
            else{
                const hasEaten:boolean = this.fruit.comparePositions(newHead)
                this.snake.setNewPosition(hasEaten,newHead)
                this.snake.resetDirectionFlag()
                this.handleNewFruit(hasEaten)
                this.drawSnakePosition(oldSnakePosition,"black")
                this.drawSnakePosition(this.snake.segments,"green")
            }
        },175)
        
    }
    private drawPosition(position:Position | null, color:string ):void{
        this.ctx.fillStyle = color
        this.ctx.fillRect(position!.getXDrawPosition(),position!.getYDrawPosition(),this.squareWidth,this.squareWidth);
        
    }
    private drawSnakePosition(segments:Position[],color:string):void{
        segments.forEach(element => {
            this.drawPosition(element,color)
        });
    }
    private putFruit():void{
        this.fruit.setNewPosition(this.snake)
        this.drawPosition(this.fruit.position,"red")
    }
    private handleNewFruit(hasEaten:boolean):void{
        if(hasEaten){
            this.putFruit()
            this.score.updateScore()
        }
    }
    private setGameResult(hasWin:boolean):void{
        const gameResultElement:Element = document.getElementById("game-result")!
        const message = hasWin ? "Game Over" : "you won"
        gameResultElement.innerHTML = message
        clearInterval(this.gameLoop)
    }
    
    

}
const game:Game = new Game()
game.start()

