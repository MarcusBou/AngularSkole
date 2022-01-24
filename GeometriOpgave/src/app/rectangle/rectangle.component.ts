import { Component, OnInit } from '@angular/core';
import { Rectangle } from '../classes/rectangle';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit {
  a:number = 10;
  b:number = 5;
  rect:Rectangle = new Rectangle(this.a,this.b);
  area?:number;
  circumference?:number;
  constructor() { }

  ngOnInit(): void {
    this.onchange();
  }

  onchange(): void{
    this.rect.a = this.a;
    this.rect.b = this.b;
    this.area = this.rect.GetArea();
    this.circumference = this.rect.GetCircumference();
  }
}
