
import {
  CREATE_RECORD,
  CREATE_LIKE,
  LIKE
} from '../actions/recordActions'

const INITIAL_STATE = []

export default function (state=INITIAL_STATE, action) {
  switch(action.type) {
    case CREATE_LIKE:
      return [...state, action.payload.data]
    case LIKE:
      // array of likes with like counts
      return action.payload.data
    default:
      return state
  }
}
