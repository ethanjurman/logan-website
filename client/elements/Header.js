const Tram = require('tram-one')
const html = Tram.html({
  NavBar: require('./NavBar')
})

const containerGrid = `
  font-size: 1.8em;
  display: grid;
  grid-template-columns: 4em auto;
  grid-template-rows: auto auto;
  grid-template-areas:
    "logo header"
    "logo links";
`

const headerStyle = `
  grid-area: header;
  font-size: 2em;
  margin: 0;
  cursor: pointer;
`

const linksStyle = `
  grid-area: links;
  align-items: baseline;
  padding-left: 0.25em;
`

const imageStyle = `
  grid-area: logo;
  width: 100%;
  cursor: pointer;
`

module.exports = (attrs) => {
  const goToHome = () => window.history.pushState({}, '', '/')
  return html`
    <div style="${containerGrid}${attrs.style}">
      <img style=${imageStyle} class="navMask" src="/mask_image.png" onclick=${goToHome} />
      <h1 style=${headerStyle} onclick=${goToHome}>
        The Eiferer's Armory
      </h1>
      <NavBar style=${linksStyle} />
    </h1>
  `
}
