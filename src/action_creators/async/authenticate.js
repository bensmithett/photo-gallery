import {ActionTypes, AsyncActionStages} from 'config/constants'

export default function authenticate () {
  return function (dispatch) {
    dispatch(begin())

    // fake a slow request
    window.setTimeout(function () {
      dispatch(success())
    }, 1500)
  }
}

export function begin () {
  return {
    type: ActionTypes.AUTHENTICATE,
    meta: {
      stage: AsyncActionStages.BEGIN
    }
  }
}

export function success () {
  return {
    type: ActionTypes.AUTHENTICATE,
    meta: {
      stage: AsyncActionStages.SUCCESS
    }
  }
}

export function error (error) {
  // TODO
}
