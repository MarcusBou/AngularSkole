import { Component, OnInit } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import { Colors } from 'src/app/Classes/colors';
import { Atom } from 'src/app/interface/atom';
import { GetPeriodicService } from 'src/app/service/get-periodic.service';

@Component({
  selector: 'app-periodic-table',
  templateUrl: './periodic-table.component.html',
  styleUrls: ['./periodic-table.component.css']
})
export class PeriodicTableComponent implements OnInit {

  constructor(private periodicService: GetPeriodicService) { }

  @Output() newAtomEvent = new EventEmitter<Atom>();
  atom?:Atom;
  atoms: Atom[] = [];
  colors: Colors = new Colors();

  ngOnInit(): void {
    this.periodicService.getAllData().subscribe((data: Atom[]) =>{
      next: this.atoms = data;
      complete: this.atoms[4].period = 2;
      this.newAtomEvent.emit(this.atoms[0]);
      this.atom = this.atoms[0];
      this.ColorReset();
    })
  }

  CheckNumber(atom:Atom):boolean{
    if(atom.atomicNumber >= 57 && atom.atomicNumber <= 71){
      return false;
    }
    if(atom.atomicNumber >= 89 && atom.atomicNumber <= 103){
      return false;
    }
    return true;
  }

  onclick(atom:Atom){
    this.atom = atom;
    this.newAtomEvent.emit(atom);
  }

  ColorReset() {
    this.atoms.forEach(e => {
      e.color = this.colors.findColor(e);
    });
  }

  StateChangeColor(state: string, color: string) {
    this.atoms.forEach(e => {
      if (e.standardState == state) {
        e.color = color;
      } else {
        e.color = "#fff"
      }
    });
  }
}
