import {combineReducers} from 'redux'
import photosReducer from 'reducers/photos_reducer'
import usersReducer from 'reducers/users_reducer'

const dataReducer = combineReducers({
  photos: photosReducer,
  users: usersReducer
})

export default dataReducer
