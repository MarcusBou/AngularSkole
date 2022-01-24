import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-pal',
  templateUrl: './my-pal.component.html',
  styleUrls: ['./my-pal.component.css']
})
export class MyPalComponent implements OnInit {

  @Input() imageLocation: string = "kage";
  @Input() name :  string = "kage";
  @Input() text! : string;
  constructor() { 
    

  }
  
  ngOnInit(): void {
  }

}
