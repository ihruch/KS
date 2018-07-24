import { createSelector, State } from '@ngrx/store';
import { IVideoState, videoState } from './video.state';

export const selectVideos = createSelector(videoState, state => state.movies);

export const selectChannel = createSelector(videoState, state => state.channel);
