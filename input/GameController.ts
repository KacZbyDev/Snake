import { Game } from "./Game.js"
class GameController{
    private retryButton:Element
    private canvas:HTMLCanvasElement
    private ctx:CanvasRenderingContext2D
    private game:Game | null
    constructor(){
        this.retryButton = this.setRetryButton()
        this.canvas = document.querySelector("#game-pallete")!;
        this.ctx = this.canvas.getContext("2d")!;
        this.game = null
        
    }
    public switchRetryButtonState():void{
        this.retryButton.classList.toggle("retry-button-unactive")
    }
    private setRetryButton():Element{
        const retryButton:Element = document.querySelector("#retry-button")!
        retryButton.addEventListener("click",()=>{
            this.startNewGame()
        })
        return retryButton
    }
    private clearCanvas():void{
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
    }
    public startNewGame():void{
        this.switchRetryButtonState()
        this.clearCanvas()
        this.game = new Game(() => this.switchRetryButtonState())
        this.game.start()
    }
}
const gameController:GameController = new GameController()
gameController.startNewGame()
