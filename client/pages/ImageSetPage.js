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

const getOrFetchAlbumDOM = (store, actions, params) => {
  const albumId = pageMap[params.albumPage]
  const imageSrc = image => image.thumbnail ? image.thumbnail : image.default
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
    return store.albums.album.map(image => html`<Image src=${imageSrc(image)} />`)
  default:
    return 'Error...'
  }
}

module.exports = (store, actions, params) => {
  return html`
    <div style=${imagesBlockStyle}>
      ${getOrFetchAlbumDOM(store, actions, params)}
    </div>
  `
}
