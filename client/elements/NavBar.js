const Tram = require('tram-one')
const html = Tram.html()

const fixedTopStyle = `
  position: fixed;
  top: 0px;
  width: 100%;
`

const displaceTopNav = `
  margin-top: 4em;
`

const isCurrentPage = (label, page) => {
  return label === page
}

const renderNavItem = (
  label,
  currentPage,
  hrefLink = `/images/${label.toLowerCase()}`
) => {
  const active = isCurrentPage(label.toLowerCase(), currentPage) ? 'active' : ''
  return html`
    <li class="${active} nav-item">
      <a class="nav-link" href=${hrefLink}>${label}</a>
    </li>
  `
}

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
          ${renderNavItem('About', page, '/')}
          ${renderNavItem('Sculptures', page)}
          ${renderNavItem('Makeup', page)}
          ${renderNavItem('Costumes', page)}
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
