import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';



import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


import { BrowserRouter, Route   }  from 'react-router-dom';

class Hello extends React.Component {
    render(){
        return <div>Hello</div>
    }
}

class Good extends React.Component {
    render(){
        return <div>Good</div>
    }
}


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <div>
            <Route path="/hello" component={Hello} />
            <Route path="/good" component={Good} />
        </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
