const initialState = {
  data: {
    photos: {
      '1': {
        ownerId: '74',
        url: 'https://farm1.staticflickr.com/640/20395641339_5408078d82_k.jpg'
      },
      '2': {
        ownerId: '75',
        url: 'https://farm9.staticflickr.com/8806/17466004341_cf8ec2485e_k.jpg'
      },
      '3': {
        ownerId: '75',
        url: 'https://farm6.staticflickr.com/5449/17772137531_46722e8ab5_k.jpg'
      }
    },
    users: {
      '74': {
        username: 'lucas'
      },
      '75': {
        username: 'ben'
      },
    },
    album: ['2', '3', '1']
  }
}

export default initialState
