import { IShape } from "../Interfaces/ishape";
export class Square implements IShape{
    a:number;
    constructor(a: number){
        this.a = a;
    }

    GetCircumference(): number {
        return this.a * 4;
    }

    GetArea(): number {
        return this.a * this.a;
    }
}
