import React from 'react'

const Photo = ({id, url, username, selected, onClick}) => {
  const styles = selected ? {border: '3px solid blue'} : {}

  return (
    <div style={styles} onClick={() => onClick(id)} >
      <img src={url} width='200' />
      by {username}
    </div>
  )
}

export default Photo
