import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/index';
import * as Action from './video.actions';
import * as Selector from './video.selectors';

import { IVideoState } from './video.state';
import { IVideo } from '../model/video.interface';

import {
  switchMap,
  catchError,
  map,
  mergeMap,
  tap,
  startWith,
  filter
} from 'rxjs/operators';

@Injectable()
export class VideoStoreService {
  constructor(private store$: Store<IVideoState>) {} //

  // создаем внутренюю ф-цию которая  вызывает диспачит наш стор
  private dispatchAction(action) {
    this.store$.dispatch(action);
  }

  dispatchGetData() {
    this.dispatchAction(new Action.GetData());
  }

  dispatchGetSingleMovie() {
    this.dispatchAction(new Action.GetSingleVideo());
  }

  dispatchReturnToPlayList() {
    this.dispatchAction(new Action.ReturnToPlayList());
  }

  selectVideos(): Observable<IVideo[]> {
    return this.store$.pipe(select(Selector.selectVideos));
  }

  selectChanell(): Observable<IVideo[]> {
    return this.store$.pipe(select(Selector.selectChannel));
  }

  getItemMovie(id: number | string) {
    return this.store$.pipe(select(Selector.selectVideos)).pipe(
      map(heroes =>
        heroes.filter(singleMovie => {
          const idMovie = singleMovie['snippet']['resourceId']['videoId'];
          return idMovie === id;
        })
      )
    );
  }
} // end class

// vDMJVrVY3ME
// const clicksOnDivs = clicks.pipe(filter(ev => ev.target.tagName === 'DIV'));  movie.snippet.resourceId.videoI
/*************************************************** */
