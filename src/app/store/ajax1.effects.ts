import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { ajaxAction1, ajaxSuccessAction1, PostModel } from './ajax1.reducer';

const url = `https://jsonplaceholder.typicode.com/posts`;

@Injectable()
export class Ajax1Effects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  getAjax1$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ajaxAction1),
      switchMap(() =>
        this.http.get(url).pipe(
          map((responseData) => {
            return ajaxSuccessAction1({ list: responseData });
          }),
          catchError((error) => EMPTY)
        )
      )
    )
  );
}
