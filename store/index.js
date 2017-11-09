import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import auth from './auth';

const rootReducer = combineReducers({
  auth
});

// Add the thunk middleware to our store
const store = createStore(rootReducer, applyMiddleware(thunk));

//Enable persistence
persistStore(store);

export default store;
