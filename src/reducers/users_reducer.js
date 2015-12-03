import {ActionTypes, AsyncActionStages} from 'config/constants'

export default function usersReducer (state = {}, action) {
  switch (action.type) {
    case ActionTypes.FETCH_PHOTOS_FOR_USER:
      switch (action.meta.stage) {
        case AsyncActionStages.SUCCESS:
          const newState = {
            ...state,
            ...{
              [action.payload.user.id]: {
                username: action.payload.user.username
              }
            }
          }
          return newState

        default:
          return state
      }

    default:
      return state
  }
}
