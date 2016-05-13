
const INITIAL_STATE = [];

import {
  GET_ALL_RECORDS
} from '../actions/recordActions';

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ALL_RECORDS:
      return action.payload.data
    default:
      return state;
  }
}
