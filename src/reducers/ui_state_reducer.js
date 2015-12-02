import {ActionTypes} from 'config/constants'

const initialState = {
  selectedPhotoID: null
}

export default function uiStateReducer (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SELECT_PHOTO:
      return {
        selectedPhotoID: action.id
      }

    default:
      return state
  }
}
