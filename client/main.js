const Tram = require('tram-one')
const route = Tram.route()

const app = new Tram()
app.addRoute('/', require('./pages/Chrome'), [
  route('/about', require('./pages/HomePage')),
  route('/images/:albumPage', require('./pages/ImageSetPage')),
  route('/images/:albumPage/:imageId', require('./pages/ImageFullScreen')),
  route('/404', require('./pages/404'))
])

app.addActions({
  albums: require('./actions/albums'),
  image: require('./actions/image'),
})

app.start('.main')
