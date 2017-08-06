import { FETCH_WEATHER } from '../actions/index';

export default function(state=[],action){
    switch (action.type){
        case FETCH_WEATHER :
            // NEVER !!!
            // return state.push(action.payload.data); NEVER DO THIS. NEVER MUTATE ARRAY !!!!
            // return state.concat([action.payload.data]); // THIS IS GOOD.
            return [action.payload.data, ...state]; // OR THE ES6 way
    }
    return state;
}
