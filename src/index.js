import React from 'react'
import ReactDOM from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import {createStore, applyMiddleware} from 'redux'
import AppReducer from 'reducers/app_reducer'
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute} from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

import AppContainer from 'container_components/app_container'
import PhotoAlbumContainer from 'container_components/photo_album_container'

const loggerMiddleware = createLogger()

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)(createStore)

let store = createStoreWithMiddleware(AppReducer)

ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={createBrowserHistory()}>
        <Route path='/' component={AppContainer}>
          <IndexRoute component={PhotoAlbumContainer} />
        </Route>
      </Router>
    </Provider>
  ),
  document.querySelector('.js-app-shell')
)
