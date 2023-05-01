import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MyAppState } from '../store/app.state';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
})
export class Page1Component implements OnInit {
  counter: number | undefined;

  constructor(private store: Store<MyAppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.counter = state.counter;
    });
  }
}
