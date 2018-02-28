/* eslint-disable no-return-assign */
const Tram = require('tram-one')
const html = Tram.html()

const isCurrentPage = (label, page) => {
  return label === page
}

module.exports = (attrs) => {
  const active = isCurrentPage(attrs.label.toLowerCase(), attrs.currentPage) ? 'active' : ''
  const nav = () => window.history.pushState({}, '', attrs.href)
  return html`
    <li class="${active} nav-item">
      <div style="cursor: hand;" class="nav-link" href=${attrs.href} onclick=${nav}>${attrs.label}</div>
    </li>
  `
}
