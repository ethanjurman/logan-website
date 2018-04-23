const Tram = require('tram-one')
const html = Tram.html()

const imageStyle = `
  width: 200px;
  filter: contrast(0%) brightness(2);
`

module.exports = () => {
  return html`
    <div>
      <div>Loading ...</div>
      <div><img class="maskLoading" style=${imageStyle} src="/mask_image.png" /></div>
    </div>
  `
}
