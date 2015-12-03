import React, {Component, PropTypes} from 'react'

export default class UserForm extends Component {
  _handleSubmit (event) {
    event.preventDefault()
    this.props.onSubmit(this.input.value)
    this.input.value = ''
  }

  render () {
    return (
      <form onSubmit={this._handleSubmit.bind(this)}>
        <input ref={(el) => this.input = el} />
        <button>Get photos!</button>
      </form>
    )
  }
}

UserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
