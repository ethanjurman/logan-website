const Tram = require('tram-one')
const html = Tram.html()

const blurbStyle = `
  font-size: 1.8em;
  margin-left: 1em;
  text-decoration: underline;
`

module.exports = ({pageId}) => {
  const pageLink = `https://www.facebook.com/pg/VerbotenEiferer/photos/?tab=album&album_id=${pageId}`
  return html`
    <p style=${blurbStyle}>
      <a href=${pageLink}>Unfortunately we were unable to load the images on this page. Please click here to view them on Facebook.</a>
    </p>
  `
}
