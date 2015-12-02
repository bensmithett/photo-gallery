import React from 'react'
import ReactDOM from 'react-dom'
import PhotoAlbumContainer from 'container_components/photo_album_container'
import {createStore} from 'redux'
import AppReducer from 'reducers/app_reducer'
import {Provider} from 'react-redux'
import initialState from './initial_state'

let store = createStore(AppReducer, initialState)

ReactDOM.render(
  (
    <Provider store={store}>
      <PhotoAlbumContainer />
    </Provider>
  ),
  document.querySelector('.js-app-shell')
)
