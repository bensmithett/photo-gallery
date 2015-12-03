import React from 'react'
import Photo from 'presentational_components/photo'
import UserForm from 'presentational_components/user_form'
import UserList from 'presentational_components/user_list'

const PhotoAlbum = ({photos, users, selectedPhotoID, onPhotoClick, onFormSubmit}) => (
  <div>
    {
      Object.keys(photos).map((photoID) => (
        <Photo
          key={photoID}
          id={photoID}
          url={photos[photoID].url}
          username={users[photos[photoID].ownerID].username}
          selected={photoID === selectedPhotoID}
          onClick={onPhotoClick}
        />
      ))
    }

    <UserForm onSubmit={onFormSubmit} />

    <UserList users={users} />
  </div>
)

export default PhotoAlbum
