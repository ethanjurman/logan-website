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

module.exports = () => {
  return html`
  <div style=${displaceTopNav}>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style=${fixedTopStyle}>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#about">About <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Sculptures</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Makeup</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Costumes</a>
          </li>
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
