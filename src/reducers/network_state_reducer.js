import {ActionTypes} from 'config/constants'

const initialState = {
  inFlightRequests: []
}

export default function networkStateReducer (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.REQUEST_PHOTOS_FOR_USER:
      return {
        inFlightRequests: [...state.inFlightRequests, action.username]
      }

    case ActionTypes.RECEIVE_PHOTOS_FOR_USER:
      return {
        inFlightRequests: state.inFlightRequests.filter((username) => action.username !== username)
      }      

    default:
      return state
  }
}
