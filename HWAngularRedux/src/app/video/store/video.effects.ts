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
  startWith,
  withLatestFrom
} from 'rxjs/operators';

import { select, Store } from '@ngrx/store';
import { VideoStoreService } from './video-store.service';
import { ApiService } from '../services/api.service';
import * as Action from './video.actions';

@Injectable()
export class VideoEffects {
  idList: string;

  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private videoStoreService: VideoStoreService
  ) {}

  @Effect()
  getChannel$ = this.actions$.pipe(
    ofType<Action.GetData>(Action.VideoActionsType.GetData),
    switchMap(() => {
      return this.apiService.getDataChannel();
    }),
    map(channel => {
      return new Action.GetChannel(channel);
    })
  ); // end pipe

  @Effect()
  getPlayList$ = this.actions$.pipe(
    ofType<Action.GetChannel>(Action.VideoActionsType.GetChannel),
    switchMap(() => {
      return this.videoStoreService.selectChanell();
    }),
    switchMap(item => {
      let id = item['0'].contentDetails.relatedPlaylists.uploads;
      return this.apiService.getDataPlayList(id);
    }),

    map(movies => {
      return new Action.GetVideos(movies);
    })
  );
} // end MODULE
