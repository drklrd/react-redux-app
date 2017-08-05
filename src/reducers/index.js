import { combineReducers } from 'reducers';

import BooksReducer from './reducer_books';

const rootReducer = combineReducers({ //wiring reducers to our app.
    books : BooksReducer
});

export default rootReducer;
