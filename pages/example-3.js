const Tram = require('tram-one')
const html = Tram.html({
  Header: require('../elements/Header'),
  NavBar: require('../elements/Navbar')
})

module.exports = () => {
  return html`
    <div>
      <NavBar />
      <Header />
      <div>
        Thank you for using Tram-One!<br />
        To get started, edit <code>tram-one-app/pages/home.js</code>.
      </div>
    </div>
  `
}
