const Tram = require('tram-one')
const route = Tram.route()

const app = new Tram({defaultRoute: '/'})
app.addRoute('/', require('./pages/Chrome'), [
  route('/images/:albumPage', require('./pages/ImageSetPage')),
  route('/images/:albumPage/:imageId', require('./pages/ImageFullScreen'))
])

app.addActions({
  albums: require('./actions/albums'),
  image: require('./actions/image')
})

app.start('.main')
