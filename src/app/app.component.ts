import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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
