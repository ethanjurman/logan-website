const Tram = require('tram-one')
const html = Tram.html()

const imageStyle = `
  cursor: pointer;
  height: 80vh;
`
const imageModalStyle = `
  display: block;
`

const darkBackgroundStyle = `
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.5);
  overflow: hidden;
`

module.exports = (attrs) => {
  const {id, albumPage} = attrs

  const goToAlbum = () => {
    window.history.pushState({}, '', `/images/${albumPage}`)
  }

  return html`
  <div class="modalFadeIn">
    <div style=${darkBackgroundStyle} onclick=${goToAlbum}></div>
    <div id="imageModal" class="modal" tabindex="-1" role="dialog" aria-labelledby="imageModalLabel" onclick=${goToAlbum} style=${imageModalStyle}>
      <div class="modal-dialog" style="max-width: unset;">
        <div class="modal-content">
          <div class="modal-body" style="">
            <img id="full" style=${imageStyle} onclick=${goToAlbum} src=${attrs.src} />
          </div>
        </div>
      </div>
    </div>
  </div>
  `
}
