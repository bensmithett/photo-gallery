import {combineReducers} from 'redux'
import albumReducer from 'reducers/album_reducer'
import photosReducer from 'reducers/photos_reducer'
import usersReducer from 'reducers/users_reducer'

const dataReducer = combineReducers({
  album: albumReducer,
  photos: photosReducer,
  users: usersReducer
})

export default dataReducer
