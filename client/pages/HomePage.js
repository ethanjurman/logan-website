const Tram = require('tram-one')
const html = Tram.html({
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
