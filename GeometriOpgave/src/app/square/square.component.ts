import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { Square } from '../classes/square';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  a: number = 10;

  area?: number;
  circumference?: number;
  constructor() { }

  square : Square = new Square(this.a);
  ngOnInit(): void {
    this.onchange();
  }

  onchange():void {
    console.log(this.a);
    this.square.a = this.a;
    this.circumference = this.square.GetCircumference();
    this.area = this.square.GetArea();
  }
}
