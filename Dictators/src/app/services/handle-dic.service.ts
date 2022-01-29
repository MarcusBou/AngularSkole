import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Dictator } from '../interface/dictator';
import { DicService } from './dic.service';

@Injectable({
  providedIn: 'root'
})
export class HandleDicService {
  Dictators$ : BehaviorSubject<Dictator[]> = new BehaviorSubject<Dictator[]>([]);
  DictatorsReady$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private dicServ: DicService) { }

  LoadDictators(){
    let counts;
    this.dicServ.showDictator().subscribe((data: Dictator[]) => {
      next: 
      counts = data;

      complete:
      //console.log('complete called..')
      this.Dictators$.next(data);
      this.DictatorsReady$.next(true);
      //console.log("countries$", this.countries$.next.length);
     });
  }

  Refresh(){
    
  }
}
