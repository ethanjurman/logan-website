const Tram = require('tram-one')
const html = Tram.html({
  Image: require('../elements/Image')
})

const imagesBlockStyle = `
  grid-area: images;
`

const pageMap = {
  masks: 400055263765484,
  makeup: 400055263765484,
  costumes: 400053603765650,
  props: 400053603765650
}

const getOrFetchAlbumDOM = (store, actions, params) => {
  const albumId = pageMap[params.albumPage]
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
    return store.albums.album.map(image => html`<Image src=${image.thumbnail} />`)
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
