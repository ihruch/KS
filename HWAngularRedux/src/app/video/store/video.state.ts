import { createFeatureSelector } from '@ngrx/store';
import { IVideo } from '../model/video.interface';

// создаем интерфейс непосредственно самого стейта
export interface IVideoState {
  channel: any[];
  movies: IVideo[];
  selected: number;
  idMovie: number | string;
}

// создаем начальное состояние
export const initState: IVideoState = {
  movies: [],
  selected: 0,
  channel: [],
  idMovie: ''
};

export const videoState = createFeatureSelector<IVideoState>('video');
