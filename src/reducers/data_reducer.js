import {combineReducers} from 'redux'
import photosReducer from 'reducers/photos_reducer'
import usersReducer from 'reducers/users_reducer'
import signedInReducer from 'reducers/signed_in_reducer'

const dataReducer = combineReducers({
  photos: photosReducer,
  signedIn: signedInReducer,
  users: usersReducer
})

export default dataReducer
