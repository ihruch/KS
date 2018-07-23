import { createFeatureSelector } from '@ngrx/store';
import { IVideo } from '../model/video.interface';

export interface IVideoState {
  movies: IVideo[];
  selected: number;
}

export const initState: IVideoState = {
  movies: [],
  selected: 0
};

export const videoState = createFeatureSelector<IVideoState>('video');
