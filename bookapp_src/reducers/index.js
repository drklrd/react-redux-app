// reducer is a function that returns a piece of app state

import { combineReducers } from 'redux';

import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({ //wiring reducers to our app.
    books : BooksReducer,
    activeBook : ActiveBook
});

export default rootReducer;
