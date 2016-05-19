
import {
  CREATE_RECORD,
  LIKE
} from '../actions/recordActions'

const INITIAL_STATE = []

export default function (state=INITIAL_STATE, action) {
  switch(action.type) {
    case CREATE_RECORD:
    console.log('in like reducer');
      return state
    case LIKE:
      return state
    default:
      return state
  }
}
