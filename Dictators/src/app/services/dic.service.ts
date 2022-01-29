import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dictator } from '../interface/dictator';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DicService {
  URL: string = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  addDictator(userdata:any){
    return this.http.post<any>(this.URL, userdata)
  }

  showDictator(): Observable<Dictator[]> {
    return this.http.get<Dictator[]>(this.URL);
  }

  deleteDictator(userdata:number){
    return this.http.delete<any>(this.URL + "?ids=" + userdata)
  }
}
