const Tram = require('tram-one')
const html = Tram.html()

const cropStyle = `
  width: 225px;
  height: 225px;
  object-fit: cover;
`

module.exports = (attrs) => {
  return html`
    <img style=${cropStyle} src=${attrs.src} />
  `
}
