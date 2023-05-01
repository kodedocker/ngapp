import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatchScore } from '../store/score.reducer';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css'],
})
export class Page2Component implements OnInit {
  matchScore: MatchScore | undefined;

  constructor(private store: Store<{ matchScore: MatchScore }>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.matchScore = state.matchScore;
    });
  }
}
