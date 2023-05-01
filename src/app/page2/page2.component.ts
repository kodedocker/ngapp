import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MyAppState } from '../store/app.state';
import { CommonItem } from '../store/common.reducer';
import { MatchScore } from '../store/score.reducer';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css'],
})
export class Page2Component implements OnInit {
  matchScore: MatchScore | undefined;
  commonItem: CommonItem | undefined;

  constructor(private store: Store<MyAppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      console.log(state);
      this.matchScore = state.matchScore;
      this.commonItem = state.commonItem;
    });
  }
}
