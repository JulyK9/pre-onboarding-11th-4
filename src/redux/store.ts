import { combineReducers, createStore, Store } from 'redux';
import { searchWordReducer } from './reducers';

export const rootReducer = combineReducers({
  search: searchWordReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store: Store<RootState> = createStore(rootReducer);
