
import {
  CREATE_RECORD,
  GET_LIKES,
  CREATE_LIKE,
  LIKE
} from '../actions/recordActions'

const INITIAL_STATE = []

export default function (state=INITIAL_STATE, action) {
  switch(action.type) {
    case GET_LIKES:
      return action.payload.data
    case CREATE_LIKE:
      return [...state, action.payload.data]
    case LIKE:
      // array of likes with like counts
      return action.payload.data
    default:
      return state
  }
}
