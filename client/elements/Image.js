const Tram = require('tram-one')
const html = Tram.html()

const cropStyle = `
  object-fit: cover;
  cursor: pointer;
  width: 225px;
  height: 225px;
`

module.exports = (attrs) => {
  const {imageData: {id}, albumPage} = attrs;

  const openImage = () => {
    window.history.pushState({}, '', `/images/${albumPage}/${id}`)
  }
  
  return html`
    <img classname="dropShadowHover grow" onclick=${openImage} style=${cropStyle} src=${attrs.src} />
  `
}
