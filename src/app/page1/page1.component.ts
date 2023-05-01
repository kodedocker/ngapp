import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment } from '../store/counter.reducer';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
})
export class Page1Component implements OnInit {
  // NgRx States
  counter$: Observable<number> = this.store.select('counter');
  myCounter: number = 0;

  constructor(private store: Store<{ counter: number }>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      console.log(state);
      this.myCounter = state.counter;
    });
  }

  increment() {
    this.store.dispatch(increment());
  }
}
