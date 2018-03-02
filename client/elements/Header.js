const Tram = require('tram-one')
const html = Tram.html()

const headerBlockStyle = `
  grid-area: header;
`

module.exports = () => {
  return html`
    <h1 style=${headerBlockStyle} id="about">
      MaskAndMonsterWorks.com
    </h1>
  `
}
