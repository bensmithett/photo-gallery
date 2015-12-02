import {ActionTypes} from 'config/constants'

export default function selectPhoto (id) {
  return {
    type: ActionTypes.SELECT_PHOTO,
    id
  }
}
