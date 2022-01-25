import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piping-translator',
  templateUrl: './piping-translator.component.html',
  styleUrls: ['./piping-translator.component.css']
})
export class PipingTranslatorComponent implements OnInit {
  text:string = "";
  constructor() { 
    this.text = "Hej Med Dig"
  }

  ngOnInit(): void {
  }
}
