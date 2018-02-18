const Tram = require('tram-one')
const html = Tram.html({
  Header: require('../elements/Header'),
  NavBar: require('../elements/Navbar'),
  Modal: require('../elements/Modal')
})

const linkStyle = `
  cursor: pointer;
  text-decoration: underline;
`

module.exports = (state, actions) => {
  return html`
    <div>
      <NavBar />
      <Header />
      <Modal state=${state} actions=${actions} />
      <div>
        Hi I'm Logan. Lorem ipsum click the link here: <a style=${linkStyle} onclick=${actions.toggleModal}> more info </a>
      </div>
    </div>
  `
}
