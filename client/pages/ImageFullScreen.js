const Tram = require('tram-one')
const html = Tram.html({
  Image: require('../elements/Image')
})

const imagesBlockStyle = `
  grid-area: images;
`

const pageMap = {
  masks: 430250844079259,
  makeup: 430249887412688,
  costumes: 430249267412750,
  props: 430251717412505
}

const getImageData = (store, actions, params) => {
  const {imageId, albumPage} = params;
  const albumId = pageMap[albumPage]
  
  switch (store.albums.status) {
  case 'NOT_LOADED':
    actions.fetchAlbum(albumId)
    return 'fetching...'
  case 'LOADING':
    return 'loading...'
  case 'LOADED':
    if (store.albums.id !== albumId) {
      actions.fetchAlbum(albumId)
      return 'fetching...'
    }
    return store.albums.album.filter(image => image.id === imageId)[0]
  default:
    return 'Error...'
  }
}

module.exports = (store, actions, params) => {
  const goToAlbum = () => {
    window.history.pushState({}, '', `/images/${params.albumPage}`)
  }

  const imageData = getImageData(store, actions, params);

  return html`
    <div style=${imagesBlockStyle} >
      <img src=${imageData.main} onclick=${goToAlbum} />
    </div>
  `
}
