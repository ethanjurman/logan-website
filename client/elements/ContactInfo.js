const Tram = require('tram-one')
const html = Tram.html({
  IconLink: require('./IconLink')
})

const contactStyle = `
  font-size: 2em;
  text-align: center;
`

module.exports = () => {
  return html`
    <div style=${contactStyle}>
      <h4> How to reach me: </h4>
      <IconLink icon="fas fa-envelope" link="mailto:joneslogan46@yahoo.com">
        joneslogan46@yahoo.com
      </IconLink>
      <IconLink icon="fab fa-facebook" link="https://www.facebook.com/VerbotenEiferer/">
        The Eiferer's Armory on Facebook
      </IconLink>
    </div>
  `
}
