const Tram = require('tram-one')
const html = Tram.html()

module.exports = (attrs) => {
  const {imageData: {id}, albumPage} = attrs

  const openImage = () => {
    window.history.pushState({}, '', `/images/${albumPage}/${id}`)
  }

  return html`
    <img class="galleryImage dropShadowHover grow" onclick=${openImage} src=${attrs.src} />
  `
}
