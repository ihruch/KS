import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as Action from './video.actions';
import * as Selector from './video.selectors';
import { IVideoState } from './video.state';

@Injectable()
export class VideoStoreService {
  constructor(private store$: Store<IVideoState>) {}

  private dispatchAction(action) {
    this.store$.dispatch(action);
  }

  dispatchGetVideos() {
    this.dispatchAction(new Action.GetData());
  }

  selectVideos() {
    return this.store$.pipe(select(Selector.selectVideos));
  }
  
  selectSingleVideo() {
    return this.store$.pipe(
       select()
    )
  }

}

/*************************************************** */

// @Injectable()
// export class VideoStoreService {
//   constructor(private store$: Store<IVideoState>) {}

//   private dispatchAction(action) {
//     this.store$.dispatch(action);
//   }

//   dispatchGetVideos() {
//     this.dispatchAction(new Action.GetVideos());
//   }

//   selectVideos() {
//     return this.store$.pipe(select(Selector.selectVideos));
//   }
// }
