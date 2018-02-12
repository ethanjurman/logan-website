const Tram = require('tram-one')
const html = Tram.html({
  Header: require('../elements/Header'),
  NavBar: require('../elements/Navbar'),
  Modal: require('../elements/Modal')
})

module.exports = (state, actions) => {
  return html`
    <div>
      <NavBar />
      <Header />
      <Modal state=${state} actions=${actions} />
      <div>
        <button onclick=${actions.showModal}> this is a button </button>
      </div>
    </div>
  `
}
