import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, exhaustMap, catchError, delay } from 'rxjs/operators';
import { asyncIncrement, asyncIncrementSuccess } from './counter.reducer';

@Injectable()
export class CounterEffects {
  counter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(asyncIncrement),
      exhaustMap(() =>
        of(100).pipe(
          delay(1000),
          map((data) => asyncIncrementSuccess({ incrementBy: data })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions) {}
}
