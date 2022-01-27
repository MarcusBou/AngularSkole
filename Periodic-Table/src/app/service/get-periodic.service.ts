import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, observable } from 'rxjs';
import { Atom } from '../interface/atom';

@Injectable({
  providedIn: 'root'
})
export class GetPeriodicService {
  path:string ="https://periodic-table-elements-info.herokuapp.com/elements"
  constructor(private http: HttpClient) { }

  getAllData(): Observable<Atom[]>{
    return this.http.get<Atom[]>(this.path);
  }
}
