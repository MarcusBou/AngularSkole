import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { Tweet } from 'src/app/Interfaces/tweet';
import { TrumpTwitterService } from 'src/app/Services/trump-twitter.service';


@Component({
  selector: 'app-trump-feed',
  templateUrl: './trump-feed.component.html',
  styleUrls: ['./trump-feed.component.css']
})
export class TrumpFeedComponent implements OnInit {

  tweets : Tweet[] = [];
  
  constructor(private trumpTwitterService: TrumpTwitterService) { }

  ngOnInit(): void {
    this.trumpTwitterService.getTweets().subscribe((data: Tweet[]) => {
      next: this.tweets = data;
    })
  }
}
