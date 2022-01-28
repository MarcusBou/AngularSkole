import { Component } from '@angular/core';
import { Atom } from './interface/atom';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Periodic-Table';

  currentatom?: Atom;
  
  showAtom(atom:Atom){
    this.currentatom = atom;
  }
}
