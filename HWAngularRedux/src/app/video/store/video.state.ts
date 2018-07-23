import { createFeatureSelector } from '@ngrx/store';
import { IVideo } from '../model/video.interface';

export interface IVideoState {
  movies: IVideo[];
}
export interface IChannelState {
  channel: Object[];
}
export const initState = {
  channel: [],
  movies: []
};

export const videoState = createFeatureSelector<IVideoState>('video');
