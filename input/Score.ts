export class Score{
    private readonly scoreElement:Element
    private score:number
    constructor(){
        this.scoreElement = document.querySelector('#score-element')!
        this.score = 0;
    }
    public updateScore(){
        this.score+=1
        this.scoreElement.innerHTML = this.score.toString()
    }
}