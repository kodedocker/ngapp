import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MyAppState } from './store/app.state';
import {
  asyncIncrement,
  decrement,
  increment,
  incrementByPayload,
} from './store/counter.reducer';
import { MatchScore } from './store/score.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ngapp';
  counter: number | undefined;
  matchScore: MatchScore | undefined;

  constructor(private store: Store<MyAppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      console.log(state);
      this.counter = state.counter;
      this.matchScore = state.matchScore;
    });
  }

  increment() {
    this.store.dispatch(increment());
  }

  decr() {
    this.store.dispatch(decrement());
  }

  incrementBy() {
    this.store.dispatch(incrementByPayload({ incrementBy: 100 }));
  }

  asyncIncrement() {
    this.store.dispatch(asyncIncrement());
  }
}
