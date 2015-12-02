import React from 'react'
import Photo from 'presentational_components/photo'

const PhotoAlbum = ({album, photos, users, selectedPhotoID, onPhotoClick}) => (
  <div>
    {
      album.map((photoID) => (
        <Photo
          key={photoID}
          id={photoID}
          url={photos[photoID].url}
          username={users[photos[photoID].ownerId].username}
          selected={photoID === selectedPhotoID}
          onClick={onPhotoClick}
        />
      ))
    }
  </div>
)

export default PhotoAlbum
