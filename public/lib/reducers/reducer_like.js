
import {
  CREATE_RECORD,
  LIKE
} from '../actions/recordActions'

const INITIAL_STATE = []

export default function (state=INITIAL_STATE, action) {
  switch(action.type) {
    case CREATE_RECORD:
      return [...state, {likes:0}]
    // case LIKE:
    //   let index = action.payload
    //   console.log('like state: ', state)
    //   let numOfLikes = state.slice(index, index + 1)[0] + 1
    //   console.log('num of likes: ', numOfLikes);
    //   return [...state.slice(0, index), numOfLikes, ...state.slice(index+1)]
    default:
      return state
  }
}
