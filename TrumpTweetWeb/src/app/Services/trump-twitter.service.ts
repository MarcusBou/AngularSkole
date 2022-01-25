import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tweet } from '../Interfaces/tweet';

@Injectable({
  providedIn: 'root'
})
export class TrumpTwitterService {

  constructor(private http: HttpClient) { }

  getTweets(): Observable<Tweet[]>{
    return this.http.get<Tweet[]>("./assets/data/TweetsData.json");
  }
}