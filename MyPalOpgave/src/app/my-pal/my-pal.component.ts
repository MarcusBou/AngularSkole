import { Component, OnInit, Input } from '@angular/core';
import { Pal } from '../interface/pal';

@Component({
  selector: 'app-my-pal',
  templateUrl: './my-pal.component.html',
  styleUrls: ['./my-pal.component.css']
})
export class MyPalComponent implements OnInit {
  @Input() myPal! : Pal;
  constructor() { 
    

  }
  
  ngOnInit(): void {
  }

}
