const Tram = require('tram-one')
const html = Tram.html({
  Header: require('../elements/Header')
})

const pageStyle = `
  margin: 2em;
`

const hrStyle = `
  box-shadow: 0px 0px 1px black;
`

const contactStyle = `
  font-size: 2em;
`

const linkStyle = `
  text-decoration: none;
`

const renderLink = ({icon, text, link}) => {
  return html`
    <div>
      <a href=${link} style=${linkStyle}>
        <i class=${icon} ></i>
        ${text}
      </a>
    </div>
  `
}

module.exports = (store, actions, params, subroute) => {
  return html`
    <div style=${pageStyle}>
      <Header />
      ${subroute}
      <hr style=${hrStyle} />
      <div style=${contactStyle}>
        <h4> How to reach me: </h4>
        ${renderLink({
          icon: "fas fa-envelope",
          text: " Contact the email",
          link: "mailto:logan@eiferersarmory.com"
        })}
        ${renderLink({
          icon: "fab fa-facebook",
          text: " Check out the facebook page",
          link: "https://www.facebook.com/VerbotenEiferer/"
        })}
      </div>
      <hr style=${hrStyle} />

    </div>
  `
}
