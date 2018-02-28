const Tram = require('tram-one')
const html = Tram.html({
  Blurb: require('../elements/Blurb')
})

// const largeBoxStyle = `
//   height: 200%;
//   width: 100px;
// `

module.exports = () => {
  return html`
    <Blurb />
  `
}
