const Tram = require('tram-one')
const html = Tram.html({
  IconLink: require('./IconLink')
})

const contactStyle = `
  font-size: 2em;
  text-align: center;
`

const headerStyle = `
  margin-bottom: 0.5em;
`

module.exports = () => {
  return html`
    <div style=${contactStyle}>
      <h4 style=${headerStyle}> How to reach me: </h4>
      <IconLink icon="fas fa-envelope" link="mailto:logan@eiferersarmory.com">
        logan@eiferersarmory.com
      </IconLink>
      <IconLink icon="fab fa-facebook" link="https://www.facebook.com/VerbotenEiferer/">
        The Eiferer's Armory on Facebook
      </IconLink>
    </div>
  `
}
