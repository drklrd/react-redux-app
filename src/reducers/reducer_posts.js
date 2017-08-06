import { FETCH_POSTS, FETCH_POST } from '../actions';
import _ from 'lodash';

export default function(state={},action){

    switch(action.type){
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data,'id');
            break;
        case FETCH_POST :
            // const post = action.payload.data;
            // const newState = { ...state };
            // newState[post.id] = post;
            // return newState;
            // or better in es6
            return {
                ...state, [action.payload.data.id] : action.payload.data
            };
            break;
        case DELETE_POST:
            // benefit of using OBJECT as application level STATE
            return _.omit(state,action.payload);
            break;
        default:
            return state;
    }

}
