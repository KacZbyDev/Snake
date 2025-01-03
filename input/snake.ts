import { Position } from "./position.js"

enum Direction{
    UP = 'up',
    DOWN = 'down',
    RIGHT = 'right',
    LEFT = 'left'
}
export class Snake{
    segments: Position[]
    direction: Direction
    private directionChangeFlag:boolean

    constructor(){
        this.segments = [new Position(12,12)]
        this.direction = Direction.RIGHT
        this.directionChangeFlag = false
    }
    setNewDirection(keyPressed:number):void{
        if(this.directionChangeFlag) return
        switch(keyPressed){
            case 115:
                if(this.direction === Direction.DOWN) return
                this.direction = Direction.UP
                break
            case 97:
                if(this.direction === Direction.RIGHT) return
                this.direction = Direction.LEFT
                break
            case 119:
                if(this.direction === Direction.UP) return
                this.direction = Direction.DOWN
                break
            case 100:
                if(this.direction === Direction.LEFT) return
                this.direction = Direction.RIGHT
                break
        }
        this.directionChangeFlag = true
    }
    public resetDirectionFlag():void{
        this.directionChangeFlag = false
    }
    public getNewHead():Position{
        const oldHead = this.getCurrentHead()
        const newHead:Position = new Position(oldHead.x,oldHead.y)
        switch(this.direction){
            case Direction.UP:
                newHead.y+=1
                break
            case Direction.LEFT:
                newHead.x-=1
                break
            case Direction.DOWN:
                newHead.y-=1
                break
            case Direction.RIGHT:
                newHead.x+=1
                break
        }
        return newHead
    }
    public setNewPosition(hasEaten:boolean, newHead:Position):void{
        const arrayStart:number = hasEaten ? 0 : 1
        this.segments = [...this.segments.slice(arrayStart),newHead]
    }
    public getCurrentHead():Position{
        return this.segments.at(-1)!
    }
    public hasPosition(position:Position):boolean{
        for(let i = 0; i< this.segments.length;i++){
            const element = this.segments.at(i)!
            if(this.comparePosition(element,position)) return true
            
            
        }        
        return false
    }
    public detectCollision(head:Position):boolean{
        if(head.detectOutOfBound()) return true
        for(const element of this.segments){
            if(this.comparePosition(element,head)) return true
            
            
        }
        return false
    }
    private comparePosition(element:Position,position:Position):boolean{
        if(element.x === position.x && element.y === position.y) return true
        return false
    }
}
