import { Component, OnInit } from '@angular/core';
import { Atom } from 'src/app/interface/atom';
import { GetPeriodicService } from 'src/app/service/get-periodic.service';

@Component({
  selector: 'app-periodic-table',
  templateUrl: './periodic-table.component.html',
  styleUrls: ['./periodic-table.component.css']
})
export class PeriodicTableComponent implements OnInit {

  constructor(private periodicService: GetPeriodicService) { }

  atoms: Atom[] = [];
  ngOnInit(): void {
    this.periodicService.getAllData().subscribe((data: Atom[]) =>{
      next: this.atoms = data;
      complete: this.atoms[4].period = 2;
    })
  }

  GetColor(atom: Atom):string{
    return "#" + atom.cpkHexColor;
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
    console.log(atom.name)
  }

}
