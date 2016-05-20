
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
      console.log('action.payload in GETLIKES:', action.payload)
      return action.payload.data
    case CREATE_LIKE:
      console.log('state in CREATE LIKE: ', state)
      console.log('action.payload.data in CREATE LIKEA: ', action.payload.data)
      return [...state, action.payload.data]
    case LIKE:
      // array of likes with like counts
      return action.payload.data
    default:
      return state
  }
}
