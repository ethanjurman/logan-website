const Tram = require('tram-one')
const html = Tram.html({
  NavBar: require('./NavBar')
})

const containerGrid = `
  font-size: 1.8em;
  padding-left: 1rem;
  max-width: 860px;
  display: grid;
  grid-template-columns: 6em auto;
  grid-template-rows: 2em auto;
  grid-column-gap: 0.75em;
  grid-template-areas:
    "logo header"
    "logo links"
    "logo blurb";
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
`

const blurbStyle = `
  grid-area: blurb;
  font-size: 0.7em;
`

module.exports = (attrs) => {
  return html`
    <div style="${containerGrid}${attrs.style}">
      <img style=${imageStyle} src="/mask_image.png" />
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
