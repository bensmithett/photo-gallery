// This will probably be a route handler (or rendered by one) once the router is added

import React from 'react'
import PhotoAlbum from 'presentational_components/photo_album'
import {connect} from 'react-redux'
import selectPhoto from 'action_creators/select_photo'

// Which props do we want to inject, given the global state?
const mapStateToProps = (state) => ({
  album: state.data.album,
  photos: state.data.photos,
  users: state.data.users,
  selectedPhotoID: state.uiState.selectedPhotoID
})

// Define some callbacks that actually dispatch actions
const mapDispatchToProps = (dispatch) => ({
  onPhotoClick (id) {
    dispatch(selectPhoto(id))
  }
})

const PhotoAlbumContainer = connect(mapStateToProps, mapDispatchToProps)(PhotoAlbum)

export default PhotoAlbumContainer
