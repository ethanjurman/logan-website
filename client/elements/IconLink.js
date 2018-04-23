const Tram = require('tram-one')
const html = Tram.html()

const linkStyle = `
  white-space: nowrap;
`

module.exports = ({icon, link}, children) => {
  return html`
    <div>
      <a class="nav-link" href=${link} style=${linkStyle}>
        <i class=${icon} ></i>
        ${children}
      </a>
    </div>
  `
}
