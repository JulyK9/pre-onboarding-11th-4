const SET_TOGGLE = 'toggle/dropDown';

interface setToggleAction {
  type: string;
}

export function toggleDropDown() {
  return { type: SET_TOGGLE };
}

const INITIAL_STATE = {
  isOpen: false,
};

export function toggleDropDownReducer(state = INITIAL_STATE, action: setToggleAction) {
  if (action.type === 'toggle/dropDown') {
    return {
      isOpen: !state.isOpen,
    };
  }

  return state;
}
