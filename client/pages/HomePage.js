const Tram = require('tram-one')
const html = Tram.html({
  ContactInfo: require('../elements/ContactInfo')
})

const hrStyle = `
  box-shadow: 0px 0px 1px black;
`

module.exports = () => {
  return html`
    <div>
      <hr style=${hrStyle} />
      <ContactInfo />
      <hr style=${hrStyle} />
    </div>
  `
}
