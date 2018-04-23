const Tram = require('tram-one')
const html = Tram.html()

const blurbStyle = `
  font-size: 1.8em;
  margin-left: 1em;
`

module.exports = () => {
  return html`
    <p style=${blurbStyle}>
      Greetings, I’m Logan! There’s little I enjoy more than creating masks,
      costumes, props, and good old fashioned monsters! What you’ll see here
      is just a small sample of my ever-growing collection.
    </p>
  `
}
