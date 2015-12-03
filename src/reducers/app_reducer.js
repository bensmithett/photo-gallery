import {combineReducers} from 'redux'
import dataReducer from 'reducers/data_reducer'
import uiStateReducer from 'reducers/ui_state_reducer'
import networkStateReducer from 'reducers/network_state_reducer'

const appReducer = combineReducers({
  data: dataReducer,
  uiState: uiStateReducer,
  networkState: networkStateReducer
})

export default appReducer
