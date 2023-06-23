import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';
import { matchScoreReducer } from './store/score.reducer';
import { commonItemReducer } from './store/common.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { Ajaxpage1Component } from './ajaxpage1/ajaxpage1.component';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent, Page1Component, Page2Component, Ajaxpage1Component],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      counter: counterReducer,
      matchScore: matchScoreReducer,
      commonItem: commonItemReducer,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
