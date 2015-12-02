import {combineReducers} from 'redux'
import albumReducer from 'reducers/album_reducer'
import photosReducer from 'reducers/photos_reducer'
import usersReducer from 'reducers/users_reducer'
import uiStateReducer from 'reducers/ui_state_reducer'

const appReducer = combineReducers({
  album: albumReducer,
  photos: photosReducer,
  users: usersReducer,
  uiState: uiStateReducer
})

export default appReducer
