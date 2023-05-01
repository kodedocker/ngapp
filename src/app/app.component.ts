import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ngapp';
  counter: number | undefined;

  constructor(private store: Store<{ counter: number }>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      console.log(state);
      this.counter = state.counter;
    });
  }
}
