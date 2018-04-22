const Tram = require('tram-one')
const html = Tram.html()

module.exports = (attrs, children) => {
  const nav = () => window.history.pushState({}, '', attrs.href)
  return html`
    <div class="nav-link" style=${attrs.style} onclick=${nav}>
      ${children}
    </div>
  `
}
