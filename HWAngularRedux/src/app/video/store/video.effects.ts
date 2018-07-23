import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Actions, ofType, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import {
  switchMap,
  catchError,
  map,
  mergeMap,
  tap,
  startWith
} from 'rxjs/operators';

import { ApiService } from '../services/api.service';
import * as Action from './video.actions';

@Injectable()
export class VideoEffects {
  idList: string;

  constructor(
    private http: HttpClient,
    private actions$: Actions,
    private apiService: ApiService
  ) {}

  @Effect()
  getPlayList$ = this.actions$.pipe(
    ofType(Action.VideoActionsType.GetData),
    switchMap(() => {
      return this.apiService.getDataChannel().pipe(
        map(
          channel =>
            (this.idList =
              channel['items']['0'].contentDetails.relatedPlaylists.uploads) // вытянул ключ и сохранил в свойство класса
        ),
        map(channel => {
          return new Action.GetChannel(channel);
        })
      );
    })
  );

  @Effect()
  getMovies$ = this.actions$.pipe(
    ofType(Action.VideoActionsType.GetChannel),
    switchMap(() => {
      console.log();
      return this.apiService
        .getDataPlayList(this.idList) // UUVBErcpqaokOf4fI5j73K_w / Использовал ключ
        .pipe(map(movie => new Action.GetVideos(movie)));
    })
  );
}
