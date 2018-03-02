const Tram = require('tram-one')
const html = Tram.html({
  Header: require('../elements/Header'),
  NavSideBar: require('../elements/NavSideBar'),
  Body: require('../elements/Body')
})

module.exports = (store, actions, params, subroute) => {
  const albumPage = params && params.albumPage

  return html`
    <div>
      <Body>
        <NavSideBar page=${albumPage} />
        ${subroute}
      </Body>
    </div>
  `
}
