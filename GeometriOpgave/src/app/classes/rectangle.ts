import{Square} from "./square";
import { IShape } from "../Interfaces/ishape";
export class Rectangle extends Square implements IShape{
    b:number;

    constructor(a:number, b:number){
        super(a);
        this.b = b;
    }

    override GetArea(): number {
        return this.a * this.b;
    }

    override GetCircumference(): number {
        return this.a * 2 + this.b * 2;
    }
}
