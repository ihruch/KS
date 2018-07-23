import { VideoActionsType, VideoAction } from './video.actions';

import { initState } from './video.state';


export function Reducer(state = initState, action: VideoAction) {
  switch (action.type) {
    case VideoActionsType.GetData: {
      return {
        ...state
      };
    }

    case VideoActionsType.GetChannel: {
      return {
        ...state,
        channel: action.payload
      };
    }

    case VideoActionsType.GetVideos: {
      return {
        ...state,
        movies: action.payload
      };
    }

    default: {
      return state;
    }
  }
}
