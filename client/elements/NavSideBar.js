const Tram = require('tram-one')
const html = Tram.html({
  NavButtonItem: require('./NavButtonItem'),
  Blurb: require('./Blurb')
})

const navBlockStyle = `
  grid-area: nav;
`

module.exports = (props) => {
  const {page} = props

  return html`
  <div style=${navBlockStyle}>
    <img width="80%" src="/mask_image.png" />
    <NavButtonItem label="Masks" href="/images/masks" currentPage=${page} />
    <NavButtonItem label="Makeup" href="/images/makeup" currentPage=${page} />
    <NavButtonItem label="Costumes" href="/images/costumes" currentPage=${page} />
    <NavButtonItem label="Props" href="/images/props" currentPage=${page} />
    <Blurb />
  </div>
  `
}
