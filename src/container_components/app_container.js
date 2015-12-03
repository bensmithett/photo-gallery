import React from 'react'
import {connect} from 'react-redux'
import authenticate from 'action_creators/async/authenticate'
import App from 'presentational_components/app'

const mapStateToProps = (state) => ({
  signedIn: state.data.signedIn
})

const mapDispatchToProps = (dispatch) => ({
  authenticate () {
    dispatch(authenticate())
  }
})

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer
