const FB = require('fb')
const token = require('../access_tokens').fb

/* potential callback
(response) => {
  if (response && !response.error) {
    const images = response
      .data
      .map(responsePhotosToImages)
    console.log(images)
  } else {
    console.error(response)
  }
}
*/

module.exports = (token, album, callback) => {
  // these are the target height for the images
  const resolutions = {
    225: 'thumbnail',
    720: 'main'
  }

  const albums = '400055263765484'

  const addResolutionToImage = (image, resolution) => {
    return resolutions[resolution.height] ? Object.assign({}, image, {[resolutions[resolution.height]]: resolution.source}) : image
  }

  const responsePhotosToImages = (imageObject) => {
    const finalObject = imageObject
      .images
      .reduce(addResolutionToImage, {id: imageObject.id})
    return finalObject
  }

  FB.api(
    `/${400055263765484}/photos?fields=images`
    { access_token: token },
    callback
  )

}

