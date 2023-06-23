import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { Ajaxpage1Component } from './ajaxpage1/ajaxpage1.component';
import { EffectsModule } from '@ngrx/effects';
import { rootStore } from './store/app.state';
import { Ajax1Effects } from './store/ajax1.effects';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Ajaxpage1Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(rootStore),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([Ajax1Effects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
