const Tram = require('tram-one')
const html = Tram.html({
  Header: require('../elements/Header'),
  NavBar: require('../elements/Navbar'),
  Blurb: require('../elements/Blurb')
})

const largeBoxStyle = `
  height: 200%;
  width: 100px;
`

module.exports = () => {
  return html`
    <div>
      <NavBar />
      <Header />
      <Blurb />
      <div style=${largeBoxStyle} />
    </div>
  `
}
