import { Component, OnInit } from '@angular/core';
import { elementAt, observable } from 'rxjs';
import { Dictator } from 'src/app/interface/dictator';
import { DicService } from 'src/app/services/dic.service';
import { HandleDicService } from 'src/app/services/handle-dic.service';

@Component({
  selector: 'app-show-dictator',
  templateUrl: './show-dictator.component.html',
  styleUrls: ['./show-dictator.component.css']
})
export class ShowDictatorComponent implements OnInit {
  
  Dictators: Dictator[] = [];
  DictatorsReady: boolean = false;

  constructor(private dc: DicService, private hdc: HandleDicService) { 
    this.hdc.Dictators$.subscribe((dic: Dictator[])=>{
      next:
      if(this.Dictators.length !== dic.length){
        this.Dictators = dic;
      }
    })
    this.hdc.DictatorsReady$.subscribe((b:boolean)=>{
      this.DictatorsReady = b;
      if(this.DictatorsReady){
        console.log("this.Dictators:", this.Dictators)
      }
    })
  }

  LoadDictators() {
    this.hdc.LoadDictators();
  }


  ngOnInit(): void {
    this.LoadDictators();
  }

  DeleteDictator(index: number){
    this.dc.deleteDictator(index).subscribe(() => {
    });
    console.log("Deletet: " + index);
    this.LoadDictators();
  }
}
