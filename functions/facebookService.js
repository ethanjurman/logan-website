/* eslint-disable camelcase */
const FB = require('fb')

// page id for The Eiferer's Armory
const pageId = '346900572414287'

const fetchAlbum = (token, album, callback, error) => {
  // these are the target height for the images
  const resolutions = {
    thumbnail: 480,
    full: 720
  }

  const getResolutionType = (height) => {
    if (height >= resolutions.full) {
      return 'full'
    }
    if (height >= resolutions.thumbnail) {
      return 'thumbnail'
    }
    return false
  }

  const addResolutionToImage = (image, imageData, index, images, type) => {
    const resType = type || getResolutionType(imageData.height)
    return resType ? Object.assign({}, image, {[resType]: imageData.source}) : image
  }

  const responsePhotosToImages = (imageObject) => {
    const collectionWithThumbnail = addResolutionToImage({}, imageObject.images[0], 0, 0, 'thumbnail')
    const collectionWithFull = addResolutionToImage({}, imageObject.images[0], 0, 0, 'full')
    const collectionObject = imageObject
      .images
      .reduce(addResolutionToImage, {id: imageObject.id})
    return Object.assign({}, collectionWithFull, collectionWithThumbnail, collectionObject)
  }

  const handleResponse = (response) => {
    const album = JSON.parse(response[0].body)
    const photos = JSON.parse(response[1].body)
    if (!response || response.error || response[0].code !== 200 || response[1].code !== 200) {
      return error('Error: Failed to parse Facebook data')
    }
    if (album.from.id !== pageId) {
      return error({error: 'album owner id did not match expected value'})
    }
    const images = photos
      .data
      .map(responsePhotosToImages)
    callback(images)
  }

  FB.setAccessToken(token)
  FB.api('', 'post', {
    batch: [
      {method: 'get', relative_url: `${album}?fields=from,name`},
      {method: 'get', relative_url: `${album}/photos?fields=images`}
    ]
  }, handleResponse)
}

module.exports = {
  fetchAlbum
}
