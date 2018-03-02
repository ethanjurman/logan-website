const Tram = require('tram-one')
const html = Tram.html()

const bodyStyle = `
  margin: 10px auto;
  max-width: 1000px;
  display: grid;
  grid-template-columns: 25% 75%;
  grid-column-gap: 2em;
  grid-template-rows: auto;
  grid-template-areas:
    "header header"
    "nav images"
`

module.exports = (_, children) => {
  return html`
    <div style=${bodyStyle}>
      ${children}
    </div>
  `
}
