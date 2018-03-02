/* eslint-disable camelcase */
const FB = require('fb')

// page id for The Eiferer's Armory
const pageId = '346900572414287'

const fetchAlbum = (token, album, callback, error) => {
  // these are the target height for the images
  const resolutions = {
    225: 'thumbnail',
    720: 'main'
  }

  const addResolutionToImage = (image, resolution) => {
    return resolutions[resolution.height] ? Object.assign({}, image, {[resolutions[resolution.height]]: resolution.source}) : image
  }

  const responsePhotosToImages = (imageObject) => {
    const finalObject = imageObject
      .images
      .reduce(addResolutionToImage, {id: imageObject.id})
    return finalObject
  }

  const handleResponse = (response) => {
    const album = JSON.parse(response[0].body)
    const photos = JSON.parse(response[1].body)
    if (!response || response.error) {
      return error(response)
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