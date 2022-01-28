import { Component, OnInit, Input } from '@angular/core';
import { Atom } from 'src/app/interface/atom';

@Component({
  selector: 'app-show-atom-info',
  templateUrl: './show-atom-info.component.html',
  styleUrls: ['./show-atom-info.component.css']
})
export class ShowAtomInfoComponent implements OnInit {

  constructor() { }
  @Input() infoAtom? : Atom;
  ngOnInit(): void {
  }

  GetColor():string{
    if(this.infoAtom?.cpkHexColor == 'unknown'){
      return '#eee'
    }else{
      return "#" + this.infoAtom?.cpkHexColor;
    }
  }
}
