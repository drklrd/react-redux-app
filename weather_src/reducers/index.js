import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({ //wiring reducers to our app.
    weather : WeatherReducer
});

export default rootReducer;
