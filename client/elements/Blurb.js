const Tram = require('tram-one')
const html = Tram.html()

const blurbStyle = `
  padding-top: 1em;
  font-size: 1.2em;
`

module.exports = () => {
  return html`
    <p style=${blurbStyle}>
      Greetings, I’m Logan! There’s little I enjoy more than creating masks, costumes, props, and good old fashioned monsters! What you’ll see here is just a small sample of my ever-growing collection. So come in, take a look around, and make yourself at home!
    </p>
  `
}
