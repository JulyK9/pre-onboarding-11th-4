import { combineReducers, createStore, Store } from 'redux';
import { searchWordReducer } from './reducers';
import { toggleDropDownReducer } from './toggleReducers';

export const rootReducer = combineReducers({
  search: searchWordReducer,
  dropDown: toggleDropDownReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store: Store<RootState> = createStore(rootReducer);
