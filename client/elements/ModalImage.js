const Tram = require('tram-one')
const html = Tram.html()

const imageStyle = `
  cursor: pointer;
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const imageModalStyle = `
  display: block;
  z-index: 1;
  position: fixed;
  max-height: calc(100% - 2em);
  max-width: calc(100% - 2em);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  cursor: pointer;
`

const darkBackgroundStyle = `
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.7);
  overflow: hidden;
`

module.exports = (attrs) => {
  const {id, albumPage} = attrs

  const goToAlbum = () => {
    window.history.pushState({}, '', `/images/${albumPage}`)
  }

  return html`
  <div class="modalFadeIn" onclick=${goToAlbum}>
    <div style=${darkBackgroundStyle}></div>
    <div style=${imageModalStyle}>
      <img id="full" style=${imageStyle} onclick=${goToAlbum} src=${attrs.src} />
    </div>
  </div>
  `
}
