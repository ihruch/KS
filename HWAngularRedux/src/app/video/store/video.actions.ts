import { Action } from '@ngrx/store';
import { IVideo } from './../model/video.interface';

export const VideoActionsType = {
  GetData: '[Videos] Get initial data',
  GetChannel: '[Videos] Get Channel',
  GetVideos: '[Videos] Get playlist movies',
  GetSingleVideo: '[Videos] Get single movie',
  ReturnToPlayList: '[Videos] Return to playlist movies',
  GetVideoComment: '[Video] Get comment video'
};

export class GetData implements Action {
  readonly type = VideoActionsType.GetData;
}

export class GetChannel implements Action {
  readonly type = VideoActionsType.GetChannel;
  constructor(public payload) {}
}

export class GetVideos implements Action {
  readonly type = VideoActionsType.GetVideos;
  constructor(public payload: IVideo[]) {}
}

export class GetSingleVideo implements Action {
  readonly type = VideoActionsType.GetSingleVideo;
}

export class ReturnToPlayList implements Action {
  readonly type = VideoActionsType.ReturnToPlayList;
}

export class GetVideoComment implements Action {
  readonly type = VideoActionsType.GetVideoComment;
  constructor(public payload) {}
}

export type VideoAction =
  | GetData
  | GetChannel
  | GetVideos
  | GetSingleVideo
  | ReturnToPlayList
  | GetVideoComment;
