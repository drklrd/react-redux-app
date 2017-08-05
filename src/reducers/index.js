import { combineReducers } from 'redux';

const rootReducer = combineReducers({ //wiring reducers to our app.
    state : (state = {} ) => state
});

export default rootReducer;
