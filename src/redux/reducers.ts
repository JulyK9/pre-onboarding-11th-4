const SET_WORD = 'search/setWord';

interface SetWordAction {
  type: string;
  payload: string;
}

export function setSearchWord(currentWord: string) {
  return { type: SET_WORD, payload: currentWord };
}

const INITIAL_STATE = {
  currentWord: '',
};

export function searchWordReducer(state = INITIAL_STATE, action: SetWordAction) {
  if (action.type === 'search/setWord') {
    return {
      ...state,
      currentWord: action.payload,
    };
  }

  return state;
}
