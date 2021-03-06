const Tram = require('tram-one')
const html = Tram.html({
  Image: require('../elements/Image'),
  ModalImage: require('../elements/ModalImage'),
  LoadingSpinner: require('../elements/LoadingSpinner'),
  ErrorBlurb: require('../elements/ErrorBlurb')
})

const imagesBlockStyle = `
  text-align: center;
`

const pageMap = {
  masks: 430250844079259,
  makeup: 430249887412688,
  costumes: 430249267412750,
  props: 430251717412505
}

const getOrFetchAlbumDOM = (store, actions, params) => {
  const albumId = pageMap[params.albumPage]
  if (albumId === undefined) {
    return 'Error: Invalid Page'
  }
  switch (store.albums.status) {
  case 'NOT_LOADED':
    actions.fetchAlbum(albumId)
    return html`<LoadingSpinner />`
  case 'LOADING':
    return html`<LoadingSpinner />`
  case 'LOADED':
    if (store.albums.id !== albumId) {
      actions.fetchAlbum(albumId)
      return html`<LoadingSpinner />`
    }
    return store.albums.album.map(image => html`<Image imageData=${image} albumPage=${params.albumPage} src=${image.thumbnail} />`)
  default:
    return html`<ErrorBlurb pageId=${albumId} />`
  }
}

const getOrFetchModalImage = (store, actions, params) => {
  const {imageId, albumPage} = params
  const albumId = pageMap[albumPage]

  if (!imageId) {
    return null
  }

  switch (store.albums.status) {
  case 'NOT_LOADED':
    actions.fetchAlbum(albumId)
    return html`<LoadingSpinner />`
  case 'LOADING':
    return html`<LoadingSpinner />`
  case 'LOADED':
    if (store.albums.id !== albumId) {
      actions.fetchAlbum(albumId)
      return html`<LoadingSpinner />`
    }
    const imageData = store.albums.album.find(image => image.id === imageId)
    return html`
      <ModalImage
        imageData=${imageData}
        albumPage=${params.albumPage}
        src=${imageData.full}
      />
    `
  default:
    return 'Error... Try refreshing the page or coming back another time.'
  }
}

module.exports = (store, actions, params) => {
  let modalImage = null
  if (params.imageId) {
    modalImage = html`<ModalImage id=${params.imageId} albumPage=${params.albumPage} />`
  }
  return html`
    <div style=${imagesBlockStyle}>
      ${getOrFetchAlbumDOM(store, actions, params)}
      ${getOrFetchModalImage(store, actions, params)}
    </div>
  `
}
