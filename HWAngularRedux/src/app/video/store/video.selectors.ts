import { createSelector } from '@ngrx/store';
import { IVideoState, videoState } from './video.state';

export const selectVideos = createSelector(
  videoState,
  state => state.movies.items
);
