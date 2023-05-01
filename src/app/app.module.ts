import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';

@NgModule({
  declarations: [AppComponent, Page1Component, Page2Component],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      counter: counterReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
