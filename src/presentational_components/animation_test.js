import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const AnimationTest = React.createClass({
  getInitialState () {
    return {item: 0}
  },

  render () {
    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName='fade'
          component='div'
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
        >
          <div key={this.state.item}>Item {this.state.item}</div>
        </ReactCSSTransitionGroup>

        <div>
          <button onClick={() => this.setState({item: this.state.item + 1})}>Update</button>
        </div>
      </div>
    )
  }
})

export default AnimationTest
