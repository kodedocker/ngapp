import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MyAppState } from '../store/app.state';
import {
  awayIncrement,
  homeIncrement,
  MatchScore,
} from '../store/score.reducer';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
})
export class Page1Component implements OnInit {
  counter: number | undefined;
  matchScore: MatchScore | undefined;

  constructor(private store: Store<MyAppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.counter = state.counter;
      this.matchScore = state.matchScore;
    });
  }

  homeScoreIncrement() {
    this.store.dispatch(homeIncrement());
  }

  awayScoreIncrement() {
    this.store.dispatch(awayIncrement());
  }
}
