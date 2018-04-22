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
    "logo links"
    "blurb blurb";
`

const headerStyle = `
  grid-area: header;
  font-size: 2em;
  margin: 0;
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

const blurbStyle = `
  grid-area: blurb;
  font-size: 0.7em;
  margin-left: 1em;
`

module.exports = (attrs) => {
  const goToHome = () => window.history.pushState({}, '', '/')
  return html`
    <div style="${containerGrid}${attrs.style}">
      <img style=${imageStyle} class="navMask" src="/mask_image.png" onclick=${goToHome} />
      <h1 style=${headerStyle}>
        The Eiferer's Armory
      </h1>
      <NavBar style=${linksStyle} />
      <p style=${blurbStyle}>
        Greetings, I’m Logan! There’s little I enjoy more than creating masks,
        costumes, props, and good old fashioned monsters! What you’ll see here
        is just a small sample of my ever-growing collection.
      </p>
    </h1>
  `
}
