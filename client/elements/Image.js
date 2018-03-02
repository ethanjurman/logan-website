const Tram = require('tram-one')
const html = Tram.html()

const cropStyle = `
  object-fit: cover;
  cursor: pointer;
  width: 225px;
  height: 225px;
`

module.exports = (attrs) => {
  return html`
    <img classname="dropShadowHover grow" style=${cropStyle} src=${attrs.src} />
  `
}
