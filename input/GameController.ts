import { Game } from "./script.js"
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
        this.retryButton.addEventListener("click",()=>{

        })
        return retryButton
    }
}