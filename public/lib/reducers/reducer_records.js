
const INITIAL_STATE = [];

import {
  GET_ALL_RECORDS,
  CREATE_RECORD,
  EDIT_RECORD,
  DELETE_RECORD
} from '../actions/recordActions';

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ALL_RECORDS:
      // action.payload.data is array of records
      return action.payload.data
    case CREATE_RECORD:
      // action.payload.data is the new record object
      return [...state, action.payload.data]
    case EDIT_RECORD:
      // action.payload.data is an objet with the record object and index
      const index = action.payload.data.index;
      return [...state.slice(0, index), action.payload.data.recordObject, ...state.slice(index+1)]
    case DELETE_RECORD:
      const indexDelete = action.payload.data;
      return [...state.slice(0, indexDelete), ...state.slice(indexDelete+1)]
    default:
      return state;
  }
}
