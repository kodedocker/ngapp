import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Module1Model } from '../store/module1.redcer';
import { Module2Model } from '../store/module2.redcer';
import { AppRootState } from '../store/root.reducer';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
})
export class Page1Component implements OnInit {
  module1: Module1Model | undefined;
  module2: Module2Model | undefined;

  constructor(private store: Store<AppRootState>) {}
  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.module1 = state.module1;
      this.module2 = state.module2;
    });
  }
}
