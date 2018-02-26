const Tram = require('tram-one')
const html = Tram.html()

const bodyStyle = `
  margin: 0px auto;
  max-width: 800px;
`

module.exports = (_, children) => {
  return html`
    <div style=${bodyStyle}>
      ${children}
    </div>
  `
}
