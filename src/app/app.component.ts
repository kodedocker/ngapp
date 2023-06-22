import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MyAppState } from './store/app.state';
import {
  decrement,
  increment,
  incrementWithPayload,
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

  incementWithPayloadV1(p1: number) {
    this.store.dispatch(incrementWithPayload({ incrementBy: p1 }));
  }
  incementWithPayloadV2(p1: number) {
    this.store.dispatch(incrementWithPayload({ incrementBy: p1 }));
  }

  decr() {
    this.store.dispatch(decrement());
  }
}
