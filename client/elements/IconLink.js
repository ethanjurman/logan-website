const Tram = require('tram-one')
const html = Tram.html()

const linkStyle = `
  text-decoration: none;
`

module.exports = ({icon, link}, children) => {
  return html`
    <div>
      <a href=${link} style=${linkStyle}>
        <i class=${icon} ></i>
        ${children}
      </a>
    </div>
  `
}
