const Tram = require('tram-one')
const html = Tram.html({
  Header: require('../elements/Header')
})

const pageStyle = `
  margin: 2em;
`

module.exports = (store, actions, params, subroute) => {
  return html`
    <div style=${pageStyle}>
      <Header />
      ${subroute}
    </div>
  `
}
