const Tram = require('tram-one')
const html = Tram.html({
  Header: require('../elements/Header'),
  NavBar: require('../elements/Navbar'),
  Blurb: require('../elements/Blurb'),
  Body: require('../elements/Body'),
})

const largeBoxStyle = `
  height: 200%;
  width: 100px;
`

module.exports = () => {
  return html`
    <div>
      <NavBar />
      <Body>
        <Header />
        <Blurb />
        <div style=${largeBoxStyle} />
      </Body>
    </div>
  `
}
