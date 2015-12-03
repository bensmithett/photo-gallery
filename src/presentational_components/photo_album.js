import React from 'react'
import Photo from 'presentational_components/photo'

const PhotoAlbum = ({photos, users, selectedPhotoID, onPhotoClick, onButtonClick}) => (
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

    <button onClick={() => onButtonClick('ben')}>Fetch Ben's photos</button>
    <button onClick={() => onButtonClick('lucas')}>Fetch Lucas' photos</button>
  </div>
)

export default PhotoAlbum
