const Tram = require('tram-one')
const html = Tram.html({
  NavLink: require('./NavLink')
})

const navGrid = `
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.8em;
`

const linkStyle = `
  padding: 0.0em 0.8em 0em 0.0em;
`

module.exports = (attrs) => {
  return html`
    <div style="${navGrid}${attrs.style}">
      <NavLink style=${linkStyle} href="/images/masks">Masks</NavLink>
      <NavLink style=${linkStyle} href="/images/makeup">Makeup</NavLink>
      <NavLink style=${linkStyle} href="/images/costumes">Costumes</NavLink>
      <NavLink style=${linkStyle} href="/images/props">Props</NavLink>
    </div>
  `
}
