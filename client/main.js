const Tram = require('tram-one')

const app = new Tram()
app.addRoute('/', require('./pages/HomePage'))
app.addRoute('/images/:albumPage', require('./pages/ImageSetPage'))

app.addRoute('/404', require('./pages/404'))
app.start('.main')
