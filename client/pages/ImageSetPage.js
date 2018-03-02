const Tram = require('tram-one')
const html = Tram.html({
  Image: require('../elements/Image')
})

const getOrFetchAlbumDOM = (store, actions) => {
  const albumId = 400055263765484
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

module.exports = (store, actions) => {
  return html`
    <div>
      ${getOrFetchAlbumDOM(store, actions)}
    </div>
  `
}
