import {ActionTypes, AsyncActionStages} from 'config/constants'

export default function signedInReducer (state = false, action) {
  switch (action.type) {
    case ActionTypes.AUTHENTICATE:
      switch (action.meta.stage) {
        case AsyncActionStages.SUCCESS:
          return true
        default:
          return state
      }

    default:
      return state
  }
}
