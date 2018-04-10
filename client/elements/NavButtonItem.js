/* eslint-disable no-return-assign */
const Tram = require('tram-one')
const html = Tram.html()

const buttonStyle = `
  cursor: pointer;
  width: 100%;
  margin: 4px;
  font-size: 2em;
`

module.exports = (attrs) => {
  const nav = () => window.history.pushState({}, '', attrs.href)
  return html`
    <button style=${buttonStyle} type="button" class="btn btn-primary">
      <div class="nav-link" href=${attrs.href} onclick=${nav}>${attrs.label}</div>
    </button>
  `
}
