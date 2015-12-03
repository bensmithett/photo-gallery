import request from 'superagent-bluebird-promise'
import {ActionTypes, AsyncActionStages} from 'config/constants'

export default function fetchPhotosForUser (username) {
  return function (dispatch) {
    dispatch(begin(username))

    // fake a slow request
    window.setTimeout(function () {
      request
        .get(`/api/${username}.json`)
        .promise()
        .then(
          (response) => dispatch(success(response.body)),
          (response) => dispatch(error(response))
        )
    }, 1500)
  }
}

export function begin (username) {
  return {
    type: ActionTypes.FETCH_PHOTOS_FOR_USER,
    meta: {
      stage: AsyncActionStages.BEGIN
    }
  }
}

export function success (response) {
  return {
    type: ActionTypes.FETCH_PHOTOS_FOR_USER,
    payload: response,
    meta: {
      stage: AsyncActionStages.SUCCESS
    }
  }
}

export function error (error) {
  return {
    type: ActionTypes.FETCH_PHOTOS_FOR_USER,
    payload: error,
    error: true,
    meta: {
      stage: AsyncActionStages.ERROR
    }
  }
}
