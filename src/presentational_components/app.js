import React, {Component} from 'react'

class App extends Component {
  componentDidMount () {
    this.props.authenticate()
  }

  render () {
    if (this.props.signedIn) {
      return <div>{this.props.children}</div>
    } else {
      return <div>authenticating...</div>
    }
  }
}

export default App
