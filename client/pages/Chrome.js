const Tram = require('tram-one')
const html = Tram.html({
  Header: require('../elements/Header'),
  HomePage: require('./HomePage')
})

const pageStyle = `
  margin: 2em;
`

module.exports = (store, actions, params, subroute) => {
  const page = (subroute === undefined) ? html`<HomePage />` : subroute
  return html`
    <div style=${pageStyle}>
      <Header />
      ${page}
    </div>
  `
}
