import { createStore, combineReducers } from 'redux';

import user from './user/reducer';

const rootReducer = combineReducers({
    user
});

const store = createStore(rootReducer);

export default store;
