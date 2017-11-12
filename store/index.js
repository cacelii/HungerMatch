import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import auth from './auth';
import matches from './matches';

const rootReducer = combineReducers({
  auth,
  matches
});

// Add the thunk middleware to our store
const store = createStore(rootReducer, applyMiddleware(thunk));

//Enable persistence
persistStore(store);

export default store;
