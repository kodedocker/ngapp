import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
})
export class Page1Component implements OnInit {
  counter: number | undefined;

  constructor(private store: Store<{ counter: number }>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      console.log(state);
      this.counter = state.counter;
    });
  }
}
