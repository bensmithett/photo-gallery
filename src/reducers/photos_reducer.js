import {ActionTypes, AsyncActionStages} from 'config/constants'

export default function photosReducer (state = {}, action) {
  switch (action.type) {
    case ActionTypes.FETCH_PHOTOS_FOR_USER:
      // One action that can take multiple forms is pretty gross...
      // Is there a better way to do this with Flux Standard Actions?
      // If not, should these be scoped to AsyncActionTypes or named so there's a hint on how to
      // handle them in reducers?
      switch (action.meta.stage) {
        case AsyncActionStages.SUCCESS:
          // Normalizing in reducers is also pretty gross
          // TODO: Use https://github.com/gaearon/normalizr
          const normalizedPhotoData = action.payload.photos.reduce((photos, photo) => {
            photos[photo.id] = {
              url: photo.url,
              ownerID: action.payload.user.id
            }
            return photos
          }, {})

          return {
            ...state,
            ...normalizedPhotoData
          }
        default:
          return state
      }

    default:
      return state
  }
}
