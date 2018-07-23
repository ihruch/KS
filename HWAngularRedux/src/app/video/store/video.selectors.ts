import { createSelector, State } from '@ngrx/store';
import { IVideoState, videoState } from './video.state';

export const selectVideos = createSelector(
  videoState,
  state => state.movies['items']
);

export const selectSingleVideo = createSelector(
  videoState,
  state => state.selected
);
