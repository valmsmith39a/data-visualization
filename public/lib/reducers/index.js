import { combineReducers } from 'redux';
import RecordsReducer from './reducer_records';
import LikeReducer from './reducer_like';

const rootReducer = combineReducers({
  records: RecordsReducer,
  likes: LikeReducer
});

export default rootReducer;
