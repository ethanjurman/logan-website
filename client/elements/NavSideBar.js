const Tram = require('tram-one')
const html = Tram.html({
  NavButtonItem: require('./NavButtonItem')
})

const navBlockStyle = `
  grid-area: nav;
`

module.exports = (props) => {
  const {page} = props

  return html`
  <div style=${navBlockStyle}>
    <img width="100%" src="/mask_image.png" />
    <NavButtonItem label="About" href="/about" currentPage=${page} />
    <NavButtonItem label="Sculptures" href="/images/sculptures" currentPage=${page} />
    <NavButtonItem label="Makeup" href="/images/makeup" currentPage=${page} />
    <NavButtonItem label="Costumes" href="/images/costumes" currentPage=${page} />
  </div>
  `
}
