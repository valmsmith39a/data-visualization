
import {
  CREATE_RECORD,
  LIKE
} from '../actions/recordActions'

const INITIAL_STATE = []

export default function (state=INITIAL_STATE, action) {
  switch(action.type) {
    case CREATE_RECORD:
      return [...state, 0]
    case LIKE:
      let index = action.payload.index
      let numOfLikes = state.slice(index, index + 1)[0]
      return [...state.slice(0, index), numOfLikes, ...state.slice(index+1)]
    default:
      return state
  }
}
