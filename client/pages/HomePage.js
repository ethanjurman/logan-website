const Tram = require('tram-one')
const html = Tram.html({
  Blurb: require('../elements/Blurb'),
  ContactInfo: require('../elements/ContactInfo')
})

const hrStyle = `
  box-shadow: 0px 0px 1px black;
`

module.exports = () => {
  return html`
    <div>
      <Blurb />
      <hr style=${hrStyle} />
      <ContactInfo />
      <hr style=${hrStyle} />
    </div>
  `
}
