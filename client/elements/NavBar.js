const Tram = require('tram-one')
const html = Tram.html({
  NavItem: require('./NavItem')
})

const fixedTopStyle = `
  position: fixed;
  top: 0px;
  width: 100%;
`

const displaceTopNav = `
  margin-top: 4em;
`

module.exports = (props) => {
  const {page} = props

  return html`
  <div style=${displaceTopNav}>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style=${fixedTopStyle}>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav mr-auto">
          <NavItem label="About" href="/about" currentPage=${page} />
          <NavItem label="Sculptures" href="/images/sculptures" currentPage=${page} />
          <NavItem label="Makeup" href="/images/makeup" currentPage=${page} />
          <NavItem label="Costumes" href="/images/costumes" currentPage=${page} />
        </ul>
        <ul class="navbar-nav ">
          <li class="nav-item">
            <button type="button" class="btn  btn-outline-info ">Contact Me</button>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  `
}
