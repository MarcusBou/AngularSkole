import { Component, OnInit, Input } from '@angular/core';
import { Colors } from 'src/app/Classes/colors';
import { Atom } from 'src/app/interface/atom';

@Component({
  selector: 'app-show-atom-info',
  templateUrl: './show-atom-info.component.html',
  styleUrls: ['./show-atom-info.component.css']
})
export class ShowAtomInfoComponent implements OnInit {

  constructor() { }
  @Input() infoAtom? : Atom;
  color: Colors = new Colors();
  ngOnInit(): void {
  }

  GetColor():string{
    if(this.infoAtom?.groupBlock != null){
      return this.color.findColor(this.infoAtom);
    }else{
      return "#eee";
    }
  }
}
