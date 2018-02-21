import { combineReducers } from 'redux';
import postList from './posts';

const rootReducer = combineReducers({
    postList
});

export default rootReducer;