import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonItem } from './store/common.reducer';
import { increment } from './store/counter.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ngapp';

  // NgRx States
  counter$: Observable<number> = this.store.select('counter');
  myCounter: number = 0;
  myCommonItem: CommonItem | undefined;

  constructor(private store: Store<{ counter: number; common: CommonItem }>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      console.log(state);
      this.myCounter = state.counter;
      this.myCommonItem = state.common;
    });
  }

  increment() {
    this.store.dispatch(increment());
  }
}
