import { Component, OnInit } from '@angular/core';
import { elementAt, observable } from 'rxjs';
import { Dictator } from 'src/app/interface/dictator';
import { DicService } from 'src/app/services/dic.service';

@Component({
  selector: 'app-show-dictator',
  templateUrl: './show-dictator.component.html',
  styleUrls: ['./show-dictator.component.css']
})
export class ShowDictatorComponent implements OnInit {

  constructor(private dc: DicService) { }

  Dictators: Dictator[] = [];

  ngOnInit(): void {
    console.log("I will show now")
    this.dc.showDictator().subscribe((data: Dictator[]) => {
      next: this.Dictators = data;
    })
  }

  onClick():void{
    console.log(this.Dictators[0]);
  }
}
