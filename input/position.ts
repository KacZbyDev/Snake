export class Position{
    x:number;
    y:number;

    constructor(x:number,y:number){
        this.x = x;
        this.y = y;
    }

    getXDrawPosition():number{
        return this.x* 20;
    }
    getYDrawPosition():number{
        return this.y * 20
    }
    detectOutOfBound():boolean{
        return this.y < 0 || this.y > 19 || this.x < 0 || this.x > 19
    }
    
}