const Tram = require('tram-one')
const html = Tram.html({
  Header: require('../elements/Header'),
  NavBar: require('../elements/Navbar'),
  Body: require('../elements/Body')
})

module.exports = (store, actions, params) => {
  const {albumPage} = params

  return html`
    <div>
      <NavBar page=${albumPage} />
      <Body>
        <Header />
      </Body>
    </div>
  `
}
