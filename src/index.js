import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));


// so what happened ?
 // we tied an action creator to our button "Book list". Wheneven clickd -> it called action creator which dispatched our action.
 // that action was send to all of our reducers and the reducer that cared about the particulr action (BOOK_SELECTED), they return a piece of state
 // and that state was  injected to containers and the containers rerendered
