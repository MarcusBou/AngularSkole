import { Component, OnInit } from '@angular/core';
import { Square } from '../classes/square';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  value:string = "Square";
  constructor() { }

  ngOnInit(): void {
  }

}
