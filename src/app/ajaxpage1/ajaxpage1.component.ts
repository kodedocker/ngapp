import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ajaxAction1, AjaxItem1, counterAction1 } from '../store/ajax1.reducer';
import { MyAppState } from '../store/app.state';

@Component({
  selector: 'app-ajaxpage1',
  templateUrl: './ajaxpage1.component.html',
  styleUrls: ['./ajaxpage1.component.css'],
})
export class Ajaxpage1Component implements OnInit {
  ajaxItem1: AjaxItem1 | undefined;

  constructor(private store: Store<MyAppState>) {}

  ngOnInit(): void {
    this.store.dispatch(ajaxAction1());
    this.store.subscribe((state: MyAppState) => {
      this.ajaxItem1 = state.ajaxItem1;
    });
  }

  incrementAction() {
    this.store.dispatch(counterAction1());
  }
}
