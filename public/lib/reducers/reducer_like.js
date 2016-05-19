
import {
  LIKE
} from '../../actions/recordActions'

const INITIAL_STATE = []

export default function (state=INITIAL_STATE, action) {
  case LIKE:
    return state 
  default:
    return state
}
